import React from "react";
import { useLang } from "../LangContext";
import FadeInSection from "./FadeInSection";
import "../styles/Experience.css";

const jobs = [
  {
    period: "2022 — Now",
    role: "Freelance Full-Stack Engineer",
    company: { zh: "自由接案 · 台灣 & 遠端", en: "Independent · Taiwan & Remote" },
    desc: {
      zh: "獨立承接 web、WordPress 與 app 開發專案，客戶橫跨新創、電商與傳統產業。負責從需求訪談、技術選型、開發到上線維護的完整流程。",
      en: "Independent contractor for web, WordPress, and app projects across startups, e-commerce, and traditional industries. Own the entire cycle from requirements and tech selection to deployment and maintenance.",
    },
  },
  {
    period: "2020 — 2022",
    role: "Frontend Engineer",
    company: { zh: "某公司名稱 · 台北", en: "Company Name · Taipei" },
    desc: {
      zh: "負責公司核心產品的前端開發，導入 React 重構舊有 jQuery 架構，頁面載入速度提升 40%。",
      en: "Led frontend development on the company's core product. Migrated from a legacy jQuery codebase to React, cutting page load time by 40%.",
    },
  },
  {
    period: "2018 — 2020",
    role: "Junior Web Developer",
    company: { zh: "某公司名稱 · 台北", en: "Company Name · Taipei" },
    desc: {
      zh: "參與多個電商網站的開發與維護，熟悉 WordPress 客製化與 PHP 後端開發。",
      en: "Contributed to the development and maintenance of multiple e-commerce sites. Gained deep familiarity with WordPress customization and PHP backend work.",
    },
  },
];

const Experience = () => {
  const { lang } = useLang();

  return (
    <section id="experience">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">
            04 &nbsp;{lang === "zh" ? "工作經歷" : "Experience"}
          </span>
        </div>

        <div className="exp-list">
          {jobs.map((job, i) => (
            <FadeInSection key={i} delay={`${i * 100}ms`}>
              <div className="exp-item">
                <div className="exp-period">{job.period}</div>
                <div>
                  <div className="exp-role">{job.role}</div>
                  <div className="exp-company">{job.company[lang]}</div>
                  <div className="exp-desc">{job.desc[lang]}</div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Experience;
