import Image from "next/image";
import NavBar from "../../../components/NavBar";
import styles from "./Ventureway.module.css"
import Footer from "../../../components/Footer";

export default function Ventureway() {
    return(
        <main className={styles.main}>
            <NavBar/>
            <div className={styles.content}>
                <h1 className={styles.header}>
                    Ventureway Cinemas
                </h1>
                <div className={styles.info}>
                    <h2 className={styles.subhead}>
                        logo and graphic advertisement series
                    </h2>
                    <h3 className={styles.software}>
                        software: Adobe Illustrator
                    </h3>
                    <span className={styles.underline}>
                    </span>
                </div>
                <div className={styles.body_content}>
                    <Image className={styles.mockup} src="/images/venture_mockup.png" alt="ventureway cinemas poster mockups" width={1000} height = {660}/>
                    <span className={styles.underline_02}>
                    </span>
                    <p className={styles.description}>
                        This project explores the branding and visual identity of Ventureway Cinemas, a hypothetical luxury movie theater chain specializing in premium viewing experiences. Designed to distinguish itself through high-quality picture and sound, comfortable recliner seating, and a focus on showcasing arthouse and high-cinema films, the project began with the creation of three potential logo drafts, ultimately leading to the final selected design.<br/><br/>

                        The chosen logo is crafted to evoke the image of a crown, symbolizing prestige and excellence. The design incorporates the top of a director’s clapboard as the band, with five stars above it—a nod to a five-star movie rating system and the refined experience the brand represents.<br/><br/>

                        Using this branding foundation, three advertisement posters were created entirely in Adobe Illustrator, integrating vector graphics, image masking, and detailed shape composition. The posters visually communicate the elegance of Ventureway Cinemas while maintaining a consistent aesthetic style. This project was developed to establish a unique brand identity while experimenting with advanced graphic design techniques in an engaging way that align with a brand’s identity.<br/><br/>
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