import LikertScale from "./LikertScale";

import { useState } from 'react'
import { useCookies } from 'react-cookie'

export default function Snippet ({ tasks , id, handleClick })
{
    // State variables
    const [cookie, setCookie] = useCookies("user");
    const [user, setUser] = useState(cookie.user);
    const visible = (user.currentCondition === 0);
    console.log(tasks);

    return (
        <>
            <div className="task-snippet">
                 <div className={visible? 'task-snippet-url' : 'task-snippet-url task-snippet-hover'} id = {id} onClick={handleClick}>{tasks[id].snippet}</div>
                 <div className={visible? 'task-snippet-title' : 'task-snippet-title task-snippet-hover'} id = {id} onClick={handleClick}>{tasks[id].title}</div>
                 <div className="task-snippet-description">{tasks[id].description}</div>
            </div>
            { visible && (
            <LikertScale 
                question="Would this snippet help to answer your search question?"
                numberButtons={7}
                labelStart= 'Not helpful'
                labelEnd='Very helpful'
                name={"question" + id} 
            />
            )}
        </>
    )
}