import Image from "next/image";
import NavBar from "../../components/NavBar";
import styles from "./styles/Home.module.css"
import Link from "next/link";
import Hero from "./WhiteSparrow/page";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <NavBar/>
        <div className={styles.page_content}>
          <Hero/>
        </div>
      </main>
      <footer className="">
        <Footer/>
      </footer>
    </div>
  );
}
