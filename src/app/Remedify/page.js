"use client"
import Image from "next/image";
import NavBar from "../../../components/NavBar";
import styles from "./Remedify.module.css";

export default function Remedify() {
    
    const scrollToSection = () => {
        const target = document.getElementById("next-section");
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
                ? 4 * t * t * t // Slow start
                : 1 - Math.pow(-2 * t + 2, 3) / 2; // Slow end
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
            <button className={styles.scroll_button} onClick={scrollToSection}>
                <Image src="/images/down-arrow_black.svg" alt="arrow button" width={30} height={30}/>
            </button>
            <div id="next-section" className={styles.next_section}>
                <h2>Next Section</h2>
                <p>This is where your next content starts.</p>
            </div>
        </main>
    );
}
