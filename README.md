# Nsoromma — Landing Page

A professional, accessibility-first landing page for **Nsoromma**, a Ghanaian-made
assistive Android app that gives blind and low-vision users hands-free, turn-by-turn
**voice navigation** with **real-time hazard alerts**. Built and tested on the
University of Ghana, Legon campus, and adaptable to streets, markets and public spaces.

> *Nsoromma* — "child of the heavens" — is the Adinkra star symbol, which lets the
> page nod to Ghana's black star and national colours without any literal flag motif.

## Files

- `index.html` — semantic, landmark-based markup
- `styles.css` — design system + responsive layout
- `app.js` — optional progressive enhancement (mobile menu, footer year)

## Design notes

- **Palette:** near-black charcoal base with Ghanaian accents — gold, deep forest
  green, and a muted clay red — used sparingly in gradients, icons and dividers.
- **Type:** [Atkinson Hyperlegible](https://brailleinstitute.org/freefont)
  (engineered for low-vision readability) for body text; Manrope for display headings.
- **Contrast:** every text/background pair targets WCAG AA, most reach AAA.

## Accessibility

- Skip link, proper heading hierarchy (`h1 → h2 → h3`), and ARIA landmarks
- Visible high-contrast focus rings on all interactive elements
- ≥48px touch targets; `prefers-reduced-motion` respected
- Meaning never conveyed by colour alone (icons + text labels everywhere)
- The phone mockup carries a descriptive `role="img"` label; decorative SVGs are `aria-hidden`

## Run it

Open `index.html` in any browser, or serve the folder:

```bash
python -m http.server 8000
```

## TODO before launch

- Point the **Download APK** buttons at the real `nsoromma.apk` URL (see `app.js`).
- Replace the placeholder support email and phone number in the footer.
