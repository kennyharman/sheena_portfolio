import Image from "next/image";
import NavBar from "../../../components/NavBar";
import styles from "./Midnight.module.css"
import Footer from "../../../components/Footer";

export default function Midnight() {
    return(
        <main className={styles.main}>
            <NavBar/>
            <div className={styles.content}>
                <div className={styles.midnight_content}>
                    <div className={styles.midnight_header_container}>
                        <h1 className={styles.midnight_header}>
                            midnight
                        </h1>
                    </div>
                    <div className={styles.midnight_subhead_container}>
                        <h2 className={styles.midnight_subhead}>
                            mechanical object<br/> 
                            vector illustration
                        </h2>
                        <h3 className={styles.midnight_software}>
                            software: Adobe Illustrator
                        </h3>
                    </div>
                    <span className={styles.underline}>
                    </span>
                    <div className={styles.midnight_description}>
                        This vector illustration showcases the Kiesel DC600C - Cole Rolland Signature "Midnight", an electric guitar designed by guitarist and songwriter Cole Rolland. Created entirely in Adobe Illustrator, this piece is full vector, built using precise shape drawing, layering, and gradient techniques to achieve a photorealistic appearance.<br/><br/>

                        Inspired by both Cole Rolland as a musician and the sleek, picturesque design of his signature guitar, this project served as an exercise in digital illustration and vector graphic design, pushing realism within a purely digital medium.
                    </div>              
                </div>
                <div className={styles.midnight_image_container}>
                    <Image 
                    className={styles.midnight_image}
                    src="/images/midnight.png"
                    alt="midnight"
                    width={400}
                    height={660}/>
                </div>
            </div>

        <footer>
            <Footer/>
        </footer>
        </main>
    );
};