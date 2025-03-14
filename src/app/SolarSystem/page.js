import Image from "next/image";
import NavBar from "../../../components/NavBar";
import styles from "./SolarSystem.module.css"

export default function SolarSystem() {
    return(
        <main className={styles.main}>
            <NavBar/>
            <div className={styles.content}>
                <h1 className={styles.header}>
                    How the Solar System Formed
                </h1>
                <div className={styles.info}>
                    <h2 className={styles.subhead}>
                        educational motion graphic video
                    </h2>
                    <h3 className={styles.software}>
                        software: Adobe AfterEffects, Adobe Illustrator
                    </h3>
                    <span className={styles.underline}>
                    </span>
                </div>
                <div className={styles.body_content}>
                    <video className={styles.mockups} src="/videos/space.mp4" width={1000} height={800} controls></video>
                    <h3 className={styles.disclaimer_head}>
                        disclaimer
                    </h3>
                    <span className={styles.underline_02_alt}>
                    </span>
                        <p className={styles.disclaimer_text}>
                            This video is incomplete and is missing its ending. However, despite this, it effectively demonstrates fundamental knowledge and skills in motion graphic design, including illustration, animation, and visual storytelling.
                        </p>
                    <span className={styles.underline_02_alt}>
                    </span>
                    <span className={styles.underline_02}>
                    </span>
                    <p className={styles.description}>
                        This motion graphic video is a fully illustrated educational piece that simplifies the formation of the solar system. It explores how the sun emerged and how the planets began to form around it, making complex astronomical concepts accessible to a broad audience.<br/><br/>

                        Designed with a cartoonish, engaging style, this project is aimed at kids and beginners interested in space science, providing a clear and entry-level explanation of how our solar system came to be.<br/><br/>

                        All visuals, including backgrounds and planetary graphics, were created from scratch in Adobe Illustrator, while the animation was developed using After Effects fundamentals and effects work. Every movement and transition was crafted to enhance understanding while maintaining a visually appealing and dynamic flow.<br/><br/>

                        This project showcases a combination of illustration and motion design techniques, demonstrating how educational content can be both informative and visually captivating.
                    </p>     
                    <span className={styles.underline_03}>
                    </span>  
                    <div className={styles.posters}>
                        <Image className={styles.eden_poster} src="/images/venture1.png" alt="ventureway cinemas poster 1" width={360} height={100}/>
                        <Image className={styles.eden_poster} src="/images/venture2.png" alt="ventureway cinemas poster 2" width={360} height={100}/>
                        <Image className={styles.eden_poster} src="/images/venture3.png" alt="ventureway cinemas poster 3" width={360} height={100}/>
                    </div> 
                </div>
            </div>
        </main>
    );
};