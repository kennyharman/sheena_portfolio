import styles from "./NavBar.module.css";

export default function NavBar() {
    return (
        <div className={styles.nav_bar}>
            <div className={styles.wordmark}>
                <span className={styles.wordmark_top}>sheena</span>
                <span className={styles.wordmark_bottom} style={{fontSize: "1.145rem", letterSpacing: "0.1rem"}}>digital designs</span>
            </div>
        </div>
    );
};