"use client"
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from './WhiteSparrow.module.css'

const Hero = () => {
  const buttonRef = useRef(null);
  const galleryItemsRef = useRef([]);
  const containerRef = useRef(null);
  const logoRef = useRef(null); // Ref for the logo

  useEffect(() => {
    galleryItemsRef.current = galleryItemsRef.current.slice(0, 8);

    const tl = gsap.timeline({ paused: true, repeat: -1, yoyo: true });

    tl.to(galleryItemsRef.current, {
      scale: 1.02,
      ease: "sine.inOut",
      stagger: {
        each: 0.1,
        from: "random",
      },
    });

    // Add breathing effect for the logo
    const logoTl = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
    logoTl.to(logoRef.current, {
      scale: 1.1, // Slightly larger than the gallery items for a noticeable effect
      ease: "sine.inOut",
      duration: 0.5,
    });

    const handleMouseMove = (e) => {
      if (!containerRef.current || !buttonRef.current) return;

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
      const duration = gsap.utils.interpolate(0.25, 1, normalized);

      // Sync both gallery and logo animations with the same timing
      gsap.to(tl, {
        timeScale: 1 / duration,
        duration: 0.1,
        ease: "power1.out",
      });
      gsap.to(logoTl, {
        timeScale: 1 / duration,
        duration: 0.1,
        ease: "power1.out",
      });
    };

    tl.play();
    logoTl.play();
    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      tl.kill();
      logoTl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.hero_container}>
      <div className={styles.gallery_background}>
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (galleryItemsRef.current[index] = el)}
            className={`gallery_item ${index % 2 === 0 ? "even" : "odd"}`}
          ></div>
        ))}
      </div>

      <div className={styles.hero_content}>
        {/* LOGO with breathing effect */}
        <img
          ref={logoRef}
          src="/images/logo_no-wordmark.svg" // Placeholder image (100x100px)
          className={styles.hero_logo}
          alt="Logo"
        />
        <button ref={buttonRef} className={styles.hero_button}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;