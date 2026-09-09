# MyGamingNews.net Integration Notes — Neon Void

## Recommended Site Structure

Upload the game files to a same-domain static directory such as:

`/games/neon-void/`

Result:

- `/games/neon-void/index.html`
- `/games/neon-void/styles.css`
- `/games/neon-void/game.js`

Then create a WordPress page such as **Neon Void** under a future **Games** section and embed the game in a Custom HTML block.

## Embed Snippet

```html
<div class="mgn-neon-void-shell">
  <iframe
    id="neon-void-game"
    src="/games/neon-void/index.html"
    title="Neon Void — MyGamingNews Arcade"
    allow="autoplay; fullscreen"
    loading="eager">
  </iframe>
</div>

<style>
.mgn-neon-void-shell {
  width: 100%;
  background: #05030d;
  overflow: hidden;
}
.mgn-neon-void-shell iframe {
  display: block;
  width: 100%;
  height: min(900px, calc(100vh - 90px));
  min-height: 680px;
  border: 0;
  background: #05030d;
}
@media (max-width: 760px) {
  .mgn-neon-void-shell iframe {
    height: calc(100svh - 60px);
    min-height: 620px;
  }
}
</style>
```

## Production Recommendation

For the final public page, a distraction-free template is preferable to a normal editorial article template. Keep the MyGamingNews header compact, remove the sidebar, and let the game occupy most of the viewport.

## Recommended Future Backend Features

The standalone game is complete without a backend. These features require server-side work if desired:

1. Global leaderboard.
2. Logged-in player profiles.
3. Daily seeded challenge shared by all players.
4. Achievements saved across browsers/devices.
5. Anti-cheat score validation.
6. Seasonal leaderboard resets.
7. Shareable run-result cards.

For WordPress, these can be implemented through a custom REST API endpoint and dedicated database table rather than storing authoritative scores in post meta or trusting browser `localStorage`.
