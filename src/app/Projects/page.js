import Image from "next/image";
import NavBar from "../../../components/NavBar"; 
import styles from "./Projects.module.css"
import Link from "next/link";

export default function Projects() {
  return (
    <div className="">
      <main className="">
        <NavBar/>
        <div className={styles.page_head}>
          <h1>
            projects
          </h1>
        </div>
        <Link href='/Remedify'>
          <button className={styles.button}>
            Remedify
          </button>
        </Link>
        <Link href='/Eden'>
          <button className={styles.button}>
            Eden
          </button>
        </Link>
        <Link href='/DuckMilk'>
          <button className={styles.button}>
            Duck Milk
          </button>
        </Link>
        <Link href='/Ventureway'>
          <button className={styles.button}>
            Ventureway Cinemas
          </button>
        </Link>
        <Link href='/SolarSystem'>
          <button className={styles.button}>
            How the Solar System Formed
          </button>
        </Link>
        <Link href='/Midnight'>
          <button className={styles.button}>
            Midnight
          </button>
        </Link>
        <Link href='/Portrait'>
          <button className={styles.button}>
            Portrait
          </button>
        </Link>
      </main>
      <footer className="">

      </footer>
    </div>
  );
}
