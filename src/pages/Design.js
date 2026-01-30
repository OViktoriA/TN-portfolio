import { useState } from "react";

import frame from "../assets/frame.jpg";
import frame1 from "../assets/frame1.jpg";
import frame2 from "../assets/frame2.jpg";
import frame3 from "../assets/frame3.jpg";
import frame4 from "../assets/frame4.jpg";
import frame5 from "../assets/frame5.jpg";
import frame6 from "../assets/frame6.jpg";
import frame7 from "../assets/frame7.jpg";

import frame8 from "../assets/frame8.jpg";
import frame9 from "../assets/frame9.jpg";
import frame10 from "../assets/frame10.jpg";
import frame11 from "../assets/frame11.jpg";
import frame12 from "../assets/frame12.jpg";
import frame13 from "../assets/frame13.jpg";
import frame14 from "../assets/frame14.jpg";
import frame15 from "../assets/frame15.jpg";

import frame16 from "../assets/frame16.jpg";
import frame17 from "../assets/frame17.jpg";
import frame18 from "../assets/frame18.jpg";
import frame19 from "../assets/frame19.jpg";
import frame20 from "../assets/frame20.jpg";
import frame21 from "../assets/frame21.jpg";

import s7 from "../assets/s7.jpg";
import s71 from "../assets/s7 1.jpg";

import v3d from "../assets/РГЗ.jpg"

const images = [frame, frame1, frame2, frame3, frame4, frame5, frame6, frame7];
const galleryImages = [frame8, frame9, frame10, frame11, frame12, frame13, frame14, frame15];
const duoImages = [frame16, frame17, frame18, frame19, frame20, frame21];

export default function Design() {
    const [mainIndex, setMainIndex] = useState(0);
    const [galleryStart, setGalleryStart] = useState(0);
    const [duoStart, setDuoStart] = useState(0);

    const nextGallery = () => {
        setGalleryStart((galleryStart + 1) % galleryImages.length);
    };

    const prevGallery = () => {
        setGalleryStart((galleryStart - 1 + galleryImages.length) % galleryImages.length);
    };

    const visibleGallery = [
        galleryImages[galleryStart % galleryImages.length],
        galleryImages[(galleryStart + 1) % galleryImages.length],
        galleryImages[(galleryStart + 2) % galleryImages.length],
    ];

    const nextDuo = () => {
        setDuoStart((duoStart + 1) % duoImages.length);
    };

    const prevDuo = () => {
        setDuoStart((duoStart - 1 + duoImages.length) % duoImages.length);
    };

    const visibleDuo = [
        duoImages[duoStart % duoImages.length],
        duoImages[(duoStart + 1) % duoImages.length],
    ];

  return (
    <main className="image-viewer">

      {/* БЛОК 1 — одно большое изображение + миниатюры */}
      <div className="design-block">
        <img
          src={images[mainIndex]}
          alt="preview"
          className="viewer-image fade-in"
          key={mainIndex}
        />

        <div className="thumb-wrapper">
          <button
            className="thumb-btn"
            onClick={() => setMainIndex((mainIndex - 1 + images.length) % images.length)}
          >
            ◄
          </button>

          <div className="thumbnail-row">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className={`thumbnail ${i === mainIndex ? "active" : ""}`}
                onClick={() => setMainIndex(i)}
              />
            ))}
          </div>

          <button
            className="thumb-btn"
            onClick={() => setMainIndex((mainIndex + 1) % images.length)}
          >
            ►
          </button>
        </div>
      </div>

      {/* БЛОК 2 — три изображения + миниатюры */}
      <div className="design-block">
        <div className="gallery-row">
          {visibleGallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`gallery-${i}`}
              className="gallery-image fade-in"
            />
          ))}
        </div>

        <div className="thumb-wrapper">
          <button className="thumb-btn" onClick={prevGallery}>◄</button>

          <div className="thumbnail-row">
            {galleryImages.map((img, i) => {
              const active =
                i === galleryStart ||
                i === (galleryStart + 1) % galleryImages.length ||
                i === (galleryStart + 2) % galleryImages.length;

              return (
                <img
                  key={i}
                  src={img}
                  alt={`gallery-thumb-${i}`}
                  className={`thumbnail ${active ? "active" : ""}`}
                  onClick={() => setGalleryStart(i)}
                />
              );
            })}
          </div>

          <button className="thumb-btn" onClick={nextGallery}>►</button>
        </div>
      </div>

        {/* БЛОК 3 — две большие фотографии + миниатюры */}
        <div className="design-block">
            <div className="duo-row">
                {visibleDuo.map((img, i) => (
                <img
                    key={duoStart + i}
                    src={img}
                    alt={`duo-${duoStart + i}`}
                    className="duo-image fade-in"
                />
                ))}
            </div>

            <div className="thumb-wrapper">
                <button className="thumb-btn" onClick={prevDuo}>◄</button>

                <div className="thumbnail-row">
                {duoImages.map((img, i) => {
                    const active =
                    i === duoStart ||
                    i === (duoStart + 1) % duoImages.length;

                    return (
                    <img
                        key={i}
                        src={img}
                        alt={`duo-thumb-${i}`}
                        className={`thumbnail ${active ? "active" : ""}`}
                        onClick={() => setDuoStart(i)}
                    />
                    );
                })}
                </div>

                <button className="thumb-btn" onClick={nextDuo}>►</button>
            </div>
        </div>

        <div className="design-block">
          <img src={s7} className="s7"/>            
          <img src={s71} className="s7"/>
        </div>   

        <div className="design-block">
          <img src={v3d} className="v3d"/>            
        </div>  
    </main>
  );
}
