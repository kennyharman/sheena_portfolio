import Image from "next/image";
import NavBar from "../../../components/NavBar"; 
import styles from "./Projects.module.css"
import Link from "next/link";

export default function Projects() {
  return (
    <div className="">
      <main className="">
        <NavBar/>
        This is the Projects Page
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
        <Link href='/Ventureway'>
          <button className={styles.button}>
            Ventureway Cinemas
          </button>
        </Link>
      </main>
      <footer className="">

      </footer>
    </div>
  );
}
