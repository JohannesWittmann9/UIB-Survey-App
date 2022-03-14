import { useState , useEffect } from "react";
import { useRouter } from "next/router"
import { useCookies } from "react-cookie";

import Layout from "../components/Layout";
import LikertScale from "../components/LikertScale";

import { changeCondition } from "../lib/changeCondition";
import { getChecked } from "../lib/getChecked";

import { update, getDocument } from "../firebase/fireLib";



export default function PostTask ()
{
    // State variables
    const [cookie, setCookie] = useCookies("user");
    const [user, setUser] = useState(cookie.user);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [currentTask, setCurrentTask] = useState(-1);

    useEffect(() => {
        getDocument(user.tasks[user.currentTask], "tasks").then( res => {
            setTitle(res.title);
            setDescription(res.description);
        });
        if(user !== undefined)
        {
            setCurrentTask(user.currentTask);
        }
    }, [user]);

    const router = useRouter();

    const handleSubmit = (e) =>
    {
        // To END if every task has been done

        // Deal with data
        let elements = e.target.parentElement.children;

        let data = {
            0 : getChecked(elements[3], 2, 4),
            1 : getChecked(elements[4], 2, 8),
        }, 
        currentTask = user.currentTask;

        for(let i = 0; i < 2; i++)
        {
            if(data[i] == -1){
                alert("Please answer every question!");
                return}
        }

        if(user.currentTask == 3){
            data[2] = getChecked(elements[5], 3, 7, 2);
            if(data[2] == -1){ 
                alert("Please answer every question!");
                return}
        }

        update(user.userID, {[user.currentCondition + "|" + currentTask + "|" + user.tasks[currentTask] + "|post" ]: data});

        // Checks if all four Tasks have been done
        if(user.currentTask == 3)
        {
            router.push("/PostStudy"); 
        }
        else
        {
            user.currentTask = user.currentTask + 1;
            // If the middle is reached, conditions are switched
            if(user.currentTask == 2)
            {
                user.currentCondition = changeCondition(user.currentCondition);
            }
            setCookie("user", user);
            router.push("/PreTask");
        }
        
    }

    return (
        <Layout>
            <h1>Post-Task Questionnaire</h1>
            <div className='task-description description task-header'>
              Imagine you are on the web and looking for health-related
              information. As such, you type in the following query into the
              search bar of your favourite search engine:
              <div className="task-query">{title}</div>
            </div>

            <div className='task-description description task-definition'>
                <strong>Definitions: <br />
                </strong>
                {description}
             </div>
            
            <LikertScale
                question="If you had to, what would be your answer to the question?"
                numberButtons={2}
                labelStart="Yes"
                labelEnd = "No"
                name="postTopicAnswer"
            />
            <LikertScale
                question="How certain are you about your answer?"
                numberButtons={7}
                labelStart="Very unsure"
                labelEnd="Very sure"
                name="postTopicAnswerCertainty"
            />
            {currentTask === 3 && (<LikertScale
                question="It is important that you pay attention to this study. Please tick 'Okay'"
                buttonLabels={["Yes", "No", "Okay"]}
                name="attention_check"
                numberButtons={3}
            />)}
            
            <button onClick={handleSubmit} className="links next round">&gt;</button>
        </Layout>
    )
}
