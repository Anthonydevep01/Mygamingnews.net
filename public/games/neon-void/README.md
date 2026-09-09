# Neon Void — MyGamingNews.net Arcade

**Version:** 1.0.0  
**Type:** Infinite roguelike typing shooter  
**Dependencies:** None  
**Runtime:** Modern browser with JavaScript and HTML5 Canvas

## Files

- `index.html` — game page and UI markup
- `styles.css` — responsive Neon Void interface and menus
- `game.js` — gameplay, rendering, progression, roguelike systems, audio, and local records

## Core Gameplay

1. Incoming enemies carry a word.
2. Type the first letter to lock the closest matching enemy.
3. Finish its word letter-by-letter. Each correct key fires a plasma beam.
4. Misses reset the combo streak.
5. Enemies that cross the defense line damage Shield first, then Core.
6. Clear the procedural enemy roster to finish a sector.
7. Choose one of three random roguelike upgrades between sectors.
8. Every fifth sector is a multi-phase boss encounter.
9. The run continues indefinitely until Core integrity reaches zero.

## Controls

- `A-Z`: lock / type / fire
- `Backspace`: break current target lock and reset streak
- `Space`: use Void Pulse when fully charged
- `Esc`: pause/resume
- `1`, `2`, `3`: choose an upgrade card

Touch devices can tap the playfield to open the software keyboard. Desktop/laptop keyboards provide the intended experience.

## Systems Included

- Infinite procedural sectors
- Boss sector every 5 levels
- Multiple enemy archetypes
- Elite enemies
- Splitter enemies that create fragments
- Multi-phase bosses
- 20 roguelike upgrades, including a repeatable infinite-run evolution
- Upgrade rarities: Common / Rare / Epic
- Shield + Core health model
- Shield regeneration
- Void Pulse active ability
- Combo multiplier
- WPM and accuracy tracking
- Perfect-word rewards
- Local best score / sector / WPM with `localStorage`
- Generated WebAudio sound effects and ambient hum
- Sound toggle
- Reduced-motion option
- Responsive HUD and touch keyboard support
- Pause on tab/window focus loss
- No external libraries, images, fonts, APIs, or CDN requests

## Running Locally

You can open `index.html` directly in most browsers. For the most production-like behavior, serve the folder through any local/static web server.

Example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## WordPress / MyGamingNews.net Integration

Recommended deployment is to upload this folder to a static path on the same MyGamingNews.net domain and embed it in a dedicated WordPress page using an iframe:

```html
<iframe
  src="/games/neon-void/index.html"
  title="Neon Void"
  loading="eager"
  allow="autoplay"
  style="width:100%;height:calc(100vh - 80px);min-height:720px;border:0;display:block;background:#05030d;"
></iframe>
```

For a true full-screen arcade page, use a page template without the normal article sidebar/header or provide a Full Screen button around the iframe.

## Global Leaderboard

The current build deliberately stores records only in the browser. A global leaderboard should be added server-side so scores cannot be trusted directly from client JavaScript. The production integration can POST signed run summaries to a WordPress REST endpoint, validate them server-side, and persist leaderboard entries in a dedicated table.

## Content / Branding Safety

The game uses generic gaming vocabulary and original procedural vector graphics. It includes no third-party game characters, logos, screenshots, music, fonts, or external art assets.
