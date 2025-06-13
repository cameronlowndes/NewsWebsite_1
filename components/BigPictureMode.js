"use client";

import React, { useState } from "react";

export default function BigPictureMode({ imageSrc, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  function openOverlay() {
    setIsOpen(true);
  }

  function closeOverlay() {
    setIsOpen(false);
  }

  return (
    <>
      <img
        src={imageSrc}
        alt={alt}
        className="big-picture-thumbnail"
        onClick={openOverlay}
      />

      {isOpen && (
        <div className="big-picture-overlay" onClick={closeOverlay}>
          <img
            src={imageSrc}
            alt={alt}
            className="big-picture-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style jsx>{`
        .big-picture-thumbnail {
          cursor: pointer;
          max-width: 300px;
          height: auto;
          border: 1px solid #ccc;
          border-radius: 6px;
        }

        .big-picture-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.95);

          display: flex;
          justify-content: center;
          align-items: center;

          z-index: 1000;
          cursor: pointer;
        }

        .big-picture-image {
          width: 100vw;
          height: 100vh;
          object-fit: contain;
          cursor: default;
        }
      `}</style>
    </>
  );
}
