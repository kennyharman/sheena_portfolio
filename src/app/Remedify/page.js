"use client"
import Image from "next/image";
import NavBar from "../../../components/NavBar";
import styles from "./Remedify.module.css";

export default function Remedify() {

    const scrollToSection = (sectionId) => {
        const target = document.getElementById(sectionId);
        if (!target) return;
    
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1200; // Adjust duration (ms) to control overall speed
        let startTime = null;
    
        function animationStep(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
    
            window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
    
            if (progress < 1) {
                requestAnimationFrame(animationStep);
            }
        }
    
        function easeInOutCubic(t) {
            return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }
    
        requestAnimationFrame(animationStep);
    };
    
    return (
        <main className={styles.main}>
            <NavBar/>
            <div className={styles.remedify_graphic}>
                <Image src="/images/remedify_graphic.svg" alt="remedify graphic" width={500} height={500}/>
            </div>
            <div className={styles.remedify_logo}>
                <Image src="/images/wordmark.svg" alt="remedify" width={620} height={620}/>
            </div>
            <button className={styles.scroll_button} onClick={() => scrollToSection("overview")}>
                <Image src="/images/down-arrow_black.svg" alt="arrow button" width={30} height={30}/>
            </button>
            <div id="overview" className={styles.overview}>
                <div className={styles.overview_content}>
                    <h2 className={styles.section_head}>
                        Remedify
                    </h2>
                    <h3 className={styles.section_subhead}>
                        web app development project | case study
                        <span className={styles.section_subhead_alt}>
                            role: graphic designer, lead motion designer
                        </span>
                        <span className={styles.section_subhead_alt}>
                            sep 2024 — dec 2024
                        </span>
                    </h3>
                    <div className={styles.description_block}>
                        <h4 className={styles.section_subhead_02}>
                            what is remedify?
                        </h4>
                        <p className={styles.description}>
                            Remedify is a mobile app that leverages AI technology to help users manage complex medication schedules, providing customizable reminders and detailed drug information, ultimately enhancing health outcomes and reducing the risks associated with non-adherence.
                        </p>
                    </div>
                    <h5 className={styles.section_subhead_03}>
                        <span className={styles.bold}>development tools used:</span> Expo/React Native, Kitten UI, Azure cloud functions & blob storage, Azure Computer Vision (OCR), OpenAI GPT-4o mini, Canadian Drug Product Database (DPD)
                    </h5>
                    <h5 className={styles.section_subhead_03}>
                        <span className={styles.bold}>design tools used:</span> Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Figma, Storyboarder
                    </h5>
                </div>
                <div className={styles.mockup_01}>
                    <Image src="/images/remedify_mockup02.png" alt="remedify phone mockup" width={1000} height={1200} />
                </div>
                <button className={styles.scroll_button} onClick={() => scrollToSection("problem_solution")}>
                    <Image src="/images/down-arrow_white.svg" alt="arrow button" width={30} height={30} />
                </button>
            </div>
            <div className={styles.problem_solution_section}>
                <div id="problem_solution" className={styles.problem_solution}>
                    <div className={styles.problem}>
                        <h2 className={styles.section_subhead_04}>
                            the problem
                        </h2>
                        <p className={styles.problem_solution_description}>
                            Medication adherence remains a significant challenge, with patients managing chronic illnesses taking only about 50% of their prescribed medications. Misunderstanding instructions affects over 60% of patients after doctor visits, while forgetfulness leads to missed doses for nearly half (49.6%). Addressing these issues is essential to improving health outcomes and reducing risks associated with non-adherence.                    
                        </p>
                    </div>
                    <div className={styles.solution}>
                        <h2 className={styles.section_subhead_04}>
                            the solution
                        </h2>
                        <p className={styles.problem_solution_description}>
                            Medication adherence is improved through structured schedules that reduce confusion and missed doses. Clear explanations provide essential details about each medication, including its purpose and proper usage. Smart reminders send timely alerts to ensure consistent intake, helping users stay on track with their treatment and manage their health more effectively.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
