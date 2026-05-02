"use client"

import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import { useState } from "react"

type PdpGalleryProps = {
  images: HttpTypes.StoreProductImage[]
  title: string
}

export default function PdpGallery({ images, title }: PdpGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex]

  return (
    <div className="gallery">
      <div className="gallery__main">
        {activeImage?.url ? (
          <Image
            src={activeImage.url}
            alt={`${title} — zdjęcie ${activeIndex + 1}`}
            fill
            priority={activeIndex === 0}
            sizes="(max-width: 980px) 100vw, 55vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div
            className="silhouette silhouette--square"
            aria-hidden="true"
            style={{ position: "absolute", inset: 0 }}
          />
        )}
      </div>

      {images.length > 1 && (
        <div className="gallery__thumbs">
          {images.slice(0, 5).map((img, i) => (
            <button
              key={img.id ?? i}
              className={`gallery__thumb${i === activeIndex ? " is-active" : ""}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Zdjęcie ${i + 1}`}
            >
              {img.url ? (
                <Image
                  src={img.url}
                  alt={`${title} — miniatura ${i + 1}`}
                  fill
                  sizes="80px"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <span aria-hidden="true">{i + 1}</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
