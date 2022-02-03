import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <Head>
                <title>UISurvey</title>
            </Head>
            <div className={styles.nav}>
                <h1 className={styles.title}> <span className={styles.title1}>UI</span>Survey</h1>
                <div className={styles.col}>
                    <strong>Bachelor students of Information Science</strong> <br />
                    Johannes Wittmann & Dena Mehr
                </div>
            </div>
            <div className={styles.content}>
                {children}
                <div className={styles.spacer}></div>
            </div>
            
            
        </div>
    )
}

export default Layout

