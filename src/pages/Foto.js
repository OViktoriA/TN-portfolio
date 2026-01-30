import React from "react";
import { useState, useEffect } from "react";


import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.JPG";
import foto3 from "../assets/foto3.JPG";
import foto4 from "../assets/foto4.jpg";
import foto5 from "../assets/foto5.jpg";
import foto6 from "../assets/foto6.jpg";

import foto7 from "../assets/foto7.jpg";
import foto8 from "../assets/foto8.jpg";
import foto9 from "../assets/foto9.jpg";
import foto10 from "../assets/foto10.jpg";
import foto11 from "../assets/foto11.jpg";

import foto12 from "../assets/foto12.jpg";
import foto13 from "../assets/foto13.jpg";
import foto14 from "../assets/foto14.JPG";
import foto15 from "../assets/foto15.jpg";
import foto16 from "../assets/foto16.jpg";
import foto17 from "../assets/foto17.jpg";
import foto18 from "../assets/foto18.jpg";
import foto19 from "../assets/foto19.jpg";
import foto20 from "../assets/foto20.jpg";
import foto21 from "../assets/foto21.jpg";
import foto22 from "../assets/foto22.jpg";
import foto23 from "../assets/foto23.jpg";

import foto24 from "../assets/foto24.jpg";
import foto25 from "../assets/foto25.jpg";
import foto26 from "../assets/foto26.jpg";
import foto27 from "../assets/foto27.jpg";
import foto28 from "../assets/foto28.jpg";

import foto29 from "../assets/foto29.jpg";
import foto30 from "../assets/foto30.JPG";
import foto31 from "../assets/foto31.JPG";
import foto32 from "../assets/foto32.JPG";
import foto33 from "../assets/foto33.JPG";
import foto34 from "../assets/foto34.JPG";

import foto35 from "../assets/foto35.JPG";
import foto36 from "../assets/foto36.JPG";
import foto37 from "../assets/foto37.JPG";
import foto38 from "../assets/foto38.JPG";
import foto39 from "../assets/foto39.JPG";
import foto40 from "../assets/foto40.JPG";


export default function Foto() {

    const allPhotos = [
    foto1, foto2, foto3, foto4, foto5, foto6,
    foto7, foto8, foto9, foto10, foto11,
    foto12, foto13, foto14, foto15, foto16, foto17,
    foto18, foto19, foto20, foto21, foto22, foto23,
    foto24, foto25, foto26, foto27, foto28,
    foto29, foto30, foto31, foto32, foto33, foto34,
    foto35, foto36, foto37, foto38, foto39, foto40
    ];

    const [viewerIndex, setViewerIndex] = useState(null);

    // Закрытие по ESC
    useEffect(() => {
    const handleKey = (e) => {
        if (e.key === "Escape") setViewerIndex(null);
        if (e.key === "ArrowRight") nextPhoto();
        if (e.key === "ArrowLeft") prevPhoto();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    }, [viewerIndex]);

    const nextPhoto = () => {
    setViewerIndex((prev) => (prev + 1) % allPhotos.length);
    };

    const prevPhoto = () => {
    setViewerIndex((prev) =>
        prev === 0 ? allPhotos.length - 1 : prev - 1
    );
    };

  return (
    <>
        {viewerIndex !== null && (
    <div className="viewer" onClick={() => setViewerIndex(null)}>
        <img
        src={allPhotos[viewerIndex]}
        className="viewer-img"
        alt="full"
        onClick={(e) => e.stopPropagation()}
        />

        <button
        className="viewer-btn left"
        onClick={(e) => {
            e.stopPropagation();
            prevPhoto();
        }}
        >
        ❮
        </button>

        <button
        className="viewer-btn right"
        onClick={(e) => {
            e.stopPropagation();
            nextPhoto();
        }}
        >
        ❯
        </button>

    </div>
    )}
  
    <main className="foto-page">
      <div className="foto-block">

        {/* Блок 1 — фото 1–6 */}
        <div className="layout">
          <div className="col-left">
            <img src={foto1} className="img tall" alt="1" onClick={() => setViewerIndex(0)}/>
          </div>

          <div className="col-right">
            <div className="row">
              <img src={foto2} className="img h1" alt="2" onClick={() => setViewerIndex(1)}/> 
              <img src={foto3} className="img h1" alt="3" onClick={() => setViewerIndex(2)}/>
            </div>

            <div className="row">
                <img src={foto4} className="img h2" alt="4" onClick={() => setViewerIndex(3)}/> 
                <img src={foto5} className="img h2" alt="5" onClick={() => setViewerIndex(4)}/> 
                <img src={foto6} className="img h2" alt="6" onClick={() => setViewerIndex(5)}/>
            </div>
          </div>
        </div>

        {/* Блок 2 — фото 7–11 */}
        <div className="layout">
          <div className="col-left2">
            <div className="row">
                <img src={foto7} className="img h3" alt="7" onClick={() => setViewerIndex(6)}/>
                <img src={foto8} className="img h3" alt="8" onClick={() => setViewerIndex(7)}/>
            </div>
            <div className="row">
                <img src={foto9} className="img h3" alt="9" onClick={() => setViewerIndex(8)}/> 
                <img src={foto10} className="img h3" alt="10" onClick={() => setViewerIndex(9)}/>
            </div>
          </div>

          <div className="col-right2">
            <img src={foto11} className="img v2" alt="11" onClick={() => setViewerIndex(10)}/>
          </div>
        </div>

        {/* Блок 3 — фото 12–23 */}
        <div className="layout3">
            <div className="row">
                <img src={foto12} className="img v3" alt="12" onClick={() => setViewerIndex(11)}/> 
                <img src={foto13} className="img h4" alt="13" onClick={() => setViewerIndex(12)}/> 
                <img src={foto14} className="img v3" alt="14" onClick={() => setViewerIndex(13)}/>
            </div>

            <div className="row">
                <img src={foto15} className="img h5" alt="15" onClick={() => setViewerIndex(14)}/> 
                <img src={foto16} className="img h5" alt="16" onClick={() => setViewerIndex(15)}/> 
                <img src={foto17} className="img h5" alt="17" onClick={() => setViewerIndex(16)}/>
            </div>

            <div className="row">
                <img src={foto18} className="img v4" alt="18" onClick={() => setViewerIndex(17)}/> 
                <img src={foto19} className="img v4" alt="19" onClick={() => setViewerIndex(18)}/> 
                <img src={foto20} className="img v4" alt="20" onClick={() => setViewerIndex(19)}/>
            </div>

            <div className="row">
                <img src={foto21} className="img h5" alt="21" onClick={() => setViewerIndex(20)}/> 
                <img src={foto22} className="img h5" alt="22" onClick={() => setViewerIndex(21)}/> 
                <img src={foto23} className="img h5" alt="23" onClick={() => setViewerIndex(22)}/>
            </div>
        </div>

        {/* Блок 4 — фото 24–28 */}
        <div className="layout4">
            <div className="col">
                <img src={foto24} className="img h3" alt="24" onClick={() => setViewerIndex(23)}/> 
                <img src={foto25} className="img h3" alt="25" onClick={() => setViewerIndex(24)}/>
            </div>

            <div className="col">
                <img src={foto28} className="img v2" alt="28" onClick={() => setViewerIndex(25)}/>
            </div>

            <div className="col">
                <img src={foto26} className="img h3" alt="26" onClick={() => setViewerIndex(26)}/> 
                <img src={foto27} className="img h3" alt="27" onClick={() => setViewerIndex(27)}/>
            </div>
        </div>

        {/* Блок 5 — три столбика */}
        <div className="layout5">

            {/* Столбец 1 */}
            <div className="col5">
                <img src={foto29} className="img v5" alt="29" onClick={() => setViewerIndex(28)}/> 
                <img src={foto30} className="img h5" alt="30" onClick={() => setViewerIndex(29)}/>
            </div>

            {/* Столбец 2 */}
            <div className="col5">
                <img src={foto31} className="img h5" alt="31" onClick={() => setViewerIndex(30)}/> 
                <img src={foto32} className="img v5" alt="32" onClick={() => setViewerIndex(31)}/>
            </div>

            {/* Столбец 3 */}
            <div className="col5">
                <img src={foto33} className="img v5" alt="33" onClick={() => setViewerIndex(32)}/> 
                <img src={foto34} className="img h5" alt="34" onClick={() => setViewerIndex(33)}/>
            </div>

        </div>


        {/* Блок 6 — фото 27–40 */}
        <div className="layout6">
        <div className="row">
            <img src={foto35} className="img h5" alt="35" onClick={() => setViewerIndex(34)}/> 
            <img src={foto36} className="img h5" alt="36" onClick={() => setViewerIndex(35)}/> 
            <img src={foto37} className="img h5" alt="37" onClick={() => setViewerIndex(36)}/>
        </div>

        <div className="row">
            <img src={foto38} className="img h5" alt="38" onClick={() => setViewerIndex(37)}/> 
            <img src={foto39} className="img h5" alt="39" onClick={() => setViewerIndex(38)}/> 
            <img src={foto40} className="img h5" alt="40" onClick={() => setViewerIndex(39)}/>
        </div>
        </div>

      </div>
    </main>
    </>
  );
}
