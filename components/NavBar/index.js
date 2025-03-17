import styles from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import Projects from "@/app/Projects/page";

export default function NavBar() {
    return (
        <div className={styles.nav_bar}>
            <div className={styles.nav_icon}>
                <Image src={'/images/Asset13.svg'} alt={'sheena'} width={40} height={40}/>
            </div>
            <Link className={styles.wordmark_link} href='/'>
                <div className={styles.wordmark}>
                    <span className={styles.wordmark_top}>sheena</span>
                    <span className={styles.wordmark_bottom} style={{fontSize: "1.145rem", letterSpacing: "0.1rem"}}>digital designs</span>
                </div>
            </Link>
            <div className={styles.nav_buttons}>
                <Link href='/'>
                    <button className={styles.nav_button}>
                        Home
                    </button>
                </Link>
                <Link href='/Projects'>
                    <button className={styles.nav_button}>
                        Projects
                    </button>
                </Link>
                <Link href='/About'>
                    <button className={styles.nav_button}>
                        About
                    </button>
                </Link>
                <button className={styles.nav_button}>
                    Contact
                </button>
            </div>
        </div>
    );
};