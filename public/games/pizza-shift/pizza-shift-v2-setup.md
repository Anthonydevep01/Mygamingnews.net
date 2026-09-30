# Pizza Shift - Animated Edition

Version 0.2.0 | MyGamingNews original browser-game prototype

This updates the earlier Pizza Shift build. It adds character animation, station
transitions, oven transfers, a pizza-box handoff, rating stars, illustrated
upgrade cards, and an original looping soundtrack. It does not copy Papa's
Pizzeria artwork, characters, audio, or code.

## Play the updated build

Open `pizza-shift.html` in a browser. The standalone file embeds the game, all
illustrations, interface styles, and music. No external libraries or audio
services are contacted. Attachment previews may not execute JavaScript; save
and open the HTML file in a browser instead.

On the welcome screen, enable **Background music**, then click **Open the shop**
or **Continue shift**. Audio starts after that interaction, not on page load.
Existing saves retain their mute choice, so returning players may need to
re-enable the checkbox or speaker button.

The sliders icon in the top-right opens **Audio and animation settings**:
master audio, background music, separate music/effects volumes, and animation
preference. Press **M** to toggle all audio. The music pauses during the pause,
settings, and customer-verdict dialogs and resumes from its saved playback
position. Hiding the tab pauses an active shift and silences the audio.

## What changed

### Characters and stations

The existing illustrated customers now have breathing motion, head movement,
eye blinks, greeting waves, impatient expressions, and reactions based on the
actual score. The original body and facial features remain; these are layered
Canvas/SVG animations, not imported sprite sheets or a full 3D character rig.

Counter, prep, oven, and cutting-board changes use a 380-millisecond directional
slide. Toppings drop onto the pizza. Sauce and cheese have short placement
effects, and a pizza wheel follows a cut. Oven flames and steam animate.

Loading an oven shows a pizza peel carrying the pizza into its correct slot.
Pulling it slides the pizza back onto the cutting board. These are presentation
states around the existing gameplay rules; they do not change recipe scoring.

### Boxing and customer handoff

Pressing Serve starts a roughly four-second sequence: pizza into the box, lid
closed, box across the counter, customer reaction, and rating stars. The score
is calculated at the instant Serve is pressed. Ovens, arrivals, and patience
freeze during the handoff, and the payout is committed exactly once afterward.

**Skip handoff** completes it immediately without changing the score. Oven
loading/pulling animations have a similar skip button. Reduced motion skips
these sequences automatically. Pause also freezes an in-progress handoff.

Station slides alone do not stop the kitchen timers; the brief load/pull and
boxing sequences do. The ordinary verdict dialog remains a paused state.

### Stars and improvements

The existing 0-100 score is retained. The new five-star display is that score
divided by 20, with partial stars. It appears in the shop header, customer
verdict, and shift summary, rather than introducing a separate scoring model.

The three existing upgrades now use original illustrations: a welcoming
counter/plant, an extra oven, and a temperature-control dial. Installed upgrades
get a check badge. Purchases retain the original coin prices and rules.
The counter plant and steady-heat dial also appear in the game environment
once those upgrades are owned.

### Music and effects

**Cafe Groove** is an original, synthesized, approximately 37-second stereo
loop composed for this build: soft keyboard notes, plucked chord sounds,
bass, and light percussion at 104 BPM. No external recordings, third-party
samples, or Papa's Pizzeria music are included. This describes the supplied
composition and assets, not a trademark or worldwide title-clearance opinion.

The MP3 is included both separately and embedded in the standalone game.
The WAV master and composition script are in the complete source package.
No music-library subscription, streaming service, or external audio API is
required. New box and coin cues supplement the existing game sounds.

## Update the WordPress / Elementor installation

Use the new `mgn-pizza-shift-wordpress.zip` inside this package, or the separately
provided versioned plugin ZIP. Test on a staging page before the public site.
Replace the earlier MGN Pizza Shift plugin with this version; do not run a
second renamed copy alongside the old plugin because they share a shortcode
and PHP function name. Keep the same shortcode:

```text
[mgn_pizza_shift]
```

Use an Elementor **Shortcode widget** or a WordPress Shortcode block, not the
Text Editor/Visual widget. No page-layout change is needed. The plugin bundles
the new game file and uses a versioned iframe address to help distinguish it
from cached copies. Clear any remaining page/CDN cache when testing.

The plugin keeps its original folder, shortcode, local save key, and iframe
resize protocol. Existing completed-shift progress is compatible when the game
runs on the same origin and browser storage is still available. Moving to a
different domain or clearing browser storage does not migrate progress.

The plugin was syntax-checked and tested with an isolated shortcode harness.
It has not been installed on the live site or validated against its actual
WordPress version, theme, CSP, caching, or other plugins.

## Update a static installation

Replace the deployed game `index.html` with `web/index.html`. Keep `web/embed.js`
for the optional parent-page height adjustment. `web/embed-example.html`
contains the iframe example. The proposed deployment path remains a choice
for your host; this delivery has not published a live game URL.

## Controls and gameplay

Take an order at Counter. At Prep, add sauce and cheese, then place each requested
topping. Place evenly follows the selected topping's requested count and side.
Bake until the indicator reaches the green zone; prepare other orders while
pizzas bake. Pull the pizza, cut the requested slices, and serve.

Keyboard: **1-4** switches stations, **Q/W/E/R/T/Y** selects toppings, **Z**
undoes, **P** pauses, **M** mutes, and **H** opens help. Focus the canvas with Tab
and use arrow keys plus Enter/Space for placement/cutting. All essential game
actions also have button controls. This is not an accessibility certification.

The original eight customers, six gradually unlocked toppings, two initial
oven slots, two pace choices, upgrades, and shift progression remain.

## Saves and privacy

The existing `mgn_pizza_shift_v1` localStorage key is unchanged. Version 0.2
loads the older save format and adds validated music-volume, effects-volume,
music-enabled, and motion-preference fields. Existing progress and mute choices
are retained by the migration logic. Only completed shifts are saved; active
orders and mid-handoff progress are not saved across reloads.

No accounts, ads, analytics, payments, remote leaderboard, or tracking were
added. Client-side saves/scores are not a trusted competitive leaderboard.

## Source layout and rebuilding

- `source/game.js`: game rules, illustration, animation state, audio graph,
  score presentation, input, and storage. The animation/audio layer is marked
  in the file. This is the authoritative JavaScript source.
- `source/style.css`: responsive UI, icon/star styling, and motion overrides.
- `source/index.html`: document structure and top-level controls.
- `assets/audio/pizza-shift-cafe.mp3`: soundtrack used by the build.
- `assets/audio/pizza-shift-cafe.wav`: uncompressed master.
- `make_soundtrack.py`: original synthesis/composition script; uses NumPy and
  ffmpeg only when regenerating audio, not when playing the game.
- `build.py`: combines everything into the standalone and plugin game files.
- `wordpress/mgn-pizza-shift/`: plugin source.
- `tests/`: gameplay, animation/audio, embed, and PHP regression checks.
- `screenshots/`: actual browser-captured UI and animation frames.

Build with Python 3 (standard library only):

```sh
python build.py
```

The build writes `pizza-shift.html`, `web/index.html`, and the bundled WordPress
`game/index.html`. Rezip the plugin directory afterward for the plugin uploader.
There are no runtime npm dependencies. The normal rebuild does not require
NumPy or ffmpeg; those are only for recomposing audio or rendering previews.

To replace the music later, supply an appropriately authorized looping MP3 at
`assets/audio/pizza-shift-cafe.mp3`, update the visible track name/credits, and
rebuild. Do not edit the large generated base64 string in the compiled HTML.

## Validation and preview

See `QA-REPORT.md` for the exact passing checks and untested release conditions.
The included automated browser suites use an in-memory storage fixture and
an introspection hook enabled only in their test copy. The shipped hook is
restricted to localhost with a `qa` query parameter; no remote debugging
interface is enabled on the deployed website.

The short animation preview is captured from the real game Canvas at controlled
animation times; baking is fast-forwarded between shots. It demonstrates the
visual sequence rather than claiming the full pizza can be cooked in that
preview duration. Its background audio uses the included original track;
individual game sound effects are not recorded in the preview.
