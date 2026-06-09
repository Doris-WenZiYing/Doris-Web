import React from "react";
import { useLang } from "../LangContext";
import FadeInSection from "./FadeInSection";
import "../styles/Projects.css";

const services = [
  {
    icon: "⚡",
    title: { zh: "Web 全端開發", en: "Web Full-Stack" },
    desc: {
      zh: "從 API 設計到前端 UI，提供完整 web application 開發。擅長 React / Next.js 搭配 Node.js，注重效能與可維護性。",
      en: "End-to-end web application development, from API architecture to frontend UI. React / Next.js with Node.js backends, focused on performance and maintainability.",
    },
    tags: ["React", "Next.js", "Node.js", "REST API", "PostgreSQL"],
  },
  {
    icon: "🎨",
    title: { zh: "WordPress 網站架設", en: "WordPress Development" },
    desc: {
      zh: "企業官網、電商平台、部落格一站搞定。客製化主題開發，搭配 WooCommerce、ACF，打造符合品牌需求的專屬網站。",
      en: "Corporate sites, e-commerce stores, and blogs. Custom theme development with WooCommerce and ACF, tailored to your brand's exact needs.",
    },
    tags: ["WordPress", "WooCommerce", "ACF", "PHP", "Custom Theme"],
  },
  {
    icon: "📱",
    title: { zh: "App 開發", en: "App Development" },
    desc: {
      zh: "iOS 與 Android 雙平台，使用 React Native 或 Flutter，從 MVP 到正式上架，協助你快速驗證產品想法。",
      en: "Cross-platform iOS and Android development. React Native or Flutter, from MVP to App Store launch — validate your idea fast without sacrificing quality.",
    },
    tags: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
  },
];

const projects = [
  {
    type: "web",
    year: "2024",
    name: { zh: "訂單管理 SaaS 平台", en: "Order Management SaaS" },
    desc: {
      zh: "幫助中小企業管理客戶訂單與庫存的 SaaS 平台，上線三個月內服務超過 200 家門市。",
      en: "A SaaS platform for SMB order and inventory management. Reached 200+ stores within three months of launch.",
    },
    tags: ["Next.js", "Prisma", "Stripe"],
    link: "#",
  },
  {
    type: "wp",
    year: "2024",
    name: { zh: "品牌官網 + 線上電商", en: "Brand Site + E-commerce" },
    desc: {
      zh: "為台灣本土美妝品牌打造官網與線上商店，整合 ECPay 金物流，月流量成長 3 倍。",
      en: "Brand site and online store for a Taiwanese cosmetics brand with ECPay integration. Monthly traffic grew 3x post-launch.",
    },
    tags: ["WordPress", "WooCommerce", "ECPay"],
    link: "#",
  },
  {
    type: "app",
    year: "2023",
    name: { zh: "健身追蹤 App", en: "Fitness Tracker App" },
    desc: {
      zh: "個人健身紀錄 App，支援 iOS / Android，含自訂課表、進度圖表，App Store 評分 4.7。",
      en: "Personal fitness logging app for iOS and Android, with custom workout plans and progress charts. Rated 4.7 on the App Store.",
    },
    tags: ["React Native", "Firebase", "Expo"],
    link: "#",
  },
  {
    type: "web",
    year: "2023",
    name: { zh: "API Mock CLI 工具", en: "API Mock CLI Tool" },
    desc: {
      zh: "讓開發者一行指令快速產生 mock API server，GitHub 上獲得 400+ stars。",
      en: "Spin up mock API servers with a single command. 400+ stars on GitHub.",
    },
    tags: ["Node.js", "CLI", "Open Source"],
    link: "#",
  },
];

const badgeLabel = { web: "Web App", wp: "WordPress", app: "App" };

const Projects = () => {
  const { lang } = useLang();

  return (
    <>
      {/* SERVICES */}
      <section id="services">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">
              02 &nbsp;{lang === "zh" ? "服務項目" : "Services"}
            </span>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <FadeInSection key={i} delay={`${i * 100}ms`}>
                <div className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <div>
                    <div className="service-title">{s.title[lang]}</div>
                    <div className="service-desc">{s.desc[lang]}</div>
                    <div className="tag-row">
                      {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">
              03 &nbsp;{lang === "zh" ? "作品集" : "Projects"}
            </span>
          </div>
          <div className="projects-list">
            {projects.map((p, i) => (
              <FadeInSection key={i} delay={`${i * 80}ms`}>
                <a className="project-item" href={p.link}>
                  <div>
                    <div className="project-meta">
                      <span className={`badge badge-${p.type}`}>{badgeLabel[p.type]}</span>
                      {p.year}
                    </div>
                    <div className="project-name">{p.name[lang]}</div>
                    <div className="project-desc">{p.desc[lang]}</div>
                    <div className="tag-row">
                      {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                  <div className="project-arrow">↗</div>
                </a>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </section>
    </>
  );
};

export default Projects;
