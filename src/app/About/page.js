import Image from "next/image";
import NavBar from "../../../components/NavBar";
import styles from "./About.module.css"
import Footer from "../../../components/Footer";

export default function About() {
    return(
        <main className={styles.main}>
            <NavBar/>
            <div className={styles.content}>
                <div className={styles.midnight_image_container}>
                    <Image 
                    className={styles.midnight_image}
                    src="/images/Kenny.png"
                    alt="kenny"
                    width={400}
                    height={660}/>
                </div>
                <div className={styles.midnight_content}>
                    <div className={styles.midnight_header_container}>
                        <h1 className={styles.midnight_header}>
                            my name is <br/><span className={styles.header_larger}>kenny</span>
                        </h1>
                    </div>
                    <div className={styles.midnight_subhead_container}>
                        <h2 className={styles.midnight_subhead}>
                            
                        </h2>
                        <h3 className={styles.midnight_software}>
                            i like to make things
                        </h3>
                    </div>
                    <span className={styles.underline}>
                    </span>
                    <div className={styles.midnight_description}>
                        I’m a graphic designer and digital creator with a passion for all things creative. To me, all art is beautiful, and my goal is simple—to create work that makes people feel something. Whether it’s joy, excitement, nostalgia, or even a moment of surprise, I want my work to break through the ordinary and bring a little more color and vibrance into the world.<br/><br/>

                        For as long as I can remember, I’ve been sketching, doodling, and running through ideas in my head—always imagining ways to reach people through art. Getting into graphic and digital design has given me the tools to bring those ideas to life, turning the concepts floating around in my brain into something real. As I continue to grow in my career, I hope to keep pushing my creative limits and making meaningful work that resonates with people.<br/><br/>

                        Outside of design, I’m a laid-back, lighthearted person who’s always up for a laugh. I’ve spent most of my life surrounded by art in different forms—film and video games are my biggest passions, but I’ve also spent years playing music, writing stories, skating, and exploring whatever creative outlets I can. At the end of the day, I just love creating and sharing things that make an impact, big or small.
                    </div>              
                </div>
            </div>

        <footer>
            <Footer/>
        </footer>
        </main>
    );
};