import Image from "next/image";
import NavBar from "../../../components/NavBar";
import styles from "./Eden.module.css"

export default function Eden() {
    return(
        <main className={styles.main}>
            <NavBar/>
            <div className={styles.content}>
                <h1 className={styles.header}>
                    EDEN
                </h1>
                <Image className={styles.eden_logo} src="/images/eden_logo.svg" alt="eden logo" width={100} height={100}/>
                <div className={styles.info}>
                    <h2 className={styles.subhead}>
                        album graphic poster series
                    </h2>
                    <h3 className={styles.software}>
                        software: Adobe Photoshop, Adobe Illustrator
                    </h3>
                    <span className={styles.underline}>
                    </span>
                </div>
                <div className={styles.body_content}>
                    <Image className={styles.mockup} src="/images/eden_mockup.jpg" alt="eden poster mockups" width={1000} height = {660}/>
                </div>
            </div>
        </main>
    );
};