import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';

import Layout from '../components/Layout'
import LikertScale from '../components/LikertScale';

import { getChecked } from '../lib/getChecked';

import { getDocument, update } from '../firebase/fireLib';



function PreTask () {

  // State variables
  const [cookie, setCookie] = useCookies(['user']);
  const [user, setUser] = useState(cookie.user);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Setting the task data with information from database, accessed with cookie information
  useEffect(() => {
      getDocument(user.tasks[user.currentTask], 'tasks').then(res => {
          setTitle(res.title);
          setDescription(res.description);
      }).catch(e => {
        console.log('Error: ' + e);
      });
  }, [user]);

  const router = useRouter();

  const handleSubmit = (e) => 
  {
    // Deal with data
    let elements = e.target.parentElement.children;

    let data = {
        0 : getChecked(elements[3], 2, 8),
        1 : getChecked(elements[4], 2, 4),
        2 : getChecked(elements[5], 2, 8),
    };

    // Makes sure all elements are checked
    for(let i = 0; i < 3; i++)
    {
      if(data[i] == -1){return}
    }

    // Condition | Task position | Task ID | pre
    update(user.userID, {[user.currentCondition + "|" + user.currentTask + "|" + user.tasks[user.currentTask] + "|pre" ]: data});

    // To keep track how many snippets have been clicked (For condition 1) -> Array position of snippet == true -> add clicked class to snippet
    user.clickedSnippets = [false, false, false, false, false, false, false, false, false, false];

    setCookie("user", user);
  
    router.push("/Task");
  }

    return (
        <Layout>
            <h1>Pre-Task Questionnaire</h1>
            <div className='task-description description task-header'>
              Imagine you are on the web, looking for health-related information. As such, you type 
              the following query into to search bar of your favorite search engine:
              <div className="task-query">{title}</div>
            </div>

            <div className='task-description description task-definition'>
                <strong>Definitions: <br /></strong>
                {description}
             </div>

             <LikertScale
                question="How familiar are you with the topic?"
                numberButtons={7}
                labelStart="Not familiar"
                labelEnd = "Very familiar"
                name="preTopicAnswerFamiliar"
            />
            <LikertScale
                question="If you were pushed to an answer now, what would be your answer to the question?"
                numberButtons={2}
                labelStart="Yes"
                labelEnd="No"
                name="preTopicAnswer"
            />
            <LikertScale
                question="How confident would you be about your answer?"
                numberButtons={7}
                labelStart="Not confident"
                labelEnd="Confident"
                name="preTopicAnswerCertainty"
            />
             <button onClick={handleSubmit} className="links next round">&gt;</button>
        </Layout>
    )
}

export default PreTask
