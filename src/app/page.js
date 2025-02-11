import Image from "next/image";
import NavBar from "../../components/NavBar";
import styles from "./styles/Home.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <NavBar/>
        <div className={styles.page_content}>
          <div className={styles.main_content}>
            <Image className={styles.logo} src={'/images/logo_no-wordmark.svg'} alt={"sheena logo"} width={780} height={800}/>
              <p className={styles.titles}>
                graphic design • motion design • digital illustration
              </p>
            <div className={styles.projects_button}>
              <Link href='/Projects'>
                <button>
                  see projects
                </button>
              </Link>
            </div>
          </div>

        </div>
      </main>
      <footer className="">

      </footer>
    </div>
  );
}
