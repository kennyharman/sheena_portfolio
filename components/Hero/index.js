"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  const buttonRef = useRef(null);
  const galleryItemsRef = useRef([]);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const tlRef = useRef(null);

  const images = [
    "/images/MISC_Remedify-Graphic2.png",
    "/images/midnight-thumbnail.png",
    "/images/venture_mockup.png",
    "/images/cans.png",
    "/images/gas-thumbnail.png",
    "/images/eden_mockup.jpg",
    "/images/portrait_thumbnail.png",
    "/images/space_second-thumbnail.png",
  ];

  useEffect(() => {
    galleryItemsRef.current = galleryItemsRef.current.slice(0, 8);

    const tl = gsap.timeline({ paused: true, repeat: -1, yoyo: true });

    tl.to(galleryItemsRef.current, {
      scale: 1.02,
      filter: "grayscale(0)",
      opacity: 0.20,
      ease: "sine.inOut",
      stagger: {
        each: 0.1,
        from: "random",
      }
    });

    const handleMouseMove = (e) => {
      if (!containerRef.current || !buttonRef.current) return;

      if (isHovering) {

        tl.pause();
        gsap.to(galleryItemsRef.current, {
          scale: 1.02,
          filter: "grayscale(0)",
          opacity: 0.2,
          duration: 0.5
        });
        return;
      }

      const buttonRect = buttonRef.current.getBoundingClientRect();
      const buttonCenter = {
        x: buttonRect.left + buttonRect.width / 2,
        y: buttonRect.top + buttonRect.height / 2,
      };

      const distance = Math.sqrt(
        Math.pow(e.clientX - buttonCenter.x, 2) +
          Math.pow(e.clientY - buttonCenter.y, 2)
      );

      const maxDistance = 500;
      const minDistance = 50;
      const clampedDist = Math.max(
        minDistance,
        Math.min(distance, maxDistance)
      );
      const normalized =
        (clampedDist - minDistance) / (maxDistance - minDistance);
      const duration = gsap.utils.interpolate(0.35, 2, normalized);


      gsap.to(tl, {
        timeScale: 1 / duration,
        duration: 0.1,
        ease: "power1.out",
      });
    };

    

    tl.play();
    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (!tlRef.current) return;

    const tl = tlRef.current;
    
    if (isHovering) {
      tl.pause();
      gsap.to(galleryItemsRef.current, {
        scale: 1.02,
        filter: "grayscale(0)",
        opacity: 0.2,
        duration: 0.5
      });
    } else {
      tl.play();
    }
  }, [isHovering]);

  return (
    <div ref={containerRef} className={styles.hero_container}>
      <div className={styles.gallery_background}>
        {images.map((url, index) => (
          <div
            key={index}
            ref={(el) => (galleryItemsRef.current[index] = el)}
            className={styles.gallery_item}
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}></div>
        ))}
      </div>

      <div className={styles.hero_content}>
        <img
          ref={logoRef}
          src="/images/logo_no-wordmark.svg" 
          className={styles.hero_logo}
          alt="Logo"
        />
        <Link href="/Projects">
          <button 
            ref={buttonRef}
            className={styles.hero_button}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            see projects
          </button>
        </Link>
      </div>
    </div>
  );
};