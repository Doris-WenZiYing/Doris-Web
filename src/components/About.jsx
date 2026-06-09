import React from "react";
import { useLang } from "../LangContext";
import FadeInSection from "./FadeInSection";
import "../styles/About.css";

const skills = [
  "React / Next.js", "Node.js", "TypeScript",
  "WordPress", "WooCommerce", "ACF / PHP",
  "React Native", "Flutter", "PostgreSQL",
  "Firebase", "AWS / GCP", "Docker",
];

const About = () => {
  const { lang } = useLang();

  return (
    <section id="about">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">
            01 &nbsp;{lang === "zh" ? "關於我" : "About"}
          </span>
        </div>

        <div className="about-text">
          {lang === "zh" ? (
            <>
              <p>嗨，我是<strong>你的名字</strong>，一位專注於<strong>自由接案</strong>的全端工程師，目前開放來自台灣與海外的專案合作。我擅長將想法從零打造成可上線的產品，不管是 web app、WordPress 網站，還是 iOS / Android 應用程式。</p>
              <p>過去幾年，我合作的對象橫跨<strong>新創、設計公司與傳統產業</strong>，習慣以產品思維接案，不只把功能做出來，更在乎對使用者的影響與商業目標是否對齊。</p>
              <p>接案以外，我也持續關注產品設計與使用者體驗，相信好的工程師不只寫程式，更要理解<strong>為什麼要做、做給誰用</strong>。</p>
            </>
          ) : (
            <>
              <p>Hi, I'm <strong>Your Name</strong>, a freelance full-stack engineer open to projects from Taiwan and abroad. I specialize in taking ideas from zero to a shipped product — whether that's a web app, a WordPress site, or an iOS/Android application.</p>
              <p>Over the past few years, I've worked with <strong>startups, design agencies, and established businesses</strong>, approaching each project with a product mindset. I care about user impact and whether the work actually moves the needle.</p>
              <p>Outside of client work, I follow product design and UX closely. I believe great engineers don't just write code — they understand <strong>why they're building, and who they're building for</strong>.</p>
            </>
          )}
        </div>

        <ul className="skills-grid">
          {skills.map((s, i) => (
            <FadeInSection key={i} delay={`${i * 50}ms`}>
              <li className="skill-tag">{s}</li>
            </FadeInSection>
          ))}
        </ul>
      </FadeInSection>
    </section>
  );
};

export default About;
