import Image from "next/image";
import NavBar from "../../components/NavBar";
import styles from "./styles/Home.module.css"

export default function Home() {
  return (
    <div className="">
      <main className="">
        <NavBar/>
        <div className={styles.big_logo}>
          <Image className={styles.logo} src={'/images/logo_no-wordmark.svg'} alt={"sheena logo"} width={700} height={500}/>
        </div>
      </main>
      <footer className="">

      </footer>
    </div>
  );
}
