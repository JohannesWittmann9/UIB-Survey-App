import { useRouter } from "next/router"

import Layout from "../components/Layout"


export default function Description ()
{
    const router = useRouter();


    const handleSubmit = (e) =>
    {
        router.push("/PreStudy");
    }


    return( 
    <Layout>
        <div className="task-description description">
            <h1>Task Description</h1>
            <p>
                Welcome to the experiment. In the experiment you will make
                judgements about the credibility of search engine results that are
                presented on search engines (e.g. like Google).
            </p>
            <p>
                You will be provided with a webpage mimicking results of commonly
                used search engines. We ask you to <strong>imagine</strong> that you
                are using a search engine to answer your health related information
                need.
            </p>
            <p>
                The information need is presented as the query inside the search
                input field.
            </p>
            <p>
                Before each task you will be able to see some word definitions
                regarding the current query. 
            </p>
            <p>
                Your task is to <strong>judge the results</strong> based on your
                perceived credibility of the presented result.
            </p>
            <p>
                Before and after each search engine result page, you will be asked
                some questions about the current information need.
            </p>
            <p>
                This procedure will be repeated <strong>four times</strong> with a
                different topic each time.
            </p>
            <p>
                Some of the search result pages will look a bit different than
                others. On those, you are able to look at the page contents by clicking, as you
                would do in a normal web search. Below the contents you will be able to place your ratings.
            </p>
            <p>
                After all judgements have been made, you will be sent to a short
                form, where some
                <strong> demographic questions</strong> are asked.
            </p>
        </div>
        <div className='task-description description'>
            <strong>Please do the survey in one take! And most importantly do not go back 
              to previous pages of the survey or reload the pages. <br />Your progress might be lost if you do so.
            </strong>
        </div>
        <button onClick={handleSubmit} className="links next round">&gt;</button>
    </Layout>
    )
}