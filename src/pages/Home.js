import React from "react";
import { useLocation } from "react-router-dom";


import photoImg from "../assets/foto3.JPG";
import photoImg1 from "../assets/foto5.jpg";
import photoImg2 from "../assets/foto10.jpg";
import photoImg3 from "../assets/foto25.jpg";
import designImg from "../assets/Рисунок.png";
import videoSrc from "../assets/video.mp4";
import devImg from "../assets/Снимок экрана 2025-12-07 235418.png";

// Добавь в Home.js (после импортов)
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const blocks = document.querySelectorAll(".block");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    blocks.forEach(block => observer.observe(block));
    }, []);

    
    const { hash } = useLocation(); 
    useEffect(() => { 
      if (hash === "#contacts") { 
        const el = document.getElementById("contacts"); 
        if (el) { 
          el.scrollIntoView({ behavior: "smooth" }); 
        } 
      } 
    }, [hash]);

  return (
    <>
      <section className="top-banner">
        <div className="banner-line">
          <h1>Графический и Web-дизайнер</h1>
        </div>
      </section>



      {/* Основной контент */}
      <main className="main">
        <section className="showcase" id="works">

          {/* ФОТО */}
          <div className="block photo">
            <div className="photo-grid">
              <img src={photoImg} alt="photo-1" />
              <img src={photoImg1} alt="photo-2" />
              <img src={photoImg2} alt="photo-3" />
              <img src={photoImg3} alt="photo-4" />
            </div>

            <div className="b-bottom">
              <h2>📸 Фотография 📸</h2>
              <p>Имею базовый опыт работы с кадром, светом и композицией. 
                Уверенно чувствую настроение сцены и умею передать его 
                через уличные портреты и серии из поездок. 
                Использую Photoshop для простой ретуши и цветокоррекции.</p>
            </div>
          </div>

          {/* ВИДЕО */}
          <div className="block video">
            <div className="b-top">
              <video controls src={videoSrc}></video>
            </div>
            <div className="b-bottom">
              <h2>🎬 Видеомонтаж 🎬</h2>
              <p>Монтирую короткие ролики с акцентом на ритм и атмосферу. 
                Использую доступные инструменты вроде Clipchamp, DaVinci Resolve и After Effects 
                для простых эффектов и переходов. Учусь передавать настроение через динамику и свет.</p>
            </div>
          </div>

          {/* ДИЗАЙН */}
          <div className="block design">
            <div className="b-top">
              <img src={designImg} alt="design-example" />
            </div>
            <div className="b-bottom">
              <h2>🎨 Дизайн 🎨</h2>
              <p>Осваиваю минималистичный подход к интерфейсам и графике. 
                Работаю с InDesign и CorelDRAW на базовом уровне, 
                стремлюсь к чистому визуальному стилю и аккуратной композиции. 
                Постепенно развиваю уверенность в оформлении и типографике.</p>
            </div>
          </div>

          {/* РАЗРАБОТКА */}
          <div className="block dev">
            <div className="b-top">
              <img src={devImg} alt="dev-example" />
            </div>
            <div className="b-bottom">
              <h2>🎮 Разработка 🎮</h2>
              <p>Имею начальные навыки в создании сайтов и работе с Unity. 
                Знаком с основами C# и Visual Studio, экспериментирую с простыми сценами и интерфейсами. 
                Постепенно осваиваю интерактивные элементы и визуальные эффекты.</p>
            </div>
          </div>

        </section>
      </main>

      {/* Контакты */}
      <section className="contact-banner" id="contacts">
        <h2>контакты</h2>

        <div className="contact-list">
          <div className="contact-item">
            <span className="icon">📞</span>
            <span>+7 (913) 719‑93‑53</span>
          </div>

          <div className="contact-item">
            <span className="icon">📲</span>
            <span>@Vik1tori3a</span>
          </div>

          <div className="contact-item">
            <span className="icon">📧</span>
            <span>vikaost02@gmail.com</span>
          </div>

          <a
            className="contact-btn"
            href="https://t.me/Vik1tori3a"
            target="_blank"
            rel="noopener noreferrer"
          >
            написать мне
          </a>
        </div>


      </section>


      {/* Футер */}
      <footer className="ftr">
        © ToriNicks · портфолио · {new Date().getFullYear()}
      </footer>
    </>
  );
}
