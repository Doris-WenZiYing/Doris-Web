import React, { useEffect, useState } from "react";
import { useLang } from "../LangContext";
import FadeInSection from "./FadeInSection";
import "../styles/Intro.css";

const NAME = "Doris Wen";

function useTypewriter(text, speed = 90) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const tick = () => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i < text.length) setTimeout(tick, speed);
      else setDone(true);
    };
    const delay = setTimeout(tick, 600);
    return () => clearTimeout(delay);
  }, [text, speed]);

  return { displayed, done };
}

const Intro = () => {
  const { lang } = useLang();
  const { displayed, done } = useTypewriter(NAME);

  return (
    <section id="intro" style={{ paddingTop: 0 }}>
      <div className="intro-layout">
        {/* Left — decorative / photo placeholder */}
        <div className="intro-left">
          <div className="intro-avatar">
            <img
              src="/profile.png"
              alt="Doris Wen"
              style={{ display: "block" }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
            <div
              className="intro-avatar-placeholder"
              style={{ display: "none" }}
            >
              <AsciiDots />
            </div>
          </div>
        </div>

        {/* Right — text */}
        <FadeInSection>
          <div className="intro-right">
            <p className="intro-greeting">
              {lang === "zh" ? "hi, 我是" : "hi, i'm"}
            </p>

            <h1 className="intro-name">
              {displayed}
              <span
                className={`intro-cursor${done ? " intro-cursor--blink" : ""}`}
              >
                |
              </span>
            </h1>

            <p className="intro-desc">
              {lang === "zh"
                ? "iOS 開發者，同時也打造網站與全端產品。專注於乾淨的設計、流暢的功能與以使用者為核心的體驗。"
                : "iOS developer and freelance engineer. I build apps, websites, and full-stack products — clean design, seamless functionality, user-first."}
            </p>

            <a className="intro-btn" href="mailto:doris070714@gmail.com">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ marginRight: 8 }}
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {lang === "zh" ? "聯絡我！" : "say hi!"}
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

/* Simple dot grid decoration — like Gazi's ASCII portrait but minimal */
function AsciiDots() {
  const dots = [];
  const cols = 18,
    rows = 22;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const dist = Math.sqrt(
        Math.pow(c - cols / 2, 2) + Math.pow(r - rows / 1.5, 2),
      );
      const inShape = dist < cols * 0.52;
      if (!inShape) continue;
      const opacity = 0.08 + Math.random() * 0.35;
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * 14 + 7}
          cy={r * 14 + 7}
          r="1.8"
          fill="#c8b89a"
          opacity={opacity}
        />,
      );
    }
  }
  return (
    <svg viewBox={`0 0 ${18 * 14} ${22 * 14}`} width="100%" height="100%">
      {dots}
    </svg>
  );
}

export default Intro;
