import Image from "next/image";
import NavBar from "../../../components/NavBar";
import styles from "./Portrait.module.css"
import Footer from "../../../components/Footer";

export default function Portrait() {
    return(
        <main className={styles.main}>
            <NavBar/>
            <div className={styles.content}>
                <div className={styles.portrait_content}>
                    <div className={styles.portrait_header_container}>
                        <h1 className={styles.portrait_header}>
                            portrait 01
                        </h1>
                    </div>
                    <div className={styles.portrait_subhead_container}>
                        <h2 className={styles.portrait_subhead}>
                            digital painting
                        </h2>
                        <h3 className={styles.portrait_software}>
                            software: Adobe Photoshop
                        </h3>
                    </div>
                    <span className={styles.underline}>
                    </span>
                    <div className={styles.portrait_description}>
                        This digitally painted portrait was created entirely in Adobe Photoshop, utilizing a variety of brush techniques and custom settings to achieve a smooth yet detailed grayscale rendering. The process involved experimenting with smoothing, flow, and opacity adjustments combined with a mix of preset and custom brushes to refine textures and depth. <br/><br/>
                        
                        Hair and facial details were carefully built up using specialized brush packs designed for digital painting, allowing for a controlled and realistic finish. This piece served as both a technical exercise in brush proficiency and an exploration of Photoshop’s digital painting tools to create realistic shading and form.
                    </div>              
                </div>
                <div className={styles.portrait_image_container}>
                    <Image 
                    className={styles.portrait_image}
                    src="/images/portrait.webp"
                    alt="digitally painted portrait"
                    width={320}
                    height={660}/>
                </div>
            </div>

        <footer>
            <Footer/>
        </footer>
        </main>
    );
};