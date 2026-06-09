import React, { useEffect, useState } from "react";
import { useLang } from "../LangContext";
import "../styles/SidebarNav.css";

const navItems = [
  { href: "#intro",      zh: "關於我",   en: "About"      },
  { href: "#services",   zh: "服務項目", en: "Services"   },
  { href: "#projects",   zh: "作品集",   en: "Projects"   },
  { href: "#experience", zh: "工作經歷", en: "Experience" },
  { href: "#contact",    zh: "聯絡我",   en: "Contact"    },
];

const SidebarNav = () => {
  const { lang, setLang } = useLang();
  const [activeId, setActiveId] = useState("intro");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-name">你的名字</div>
        <div className="sidebar-tagline">// Freelance Engineer</div>

        <div className="sidebar-typearea">
          <span className="type-prefix">{lang === "zh" ? "專精於" : "Specializing in"}</span>
          <Typewriter lang={lang} />
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link${activeId === item.href.slice(1) ? " active" : ""}`}
            >
              {lang === "zh" ? item.zh : item.en}
            </a>
          ))}
        </nav>

        <div className="lang-toggle">
          <button
            className={`lang-btn${lang === "zh" ? " active" : ""}`}
            onClick={() => setLang("zh")}
          >
            中文
          </button>
          <div className="lang-divider" />
          <button
            className={`lang-btn${lang === "en" ? " active" : ""}`}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="availability">
          <span className="dot" />
          {lang === "zh" ? "接受新專案合作" : "Available for new projects"}
        </div>
        <div className="socials">
          <a className="social-link" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a className="social-link" href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="social-link" href="mailto:your@email.com">Email</a>
        </div>
      </div>
    </aside>
  );
};

/* ── Typewriter ── */
const phrases = {
  zh: ["Web 全端開發", "WordPress 網站", "App 開發", "自由接案"],
  en: ["Web Development", "WordPress Sites", "App Development", "Freelancing"],
};

function Typewriter({ lang }) {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const list = phrases[lang];
    const phrase = list[phraseIdx % list.length];
    const speed = deleting ? 60 : 100;

    const t = setTimeout(() => {
      if (!deleting) {
        const next = phrase.slice(0, text.length + 1);
        setText(next);
        if (next === phrase) setTimeout(() => setDeleting(true), 2000);
      } else {
        const next = phrase.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setPhraseIdx((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, phraseIdx, lang]);

  // reset on lang change
  useEffect(() => {
    setText("");
    setDeleting(false);
  }, [lang]);

  return (
    <span className="typewriter-wrap">
      <span className="typewriter-text">{text}</span>
      <span className="typewriter-cursor" />
    </span>
  );
}

export default SidebarNav;
