import { useState } from "react";

// Add files under public/images/gallery and set src + descriptive alt text here.
type GalleryPhoto = { label: string; src?: string; alt: string };
const photos: GalleryPhoto[] = [
  { label: "AIC BP.JPG", src: "/images/gallery/AIC%20BP.JPG", alt: "Group presenting a diabetes prediction model" },
  { label: "AIC.JPG", src: "/images/gallery/AIC.JPG", alt: "Four friends posing together in a classroom" },
  { label: "codelab_nova.JPG", src: "/images/gallery/codelab_nova.JPG", alt: "CodeLab group photo in front of gold balloons" },
  { label: "visa stripe.JPG", src: "/images/gallery/visa%20stripe.JPG", alt: "Group selfie beside the Visa booth at a conference" },
  { label: "ice-skating.jpg", src: "/images/gallery/ice-skating.jpg", alt: "Making a heart with my hands at an indoor ice rink" },
  { label: "stripe.jpg", src: "/images/gallery/stripe.jpg", alt: "Standing beneath the Stripe sign at a conference" },
];

function shuffledPhotos() {
  const order = [...photos];
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

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

function About() {
  const [galleryPhotos] = useState(shuffledPhotos);

  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about-gallery" role="group" aria-label="Personal photo wall — six memories, in no particular order">
        {[0, 1, 2].map((column) => (
          <div className={`gallery-column gallery-column--${column + 1}`} key={column}>
          {galleryPhotos.slice(column * 2, column * 2 + 2).map((photo, row) => (
          <figure className={`gallery-frame gallery-frame--${column * 2 + row + 1}`} key={photo.label}>
            <div className="frame-carving" aria-hidden="true">
              {[0, 1, 2, 3].map((corner) => <span className={`frame-corner frame-corner--${corner}`} key={corner}><FrameOrnament /></span>)}
            </div>
            <div className="gallery-mat">
              {photo.src ? (
                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
              ) : (
                <div className="gallery-placeholder" role="img" aria-label={`Photo placeholder: ${photo.label}`}>
                  <span aria-hidden="true">{photo.label}</span>
                </div>
              )}
            </div>
          </figure>
          ))}
          </div>
        ))}
      </div>
      <div className="about-copy">
        <p className="about-label">01 / about me</p>
        <h2 id="about-heading">a little curiosity,<br />a lot of side quests.</h2>
        <p>I'm a CS + EE student at UC Davis. Most of my favorite projects start with something small that I can't quite leave alone. A question turns into an experiment, and suddenly I've spent the evening making it work.</p>
        <p>I like teaching software to make sense of things — an image, a question, a recommendation that actually fits. Sometimes that means writing code. Sometimes it means a sensor, a breadboard, and a desk full of wires.</p>
        <p>Away from my laptop, I'm usually out inline skating, taking photos of things I almost walked past, or finding somewhere to get coffee. A few bits of that life live on this wall.</p>
        <p className="about-footnote"><span>currently:</span> resisting the urge to start another side project</p>
      </div>
    </section>
  );
}

export default About;
