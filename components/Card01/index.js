import styles from "./Card01.module.css"
import Link from "next/link";

export default function Card01({name, subtitle, type, cover, coverPosition, link}) {
    return (
        <div className={styles.card_wrapper}>
            <Link href={link}>
            <div className={styles.card} style={{ backgroundImage: `url(${cover})`, backgroundSize: "cover", backgroundPosition: "center" || coverPosition}}>
                <div className={styles.info_container}>
                    <div className={styles.title_container}>
                        <h1 className={styles.title}>
                            {name}
                        </h1>
                    </div>
                    <div className={styles.subtitle_container}>
                        <h2 className={styles.subtitle}>
                            {subtitle}
                        </h2>
                        <h3 className={styles.type}>
                            {type}
                        </h3>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};