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
          <span className="section-title">
            05 &nbsp;{lang === "zh" ? "聯絡我" : "Contact"}
          </span>
        </div>

        <p className="contact-intro">
          {lang === "zh" ? (
            <>目前<strong>開放新專案合作</strong>，不管是短期需求還是長期夥伴關係都歡迎聊聊。喜歡先了解彼此再決定是否合作，所以別猶豫，<strong>直接寄信給我</strong>吧。</>
          ) : (
            <>I'm currently <strong>open to new projects</strong> — short-term engagements or longer partnerships, both welcome. I like getting to know clients before we commit, so don't hesitate to <strong>reach out directly</strong>.</>
          )}
        </p>

        <a className="cta-btn" href="mailto:your@email.com">
          ✉ &nbsp;{lang === "zh" ? "寄信給我 →" : "Say Hello →"}
        </a>

        <div className="contact-links">
          {[
            { label: "Email",    href: "mailto:your@email.com", text: "your@email.com" },
            { label: "GitHub",   href: "https://github.com/",    text: "github.com/yourname" },
            { label: "LinkedIn", href: "https://linkedin.com/",  text: "linkedin.com/in/yourname" },
          ].map((row) => (
            <div key={row.label} className="contact-row">
              <span className="contact-label">{row.label}</span>
              <a className="contact-value" href={row.href} target="_blank" rel="noreferrer">{row.text}</a>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Contact;
