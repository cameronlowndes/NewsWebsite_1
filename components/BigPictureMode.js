"use client";

import React, { useState, useEffect, useCallback } from "react";

export default function BigPictureMode({ imageSrc, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeOverlay = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      closeOverlay();
    }
  }, [closeOverlay]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <>
      <img
        src={imageSrc}
        alt={alt}
        className="big-picture-thumbnail"
        onClick={() => setIsOpen(true)}
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
