import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';

import { document } from '../firebase/fireLib'

import Layout from '../components/Layout'


export default function Home() {
  // State variables 
  const [cookie, setCookie] = useCookies(['user']);
  const [user, setUser] = useState(cookie.user);
  const [inputID, setInputID] = useState("");
  const [hasReadTerms, setHasReadTerms] = useState(false);

  

  // Router to navigate between pages
  const router = useRouter();

  // Checks if value has been set (to provide if the user returns to this page)
  useEffect(() => {
    if( user !== undefined && user.hasOwnProperty("userID"))
    {
      setInputID(user.userID);
    };
  }, [user])

  // Function handling the data operations when page is switched
  const handleSubmit = (e) => 
  {
    // Checks if terms have been read
    if (!hasReadTerms) return;

    if(user === undefined)
    {
      user = {};
    }

    // Sets cookie with User JSON
    // can be stringified and parsed again and again, so you only have to safe the object to the data-base at last
    let userClone = user;
    userClone.userID = inputID; 
    // The Cookies can only carry Strings, so Objects have to be stringified
    // cookieCutter.set('user', JSON.stringify(user));
    setCookie("user", userClone);

    // Database operations
    document(inputID, userClone)
    
    router.push('/Description');
  };

  // Function handling changes in input field
  const handleChange = (e) =>
  {
    setInputID(e.target.value);
  }


  return (
    <Layout>
      <h1>Welcome to the Survey!</h1>
      <div className='title-description description'>Turn over the page to start...</div>
      <div className='task-description description'>
          <h2>Informed Consent of Participation</h2>
          <p>
            You are invited to participate in the online study of students from University Regensburg. 
            The research is supervised
            by Dr. David Elsweiler at the University of Regensburg. Please note:
          </p>
          <ul>
            <li>Your participation is entirely voluntary</li>
            <li>
              Based on pre-tests, the online study should take around 30 minutes
            </li>
            <li>We will record personal demographics (age, gender, etc.)</li>
            <li>
              We may publish our results from this and other sessions in our
              reports, but all such reports will be confidential and will
              neither include your name nor cannot be associated with your
              identity
            </li>
            <li>
              If you wish to take part, make sure you are using a{" "}
              <strong>desktop computer or laptop</strong>. The experiment is not
              optimised for mobile devices.
            </li>
            <li>
              Also make sure that your browser allows Javascript and Cookies
              since they are required for the study to function properly.
            </li>
          </ul>
          <p>
            If you have any questions or complaints about the whole informed
            consent process of this research study or your rights as a human
            reserach subject, please contact (email listed below). You should carefully read the
            information below. Please take as much time as you need to read the
            consent form.
          </p>
          <h2>1. Purpose and Goal of this Research</h2>
          <p>
            The purpose of this study is to examine how users make credibility decisions on the web. The goal of this
            study is to understand the difference between only rating snippets and getting access to the page itself.
             Your participation will help us achieve this
            goal. The results of this research may be presented at scientific or
            professional meetings or published in scientific proceedings and
            journals.
          </p>
          <h2>2. Participation and Compensation</h2>
          <p>
            Your participation in this online study is completely voluntary. You
            may withdraw and discontinue participation at any time without
            justification for withdrawing. If you decline to participate or
            withdraw from the online study, no one on the campus will be
            informed.
          </p>
          <h2>3. Procedure</h2>
          <p>After confirming your informed consent you will:</p>
          <ol>
            <li>be presented with a short pre-study questionnaire</li>
            <li>asked to rate the credibility of search engine results</li>
            <li>asked to answer some demographic questions</li>
          </ol>
          <p>
            The complete procedure of this online study will last approximately
            30 minutes.
          </p>
          <p>
            <strong>Please do the survey in one take! And most importantly do not go back 
              to previous pages of the survey or reload the pages. <br />Your progress might be lost if you do so.
            </strong>
          </p>
          <h2>4. Risks and Benefits</h2>
          <p>
            There are no risks associated with this online study. Discomforts or
            inconveniences will be minor and are not likely to happen. If any
            discomforts become a problem, you may discontinue your
            participation.
          </p>
          <h2>5. Data Protection and Confidentiality</h2>
          <p>
            Personal data (age, gender, etc.) will be recorded while
            participation. The researcher will not identify you by your real
            name in any reports using information obtained from this online
            study and that your confidentiality as a participant in this online
            study will remain secure and encrypted. All data you provide in this
            online study will be published anonymized and treated confidentially
            in compliance with the General Data Protection Regulation (GDPR) of
            the European Union (EU). Subsequent uses of records and data will be
            subject to standard data use policies which protect the full
            anonymity of the participating individuals. In all cases, uses of
            records and data will be subject to the GDPR. Faculty and
            administrators from the campus will not have access to raw data or
            transcripts. This precaution will prevent your individual comments
            from having any negative repercussions. This site uses cookies and
            other tracking technologies to conduct the research, to improve the
            user experience, the ability to interact with the system and to
            provide additional content from third parties. Despite careful
            control of content, the researchers assume no liability for damages,
            which directly or indirectly result from the use of this online
            application. Any recordings cannot be viewed by anyone outside this
            research project unless we have you sign a separate permission form
            allowing us to use them (see below). Records that have not been made
            public are automatically deleted after the end of the research. The
            records will be destroyed if you contact the researcher to destroy
            or delete them immediately. As with any publication or online
            related activity, the risk of a breach of confidentiality is always
            possible. According to the GDPR, the researchers will inform the
            participant if a breach of confidential data was detected.
          </p>
          <h2>6. Identification of Investigators</h2>
          <p>
            If you have any questions or concerns about the research, please
            feel free to contact:
          </p>
          <p>
            Johannes Wittmann and Dena Mehr 
            <br />
            <br />
            johannes1.wittmann@stud.uni-regensburg.de
            <br />
            dena.mehr@stud.uni-regensburg.de
          </p>
        </div>
        <div className='task-description description'>
        
            <strong>Please do the survey in one take! And most importantly do not go back 
              to previous pages of the survey or reload the pages. <br />Your progress might be lost if you do so.
            </strong>
          
        </div>
      <div className='id-Input description'>
        <div className='input-description'>Please insert the ID, you were given in your custom Email, into the text field.</div>
        <input className='input' type="text" placeholder="Please enter your ID" onChange={handleChange} value={inputID}/>
        <div className='terms-Input' >
        <label htmlFor="hasReadTermsCheckbox">
          <input
              className='checkBox'
              id="hasReadTermsCheckbox"
              onChange={() => setHasReadTerms(!hasReadTerms)}
              type="checkbox"
              checked={hasReadTerms}/>
              By clicking this checkbox you confirm that you have read the above
              information and want to take part in the study.
          </label>
      </div>
      </div>
      <button onClick={handleSubmit} className="links next round">&gt;</button>
    </Layout>
  )
}
