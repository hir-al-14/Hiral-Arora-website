// Edit the wall arrangement here; PhotoFrame handles the rendering.
export const frameFinishes = {
  blue: { engraving: "#596b89", dark: "#8c9eaf", paint: "#bacddd", highlight: "#e3edf5" },
  ivory: { engraving: "#8d7562", dark: "#a9aaa9", paint: "#e0e2df", highlight: "#fafbf7" },
  lavender: { engraving: "#7a5b8a", dark: "#a699ab", paint: "#d1c5d9", highlight: "#eee7f3" },
  gold: { engraving: "#6a5136", dark: "#97815b", paint: "#bdab80", highlight: "#e6d8b1" },
  rose: { engraving: "#995f71", dark: "#aa999d", paint: "#dbc6ca", highlight: "#f3e5e7" },
  sage: { engraving: "#4d786c", dark: "#94a59e", paint: "#c2d5cd", highlight: "#e6f0e9" },
};

export type FramePlacement = {
  width: string;
  top: string;
  left: string;
  angle: string;
  finish: keyof typeof frameFinishes;
};

export const galleryFrames: FramePlacement[] = [
  { width: "28%", top: "30%", left: "37%", angle: "1deg", finish: "blue" },
  { width: "27%", top: "6%", left: "1%", angle: "-4deg", finish: "ivory" },
  { width: "25%", top: "0%", left: "37%", angle: "2deg", finish: "lavender" },
  { width: "24%", top: "48%", left: "3%", angle: "-3deg", finish: "gold" },
  { width: "27%", top: "9%", left: "73%", angle: "3deg", finish: "rose" },
  { width: "27%", top: "61%", left: "73%", angle: "-4deg", finish: "sage" },
];
