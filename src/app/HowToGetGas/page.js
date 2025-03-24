import Image from "next/image";
import NavBar from "../../../components/NavBar";
import styles from "./HowToGetGas.module.css"
import Footer from "../../../components/Footer";

export default function HowToGetGas() {
    return(
        <main className={styles.main}>
            <NavBar/>
            <div className={styles.content}>
                <h1 className={styles.header}>
                    How the Solar System Formed
                </h1>
                <div className={styles.info}>
                    <h2 className={styles.subhead}>
                        instructional motion graphic video
                    </h2>
                    <h3 className={styles.software}>
                        software: Adobe AfterEffects, Adobe Illustrator
                    </h3>
                    <span className={styles.underline}>
                    </span>
                </div>
                <div className={styles.body_content}>
                    <video className={styles.mockups} src="/videos/gas-video.mp4" 
                    width={1000} 
                    height={800} 
                    controls
                    poster = "/images/gas-thumbnail.png"
                    ></video>
                    <span className={styles.underline_02}>
                    </span>
                    <p className={styles.description}>
                        This instructional motion graphic video is designed as a step-by-step guide for new and inexperienced drivers, breaking down the process of refueling a car in a clear and approachable way. By combining real-world video footage with animated motion graphics, the video enhances understanding while keeping the presentation engaging and visually accessible. <br/><br/>

                        All illustrated elements, including supplemental graphics and on-screen visuals, were created from scratch in Adobe Illustrator, then brought to life using After Effects animation techniques. The live-action footage was also edited together within After Effects, incorporating video manipulation tools, transitions, and audio synchronization to ensure a smooth and cohesive viewing experience.<br/><br/>

                        The animation style follows a friendly and instructional approach, reinforcing key steps with clear visual cues while maintaining a light and approachable tone. By blending practical footage with animated elements, this project effectively demonstrates both technical skill in motion graphic design and the ability to simplify instructional content for a broad audience.
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

        <footer>
            <Footer/>
        </footer>
        </main>
    );
};