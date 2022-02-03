import Layout from '../components/Layout'



const End = () => {

    

    return (
        <Layout>
            <h1>Thank you for participating in this survey!</h1>
            <div className="end-description">
                If you have any questions left, feel free to contact us:
                <ul>
                    <li>
                    johannes1.wittmann@stud.uni-regensburg.de
                    </li>
                    <li>
                    dena.mehr@stud.uni-regensburg.de
                    </li>
                </ul>
            </div>
            <div className="end-description">
                <strong>Kind regards,</strong> <br /> <br />
            </div>
            <div className="end-description">
                <strong>Johannes Wittmann and Dena Mehr</strong>
            </div>
        </Layout>
    )
}

export default End
