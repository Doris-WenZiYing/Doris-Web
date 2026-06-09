import React from "react";
import { useLang } from "../LangContext";
import FadeInSection from "./FadeInSection";
import "../styles/About.css";

const skills = [
  "SwiftUI", "UIKit", "Kotlin",
  "React / Next.js", "Node.js", "TypeScript",
  "PHP", "Python"
];

const About = () => {
  const { lang } = useLang();
  return (
    <section id="about">
      <FadeInSection>
        <div className="section-header">
          <h2 className="section-title">
            <span className="slash">/</span>
            {lang === "zh" ? "關於我" : "about me"}
          </h2>
        </div>

        <div className="about-layout">
          <div className="about-left">
            {lang === "zh" ? (
              <>
                <p>我是 <b>Doris</b>，Apple 產品愛好者、iOS 開發者，熱衷於打造讓人眼睛一亮的數位體驗。專長是 <b>App 開發</b>，同時也有扎實的網站開發能力，能夠提供完整的數位解決方案。</p>
                <p>專注於乾淨的設計、流暢的功能與以使用者為核心的體驗，希望做出來的產品都能留下深刻印象。</p>
                <p>目前使用的技術：</p>
              </>
            ) : (
              <>
                <p>I'm an <b>Apple product enthusiast, iOS developer</b>, and computer science student passionate about building digital experiences that stand out. While my specialty lies in <b>App Development</b>, I also have strong experience in Website Development, enabling me to deliver complete digital solutions.</p>
                <p>With a focus on clean design, seamless functionality, and user-first experiences, I strive to craft products that make a lasting impression.</p>
                <p>Here are some technologies I've been working with:</p>
              </>
            )}

            <ul className="skills-grid">
              {skills.map((s, i) => (
                <FadeInSection key={i} delay={`${i * 50}ms`}>
                  <li className="skill-tag">▹ {s}</li>
                </FadeInSection>
              ))}
            </ul>
          </div>

          <div className="about-photo-wrap">
            <div className="about-photo">
              <img src="/profile.jpg" alt="Doris Wen"
                onError={e => { e.currentTarget.style.display = "none"; e.currentTarget.nextElementSibling.style.display = "flex"; }} />
              <div className="photo-placeholder" style={{ display: "none" }}>
                <span>📸</span>
                <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>放上你的照片</span>
                <code>public/profile.jpg</code>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;
