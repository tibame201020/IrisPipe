# Design Tokens And Component Style Map

## Purpose

This document converts the visual direction into concrete implementation guidance.

It is intended to bridge:

- visual design
- Tailwind configuration
- Angular component styling

Use this together with:

- [README.md](README.md)
- [07-visual-style-rules.md](07-visual-style-rules.md)

## 1. Typography Baseline

Recommended primary UI font:

- `Public Sans`

Fallback stack:

- `"Public Sans", "Segoe UI", sans-serif`

Recommended monospace font:

- `IBM Plex Mono`

Fallback stack:

- `"IBM Plex Mono", "Cascadia Mono", monospace`

Usage rules:

- use `Public Sans` for almost all UI text
- use monospace only for ids, SQL text, and technical values
- avoid mixing more than these two font families

## 2. Color Tokens

Suggested light theme tokens:

```text
--app-bg:           #f5f7fa
--panel-bg:         #ffffff
--panel-subtle:     #f8fafc
--panel-border:     #d8e0e8
--text-primary:     #18212b
--text-secondary:   #516071
--text-muted:       #6f7d8c
--accent:           #2f6fed
--accent-soft:      #e9f0ff
--success:          #2f7d4a
--success-soft:     #eaf6ee
--warning:          #b7791f
--warning-soft:     #fff4de
--danger:           #b84a4a
--danger-soft:      #fdecec
--row-hover:        #f3f7fb
--row-selected:     #e9f0ff
--focus-ring:       #8cb2ff
--backdrop:         rgba(24, 33, 43, 0.24)
```

Color behavior:

- `--app-bg` is the shell background
- `--panel-bg` is used for cards, panels, dialogs, and editor surfaces
- `--panel-subtle` is used for grouped subsections
- `--row-selected` is used for selected list rows and active nav
- soft semantic colors support chips, inline alerts, and badges

## 3. Type Scale

Suggested scale:

```text
title-xl   24px / 32px / 600
title-lg   20px / 28px / 600
title-md   16px / 24px / 600
body-md    14px / 20px / 400
body-sm    13px / 18px / 400
meta-sm    12px / 16px / 500
mono-sm    12px / 16px / 500
```

Usage:

- page titles: `title-lg`
- section headers: `title-md`
- normal labels and cell text: `body-md`
- technical metadata and timestamps: `body-sm` or `meta-sm`
- ids and query fragments: `mono-sm`

## 4. Spacing Scale

Suggested spacing system:

```text
2   = 8px
3   = 12px
4   = 16px
5   = 20px
6   = 24px
8   = 32px
10  = 40px
12  = 48px
```

Suggested usage:

- shell panel gap: `16px`
- panel internal padding: `16px`
- section gap: `16px`
- dense row gap: `8px`
- form field vertical gap: `12px`
- page toolbar bottom gap: `16px`

## 5. Radius, Border, And Shadow

Recommended surface tokens:

```text
radius-sm:   8px
radius-md:   10px
radius-lg:   12px
border:      1px solid var(--panel-border)
shadow-sm:   0 1px 2px rgba(24, 33, 43, 0.04)
shadow-none: none
```

Rules:

- use `radius-md` for panels and dialogs
- use `radius-sm` for inputs, buttons, chips
- keep shadows subtle
- prefer borders over shadows for panel separation

## 6. Shell Layout Tokens

Suggested shell sizing:

```text
header-height:       56px
statusbar-height:    28px
sidebar-width:       280px
inspector-width:     340px
main-min-width:      0
```

Rules:

- the app shell should use full viewport height
- header and status bar heights remain fixed
- sidebar and inspector widths should be stable in desktop mode
- only inner content regions should scroll

## 7. Button Style Map

### Primary button

```text
background: accent
text: white
border: transparent
hover: slightly darker accent
```

Use for:

- save
- create when it is the main page action
- confirm actions

### Secondary button

```text
background: panel-bg
text: text-primary
border: panel-border
hover: row-hover
```

Use for:

- refresh
- import
- open
- inspect

### Destructive button

```text
background: danger-soft
text: danger
border: transparent or soft danger border
```

Use for:

- delete pipeline
- delete run
- delete folder

## 8. Input Style Map

Text input:

```text
height: 36px
padding-x: 12px
background: panel-bg
border: panel-border
radius: radius-sm
focus-ring: focus-ring
```

Textarea:

```text
min-height: 88px
padding: 12px
background: panel-bg
border: panel-border
```

Select:

```text
height: 36px
padding-x: 12px
background: panel-bg
border: panel-border
```

Rules:

- labels sit above fields
- error text sits below fields
- use muted helper text only when it adds real context

## 9. Row And Table Style Map

Shared row rules:

```text
min-height: 40px
padding-x: 12px
padding-y: 10px
border-bottom: panel-border
hover-bg: row-hover
selected-bg: row-selected
```

Use on:

- folder rows
- pipeline rows
- recent activity rows
- pipeline history rows
- job outline rows

Rules:

- actions align right
- metadata aligns in stable columns where possible
- selected rows use background tint, not heavy border blocks

## 10. Status Chip Map

Recommended status chip style:

```text
border-radius: 999px
padding-x: 8px
padding-y: 2px
font-size: 12px
font-weight: 600
```

Mapping:

```text
STARTING / STARTED   -> accent-soft / accent
COMPLETED            -> success-soft / success
FAILED               -> danger-soft / danger
STOPPED              -> warning-soft / warning
ABANDONED / UNKNOWN  -> neutral soft / muted text
```

## 11. Tab Style Map

Recommended tab style:

```text
height: 40px
active border-bottom: 2px accent
inactive text: text-secondary
active text: text-primary
gap: 20px
```

Rules:

- tabs should look quiet
- avoid boxed tab buttons
- active state should be obvious but restrained

## 12. Dialog Style Map

Recommended dialog frame:

```text
max-width: 520px
background: panel-bg
border: panel-border
radius: radius-lg
shadow: shadow-sm
backdrop: backdrop
```

Structure:

- title
- consequence text
- optional affected items list
- action row with cancel on the left and primary/destructive action on the right

## 13. Toast Style Map

Recommended toast behavior:

```text
position: top-right
stack gap: 8px
surface: panel-bg
border: panel-border
radius: radius-md
shadow: shadow-sm
```

Use:

- success for save/import/control success
- error for action failures
- warning sparingly

## 14. Skeleton Style Map

Recommended skeleton tone:

```text
base: #eef2f6
highlight: #f7f9fb
radius: radius-sm
```

Use:

- page header placeholders
- table rows
- inspector sections
- config editor form blocks

## 15. Suggested Tailwind Semantic Mapping

If using Tailwind with CSS variables, map utility-friendly classes to semantic tokens.

Example direction:

```text
bg-app           -> var(--app-bg)
bg-panel         -> var(--panel-bg)
bg-panel-subtle  -> var(--panel-subtle)
border-panel     -> var(--panel-border)
text-primary     -> var(--text-primary)
text-secondary   -> var(--text-secondary)
text-muted       -> var(--text-muted)
bg-accent        -> var(--accent)
bg-accent-soft   -> var(--accent-soft)
bg-success-soft  -> var(--success-soft)
bg-warning-soft  -> var(--warning-soft)
bg-danger-soft   -> var(--danger-soft)
```

This keeps components semantic instead of hard-coding raw color values.

## 16. Component Mapping Summary

Apply these style choices to the selected V1 components:

- `PipelineTreeComponent`
  - compact rows, selected tint, subtle hover
- `PipelineConfigEditorPageComponent`
  - bordered split panels, quiet section headers
- `JobOutlineRowComponent`
  - compact row density, selected tint
- `JobCardComponent`
  - section stack with subtle separators
- `StepAccordionRowComponent`
  - understated expand/collapse affordance
- `RunInspectorComponent`
  - stacked bordered sections with independent scroll
- `RecentActivityTableComponent`
  - medium-density rows with status chips
- `PipelineHistoryPageComponent`
  - same row family as recent activity

## 17. Default Design Choice Rule

When unsure between two styles, prefer the one that is:

- cleaner
- quieter
- easier to scan
- more stable over long sessions
- less visually theatrical

That is the V1 standard.
