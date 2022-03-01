import { useRouter } from "next/router";
import Layout from "../components/Layout";

import { update } from "../firebase/fireLib";

import { useState } from "react";
import { useCookies } from "react-cookie";

export default function PostStudy()
{
    const [cookie, setCookie] = useCookies(['user']);
    const [user, setUser] = useState(cookie.user);
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    const handleSubmit = () => {
        // Deal with data
        let age = document.getElementById('age').value,
            gender = document.getElementById('gender').value,
            degree = document.getElementById('degree').value,
            occupation = document.getElementById('occupation').value,
            matriculation, email;

        if(!visible) {
            matriculation = "";
            email = "";
        }
        else{
            matriculation= document.getElementById('matric').value;
            email = document.getElementById('email').value;
        }

        let data = {
            age: age,
            gender: gender,
            degree: degree,
            occupation: occupation, 
            matriculation: matriculation,
            email:email
        };

        if(data.age === ''){return}
        else if (data.age.length < 2){return}
        else if(data.occupation === ''){return}


        update(user.userID, {postStudy: data});

        setTimeout(() => {
            router.push('/End');
        }, 2000);
    }
        

    return(
        <Layout>
            <h1>Post-Study Questionnaire</h1>
            <div>
                <div className="description demographic">
                    <div className="demographic-title">How old are you?</div>
                    <input id="age" type="text" />
                </div>
                <div className="description demographic">
                    <div className="demographic-title">What gender do you identify with?</div>
                    <select id="gender" name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="divers">Divers</option>
                    </select>
                </div>
                <div className="description demographic">
                    <div className="demographic-title">What is your highest level of education?</div>
                    <select id="degree" name="education">
                        <option value="no degree">No degree</option>
                        <option value="middleschool degree">Middle-school degree</option>
                        <option value="highschool degree">Highschool degree</option>
                        <option value="bachelor">Bachelors degree</option>
                        <option value="master">Masters degree</option>
                        <option value="doctor">Doctors degree</option>
                    </select>
                </div>
                <div className="description demographic">
                    <div className="demographic-title">What is your current occupation? (e.g.: If you are currently studying at a university insert &quot;Student&quot;) </div>
                    <input id="occupation" type="text" placeholder='e.g.: Student' />
                </div>

                <div className="description demographic demographic-vp" onClick={()=>setVisible(!visible)}>
                    <strong>CLICK HERE</strong> if you are a student from the University of Regensburg
                </div>
                {visible && (
                    <>
                        <div className="description demographic">
                            <div className="demographic-title"> Please enter your matriculation number ... </div>
                            <input id="matric" type="text" placeholder='Matrikelnummer' />
                        </div>
                        <div className="description demographic">
                            <div className="demographic-title">Please enter your Student-Email ...</div>
                            <input id="email" type="text" placeholder='Email' />
                        </div>
                        
                    </>
                )}
            </div>
            <button onClick={handleSubmit} className="links next round">&gt;</button>
        </Layout>
    );
}