import React from "react";
import { useLang } from "../LangContext";
import FadeInSection from "./FadeInSection";
import "../styles/Intro.css";

const Intro = () => {
  const { lang } = useLang();

  return (
    <section id="intro">
      <FadeInSection>
        <div className="intro-greeting">
          {lang === "zh" ? "嗨，我是" : "Hi, I'm"}
        </div>
        <h1 className="intro-name">你的名字</h1>
        <p className="intro-sub">
          {lang === "zh"
            ? "自由接案全端工程師，專注打造 Web、WordPress 與 App 產品"
            : "Freelance full-stack engineer building Web, WordPress & App products"}
        </p>
        <div className="intro-actions">
          <a className="intro-btn" href="#projects">
            {lang === "zh" ? "查看作品集" : "View my work"}
          </a>
          <a className="intro-btn intro-btn--ghost" href="#contact">
            {lang === "zh" ? "聯絡我" : "Get in touch"}
          </a>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Intro;
