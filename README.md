# Base Coffee

A premium marketing website for **Base Coffee** — a specialty coffee shop with a minimalist Japandi aesthetic and light-to-medium roasts (roasted in Berlin), located in Jubilee Hills, Hyderabad. Tagline: *Your Base, Your Momentum.*

Built with plain **HTML, CSS, and JavaScript** — no frameworks, no build step.

## Pages

- `index.html` — Home: hero, brand intro, signature drinks, our-craft story, locations preview, and newsletter call-to-action.
- `menu.html` — Full menu grouped by category (Espresso, Brews, Signature, Pastries) with prices.
- `about.html` — Brand story, values, sourcing/roasting process, space gallery, Google reviews, the Jubilee Hills location with hours, and contact details.

## Project structure

```
Base Coffee/
├── index.html        # Home page
├── menu.html         # Menu page
├── about.html        # About / story / locations / contact
├── css/
│   └── styles.css    # Design tokens + all styles
├── js/
│   └── main.js       # Nav, mobile menu, scroll animations, form validation
└── README.md
```

## How to view

No installation required.

- **Easiest:** double-click `index.html` to open it in your browser.
- **Recommended (for clean URLs and to avoid any browser file restrictions):** serve the folder with a tiny local server, then visit the printed address:

```bash
# Python 3
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Design

- **Palette:** warm cream backgrounds, espresso darks, caramel accent, charcoal text.
- **Typography:** an elegant serif for display headings paired with a clean sans-serif for body text (loaded from Google Fonts).
- **Feel:** generous whitespace, large editorial imagery, subtle motion, and refined detailing for a premium, mindful brand experience.

## Customizing content

- Text, menu items, prices, locations, and opening hours live directly in the HTML files and are easy to edit.
- Colors, fonts, and spacing are controlled by CSS variables at the top of `css/styles.css`.

## Notes

- Imagery uses free, hotlinked photography; swap the image URLs in the HTML to use your own photos.
- Prices and opening hours are placeholders where exact public data was unavailable and can be updated freely.
