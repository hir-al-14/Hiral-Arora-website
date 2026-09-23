import type { CSSProperties } from "react";
import { frameFinishes, type FramePlacement } from "./galleryFrames";
import "../styles/photo-frame.css";

export type GalleryPhoto = { label: string; src?: string; alt: string; zoom?: number; origin?: string };

// Raised scrollwork stays vector-sharp and inherits each painted frame's colors.
function FrameOrnament() {
  return (
    <svg className="frame-ornament" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 84C4 57 10 20 31 14c17-5 23 13 12 18-9 4-14-7-7-10M16 91C10 64 18 37 37 37c18 0 18 22 6 22-10 0-11-11-4-13M18 17C37 6 67 6 86 9M29 20C49 13 70 14 90 18M18 72c9-17 23-8 16 1-5 7-14 5-16-1Z" />
        <path d="M15 16C8 3 25 0 28 9c2 7-5 14-13 7ZM49 15c7-14 20-10 16-2-2 5-10 7-16 2ZM12 45C0 37 1 25 9 28c6 2 9 10 3 17Z" fill="currentColor" strokeWidth="1" />
        <path d="M26 29 31 23 36 28 31 34Z" fill="currentColor" />
      </g>
    </svg>
  );
}

export default function PhotoFrame({ photo, placement }: { photo: GalleryPhoto; placement: FramePlacement }) {
  const finish = frameFinishes[placement.finish];
  const frameStyle = {
    width: placement.width, top: placement.top, left: placement.left,
    "--angle": placement.angle, "--engraving": finish.engraving,
    "--frame-dark": finish.dark, "--frame-mid": finish.paint, "--frame-light": finish.highlight,
  } as CSSProperties;

  return (
          <figure className="gallery-frame" style={frameStyle}>
            <div className="frame-carving" aria-hidden="true">
              {[0, 1, 2, 3].map((corner) => <span className={`frame-corner frame-corner--${corner}`} key={corner}><FrameOrnament /></span>)}
              {["top", "right", "bottom", "left"].map((edge) => (
                <svg className={`frame-engraving frame-engraving--${edge}`} viewBox={edge === "left" || edge === "right" ? "0 0 16 120" : "0 0 120 16"} key={edge}>
                  <g transform={edge === "left" || edge === "right" ? "translate(16 0) rotate(90)" : undefined}>
                  <path d="M2 8c9-10 17 10 26 0s17 10 26 0 17 10 26 0 17 10 26 0 10 0 12 0M8 8c3-8 9-8 12-3M31 8c3-8 9-8 12-3M55 8c3-8 9-8 12-3M79 8c3-8 9-8 12-3M101 8c3-8 9-8 12-3" />
                  <path d="m56 8 4-5 4 5-4 5Z" />
                  </g>
                </svg>
              ))}
            </div>
            <div className="gallery-mat">
              {photo.src ? (
                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" style={{ transform: `scale(${photo.zoom ?? 1})`, transformOrigin: photo.origin ?? "center" }} />
              ) : (
                <div className="gallery-placeholder" role="img" aria-label={`Photo placeholder: ${photo.label}`}>
                  <span aria-hidden="true">{photo.label}</span>
                </div>
              )}
            </div>
          </figure>
  );
}
