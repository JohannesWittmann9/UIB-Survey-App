import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import LikertScale from "../components/LikertScale";

import { getChecked } from "../lib/getChecked";

import { update, getDocument } from "../firebase/fireLib.js"

// Page for the condition which allows clicking on snippets

export default function SnippetContent ()
{
    const router = useRouter();

    // State variables
    const [cookie, setCookie] = useCookies("user");
    const [user, setUser] = useState(cookie.user);
    const [title, setTitle]  = useState("");
    const [imageSrc, setImageSrc] = useState("");
    // A key for us to know which image has been clicked
    const [id, setId] = useState(Object.keys(router.query)[0]);
    const [taskFromDoc, setTaskFromDoc] = useState({});


    // Initializing page 
    useEffect(() => 
    {
        // Setting page information with cookies data used to access database information
        getDocument(user.tasks[user.currentTask], "tasks").then(res => {
            setTitle(res.title);
            setImageSrc(res.questions[id].content);
            getDocument(user.userID).then(res => {
                let task = res["1|" + user.currentTask + "|" + user.tasks[user.currentTask]];
                // actual data from database, so u dont override old data
                setTaskFromDoc(task)
            }).catch(e => {
                console.log('Error: ' + e);
            });
        }).catch(e => {
            console.log('Error: ' + e);
        });
    }, [user, id, imageSrc, title])


    const handleSubmit = (e) =>
    {
        // A number between 1 and 7 -> the checked radio button
        let checked = getChecked(e.target.parentElement.children[3], 2,8);

        // Sets checked under the question id and suitable task

        user.clickedSnippets[id] = true;

        if(checked == -1)
        {
            user.clickedSnippets[id] = false;
        }

        setCookie("user", user);

        let currentTask = user.currentTask;
        
        //Setting the specific value of the database data
        taskFromDoc[user.tasks[user.currentTask] + id] = checked;
        update(user.userID, {["1|" + currentTask + "|" + user.tasks[currentTask]]: taskFromDoc});
        router.back();
    }

    return (
    <Layout>
        <h1>{title}</h1>
        <div className="help-content">On the bottom of this page you will find the rating-scale.</div>
        <img className='task-snippet-img' src={imageSrc} alt={id} />
        <LikertScale
            question="Do you consider this content as credible?"
            numberButtons={7}
            labelStart= 'Not credible'
            labelEnd='Very credible'
            name="question"
        />
    
        <button onClick={handleSubmit} className="links previous round">&lt;</button>

    </Layout>)
}