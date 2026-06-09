import React, { useState } from "react";
import { useLang } from "../LangContext";
import FadeInSection from "./FadeInSection";
import "../styles/Experience.css";

const jobs = [
  {
    tab:    { zh: "自由接案",  en: "Freelance"  },
    period: { zh: "2023 — 現今",    en: "2023 — PRESENT" },
    role:   { zh: "自由接案工程師",  en: "Freelance Engineer @" },
    company:{ zh: "",                en: "Independent" },
    desc: {
      zh: [
        "獨立承接 iOS App、Web 與 WordPress 開發，客戶涵蓋新創與中小企業",
        "負責從需求訪談、技術選型、設計到上線維護的完整流程",
        "服務包含 App 開發、網站架設、UI/UX 設計與端到端支援",
      ],
      en: [
        "Independent iOS App, Web, and WordPress projects for startups and SMBs",
        "Own the entire lifecycle — requirements, architecture, design, development, and maintenance",
        "Services span App development, website builds, UI/UX design, and end-to-end support",
      ],
    },
  },
  {
    tab:    { zh: "VORTEXECO",  en: "VORTEXECO"  },
    period: { zh: "2024 — 2025",     en: "2024 — 2025" },
    role:   { zh: "Web Developer (Fullstack) @", en: "Web Developer (Fullstack) @" },
    company:{ zh: "VORTEXECO SOLUTIONS", en: "VORTEXECO SOLUTIONS" },
    desc: {
      zh: [
        "負責公司 Web 平台的前後端開發",
        "參與系統架構設計與第三方 API 串接",
        "跨部門協作確保產品準時高品質交付",
      ],
      en: [
        "Full-stack development for the company's web platform",
        "Contributed to system architecture and third-party API integration",
        "Cross-functional collaboration to ensure on-time, high-quality delivery",
      ],
    },
  },
  {
    tab:    { zh: "Ball Ball",  en: "Ball Ball"  },
    period: { zh: "2023 — 2024",     en: "2023 — 2024" },
    role:   { zh: "Jr. iOS Developer @", en: "Jr. iOS Developer @" },
    company:{ zh: "Ball Ball Tech",   en: "Ball Ball Tech" },
    desc: {
      zh: [
        "開發與維護 iOS 應用程式功能",
        "使用 Swift / SwiftUI 實作新功能並解決問題",
        "參與 Code Review，提升程式碼品質與團隊標準",
      ],
      en: [
        "Developed and maintained iOS application features",
        "Implemented new features and resolved bugs in Swift / SwiftUI",
        "Participated in code reviews, raising team code quality standards",
      ],
    },
  },
  {
    tab:    { zh: "Tomofun",  en: "Tomofun"  },
    period: { zh: "2022 — 2023",     en: "2022 — 2023" },
    role:   { zh: "iOS Developer @", en: "iOS Developer @" },
    company:{ zh: "Tomofun",          en: "Tomofun" },
    desc: {
      zh: [
        "負責 iOS App 的功能開發與日常維護",
        "Side Project：HealthTracking App，結合 App Intents + Apple Intelligence + watchOS，即時追蹤遛狗路程、距離與天氣",
        "與產品、設計團隊緊密合作，快速迭代交付功能",
      ],
      en: [
        "Feature development and maintenance for the company's iOS applications",
        "Side Project: HealthTracking App — App Intents + Apple Intelligence + watchOS, tracking dog walks with real-time distance, route, and weather",
        "Close collaboration with product and design teams for rapid, iterative delivery",
      ],
    },
  },
];

const Experience = () => {
  const { lang } = useLang();
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section id="experience">
      <FadeInSection>
        <div className="section-header">
          <h2 className="section-title">
            <span className="slash">/</span>
            {lang === "zh" ? "工作經歷" : "experience"}
          </h2>
        </div>

        <div className="exp-layout">
          {/* Left tabs — exactly like Gazi's JobList */}
          <div className="exp-tabs">
            {jobs.map((j, i) => (
              <button
                key={i}
                className={`exp-tab${active === i ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                {j.tab[lang]}
              </button>
            ))}
          </div>

          {/* Right panel */}
          <div className="exp-panel">
            <div className="exp-role">
              {job.role[lang]}
              {job.company[lang] && (
                <span className="exp-company"> {job.company[lang]}</span>
              )}
            </div>
            <div className="exp-period">{job.period[lang]}</div>
            <ul className="exp-desc">
              {job.desc[lang].map((d, i) => (
                <FadeInSection key={i} delay={`${i * 80}ms`}>
                  <li>{d}</li>
                </FadeInSection>
              ))}
            </ul>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Experience;
