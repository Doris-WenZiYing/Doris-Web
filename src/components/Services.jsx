import React, { useState } from "react";
import { useLang } from "../LangContext";
import FadeInSection from "./FadeInSection";
import "../styles/Services.css";

const services = [
  {
    num: "01",
    title: { zh: "網站開發", en: "Website Development" },
    desc: {
      zh: "從個人作品集到進階商業平台，打造乾淨、響應式的網站，呈現你的品牌並吸引受眾。",
      en: "From portfolios to advanced business platforms — clean, responsive websites that reflect your brand.",
    },
    features: {
      zh: ["響應式 WordPress 設計", "速度與可用性優化", "可擴展的結構設計", "客製化功能開發"],
      en: ["Responsive WordPress design", "Optimized for speed & usability", "Scalable structure", "Custom features"],
    },
    pricing: {
      zh: [
        ["基本款", "品牌 / 作品集", "NT$ 15,000 起"],
        ["進階款", "小型商業 / 多頁面 + SEO", "NT$ 30,000 起"],
        ["電商方案", "商品 + 金流 + 會員", "NT$ 50,000 起"],
        ["客製平台", "AI / 高複雜度", "NT$ 100,000 起"],
      ],
      en: [
        ["Basic", "Branding / Portfolio", "from NT$15,000"],
        ["Intermediate", "Small business / SEO", "from NT$30,000"],
        ["Advanced", "E-commerce + payment", "from NT$50,000"],
        ["Custom", "AI / High complexity", "from NT$100,000"],
      ],
    },
    tags: ["WordPress", "React", "Next.js", "WooCommerce", "SEO"],
  },
  {
    num: "02",
    title: { zh: "UI/UX 設計", en: "UI/UX Design" },
    desc: {
      zh: "產品的好壞取決於使用者體驗。設計簡潔、美觀、直覺的介面，從 wireframe 到完整設計系統。",
      en: "A product is only as good as its UX. Simple, beautiful, intuitive interfaces — wireframes to design systems.",
    },
    features: {
      zh: ["使用者旅程規劃", "線框圖與互動原型", "視覺設計系統", "無障礙設計"],
      en: ["User journey mapping", "Wireframes & prototypes", "Visual design systems", "Accessibility"],
    },
    pricing: {
      zh: [["設計方案", "依範圍調整", "NT$ 20,000 起"]],
      en: [["Design Package", "Scope-dependent", "from NT$20,000"]],
    },
    tags: ["Figma", "Wireframe", "Prototype", "Design System"],
  },
  {
    num: "03",
    title: { zh: "App 開發", en: "App Development" },
    desc: {
      zh: "將你的想法打造成精緻的 iOS / Android App，從架構設計到 App Store 上架全程陪伴。",
      en: "Transform your idea into a polished iOS/Android app — architecture to App Store launch.",
    },
    features: {
      zh: ["SwiftUI / UIKit 原生開發", "整合 iOS 原生功能", "乾淨架構易於維護", "App Store 上架指導"],
      en: ["SwiftUI / UIKit native development", "Native iOS feature integration", "Clean architecture", "App Store guidance"],
    },
    pricing: {
      zh: [["App 方案", "依功能範圍", "NT$ 80,000 起"]],
      en: [["App Package", "Scope-dependent", "from NT$80,000"]],
    },
    tags: ["Swift", "SwiftUI", "UIKit", "React Native", "Firebase"],
  },
  {
    num: "04",
    title: { zh: "端到端支援", en: "End-to-End Support" },
    desc: {
      zh: "從第一次腦力激盪到上線後的持續優化，提供完整全週期陪伴，讓你的產品真正落地。",
      en: "From first brainstorm to post-launch optimization — full-cycle support to bring your product to life.",
    },
    features: {
      zh: ["需求訪談與諮詢", "開發與設計執行", "測試與部署", "持續維護優化"],
      en: ["Discovery & consultation", "Development & design", "Testing & deployment", "Ongoing maintenance"],
    },
    pricing: {
      zh: [["客製方案", "依需求報價", "聯繫討論"]],
      en: [["Custom Package", "Tailored to your needs", "Let's talk"]],
    },
    tags: ["Consultation", "Development", "Testing", "Maintenance"],
  },
];

const Services = () => {
  const { lang } = useLang();
  const [open, setOpen] = useState(null);

  return (
    <section id="services">
      <FadeInSection>
        <div className="section-header">
          <h2 className="section-title">
            <span className="slash">/</span>
            {lang === "zh" ? "服務 & 報價" : "services"}
          </h2>
        </div>

        <div className="svc-list">
          {services.map((s, i) => (
            <FadeInSection key={i} delay={`${i * 80}ms`}>
              <div
                className={`svc-row${open === i ? " svc-row--open" : ""}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {/* collapsed view */}
                <div className="svc-row-head">
                  <span className="svc-num">{s.num}</span>
                  <span className="svc-name">{s.title[lang]}</span>
                  <span className="svc-desc-short">{s.desc[lang]}</span>
                  <span className="svc-chevron">{open === i ? "−" : "+"}</span>
                </div>

                {/* expanded view */}
                {open === i && (
                  <div className="svc-detail" onClick={e => e.stopPropagation()}>
                    <div className="svc-detail-cols">
                      {/* Features */}
                      <div>
                        <p className="svc-detail-label">
                          {lang === "zh" ? "包含內容" : "What's included"}
                        </p>
                        <ul className="svc-features">
                          {s.features[lang].map((f, j) => (
                            <li key={j}>{f}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Pricing */}
                      <div>
                        <p className="svc-detail-label">
                          {lang === "zh" ? "報價參考" : "Pricing"}
                        </p>
                        <div className="svc-pricing">
                          {s.pricing[lang].map(([tier, sub, price], j) => (
                            <div key={j} className="svc-price-row">
                              <div>
                                <span className="price-tier">{tier}</span>
                                <span className="price-sub"> — {sub}</span>
                              </div>
                              <span className="price-val">{price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="svc-tags">
                      {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                )}
              </div>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Services;
