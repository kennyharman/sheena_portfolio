import Image from "next/image";
import NavBar from "../../../components/NavBar"; 
import styles from "./WhiteSparrow.module.css"
import Link from "next/link";
import ProjectGallery from "../../../components/ProjectGallery";
import Card01 from "../../../components/Card01";

export default function WhiteSparrow() {
  return (
    <>
    <div className={styles.test_head}>
    <h1>
      You have found the test page<br/>
      Have a cookie 🍪<br/><br/>
      There is, however, no active content on this page
    </h1>
    </div>
    </>
  );
}
