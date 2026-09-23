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
        <h2 id="about-heading">About Me</h2>

        <p>
          Before i knew what coding was, i was fascinated by all the colorful 
          lines of code on a screen and wondered what they actually did.
        </p>

        <p>
          i came into college wanting to try pretty much everything. that's
          taken me through LLMs, computer vision, recommendation systems,
          hardware, and lots of experimenting. 
          especially right now, when tech seems to change every few months, 
          i think exploring new things is what keeps tech exciting for me.
        </p>

        <p>
          lately, i've been really curious about security and identity. i'm
          building a temporal graph model that learns how users, devices,
          sessions, and IPs connect over time, looking for attacks that might
          seem completely normal on their own. i'm also experimenting with
          self-supervised learning to catch patterns it hasn't seen before.
        </p>

        <p>
          i also really love meeting new people, hearing about what they've
          worked on, and learning from their experiences. some of my favorite
          memories are just staying up way too late with friends, building
          something together and figuring things out as we go.
        </p>

        <p>
          when i'm away from my laptop, i love skating (not amazingly, but
          we'll get there), i'm obsessed with dogs, and i will never say no to coffee :)
        </p>
      </div>
    </section>
  );
}

export default About;
