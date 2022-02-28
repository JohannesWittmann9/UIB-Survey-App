import { useState , useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import Image from 'next/image'

import { update, getDocument } from "../firebase/fireLib"

import Layout from '../components/Layout'
import LikertScale from '../components/LikertScale'
import { getChecked } from '../lib/getChecked'
import Snippet from '../components/Snippet'



export default function Task()
{
    // State variables
    const [cookie, setCookie] = useCookies("user");
    const [user, setUser] = useState(cookie.user);
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [tasks, setTasks] = useState([]);
    const [tasksLoaded, setTasksLoaded] = useState(false);

    const router = useRouter();

    // Used as a lifecycle method, to set relevant states at the beginning
    // Data is accessed with cookie data from database
    useEffect(() => {
        getDocument(user.tasks[user.currentTask], "tasks").then(res => {
            setTaskTitle(res.title);
            setTaskDescription(res.description);
            setTasks(res.questions);
            setTasksLoaded(true);
            setClickedSnippets(user.clickedSnippets);
        }).catch(e => {
            console.log('Error: ' + e);
          });
        
    }, [user])

    const handleSubmit = (e) =>
    {
        // Deal with data
        let elements = e.target.parentElement.children[4].children;

        if(user.currentCondition === 1){
            let array = user.clickedSnippets;
            for(let i = 0; i < array.length; i++)
            {
                let bool = array[i];

                if(bool === false)
                {
                    return
                }
                
            }
        }


        // Sets results of task into database if only snippet condition
        if(user.currentCondition === 0)
        {
            if(getChecked(elements[1], 2, 8) == -1){return}
            else if(getChecked(elements[3], 2, 8) == -1){return}
            else if(getChecked(elements[5], 2, 8) == -1){return}
            else if(getChecked(elements[7], 2, 8) == -1){return}
            else if(getChecked(elements[9], 2, 8) == -1){return}
            else if(getChecked(elements[11], 2, 8) == -1){return}
            else if(getChecked(elements[13], 2, 8) == -1){return}
            else if(getChecked(elements[15], 2, 8) == -1){return}
            else if(getChecked(elements[17], 2, 8) == -1){return}
            else if(getChecked(elements[19], 2, 8) == -1){return}

            let data = {
                   [user.tasks[user.currentTask] + "0"]: getChecked(elements[1], 2, 8),
                   [user.tasks[user.currentTask] + "1"] : getChecked(elements[3], 2, 8),
                   [user.tasks[user.currentTask] + "2"] : getChecked(elements[5], 2, 8),
                   [user.tasks[user.currentTask] + "3"] : getChecked(elements[7], 2, 8),
                   [user.tasks[user.currentTask] + "4"]: getChecked(elements[9], 2, 8),
                   [user.tasks[user.currentTask] + "5"] : getChecked(elements[11], 2, 8),
                   [user.tasks[user.currentTask] + "6"] : getChecked(elements[13], 2, 8),
                   [user.tasks[user.currentTask] + "7"] : getChecked(elements[15], 2, 8),
                   [user.tasks[user.currentTask] + "8"] : getChecked(elements[17], 2, 8),
                   [user.tasks[user.currentTask] + "9"] : getChecked(elements[19], 2, 8),
                
            }, 
            currentTask = user.currentTask;

            update(user.userID, {["0|" + user.currentTask + "|" + user.tasks[user.currentTask]]: data});
    
        }
        
        router.push("/PostTask")
    }

    const handleSnippetClick = (e) => 
    {
        // No availability of content in condition 0
        if(user.currentCondition === 0) return


        

        // Switches to the content page, and hands an id so we can adjust to the clicked snippet
        router.push({
            pathname: "/SnippetContent",
            query: e.target.id
            })

    }

    // Adds a clicked visualizer to clicked snippets (Condition 1)
    const setClickedSnippets = (array) => {
        for(let i = 0; i < array.length; i++)
        {
            let bool = array[i],
                lay = document.getElementById('snippetlist').children,
                arr = Array.from(lay);

            if(bool)
            {
                arr[i].classList.add('task-snippet-after');
            }
            
        }
    }

    const handleHelp = (e) => {
        let toggleVal = "help-overlay" + user.currentCondition,
        button = e.target;
        button.classList.toggle(toggleVal);
    }


    return (
        <Layout>
            <h1>{taskTitle}</h1>
            <button onClick={handleHelp} className="help-button">HELP</button>
            <div className='task-description description task-definition'>
                <strong>Definitions: <br /></strong>
                {taskDescription}
             </div>
            <div className='task-query'>{taskTitle}</div>
            <div className=' description task-hint'>
                <button>What do I have to do here?</button>
                {visible && (
                    <>
                        <div>
                            Please click on all the search results, and rate your perceived credibility
                            on the bottom of the page.
                        </div>
                    </>
                )}
            </div>
            {tasksLoaded && (
            <>
                
                <div id='snippetlist'>
                    <Snippet tasks={tasks} id='0' handleClick={handleSnippetClick}/>
                    <Snippet tasks={tasks} id='1' handleClick={handleSnippetClick}/>
                    <Snippet tasks={tasks} id='2' handleClick={handleSnippetClick}/>
                    <Snippet tasks={tasks} id='3' handleClick={handleSnippetClick}/>
                    <Snippet tasks={tasks} id='4' handleClick={handleSnippetClick}/>
                    <Snippet tasks={tasks} id='5' handleClick={handleSnippetClick}/>
                    <Snippet tasks={tasks} id='6' handleClick={handleSnippetClick}/>
                    <Snippet tasks={tasks} id='7' handleClick={handleSnippetClick}/>
                    <Snippet tasks={tasks} id='8' handleClick={handleSnippetClick}/>
                    <Snippet tasks={tasks} id='9' handleClick={handleSnippetClick}/>
                </div>
                
            </>)} 
            <button onClick={handleSubmit} className="links next round">&gt;</button>
        </Layout>
    )
}