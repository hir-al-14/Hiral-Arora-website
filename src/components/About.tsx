import { useState } from "react";

// Add files under public/images/gallery and set src + descriptive alt text here.
type GalleryPhoto = { label: string; src?: string; alt: string };
const photos: GalleryPhoto[] = [
  { label: "memory_01.jpg", alt: "" },
  { label: "somewhere_fun.jpg", alt: "" },
  { label: "little_details.jpg", alt: "" },
  { label: "project_02.jpg", alt: "" },
  { label: "out_and_about.jpg", alt: "" },
  { label: "an_afternoon.jpg", alt: "" },
];

function shuffledPhotos() {
  const order = [...photos];
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

function About() {
  const [galleryPhotos] = useState(shuffledPhotos);

  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about-gallery" role="group" aria-label="Personal photo wall — six memories, in no particular order">
        {galleryPhotos.map((photo, index) => (
          <figure className={`gallery-frame gallery-frame--${index + 1}`} key={photo.label}>
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
      <div className="about-copy">
        <p className="about-label">01 / about me</p>
        <h2 id="about-heading">a little curiosity,<br />a lot of side quests.</h2>
        <p>I'm a CS + EE student at UC Davis. Most of my favorite projects start with something small that I can't quite leave alone. A question turns into an experiment, and suddenly I've spent the evening making it work.</p>
        <p>I like teaching software to make sense of things — an image, a question, a recommendation that actually fits. Sometimes that means writing code. Sometimes it means a sensor, a breadboard, and a desk full of wires.</p>
        <p>Away from my laptop, I'm usually out inline skating, taking photos of things I almost walked past, or finding somewhere to get coffee. A few bits of that life will live on this wall.</p>
        <p className="about-footnote"><span>currently:</span> resisting the urge to start another side project</p>
      </div>
    </section>
  );
}

export default About;
