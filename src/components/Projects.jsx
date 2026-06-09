import React, { useState } from "react";
import { useLang } from "../LangContext";
import FadeInSection from "./FadeInSection";
import "../styles/Projects.css";

const spotlight = [
  // ── WEB ──
  {
    type: "web",
    name: { zh: "COROS 品牌官網", en: "COROS — Sports Watch Brand" },
    desc: {
      zh: "COROS 運動手錶德國官網，響應式設計，呈現產品細節與品牌形象。",
      en: "Official German website for COROS sports watches — responsive design showcasing product details and brand identity.",
    },
    tech: "HTML · CSS · JavaScript · Responsive Design",
    github: "",
    live: "https://coros.de/en/home/",
    bg: "/projects/coros.png",
  },
  {
    type: "web",
    name: { zh: "GE Vernova 企業官網", en: "GE Vernova — Corporate Website" },
    desc: {
      zh: "GE 能源部門 GE Vernova 的全球企業官網，涵蓋能源解決方案、產品線與企業資訊。",
      en: "Global corporate website for GE Vernova, GE's energy division — energy solutions, product lines, and investor relations.",
    },
    tech: "React · Next.js · CMS Integration",
    github: "",
    live: "https://www.gevernova.com/",
    bg: "/projects/gevernova.png",
  },
  {
    type: "web",
    name: { zh: "Right Condos 房地產網站", en: "Right Condos — Real Estate" },
    desc: {
      zh: "加拿大房地產開發商 Right Condos 的官方網站，呈現建案資訊、戶型與購屋流程。",
      en: "Official website for Canadian real estate developer Right Condos — project info, floor plans, and purchasing process.",
    },
    tech: "HTML · CSS · JavaScript · GSAP",
    github: "",
    live: "https://rightcondos.com/",
    bg: "/projects/rightcondos.png",
  },
  {
    type: "web",
    name: { zh: "Vestas 風力能源官網", en: "Vestas — Wind Energy Leader" },
    desc: {
      zh: "全球最大風力發電公司 Vestas 的官網，涵蓋產品、永續發展與全球解決方案。",
      en: "Website for Vestas, world's leading wind energy company — turbine products, sustainability initiatives, and global solutions.",
    },
    tech: "React · TypeScript · Headless CMS",
    github: "",
    live: "https://www.vestas.com/en",
    bg: "/projects/vestas.png",
  },
  {
    type: "wp",
    name: { zh: "Uninnnn — WordPress 品牌網站", en: "Uninnnn — WordPress Brand Site" },
    desc: {
      zh: "以 WordPress 客製化打造的品牌網站，呈現產品與服務，整合響應式設計與 SEO 優化。",
      en: "Custom WordPress brand website — responsive design, SEO optimization, and tailored product/service presentation.",
    },
    tech: "WordPress · ACF · Custom Theme · SEO",
    github: "",
    live: "https://www.uninnnn.com/",
    bg: "/projects/uninnnn.png",
  },
  {
    type: "web",
    name: { zh: "iOS Club 台中逢甲大學", en: "iOS Club — Feng Chia University" },
    desc: {
      zh: "逢甲大學 iOS 社的官方網站，介紹社團活動、課程與招募資訊。",
      en: "Official website for the iOS Club at Feng Chia University — club activities, curriculum, and recruitment.",
    },
    tech: "HTML · CSS · JavaScript",
    github: "",
    live: "https://iosclub.tw/",
    bg: "/projects/iosclub.png",
  },
  {
    type: "web",
    name: { zh: "ScienceWeb — 科學社活動平台", en: "ScienceWeb — Science Club Platform" },
    desc: {
      zh: "接案專案，為學生科學會打造活動報名、會員管理與課表安排系統。",
      en: "Freelance project — event registration, membership management, and schedule system for a student science club.",
    },
    tech: "React · Node.js · PostgreSQL",
    github: "https://github.com/Doris-WenZiYing/ScienceWeb",
    live: "",
    bg: "/projects/scienceweb.png",
  },
  {
    type: "web",
    name: { zh: "Random Quote Generator", en: "Random Quote Generator" },
    desc: {
      zh: "前端 JavaScript 小專案，串接 Quotable API 每次顯示一句隨機名言。",
      en: "A front-end JavaScript project that fetches and displays random quotes using the Quotable API.",
    },
    tech: "JavaScript · HTML · Quotable API",
    github: "https://github.com/Doris-WenZiYing/Quote-Generator",
    live: "",
    bg: "/projects/random-quote-generator.png",
  },
  {
    type: "web",
    name: { zh: "COROS 官網", en: "COROS Website" },
    desc: {
      zh: "運動手錶品牌 COROS 的德國官方網站，前後端完整開發，呈現產品線與品牌故事。",
      en: "Official German website for COROS, a sports watch brand — full-stack development covering product showcase and brand storytelling.",
    },
    tech: "Full-Stack · HTML · CSS · JavaScript",
    github: "",
    live: "https://coros.de/en/home/",
    bg: "/projects/coros.png",
  },
  {
    type: "web",
    name: { zh: "GE Vernova 官網", en: "GE Vernova Website" },
    desc: {
      zh: "全球能源科技公司 GE Vernova 的企業官網開發，大型企業級前後端專案。",
      en: "Corporate website for GE Vernova, a global energy technology company — enterprise-scale full-stack development.",
    },
    tech: "Full-Stack · React · Node.js",
    github: "",
    live: "https://www.gevernova.com/",
    bg: "/projects/gevernova.png",
  },
  {
    type: "web",
    name: { zh: "Right Condos 房產平台", en: "Right Condos" },
    desc: {
      zh: "加拿大房地產預售屋平台，提供物件瀏覽、篩選與詢問功能，完整前後端開發。",
      en: "Canadian pre-construction condo platform with property listings, filtering, and inquiry flow — full-stack development.",
    },
    tech: "Full-Stack · HTML · CSS · JavaScript",
    github: "",
    live: "https://rightcondos.com/",
    bg: "/projects/rightcondos.png",
  },
  {
    type: "web",
    name: { zh: "Vestas 風電官網", en: "Vestas Website" },
    desc: {
      zh: "全球風力能源領導品牌 Vestas 的企業官網，跨國大型前後端開發專案。",
      en: "Corporate website for Vestas, a global leader in wind energy — large-scale international full-stack project.",
    },
    tech: "Full-Stack · React · Node.js",
    github: "",
    live: "https://www.vestas.com/en",
    bg: "/projects/vestas.png",
  },
  {
    type: "wp",
    name: { zh: "Uninnnn 品牌官網", en: "Uninnnn Brand Site" },
    desc: {
      zh: "設計生活風格品牌的 WordPress 官網，客製化主題設計，呈現品牌個性與產品內容。",
      en: "WordPress site for a design lifestyle brand — custom theme development with a focus on brand identity and visual storytelling.",
    },
    tech: "WordPress · Custom Theme · PHP · ACF",
    github: "",
    live: "https://www.uninnnn.com/",
    bg: "/projects/uninnnn.png",
  },
  // ── APP ──
  {
    type: "app",
    name: { zh: "SchoolBeacon — 校園 AR 導覽", en: "SchoolBeacon — Campus AR Guide" },
    desc: {
      zh: "逢甲大學校園 AR 社團環境導覽 App，用擴增實境帶領使用者探索校園景點與社團資訊。",
      en: "Augmented reality campus tour app for Feng Chia University — explore landmarks and club info in AR.",
    },
    tech: "Swift · ARKit · CoreLocation",
    github: "https://github.com/Doris-WenZiYing/SchoolBeacon",
    live: "",
    bg: "/projects/schoolbeacon.png",
  },
  {
    type: "app",
    name: { zh: "HealthTracking App", en: "HealthTracking App" },
    desc: {
      zh: "Tomofun 在職期間的 Side Project。結合 Apple Intelligence、watchOS 實時追蹤遛狗狀況，記錄距離、路程與天氣資訊。",
      en: "Side project built at Tomofun. Combines App Intents + Apple Intelligence with watchOS to track dog walks — distance, route, and weather in real time.",
    },
    tech: "Swift · SwiftUI · watchOS · App Intents · HealthKit",
    github: "https://github.com/Doris-WenZiYing/HealthTracking",
    live: "",
    bg: "/projects/healthtracking.png",
  },
  {
    type: "app",
    name: { zh: "HogwartsToolkit", en: "HogwartsToolkit" },
    desc: {
      zh: "魔法主題 iOS App，探索哈利波特的學院、書籍與角色，支援搜尋、收藏與詳細頁面。以 UIKit + Combine + MVVM + Diffable Data Source 打造。",
      en: "Enchanting iOS app for the wizarding world — browse Houses, Books, Characters with search and favorites. Built with UIKit, Combine, MVVM, Diffable Data Sources, and async/await.",
    },
    tech: "Swift · UIKit · Combine · MVVM · Diffable Data Sources",
    github: "https://github.com/Doris-WenZiYing/HogwartsToolkit",
    live: "",
    bg: "/projects/hogwarts.png",
  },
  {
    type: "app",
    name: { zh: "Rickipedia", en: "Rickipedia" },
    desc: {
      zh: "使用 Rick and Morty API 的 iOS App，瀏覽角色、地點與集數，支援篩選與排序。以 SwiftUI + MVVM 架構開發。",
      en: "iOS app using the Rick and Morty API — browse characters, locations, and episodes with filtering and sorting. Built with SwiftUI and MVVM.",
    },
    tech: "Swift · SwiftUI · MVVM · REST API",
    github: "https://github.com/Doris-WenZiYing/Rickipedia",
    live: "",
    bg: "/projects/rickipedia.png",
  },
  {
    type: "app",
    name: { zh: "紡織品影像辨識 ML App", en: "Textile Image Recognition ML App" },
    desc: {
      zh: "結合機器學習的紡織品影像辨識應用程式，透過 CoreML 模型分析布料種類與特徵。",
      en: "Machine learning app for textile image recognition — CoreML model classifies fabric types and characteristics from photos.",
    },
    tech: "Swift · CoreML · Vision · Create ML",
    github: "https://github.com/Doris-WenZiYing/GraduationProject2023",
    live: "",
    bg: "/projects/textile-ml.png",
  },
];

const badgeLabel = { web: "Web", wp: "WordPress", app: "iOS / App" };
const filters = ["all", "web", "wp", "app"];

const Projects = () => {
  const { lang } = useLang();
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? spotlight : spotlight.filter(p => p.type === filter);
  const safeActive = Math.min(active, filtered.length - 1);
  const proj = filtered[safeActive];

  const handleFilter = (f) => { setFilter(f); setActive(0); };
  const prev = () => setActive(i => (i - 1 + filtered.length) % filtered.length);
  const next = () => setActive(i => (i + 1) % filtered.length);

  return (
    <section id="projects">
      <FadeInSection>
        <div className="section-header">
          <h2 className="section-title">
            <span className="slash">/</span>
            {lang === "zh" ? "作品集" : "projects"}
          </h2>
          <a className="explore-link" href="https://github.com/Doris-WenZiYing" target="_blank" rel="noreferrer">
            {lang === "zh" ? "查看全部 →" : "view all →"}
          </a>
        </div>

        {/* Filter tabs */}
        <div className="filter-tabs">
          {filters.map(f => (
            <button key={f} className={`filter-btn${filter === f ? " active" : ""}`} onClick={() => handleFilter(f)}>
              {f === "all" ? (lang === "zh" ? "全部" : "all") :
               f === "web" ? "Web" :
               f === "wp"  ? "WordPress" :
               (lang === "zh" ? "iOS / App" : "iOS / App")}
            </button>
          ))}
        </div>

        {/* Spotlight carousel */}
        <div className="spotlight-wrap">
          <button className="carousel-arrow carousel-arrow--prev" onClick={prev}>‹</button>

          <div
            className="spotlight-card"
            style={proj.bg ? { backgroundImage: `url(${proj.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
          >
            {!proj.bg && <div className="spotlight-bg-placeholder" />}
            <div className="spotlight-overlay" />
            <div className="spotlight-content">
              <span className={`spotlight-badge badge-${proj.type}`}>{badgeLabel[proj.type]}</span>
              <h3 className="spotlight-name">{proj.name[lang]}</h3>
              <p className="spotlight-desc">{proj.desc[lang]}</p>
              <p className="spotlight-tech">{proj.tech}</p>
              <div className="spotlight-links">
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noreferrer" className="spot-link" title="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  </a>
                )}
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noreferrer" className="spot-link" title="Live">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          <button className="carousel-arrow carousel-arrow--next" onClick={next}>›</button>
        </div>

        {/* Dots */}
        <div className="carousel-dots">
          {filtered.map((_, i) => (
            <button key={i} className={`dot${i === safeActive ? " dot--active" : ""}`} onClick={() => setActive(i)} />
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects;
