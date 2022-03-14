import { useRouter } from 'next/router'
import { useState} from 'react'
import { useCookies } from 'react-cookie';

import { update, getDocument } from '../firebase/fireLib'

import Layout from '../components/Layout'
import LikertScale from '../components/LikertScale'

import { getChecked } from '../lib/getChecked.js'
import { randomNumber } from '../lib/randomNumber.js';

import Tasks from '../dataModels/Tasks'


export default function PreStudy(){
    // State variables
    const [cookie, setCookie] = useCookies(['user']);
    const [user, setUser] = useState(cookie.user);
    const router = useRouter();
    

    const handleSubmit = (e) =>
    {
        // Elements contains all the Likert scale questions
        let elements = e.target.parentElement.children[2].children;

        // Didn't find a better way to fix it
        // Lets the user only pass if all ratings have been set
        if(getChecked(elements[0] , 2 , 8) == -1){
            alert("Please answer every question!");
            return}
        else if(getChecked(elements[1] , 2 , 4) == -1){
            alert("Please answer every question!");
            return}
        else if(getChecked(elements[2] , 2 , 8) == -1){
            alert("Please answer every question!");
            return}
        else if(getChecked(elements[3] , 2 , 8) == -1){
            alert("Please answer every question!");
            return}
        else if(getChecked(elements[4] , 3 , 11, 2) == -1){
            alert("Please answer every question!");
            return}
        else if(getChecked(elements[5] , 2 , 8) == -1){
            alert("Please answer every question!");
            return}
    
         
        let userObj = user;

        // Creates a task list for the user, if not defined
        if( userObj.tasks === undefined)
        {
            userObj.tasks = new Tasks().getList()
            userObj.currentTask = 0;

            // If condition is 0 -> No use of page content
            // If condition is 1 -> User can click on snippets
            userObj.currentCondition = randomNumber();
        }
        
        setUser(userObj)
        setCookie("user", userObj);
        
        // Database operations

        // Pre-study data
        let data = {preStudy: {
            "0": getChecked(elements[0] , 2 , 8)
            ,
            "1": getChecked(elements[1] , 2 , 4)
            ,
            "2": getChecked(elements[2] , 2 , 8)
            ,
            "3": getChecked(elements[3] , 2 , 8)
            ,
            "4": getChecked(elements[4] , 3 , 11, 2)
            ,
            "5": getChecked(elements[5] , 2 , 8)
            
        }}; 

        update(user.userID, data);
        writeQuestions();
        router.push("/PreTask");
        
        
    }

    // Condition | Task Position | Task ID -> question ID(TaskID + index) : result
    // Writes condition one questions to database
    const writeQuestions = () => {
        let data;
        // Data if current condition is 0 -> Task 0 and 1 will be condition 0
        if(user.currentCondition == 0) 
        {
            data = {
            ["0|0|" + user.tasks[0] ]: {
                [user.tasks[0] + "0"]: -1,
                [user.tasks[0] + "1"]: -1,
                [user.tasks[0] + "2"]: -1,
                [user.tasks[0] + "3"]: -1,
                [user.tasks[0] + "4"]: -1,
                [user.tasks[0] + "5"]: -1,
                [user.tasks[0] + "6"]: -1,
                [user.tasks[0] + "7"]: -1,
                [user.tasks[0] + "8"]: -1,
                [user.tasks[0] + "9"]: -1,
            },
            ["0|1|"+ user.tasks[1]]: {
                [user.tasks[1] + "0"]: -1,
                [user.tasks[1] + "1"]: -1,
                [user.tasks[1] + "2"]: -1,
                [user.tasks[1] + "3"]: -1,
                [user.tasks[1] + "4"]: -1,
                [user.tasks[1] + "5"]: -1,
                [user.tasks[1] + "6"]: -1,
                [user.tasks[1] + "7"]: -1,
                [user.tasks[1] + "8"]: -1,
                [user.tasks[1] + "9"]: -1,
            },
        
            ["1|2|" + user.tasks[2] ]: {
                [user.tasks[2] + "0"]: -1,
                [user.tasks[2] + "1"]: -1,
                [user.tasks[2] + "2"]: -1,
                [user.tasks[2] + "3"]: -1,
                [user.tasks[2] + "4"]: -1,
                [user.tasks[2] + "5"]: -1,
                [user.tasks[2] + "6"]: -1,
                [user.tasks[2] + "7"]: -1,
                [user.tasks[2] + "8"]: -1,
                [user.tasks[2] + "9"]: -1,
            },
            ["1|3|"+ user.tasks[3]]: {
                [user.tasks[3] + "0"]: -1,
                [user.tasks[3] + "1"]: -1,
                [user.tasks[3] + "2"]: -1,
                [user.tasks[3] + "3"]: -1,
                [user.tasks[3] + "4"]: -1,
                [user.tasks[3] + "5"]: -1,
                [user.tasks[3] + "6"]: -1,
                [user.tasks[3] + "7"]: -1,
                [user.tasks[3] + "8"]: -1,
                [user.tasks[3] + "9"]: -1,
            },

        }
            
        }
        // Data if current condition is 1 -> Task 0 and 1 will be condition 1 -> 2 and 3 will be condition 0
        else {
            data = {
                 
                    ["1|0|" + user.tasks[0] ]: {
                        [user.tasks[0] + "0"]: -1,
                        [user.tasks[0] + "1"]: -1,
                        [user.tasks[0] + "2"]: -1,
                        [user.tasks[0] + "3"]: -1,
                        [user.tasks[0] + "4"]: -1,
                        [user.tasks[0] + "5"]: -1,
                        [user.tasks[0] + "6"]: -1,
                        [user.tasks[0] + "7"]: -1,
                        [user.tasks[0] + "8"]: -1,
                        [user.tasks[0] + "9"]: -1,
                    },
                    ["1|1|"+ user.tasks[1]]: {
                        [user.tasks[1] + "0"]: -1,
                        [user.tasks[1] + "1"]: -1,
                        [user.tasks[1] + "2"]: -1,
                        [user.tasks[1] + "3"]: -1,
                        [user.tasks[1] + "4"]: -1,
                        [user.tasks[1] + "5"]: -1,
                        [user.tasks[1] + "6"]: -1,
                        [user.tasks[1] + "7"]: -1,
                        [user.tasks[1] + "8"]: -1,
                        [user.tasks[1] + "9"]: -1,
                    },
                
                    ["0|2|" + user.tasks[2] ]: {
                        [user.tasks[2] + "0"]: -1,
                        [user.tasks[2] + "1"]: -1,
                        [user.tasks[2] + "2"]: -1,
                        [user.tasks[2] + "3"]: -1,
                        [user.tasks[2] + "4"]: -1,
                        [user.tasks[2] + "5"]: -1,
                        [user.tasks[2] + "6"]: -1,
                        [user.tasks[2] + "7"]: -1,
                        [user.tasks[2] + "8"]: -1,
                        [user.tasks[2] + "9"]: -1,
                    },
                    ["0|3|"+ user.tasks[3]]: {
                        [user.tasks[3] + "0"]: -1,
                        [user.tasks[3] + "1"]: -1,
                        [user.tasks[3] + "2"]: -1,
                        [user.tasks[3] + "3"]: -1,
                        [user.tasks[3] + "4"]: -1,
                        [user.tasks[3] + "5"]: -1,
                        [user.tasks[3] + "6"]: -1,
                        [user.tasks[3] + "7"]: -1,
                        [user.tasks[3] + "8"]: -1,
                        [user.tasks[3] + "9"]: -1,
                    },

        }}
        // Storing created information in database (would be to massive for cookies)
        update(user.userID, data);
    }

    
    
    
    return (
        <Layout>
            <h1>Pre-Study-Questionnaire</h1>
            <div className='title-description description'>
                Before we start, we would encourage you to answer some simple questions.
                The results are only used for scientific reasons. Please answer as correct as possible.
            </div>
            <div>
                <LikertScale
                    question="I use search systems (such as Google or Bing) to help answer questions and concerns about health and medicine."
                    numberButtons={7}
                    labelStart= 'Strongly disagree'
                    labelEnd='Strongly agree'
                    name="searchEngineUsage1"
                />
                
                <LikertScale
                    question="I do use page contents before creating an opinion."
                    numberButtons = {2}
                    labelStart="Yes"
                    labelEnd = "No"
                    name="knowAboutFeaturedSnippets"
                />
                
                <LikertScale
                    question="I believe the information retrieved by search engines is trustworthy."
                    numberButtons={7}
                    labelStart="Strongly disagree"
                    labelEnd="Strongly agree"
                    name="trustFeaturedSnippets1"
                />
                
                <LikertScale
                    question="Before going to the doctor for an illness, I go online to find additional information."
                    numberButtons={7}
                    labelStart="Strongly disagree"
                    labelEnd="Strongly agree"
                    name="searchEngineUsage2"
                />
                
                
                <LikertScale
                    question="On average, how many web pages do u visit until you reached your goal of research?"
                    numberButtons={5}
                    buttonLabels={[
                        "0",
                        "1-3",
                        "4-6",
                        "7-10",
                        "More than 10",
                    ]}
                    name="featuredSnippetUsage"
                />
               
                <LikertScale
                    question="I believe that the answers from a search engine cannot be trusted."
                    numberButtons={7}
                    labelStart="Strongly disagree"
                    labelEnd="Strongly agree"
                    name="trustFeaturedSnippets2"
                />
            </div>
            <button onClick={handleSubmit} className="links next round">&gt;</button>
        </Layout>
    )
}




