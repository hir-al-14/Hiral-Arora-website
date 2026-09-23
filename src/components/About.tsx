import { useState } from "react";
import PhotoFrame, { type GalleryPhoto } from "./PhotoFrame";
import { galleryFrames } from "./galleryFrames";

// Add files under public/images/gallery and set src + descriptive alt text here.
const photos: GalleryPhoto[] = [
  { label: "AIC BP.JPG", src: "/images/gallery/AIC%20BP.JPG", alt: "Group presenting a diabetes prediction model" },
  { label: "AIC.JPG", src: "/images/gallery/AIC.JPG", alt: "Four friends posing together in a classroom" },
  { label: "codelab_nova.JPG", src: "/images/gallery/codelab_nova.JPG", alt: "CodeLab group photo in front of gold balloons" },
  { label: "visa stripe.JPG", src: "/images/gallery/visa%20stripe.JPG", alt: "Group selfie beside the Visa booth at a conference" },
  { label: "ice-skating.jpg", zoom: 1.5, origin: "50% 57%", src: "/images/gallery/ice-skating.jpg", alt: "Making a heart with my hands at an indoor ice rink" },
  { label: "stripe.jpg", zoom: 1.18, origin: "50% 0%", src: "/images/gallery/stripe.jpg", alt: "Standing beneath the Stripe sign at a conference" },
];

function shuffledPhotos() {
  const order = photos.filter((photo) => !["stripe.jpg", "ice-skating.jpg"].includes(photo.label));
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return [
    photos.find((photo) => photo.label === "stripe.jpg")!,
    order[0],
    order[1],
    photos.find((photo) => photo.label === "ice-skating.jpg")!,
    order[2],
    order[3],
  ];
}

function About() {
  const [galleryPhotos] = useState(shuffledPhotos);

  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about-gallery" role="group" aria-label="Personal photo wall — six memories, in no particular order">
        {galleryPhotos.map((photo, index) => (
          <PhotoFrame key={photo.label} photo={photo} placement={galleryFrames[index]} />
        ))}
      </div>
      <div className="about-copy">
        <h2 id="about-heading">About me</h2>
        <p>I'm a CS + EE student at UC Davis. Most of my favorite projects start with something small that I can't quite leave alone. A question turns into an experiment, and suddenly I've spent the evening making it work.</p>
        <p>I like teaching software to make sense of things — an image, a question, a recommendation that actually fits. Sometimes that means writing code. Sometimes it means a sensor, a breadboard, and a desk full of wires.</p>
        <p>Away from my laptop, I'm usually out inline skating, taking photos of things I almost walked past, or finding somewhere to get coffee. A few bits of that life live on this wall.</p>
        <p className="about-footnote"><span>currently:</span> resisting the urge to start another side project</p>
      </div>
    </section>
  );
}

export default About;
