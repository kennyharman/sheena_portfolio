import Image from "next/image";
import NavBar from "../../../components/NavBar";
import styles from "./Eden.module.css"
import Footer from "../../../components/Footer";

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
                    <span className={styles.underline_02}>
                    </span>
                    <p className={styles.description}>
                        These are three fan posters inspired by singer and producer EDEN, focusing on his albums: I think you think too much of me, Vertigo, and End Credits. Each poster reflects the themes and emotions central to his music—love, loss, escapism, and flawed relationships—using visuals that resonate with his fans. <br/><br/>

                        The font Walkway was chosen for the posters, which EDEN often uses, to keep the designs authentic and cohesive with his style and visuals.<br/><br/>

                        The posters were created in Adobe Photoshop and Illustrator, combining vector graphics with several photo compositions, layer styles, blending modes, etc., to match EDEN’s atmospheric style. This project was created with the intent to capture the essence of an artist’s work through design while experimenting with advanced tools and techniques. <br/><br/>
                    </p>     
                    <span className={styles.underline_03}>
                    </span>  
                    <div className={styles.posters}>
                        <Image className={styles.eden_poster} src="/images/ityttmom.jpg" alt="i think you think too much of me" width={360} height={100}/>
                        <Image className={styles.eden_poster} src="/images/vertigo.jpg" alt="vertigo" width={360} height={100}/>
                        <Image className={styles.eden_poster} src="/images/end_credits.jpg" alt="end credits" width={360} height={100}/>
                    </div> 
                </div>
            </div>

        <footer>
            <Footer/>
        </footer>
        </main>
    );
};