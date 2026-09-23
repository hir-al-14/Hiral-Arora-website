# Gallery photos

Put your six photo files in this folder (JPG, PNG, or WebP).
Then edit the `photos` array in `src/components/About.tsx`.
For each entry, add `src` and descriptive `alt` text, for example:

```tsx
{ label: "skating.jpg", src: "/images/gallery/skating.jpg", alt: "Inline skating on a sunny afternoon" },
```

Use your exact filename, including capitalization and extension. The URL starts
with `/images/gallery/`, not `/public/`. Entries without `src` keep their placeholder.
Photos fill their frames with a centered crop, and their order shuffles on reload.
