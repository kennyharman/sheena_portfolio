import Image from "next/image";
import NavBar from "../../../components/NavBar"; 
import styles from "./Projects.module.css"
import Link from "next/link";
import ProjectGallery from "../../../components/ProjectGallery";
import Card01 from "../../../components/Card01";

const projects = [
  {
    'link': '/Remedify',
    'image': '/images/MISC_Remedify-Graphic2.png',
    'title': 'remedify',
    'type': 'web application'
  }
]

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
        <div className={styles.cards_container}>
            <Card01
              name="remedify"
              subtitle="web app project"
              type="app development, graphic design, UI/UX design"
              cover="/images/MISC_Remedify-Graphic2.png"
              link="/Remedify"
            />
            <Card01
              name="eden"
              subtitle="album graphic poster series"
              type="graphic design"
              cover="/images/eden_mockup.jpg"
              link="/Eden"
            />
          <Card01
            name="duck milk"
            subtitle="beverage can mockup series"
            type="graphic design, branding"
            cover="/images/cans.png"
            link="/DuckMilk"
          />
          <Card01
            name="ventureway cinemas"
            subtitle="brand advertising series"
            type="graphic design, branding"
            cover="/images/venture_mockup.png"
            link="/Ventureway"
          />
          <Card01
            name="how the solar system formed"
            subtitle="educational motion graphic video"
            type="graphic design, motion design"
            cover="/images/space_second-thumbnail.png"
            link="/SolarSystem"
          />
          <Card01
            name="how to get gas"
            subtitle="education motion graphic video"
            type="graphic design"
            cover="/images/gas-thumbnail.png"
            link="/HowToGetGas"
          />
          <Card01
            name="midnight"
            subtitle="vector illustration"
            type="graphic design"
            cover="/images/midnight-thumbnail.png"
            link="/Midnight"
          />
          <Card01
            name="portrait 01"
            subtitle="digital painting"
            type="digital illustration"
            cover="/images/portrait_thumbnail.png"
            link="/Portrait"
          />
        </div>
      </main>
      <footer className="">

      </footer>
    </div>
  );
}
