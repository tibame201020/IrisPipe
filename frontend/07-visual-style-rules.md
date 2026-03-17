# Visual Style Rules

## Purpose

This document turns the selected visual direction into concrete UI styling rules.

The target tone is:

- clean
- crisp
- simple
- explicit

This should feel like a focused desktop tool, not a marketing page and not a noisy monitoring wall.

## Core Direction

Use these words as the design filter:

- quiet
- structured
- deliberate
- readable
- efficient

Avoid:

- glossy gradients
- oversized cards
- playful decoration
- overly dark themes
- overly bright accent colors
- dense enterprise-table heaviness

## 1. Visual Personality

The UI should feel like:

- a modern productivity application
- a calm operations console
- a tool built for daily use over long sessions

The UI should not feel like:

- a dashboard wall
- a consumer SaaS marketing site
- a generic material admin template

## 2. Color Direction

Use a light neutral base with one restrained accent color.

Suggested palette direction:

- canvas background:
  - soft neutral gray, close to off-white
- panel background:
  - white or near-white
- border:
  - cool light gray
- primary text:
  - dark slate
- secondary text:
  - muted slate-gray
- accent:
  - muted blue

Suggested semantic feel:

- success:
  - restrained green
- warning:
  - amber, not neon
- danger:
  - brick red or muted red
- running / active:
  - blue accent

The accent should guide attention, not dominate the page.

## 3. Surface Rules

Use layered surfaces rather than floating cards everywhere.

Rules:

- app shell background should be slightly darker than inner panels
- primary panels should have subtle borders
- shadows should be minimal or absent
- corners should be soft but not pill-shaped
- rows and panels should rely more on contrast and spacing than on heavy decoration

Recommended feel:

- shell background: matte
- panel surfaces: clean paper-like surfaces
- selected states: tinted background, not thick outlines

## 4. Typography

Typography should be calm and legible.

Direction:

- use a clean sans-serif for UI text
- reserve monospace only for ids, SQL-like snippets, or deeply technical fields

Hierarchy:

- page title:
  - clear, medium-bold, not oversized
- section title:
  - slightly stronger than body, compact spacing
- body text:
  - stable default reading size
- metadata:
  - one step smaller and more muted

Rules:

- avoid giant headings
- avoid too many font weights
- avoid wide tracking

## 5. Spacing And Density

The UI should be compact enough for work, but not cramped.

Rules:

- prefer medium density
- keep toolbar height compact
- keep row height consistent across folder, recent, and history views
- use generous internal alignment, not large outer gaps

Spacing behavior:

- panel padding should be consistent
- forms should use a stable vertical rhythm
- list rows should align to a shared height family

The result should feel efficient, not sparse.

## 6. Buttons

Buttons should be plain, clear, and functional.

Primary button:

- solid muted accent fill
- high contrast text
- used only for the main action on a surface

Secondary button:

- quiet surface
- subtle border
- used for common non-destructive actions

Destructive button:

- red accent only when the action is truly destructive
- avoid making the whole screen feel dangerous

Rules:

- button labels should be explicit
- avoid icon-only buttons unless the meaning is obvious
- avoid too many filled buttons in the same row

## 7. Inputs And Forms

Forms should look structured and reliable.

Rules:

- input borders should be visible but subtle
- focus state should use the accent color cleanly
- invalid state should use inline error text and a restrained danger border
- labels should sit above inputs, not inside them as the only identifier

For the config editor:

- sections should be visually grouped
- step editing should feel nested but still aligned
- inline validation should not cause layout chaos

## 8. Lists And Tables

List-style layouts are the default for V1.

Rules:

- rows should use clean separators
- hover state should be soft
- selected state should be immediately visible
- status should appear as a compact badge or colored text block
- actions should align on the far right

Do not:

- use heavy zebra striping
- overload rows with too many icons
- make table borders too dark

## 9. Tabs

Tabs should feel understated.

Rules:

- use a simple underline or bottom-border active state
- avoid bulky pill tabs
- tab labels should be short
- inactive tabs should stay readable, not faded too hard

## 10. Status Presentation

Statuses are important, but should not dominate every screen.

Preferred style:

- compact status chip or colored text badge

Suggested tone:

- `STARTED`:
  - accent blue
- `COMPLETED`:
  - muted green
- `FAILED`:
  - muted red
- `STOPPED`:
  - amber
- `PENDING` or neutral states:
  - gray

Rules:

- use the same color logic everywhere
- do not invent different status styles per page

## 11. Dialogs And Confirmations

Dialogs should feel deliberate and quiet.

Rules:

- use custom dialogs, never native `alert` or `confirm`
- dialog width should fit the action scope
- confirmations should show exactly what will happen
- destructive dialogs should emphasize consequence, not theatrical danger

For delete flows:

- show affected entity names when available
- show blockers clearly
- keep the call to action explicit

## 12. Empty, Loading, And Error States

These states should feel intentional.

Loading:

- use skeletons for pages and panels
- use spinners only for local actions

Empty:

- use short plain-language descriptions
- include one clear next action when useful

Error:

- keep error language direct
- show inline errors near forms
- use toast for action failures
- keep shell-level availability warnings persistent but calm

## 13. Motion

Motion should be restrained.

Rules:

- use short fades or slight position shifts
- use motion to clarify state change, not decorate
- avoid bounce, springy exaggeration, or flashy transitions

Good candidates:

- dialog open/close
- context menu reveal
- accordion expand/collapse
- toast enter/exit

## 14. Tailwind Token Direction

Use design tokens through CSS variables or a small semantic layer.

Suggested token groups:

- `--app-bg`
- `--panel-bg`
- `--panel-border`
- `--text-primary`
- `--text-secondary`
- `--accent`
- `--success`
- `--warning`
- `--danger`
- `--row-hover`
- `--row-selected`
- `--focus-ring`

Do not wire the app directly to raw arbitrary colors everywhere.

## 15. Practical Summary

If a design choice is unclear, use this filter:

- is it cleaner than the alternative
- is it easier to scan
- is it calmer over long sessions
- is it explicit without being loud

If yes, it is probably on the right track.
