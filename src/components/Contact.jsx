import React from "react";
import { useLang } from "../LangContext";
import FadeInSection from "./FadeInSection";
import "../styles/Contact.css";

const Contact = () => {
  const { lang } = useLang();
  return (
    <section id="contact">
      <FadeInSection>
        <div className="section-header">
          <h2 className="section-title">
            <span className="slash">/</span>
            {lang === "zh" ? "聯絡我" : "get in touch"}
          </h2>
        </div>
        <div className="contact-body">
          <p className="contact-intro">
            {lang === "zh"
              ? <>目前<b>開放新專案合作</b>——無論是 iOS App、網站還是全端專案都歡迎。讓我們一起打造讓人印象深刻的數位體驗！</>
              : <>I'm currently <b>open to new projects</b> — iOS apps, websites, or full-stack. Let's collaborate and create remarkable digital experiences together!</>}
          </p>
          <a className="cta-btn" href="mailto:doris070714@gmail.com">
            {lang === "zh" ? "聯絡我！💌" : "say hi! 💌"}
          </a>

          <div className="contact-links">
            {[
              { label: "Email",     href: "mailto:doris070714@gmail.com",         text: "doris070714@gmail.com" },
              { label: "GitHub",    href: "https://github.com/Doris-WenZiYing",    text: "github.com/Doris-WenZiYing" },
              { label: "LinkedIn",  href: "https://linkedin.com/in/doris-wen-zi-ying", text: "linkedin.com/in/doris-wen-zi-ying" },
              { label: "Instagram", href: "http://instagram.com/dolores_dione",    text: "@dolores_dione" },
            ].map(r => (
              <div key={r.label} className="contact-row">
                <span className="contact-label">{r.label}</span>
                <a className="contact-value" href={r.href} target="_blank" rel="noreferrer">{r.text}</a>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Contact;
