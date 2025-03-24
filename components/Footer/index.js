import styles from './Footer.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_head_container}>
                <h1 className={styles.footer_head}>
                    contact
                </h1>
            </div>
            <div className={styles.footer_contact_container}>
                <div className={styles.link_container}>
                    <Link href="mailto:thekennyharman@gmail.com" passHref>
                        <button className={styles.contact_button}>
                            <span className={styles.icon_container}>
                            <Image 
                                className={styles.link_icon}
                                src='/images/icons/email.svg'
                                alt='linkedin icon'
                                width={50}
                                height={50}
                            />
                            </span>
                            Email
                        </button>
                    </Link>
                </div>
                <div className={styles.link_container}>
                    <Link href="https://www.linkedin.com/in/kennyharman/" target="_blank">
                        <button className={styles.contact_button}>
                            <span className={styles.icon_container}>
                            <Image 
                                className={styles.link_icon}
                                src='/images/icons/linkedin.svg'
                                alt='linkedin icon'
                                width={50}
                                height={50}
                            />
                            </span>
                            LinkedIn
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}