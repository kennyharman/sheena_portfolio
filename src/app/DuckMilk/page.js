import Image from "next/image";
import NavBar from "../../../components/NavBar";
import styles from "./DuckMilk.module.css"

export default function DuckMilk() {
    return(
        <main className={styles.main}>
            <NavBar/>
            <div className={styles.content}>
                <h1 className={styles.header}>
                    
                </h1>
                <div className={styles.info}>
                    <h2 className={styles.subhead}>
                        beverage can mockup series
                    </h2>
                    <h3 className={styles.software}>
                        software: Adobe Photoshop, Adobe Illustrator
                    </h3>
                    <span className={styles.underline}>
                    </span>
                </div>
                <div className={styles.body_content}>
                    <Image className={styles.mockup} src="/images/cans.png" alt="eden poster mockups" width={1000} height = {400}/>
                    <h3 className={styles.disclaimer_head}>
                        disclaimer
                    </h3>
                    <span className={styles.underline_02_alt}>
                    </span>
                        <p className={styles.disclaimer_text}>
                            This project is a humorous exploration of digital design and mockup creation. The concept of "Canned Duck Milk" is entirely fictional and intended as a joke.
                        </p>
                    <span className={styles.underline_02_alt}>
                    </span>
                    <section className={styles.description}>
                        This project showcases the design and mockup creation process for a hypothetical beverage product: "Canned Duck Milk." Inspired by a previous project involving animal morphing, this concept jokingly imagines a company producing milk from a genetically altered duck-cow hybrid. <br/><br/>

                        The final designs include mockups for three variations: Regular, Chocolate, and Strawberry Duck Milk.
                        The creation process began in Adobe Illustrator, where a dieline was used to lay out the can’s design. This included vector illustrations and text elements, ensuring a clean and scalable design. The dieline was then imported into Adobe Photoshop, where blank can templates were used to create realistic mockups. Techniques such as clipping masks, gradient shadows, blending modes, and compositing were employed to bring the mockups to life. <br/><br/>

                        This project demonstrates a variety of design and technical skills, including:<br/><br/>
                        <ul className={styles.bullet_list}>
                            <li>
                                <span className={styles.bold}>Vector Design:</span> Crafting precise and scalable graphics in Illustrator.
                            </li>
                            <li>    
                                <span className={styles.bold}>Compositing and Photo Manipulation:</span> Using Photoshop to create realistic textures, shadows, and light effects.
                            </li>
                            <li>
                                <span className={styles.bold}>Mockup Creation:</span> Applying designs to 3D templates to simulate how the final product would appear in real-world scenarios.
                            </li>
                            <li>
                                <span className={styles.bold}>Humor in Design:</span> Exploring creative storytelling through a satirical concept, blending design skills with a playful narrative.
                            </li>
                        </ul><br/>
                        While the concept itself is intended as a joke, the project highlights serious technical expertise in design, compositing, and mockup creation. It serves as an example of pushing creative boundaries while refining advanced design techniques.
                    </section>     
                    <span className={styles.underline_03}>
                    </span>  
                    <div className={styles.posters}>
                        <Image className={styles.eden_poster} src="/images/PROOF_1.png" alt="i think you think too much of me" width={360} height={100}/>
                        <Image className={styles.eden_poster} src="/images/PROOF_2.png" alt="vertigo" width={360} height={100}/>
                        <Image className={styles.eden_poster} src="/images/PROOF_3.png" alt="end credits" width={360} height={100}/>
                    </div> 
                </div>
            </div>
        </main>
    );
};