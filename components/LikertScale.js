import {useState, useEffect, componentDidMount} from 'react'
import styles from '../styles/LikertScale.module.css'

// Likert Scale question with Start and End Label, a name (=> Buttons know the are in the same group),
// with adjustable number of radio buttons and a auestion

function LikertScale( {
    labelStart,
    labelEnd,
    name,
    numberButtons,
    question,
    buttonLabels, 
} )  
{
 
    // Creates Array of radio Button values (IDs)
    const createRadioButtons = () =>
    {
        let buttons = [];
        for (let i = 1; i <= numberButtons; i ++)
        {

            // If every button needs to be labeled
            if(buttonLabels !== undefined)
            {
                buttons.push(
                <>
                <label className = {styles.label} htmlFor={name + "_" + i}>{buttonLabels[i - 1]}</label>
                <input className = {styles.radio} type="radio" name={name}  id={i} />
                </>
                )
            }
            // If you only want the start and end label
            else 
            {
                buttons.push(<input className = {styles.radio} type="radio"  name={name} id={i} />);
            }
        }
        return buttons;
    }

    createRadioButtons();
    return (
        <div className={styles.container} value = {name}>
            <div className = {styles.question}>{question}</div>
            <label className = {styles.label}>{labelStart}</label>
            {createRadioButtons()}
            <label className = {styles.label}>{labelEnd}</label>
            
        </div>
    )
}


export default LikertScale
