"use client"
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../../components/NavBar";
import styles from "./Remedify.module.css";
import Footer from "../../../components/Footer";

export default function Remedify() {

    const scrollToSection = (sectionId) => {
        const target = document.getElementById(sectionId);
        if (!target) return;
    
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1200; // Adjust duration (ms) to control overall speed
        let startTime = null;
    
        function animationStep(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
    
            window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
    
            if (progress < 1) {
                requestAnimationFrame(animationStep);
            }
        }
    
        function easeInOutCubic(t) {
            return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }
    
        requestAnimationFrame(animationStep);
    };
    


    return (
        <main className={styles.main}>
            <NavBar/>
            <div className={styles.remedify_graphic}>
                <Image src="/images/remedify_graphic.svg" alt="remedify graphic" width={500} height={500}/>
            </div>
            <div className={styles.remedify_logo}>
                <Image src="/images/wordmark.svg" alt="remedify" width={620} height={620}/>
            </div>
            <button className={styles.scroll_button} onClick={() => scrollToSection("overview")}>
                <Image src="/images/down-arrow_black.svg" alt="arrow button" width={30} height={30}/>
            </button>



            <div id="overview" className={styles.overview}>
                <div className={styles.overview_content}>
                    <h2 className={styles.section_head}>
                        Remedify
                    </h2>
                    <h3 className={styles.section_subhead}>
                        web app development project | case study
                        <span className={styles.section_subhead_alt}>
                            role: graphic designer, lead motion designer
                        </span>
                        <span className={styles.section_subhead_alt}>
                            sep 2024 — dec 2024
                        </span>
                    </h3>
                    <div className={styles.description_block}>
                        <h4 className={styles.section_subhead_02}>
                            what is remedify?
                        </h4>
                        <p className={styles.description}>
                            Remedify is a mobile medication reminder and information app that leverages AI technology to help users manage complex medication schedules, providing customizable reminders and detailed drug information, ultimately enhancing health outcomes and reducing the risks associated with non-adherence.
                        </p>
                    </div>
                    <h5 className={styles.section_subhead_03}>
                        <span className={styles.bold}>development tools used:</span> Expo/React Native, Kitten UI, Azure cloud functions & blob storage, Azure Computer Vision (OCR), OpenAI GPT-4o mini, Canadian Drug Product Database (DPD)
                    </h5>
                    <h5 className={styles.section_subhead_03}>
                        <span className={styles.bold}>design tools used:</span> Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Adobe InDesign, Figma, Storyboarder
                    </h5>
                </div>
                <div className={styles.mockup_01}>
                    <Image src="/images/remedify_mockup04.png" alt="remedify phone mockup" width={286} height={1200} />
                </div>
                <button className={styles.scroll_button} onClick={() => scrollToSection("problem_solution")}>
                    <Image src="/images/down-arrow_white.svg" alt="arrow button" width={30} height={30} />
                </button>
            </div>

            <div className={styles.demo_section}>
                <div className={styles.demo_head_container}>
                    <h2 className={styles.section_subhead_04}>
                        demo prototype
                    </h2>
                </div>
                <div className={styles.demo_container}>
                    <div className={styles.demo_wrapper}>

                    </div>
                </div>
            </div>

            <div className={styles.problem_solution_section}>
                <div className={styles.mockup_02}>
                    <Image src="/images/remedify_mockup02.png" alt="remedify phone mockup" width={1000} height={400} />
                </div>
                <div id="problem_solution" className={styles.problem_solution}>
                    <div className={styles.problem}>
                        <h2 className={styles.section_subhead_04}>
                            the problem
                        </h2>
                        <p className={styles.problem_solution_description}>
                            Medication adherence remains a significant challenge, with patients managing chronic illnesses taking only about <span className={styles.bold_02}>50%</span> of their prescribed medications. Misunderstanding instructions affects over <span className={styles.bold_02}>60%</span> of patients after doctor visits, while forgetfulness leads to missed doses for nearly half <span className={styles.bold_02}>(49.6%)</span>. Addressing these issues is essential to improving health outcomes and reducing risks associated with non-adherence.                    
                        </p>
                    </div>
                    <div className={styles.solution}>
                        <h2 className={styles.section_subhead_04}>
                            remedify's solution
                        </h2>
                        <p className={styles.problem_solution_description}>
                            Medication adherence is improved through structured schedules that reduce confusion and missed doses. Clear explanations provide essential details about each medication, including its purpose and proper usage. Smart reminders send timely alerts to ensure consistent intake, helping users stay on track with their treatment and manage their health more effectively.
                        </p>
                    </div>
                </div>
                <button className={styles.scroll_button} onClick={() => scrollToSection("target_audience")}>
                    <Image src="/images/down-arrow_white.svg" alt="arrow button" width={30} height={30} />
                </button>
            </div>
            
            <div id="target_audience" className={styles.target_audience_section}>
                <h2 className={styles.section_subhead_04}>
                    remedify's target audience
                </h2>    
                <div className={styles.target_audience}>
                    <div className={styles.target_container_01}>
                        <div className={styles.target_image_container}>
                            <Image className={styles.target_image} src="/images/brain.svg" alt="cognitively impaired" width={200} height ={220}/>
                        </div>
                        <div className={styles.target_content}>
                            <h3 className={styles.section_subhead_02}>
                                cognitively impaired
                            </h3>
                            <p className={styles.target_text}>
                                Remedify’s intuitive reminders help users with cognitive challenges remember their medications, supporting confidence, education, and routine.
                            </p>
                        </div>
                    </div>
                    <div className={styles.target_container_02}>
                        <div className={styles.target_content_02}>
                            <h3 className={styles.section_subhead_02_alt}>
                                polypharmacy & caregivers
                            </h3>
                            <p className={styles.target_text}>
                                Remedify’s intuitive reminders help users with cognitive challenges remember their medications, supporting confidence, education, and routine.
                            </p>
                        </div>
                        <div className={styles.target_image_container_02}>
                            <Image className={styles.target_image} src="/images/hand.svg" alt="cognitively impaired" width={200} height ={220}/>
                        </div>
                    </div>
                    
                </div>
                <button className={styles.scroll_button_02} onClick={() => scrollToSection("features")}>
                    <Image src="/images/down-arrow_white.svg" alt="arrow button" width={30} height={30} />
                </button>
            </div>
            
            <div id="features" className={styles.features_section}>
                <h2 className={styles.section_subhead_04_alt}>
                    features
                </h2>
                <div className={styles.features_container}>
                    <div className={styles.feature_wrapper_01}>
                        <div className={styles.features_content}>
                            <h3 className={styles.section_subhead_05}>
                                AI-powered label scanning
                            </h3>
                            <p className={styles.feature_description}>
                                Easily scan your medication labels to set up reminders automatically, minimizing the steps you need to remember and simplifying the process.
                            </p>
                        </div>
                        <div className={styles.features_image_container}>
                            <Image className={styles.features_image} src="/images/remedify_mockup05.png" alt="remedify phone mockup" width={840} height={600}/>
                        </div>
                    </div>
                    <div className={styles.feature_wrapper_02}>
                        <div className={styles.feature_content_02}>
                            <h3 className={styles.section_subhead_05_center}>
                                One-tap<br/> medication logging
                            </h3>
                            <p className={styles.feature_description_02}>
                                Easily log each dose with a single tap and track medications effortlessly through a simple, intuitive interface designed for seamless medication management.
                            </p>
                        </div>
                        <div className={styles.features_image_container_02}>
                            <Image 
                                className={styles.features_image_02}
                                src='/images/reminder.png'
                                alt='reminder'
                                width={300}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className={styles.feature_wrapper_03}>
                        <div className={styles.features_image_container_03}>
                            <Image
                                className={styles.features_image_03}
                                src='/images/library.png'
                                alt='medication library'
                                width={780}
                                height={100}
                            />
                        </div>
                        <div className={styles.feature_content_03}>
                            <h3 className={styles.section_subhead_05_left}>
                                Accessible medication library
                            </h3>
                            <p className={styles.feature_description_03}>
                                Access all medications in one clear, easily navigable library, providing reliable and easy-to-understand information to empower users in managing their health with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="research" className={styles.research_section}>
                <div className={styles.document_container}>
                    <iframe 
                        src="https://docs.google.com/document/d/1MGyxeF7pkwpVo4VsNl829hrDaSTTYn5Frfa2RREm4Nc/edit?tab=t.0embedded=true" 
                        className={styles.document}
                        width="1200"
                        height="1000">
                        Loading…
                    </iframe>
                </div>
                <div className={styles.research_content_container}>
                    <div className={styles.research_content}>
                        <h2 className={styles.section_subhead_04}>
                            user research
                        </h2>
                        <p className={styles.research_description}>
                            Thorough secondary research was conducted through surveys, interviews, articles and other existing user research. This research was done to further enhance our insight on the target demographic and lead to further development of our app. Through this research we identified commonalities between the user’s wants and needs, information on medication adherence and ways to improve medication routine practices.<br/><br/>

                            Research identifies key challenges in medication adherence, including forgetfulness, lack of awareness, complex regimens, and accessibility barriers. Solutions include engaging reminders, clear medication insights, and customizable alerts to improve adherence. Accessibility features like large fonts and voice assistance enhance inclusivity, while a streamlined, visual approach simplifies tracking. A user-centered design with personalization ensures intuitive and effective medication management for both patients and caregivers.
                        </p>
                        <Link href="https://docs.google.com/document/d/1MGyxeF7pkwpVo4VsNl829hrDaSTTYn5Frfa2RREm4Nc/edit?tab=t.0" alt="remedify research document" target="_blank">
                            <button className={styles.document_button}>
                                view full research document  <span><Image src='/images/link.svg' alt='link' width={14} height={14}/></span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.comp_analysis_section}>
                <div className={styles.comp_analysis_content}>
                    <h2 className={styles.section_subhead_04}>
                        competitive analysis
                    </h2>
                    <p className={styles.comp_analysis_description}>
                    A competitive analysis of existing medication management apps was conducted to identify strengths, weaknesses, and gaps in the market. By evaluating both medical and non-medical applications, key insights were gathered to enhance accessibility, usability, and AI functionality. This analysis informed the development of Remedify, ensuring a user-centered design that addresses pain points and improves medication adherence through refined features and intelligent solutions.
                    </p>
                </div>
                <div className={styles.comp_analysis_frames}>
                    <div className={styles.comp_analysis_container}>
                        <h3 className={styles.bold}>
                            UI focused analysis
                        </h3>
                        <iframe 
                            className={styles.comp_analysis}
                            width="800" 
                            height="450" 
                            src="https://embed.figma.com/board/RPakjzn6MwY3XnhFeZmWyf/Competitive-Analysis-(UI-Focused)?node-id=0-1&embed-host=share" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className={styles.comp_analysis_container}>
                        <h3 className={styles.bold_alt}>
                            in-depth analysis
                        </h3>
                        <iframe 
                            className={styles.comp_analysis}
                            width="800" 
                            height="450" 
                            src="https://embed.figma.com/board/WK9WoDPIFcwGfjfifl3ZOr/Competitive-Analysis-(Latest-Ver.)?node-id=0-1&embed-host=share" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>

            <div className={styles.persona_section}>
                <div className={styles.persona_content}>
                    <div className={styles.persona_images_container}>
                        <Image
                            className={styles.persona_image}
                            src='/images/primary_persona.png'
                            alt='remedify primary user persona'
                            width={380}
                            height={600}
                        />
                        <Image
                            className={styles.persona_image}
                            src='/images/secondary_persona.png'
                            alt='remedify secondary user persona'
                            width={360}
                            height={600}
                        />
                    </div>
                    <div className={styles.persona_summary_container}>
                        <div className={styles.persona_head_container}>
                            <h2 className={styles.section_subhead_04}>
                                user personas
                            </h2>
                        </div>
                        <div className={styles.persona_summary_text}>
                            User personas were created to help shape Remedify's design by providing insight into the needs and challenges of its target users. By understanding their experiences, we ensure Remedify remains intuitive, practical, and user-focused.
                        </div>  
                        <ul className={styles.persona_list}>
                            <li className={styles.list_text}>
                                <span className={styles.list_bold}>Primary Persona: Elderly Individual</span><br/> The primary user is an older adult managing multiple medications while dealing with memory-related difficulties.
                            </li>
                        </ul>
                        <ul className={styles.persona_list}>
                            <li className={styles.list_text}>
                                <span className={styles.list_bold}>Secondary Persona: Caregiver</span><br/> The secondary user is a caregiver who helps a loved one stay on track with their medication schedule.
                            </li>
                        </ul>
                        <div className={styles.persona_button_container}>
                            <Link href="https://embed.figma.com/proto/eqiBsR991DWqKMuktHQb1P/Persona?page-id=64%3A4&node-id=162-195&viewport=1114%2C315%2C0.41&scaling=min-zoom&content-scaling=fixed&embed-host=share" alt="remedify user personas" target="_blank">
                                <button className={styles.persona_button}>
                                    view user personas <span><Image src='/images/link.svg' alt='link' width={14} height={14}/></span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.styleguide_section}>
                <div className={styles.styleguide_container}>
                    <div className={styles.styleguide_content}>
                        <h2 className={styles.section_subhead_04}>
                            remedify styleguide
                        </h2>
                        <p className={styles.styleguide_description}>
                            The Remedify app's style guide was developed to align with its mission of helping users manage their health and medications in a way that feels warm, calming, and accessible. <br/><br/>
                            The design process focused on creating a welcoming experience, drawing inspiration from familiar healthcare imagery while ensuring a sense of comfort. The color palette was chosen to evoke warmth and reassurance, reminiscent of sunsets and medication packaging. <br/><br/>
                            The logo went through multiple iterations, starting with the Rod of Asclepius as a foundation and evolving to incorporate reminder-related imagery in a simple, approachable way. This emphasis on clarity and friendliness carried through the entire design, from the rounded buttons to the choice of sans-serif fonts, reinforcing an intuitive and inclusive experience.
                        </p>
                    </div>
                    <div className={styles.styleguide_image_container}>
                        <img
                        className={styles.styleguide_image}
                        src="/images/remedifyStyleguide.png"
                        alt="remedify styleguide"
                        width="540"
                        height="1080"
                        target="_blank"/>
                    </div>
                </div>
            </div>
            <div className={styles.color_palette_section}>
                <div className={styles.color_palette_head_container}>
                    <h2 className={styles.section_subhead_04}>
                        color palette
                    </h2>
                </div>
                <div className={styles.color_palette_content}>
                    <div className={styles.palette_tile_container}>
                        <div className={styles.palette_tile} style={{ backgroundColor: "#007972" }}>
                            <div className={styles.tile_text}>
                                <h5 className={styles.tile_color_name}>
                                    pine green
                                </h5>
                                <p className={styles.tile_color_code}>
                                    rgb (0, 121, 114)
                                </p>
                                <p className={styles.tile_color_code}>
                                    #007972
                                </p>
                            </div>
                        </div>
                        <div className={styles.palette_tile} style={{ backgroundColor: "#89CCC8" }}>
                            <div className={styles.tile_text}>
                                <h5 className={styles.tile_color_name_02}>
                                    light green
                                </h5>
                                <p className={styles.tile_color_code_02}>
                                    rgb (137, 204, 200)
                                </p>
                                <p className={styles.tile_color_code_02}>
                                    #89CCC8
                                </p>
                            </div>
                        </div>
                        <div className={styles.palette_tile} style={{ backgroundColor: "#FFD08B" }}>
                            <div className={styles.tile_text}>
                                <h5 className={styles.tile_color_name_03}>
                                    sunset
                                </h5>
                                <p className={styles.tile_color_code_03}>
                                    rgb (255, 208, 139)  
                                </p>
                                <p className={styles.tile_color_code_03}>
                                    #FFD08B
                                </p>
                            </div>
                        </div>
                        <div className={styles.palette_tile} style={{ backgroundColor: "#D9EDFF" }}>
                            <div className={styles.tile_text}>
                                <h5 className={styles.tile_color_name_04}>
                                    light blue
                                </h5>
                                <p className={styles.tile_color_code_04}>
                                    rgb (217, 237, 255)
                                </p>
                                <p className={styles.tile_color_code_04}>
                                    #D9EDFF
                                </p>
                            </div>
                        </div>
                        <div className={styles.palette_tile} style={{ backgroundColor: "#FAF8FE" }}>
                            <div className={styles.tile_text}>
                                <h5 className={styles.tile_color_name_05}>
                                    silver white
                                </h5>
                                <p className={styles.tile_color_code_05}>
                                    rgb (250, 248, 254)
                                </p>
                                <p className={styles.tile_color_code_05}>
                                    #FAF8FE
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.color_palette_description}>
                        <p className={styles.palette_description_text}>
                            The color palette is designed to create a balance between vibrancy and calm, enhancing both visual appeal and usability. Warm oranges introduce energy and positivity, making the interface feel inviting and engaging. In contrast, light green and blue provide a sense of calm and reassurance, reinforcing the app’s focus on health and well-being. A neutral silver-white background adds a layer of simplicity and cleanliness, ensuring that the primary and secondary colors stand out without overwhelming the user. This thoughtful combination creates a visual synergy that is both approachable and functional, promoting clarity while maintaining a welcoming atmosphere.
                        </p>
                    </div>
                    <button className={styles.scroll_button_02} onClick={() => scrollToSection("logo")}>
                    <Image src="/images/down-arrow_white.svg" alt="arrow button" width={30} height={30} />
                </button>
                </div>
            </div>

            <div className={styles.logo_section} id="logo">
                <div className={styles.logo_head_container}>
                    <h2 className={styles.section_subhead_04}>
                        remedify's logo
                    </h2>
                </div>
                <div className={styles.logo_content}>
                    <div className={styles.logo_description_container}>
                        <p className={styles.logo_description}>
                            The Remedify logo was designed to merge symbols of health and reminders into a single, cohesive mark. After several iterations created by several members of the design team, the final concept features an exclamation point for alerts, with a snake winding up its length to evoke the Rod of Asclepius, a nationally known symbol of health and medicine. Simple shapes and white space techniques create depth while keeping the design minimal and friendly. The logo is unified by Remedify’s teal and sunset-inspired color palette, reinforcing warmth, trust, and accessibility.
                        </p>
                    </div>
                    <div className={styles.logo_images_container}>
                        <Image
                        className={styles.logo}
                        src="/images/remedify-logo_01.svg"
                        alt="remedify logo 01"
                        width={100}
                        height={100}
                        />
                        <Image
                        className={styles.logo}
                        src="/images/remedify-logo_02.svg"
                        alt="remedify logo 02"
                        width={120}
                        height={100}
                        />
                        <Image
                        className={styles.logo}
                        src="/images/remedify-logo_03.svg"
                        alt="remedify logo 03"
                        width={130}
                        height={100}
                        />
                        <Image
                        className={styles.logo}
                        src="/images/remedify-logo_04.svg"
                        alt="remedify logo 04"
                        width={140}
                        height={100}
                        />
                        <Image
                        className={styles.logo}
                        src="/images/remedify-logo_05.svg"
                        alt="remedify logo 05"
                        width={160}
                        height={100}
                        />
                        <Image
                        className={styles.logo}
                        src="/images/remedify-logo_06.svg"
                        alt="remedify logo 06"
                        width={200}
                        height={100}
                        />
                        <Image
                        className={styles.logo}
                        src="/images/remedify-logo_07.svg"
                        alt="remedify logo 07"
                        width={240}
                        height={100}
                        />
                        <Image
                        className={styles.logo}
                        src="/images/remedify-logo_final.svg"
                        alt="finally remedify logo"
                        width={280}
                        height={100}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.typography_section}>
                <div className={styles.typography_head_container}>
                    <h2 className={styles.section_subhead_04}>
                        typography
                    </h2>
                </div>
                <div className={styles.typography_content}>
                    <div className={styles.typography_summary_container}>
                        <p className={styles.typography_summary}>
                            Remedify’s typography was carefully chosen to create a welcoming and user-centered experience while ensuring clear visual hierarchy and readability. The selection of rounded and approachable typefaces reinforces the app’s friendly and inviting design, making interactions feel intuitive and accessible. By using a structured combination of fonts for headings, buttons, and body text, the design maintains a balance between warmth and clarity, guiding users seamlessly through the interface. 
                        </p>
                    </div>
                    <div className={styles.typeface_container}>
                        <div className={styles.typeface}>
                            <h3>
                                omnes cyrillic
                            </h3>
                            <p className={styles.alphabet}>
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                                abcdefghijklmnopqrxtuvwxyz<br/>
                                1234567890
                            </p>
                            <p>
                                Omnes Cyrillic was used for Remedify's wordmark, selected for its rounded and inviting appearance
                            </p>
                            <Image
                                src="/images/remedify.svg"
                                alt="remedify logo with wordmark"
                                width={360}
                                height={200}
                            />
                        </div>
                        <div className={styles.typeface}>
                            <h3>
                                poppins
                            </h3>
                            <p className={styles.alphabet}>
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                                abcdefghijklmnopqrxtuvwxyz<br/>
                                1234567890
                            </p>
                            <p>
                                Poppins is utilized as a secondary typeface as a header and button font.
                            </p>
                            <div className={styles.text_example_container_poppins}>
                                <p>
                                    H1
                                </p>
                                <p>
                                    Heading
                                </p>
                                <p>
                                    SemiBold 26pt
                                </p>
                            </div>
                        </div>
                        <div className={styles.typeface}>
                            <h3>
                                public sans
                            </h3>
                            <p className={styles.alphabet}>
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                                abcdefghijklmnopqrxtuvwxyz<br/>
                                1234567890
                            </p>
                            <p>
                                Public Sans was selected as a tertiary typeface, used as body copy to establish clear visual hierarchy
                            </p>
                            <div className={styles.text_example_container_public}>
                                <div className={styles.public_text_container_01}>
                                    <p>
                                        H2
                                    </p>
                                    <p>
                                        Subheading
                                    </p>
                                    <p>
                                        SemiBold 18pt
                                    </p>
                                </div>
                                <div className={styles.public_text_container_02}>
                                    <div className={styles.text_subcontainer_01}>
                                        <p>
                                            Body Copy
                                        </p>
                                    </div>
                                    <div className={styles.text_subcontainer_01}>
                                        <p>
                                            Bold Body
                                        </p>
                                        <p>
                                            Body
                                        </p>
                                        <p>
                                            Small Body
                                        </p>
                                    </div>
                                    <div className={styles.text_subcontainer_02}>
                                        <p>
                                            Bold 16pt
                                        </p>
                                        <p>
                                            Regular 16pt
                                        </p>
                                        <p>
                                            Regular 14pt
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.iconography_section}>
                <div className={styles.iconography_head_container}>
                    <h2 className={styles.section_subhead_04}>
                        iconography
                    </h2>
                </div>
                <div className={styles.iconography_content}>
                    <div className={styles.iconography_summary_container}>
                        <p className={styles.iconography_summary}>
                            Several custom icons were designed to represent different types of medications, incorporating the app’s color scheme and utilizing large, clear shapes with a friendly, rounded aesthetic. These icons enhance accessibility and make it easier for users to sort medications within complex schedules. Additionally, custom graphics were created for the scan screen, providing a clear visual guide to help users navigate the app’s scanning feature effortlessly.
                        </p>
                    </div>
                    <div className={styles.iconography_icons_container}>
                        <div className={styles.med_icon_container_01}>
                            <div className={styles.icon_container}>
                                <Image
                                    className={styles.med_icon}
                                    src='/images/remedify_icons/Capsule.svg'
                                    alt='capsule icon'
                                    width={78}
                                    height={200}
                                />
                            </div>
                            <div className={styles.icon_container}>
                                <Image
                                    className={styles.med_icon}
                                    src='/images/remedify_icons/Tablets.svg'
                                    alt='capsule icon'
                                    width={100}
                                    height={200}
                                />
                            </div>
                            <div className={styles.icon_container}>
                                <Image
                                    className={styles.med_icon}
                                    src='/images/remedify_icons/Spray.svg'
                                    alt='capsule icon'
                                    width={34}
                                    height={100}
                                />
                            </div>
                            <div className={styles.icon_container}>
                                <Image
                                    className={styles.med_icon}
                                    src='/images/remedify_icons/Injection.svg'
                                    alt='capsule icon'
                                    width={64}
                                    height={200}
                                />
                            </div>
                            <div className={styles.icon_container}>
                                <Image
                                    className={styles.med_icon}
                                    src='/images/remedify_icons/Ointment.svg'
                                    alt='capsule icon'
                                    width={68}
                                    height={200}
                                />
                            </div>
                            <div className={styles.icon_container}>
                                <Image
                                    className={styles.med_icon}
                                    src='/images/remedify_icons/Liquid.svg'
                                    alt='capsule icon'
                                    width={94}
                                    height={200}
                                />
                            </div>
                            <div className={styles.icon_container}>
                                <Image
                                    className={styles.med_icon}
                                    src='/images/remedify_icons/Dropper.svg'
                                    alt='capsule icon'
                                    width={22}
                                    height={200}
                                />
                            </div>
                        </div>
                        <div className={styles.med_icon_container_02}>
                            <div className={styles.med_scan_container}>
                                <Image
                                    className={styles.scan_icon}
                                    src='/images/remedify_icons/pill-bottle_scan.svg'
                                    alt='injection scan screen icon'
                                    width={140}
                                    height={100}
                                />
                                <Image
                                    className={styles.scan_icon}
                                    src='/images/remedify_icons/injection_scan.svg'
                                    alt='injection scan screen icon'
                                    width={140}
                                    height={100}
                                />
                                <Image
                                    className={styles.scan_icon}
                                    src='/images/remedify_icons/spray-bottle_scan.svg'
                                    alt='injection scan screen icon'
                                    width={140}
                                    height={100}
                                />
                                <Image
                                    className={styles.scan_icon}
                                    src='/images/remedify_icons/ointment_bottle-scan.svg'
                                    alt='injection scan screen icon'
                                    width={140}
                                    height={100}
                                />
                                <Image
                                    className={styles.scan_icon}
                                    src='/images/remedify_icons/liquid_scan.svg'
                                    alt='injection scan screen icon'
                                    width={140}
                                    height={100}
                                />
                                <Image
                                    className={styles.scan_icon}
                                    src='/images/remedify_icons/dropper_scan.svg'
                                    alt='injection scan screen icon'
                                    width={140}
                                    height={100}
                                />
                            </div>
                        </div>
                        <div className={styles.med_scan_container}>

                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.comp_analysis_section}>
                <div className={styles.comp_analysis_content}>
                    <h2 className={styles.section_subhead_04}>
                        wireframing
                    </h2>
                    <p className={styles.comp_analysis_description}>
                        The wireframes were designed to outline the app’s structure and user interactions. Insights from the competitive analysis played a key role in shaping a user-friendly experience that aligns with the needs of the target audience. The wireframe provides a clear representation of how users will navigate and interact with each feature, ensuring seamless usability and intuitive design.
                    </p>
                </div>
                <div className={styles.comp_analysis_frames}>
                    <div className={styles.comp_analysis_container}>
                        <h3 className={styles.bold}>
                            lo-fi wireframes
                        </h3>
                        <iframe 
                            className={styles.comp_analysis}
                            width="400" 
                            height="450" 
                            src="https://embed.figma.com/design/lbLaPFGzOxiCvLbD18gxEl/Remedify-Wireframe?node-id=0-1&embed-host=share"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className={styles.comp_analysis_container}>
                        <h3 className={styles.bold_alt}>
                            hi-fi wireframes
                        </h3>
                        <iframe 
                            className={styles.comp_analysis}
                            width="400" 
                            height="450" 
                            src="https://embed.figma.com/design/lbLaPFGzOxiCvLbD18gxEl/Remedify-Wireframe?node-id=1797-14184&embed-host=share" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>

            <div className={styles.marketing_section}>
                <div className={styles.marketing_head_container}>
                    <h2 className={styles.section_subhead_04}>
                        promotional materials
                    </h2>
                </div>
                <div className={styles.marketing_content}>
                    <div className={styles.marketing_summary_container}>
                        <p className={styles.marketing_summary}>
                            A variety of marketing materials were developed to support the promotion of Remedify, including business cards, brochures, and a promotional advertisement video. The brochure, carefully designed in Adobe InDesign, effectively communicates the app’s purpose, key features, and target audience in a visually engaging format. Meanwhile, the advertisement video was crafted to tell a compelling visual story, illustrating the real-world impact of Remedify through the lens of a potential user. By focusing on narrative-driven marketing, these materials aim to highlight the app’s value and connect with audiences on a deeper level.
                        </p>
                    </div>
                    <div className={styles.marketing_materials_container}>
                        <div className={styles.brochure_wrapper}>
                            <Image
                                className={styles.brochure}
                                src='/images/brochure-mockup.png'
                                alt='remedify brochure mockup'
                                width={680}
                                height={200}
                            />
                        </div>
                        <div className={styles.advertisement_wrapper}>
                            <video 
                                className={styles.mockups} src="/videos/remedify_advertisement.mov" 
                                width={640} 
                                height={300} 
                                controls
                                poster = ""
                            ></video>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.motion_section}>
                <div className={styles.motion_head_container}>
                    <h2 className={styles.section_subhead_04}>
                        motion design
                    </h2>
                </div>
                <div className={styles.motion_summary_container}>
                    <p className={styles.motion_summary}>
                        To enhance engagement and visual appeal, motion graphics were incorporated into Remedify’s logo and medication scanning screen. These animations add a dynamic touch to the user experience while reinforcing the app’s friendly and approachable design. Created using Adobe After Effects, the animations were carefully crafted with Remedify’s existing graphic assets, ensuring consistency with the app’s visual identity. Designed with accessibility in mind, these motion elements provide intuitive cues that help guide users while making interactions feel more seamless and engaging.
                    </p>
                </div>
                <div className={styles.animations_container}>
                    <div className={styles.animation_wrapper}>
                        <Image 
                            className={styles.animation}
                            src='/images/remedify_logo-animation.gif'
                            alt='logo animation'
                            width={600}
                            height={200}
                        />
                        <Image 
                            className={styles.animation}
                            src='/images/scan_animation.gif'
                            alt='scan animation'
                            width={600}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        <footer>
            <Footer/>
        </footer>
        </main>
    );
}
