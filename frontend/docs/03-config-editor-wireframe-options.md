# Config Editor Wireframe Options

## Purpose

This document narrows the `form-based editor` decision into concrete layout options.

The outer app shell is already fixed by:

- [README.md](README.md)
- [01-app-shell-and-screen-map.md](01-app-shell-and-screen-map.md)

This document only discusses the center workarea while the user is on:

- `/pipelines/:pipelineId/config`

## Fixed Constraints

- right inspector remains available for selected pipeline or run context
- the editor is form-based, not JSON-first
- the editor must support `pipelineName`, folder move, job editing, step editing, save, import replace, and delete pipeline
- V1 should stay practical for medium-sized pipelines
- the editor lives inside a full-viewport shell
- the page itself should not become the main vertical scroll container
- overflow should be handled by local panels such as the job outline or editor form

Important terminology note:

- current backend `connection` means a job-level database connection
- this is represented by source and destination database config inside one job
- current backend does not expose a separate job-to-job edge model
- job order is currently represented by list order / `sequenceOrder`

## Option A: Split Master-Detail Editor

Selected option.

Recommended option.

```text
+--------------------------------------------------------------------------------------------------+
| Pipeline: sync-order                                              [Save] [Import] [Delete]       |
| Folder: /orders                                                                              |
| Tabs: [Overview] [Config*] [Runs]                                                            |
+--------------------------------------------------------------------------------------------------+
| JOB OUTLINE                             | EDITOR FORM                                          |
|-----------------------------------------|------------------------------------------------------|
| [ + Add Job ]                           | Pipeline                                              |
|                                         | Name:   [ sync-order                              ]  |
| Jobs                                    | Folder: [ /orders                                 ]  |
| 1. extract-order      [selected]        |                                                      |
| 2. upsert-order                         | Selected Job: extract-order                          |
| 3. notify-order                         | Atomic Level: [ CHUNK v ]                            |
|                                         | Execution Type: [ READER_TO_DB v ]                   |
|                                         | Database Config                                      |
|                                         | Reader Source: [ orders_db ]                         |
|                                         | Writer Target: [ warehouse_db ]                      |
|                                         |                                                      |
|                                         | Steps                                                |
|                                         | [Step Card 1.................................]       |
|                                         | [Step Card 2.................................]       |
+--------------------------------------------------------------------------------------------------+
```

Pros:

- best balance between readability and edit speed
- job selection is always visible
- fits medium pipelines better than a long single form
- easiest bridge toward a richer designer later without discarding V1
- works well with panel-scoped scrolling

Cons:

- center area becomes busy if forms are too dense
- requires careful responsive collapse behavior

## Option B: Single-Column Section Form

```text
+--------------------------------------------------------------------------------------------------+
| Pipeline: sync-order                                              [Save] [Import] [Delete]       |
| Folder: /orders                                                                              |
| Tabs: [Overview] [Config*] [Runs]                                                            |
+--------------------------------------------------------------------------------------------------+
| Pipeline Metadata                                                                 |
| Name:   [ sync-order                                                         ]    |
| Folder: [ /orders                                                            ]    |
+--------------------------------------------------------------------------------------------------+
| Jobs                                                                              |
| [ + Add Job ]                                                                     |
|------------------------------------------------------------------------------------|
| Job 1: extract-order                                                               |
| Atomic Level: [ CHUNK v ]                                                          |
| Execution Type: [ READER_TO_DB v ]                                                 |
| [Step Card 1.................................]                                     |
| [Step Card 2.................................]                                     |
|------------------------------------------------------------------------------------|
| Job 2: upsert-order                                                                |
| Atomic Level: [ JOB v ]                                                            |
| Execution Type: [ WRITER_ONLY v ]                                                  |
| [Step Card 1.................................]                                     |
+--------------------------------------------------------------------------------------------------+
```

Pros:

- simplest implementation
- easiest to understand for first-time users
- works well for short pipelines

Cons:

- becomes long and heavy as jobs increase
- difficult to compare jobs quickly
- less efficient for moving between jobs

## Option C: Table-Like Job List + Detail Drawer

```text
+--------------------------------------------------------------------------------------------------+
| Pipeline: sync-order                                              [Save] [Import] [Delete]       |
| Folder: /orders                                                                              |
| Tabs: [Overview] [Config*] [Runs]                                                            |
+--------------------------------------------------------------------------------------------------+
| Jobs                                                                              |
|------------------------------------------------------------------------------------|
| Name            Atomic Level    Execution Type      Actions                        |
| extract-order   CHUNK           READER_TO_DB        [Edit] [Delete]               |
| upsert-order    JOB             WRITER_ONLY         [Edit] [Delete]               |
| notify-order    JOB             TASKLET             [Edit] [Delete]               |
+--------------------------------------------------------------------------------------------------+
| DETAIL DRAWER / PANEL                                                             |
| Selected Job: extract-order                                                       |
| Atomic Level: [ CHUNK v ]                                                         |
| Execution Type: [ READER_TO_DB v ]                                                |
| [Step Card 1.................................]                                    |
+--------------------------------------------------------------------------------------------------+
```

Pros:

- compact overview of many jobs
- good scanning density
- efficient when users mostly edit metadata

Cons:

- less natural for complex step editing
- more admin-table feeling, less "clean productivity"
- drawer mechanics add interaction overhead

## Comparison

| Option | Best For | Risk | V1 Fit |
|---|---|---|---|
| A | medium pipelines and repeated editing | moderate layout complexity | strongest |
| B | small pipelines and fastest implementation | long scrolling | acceptable |
| C | dense overview and quick metadata edits | table-heavy interaction | weaker |

## Selected Direction

Chosen:

- **Option A: Split Master-Detail Editor**

Reason:

- it matches the selected `Clean Productivity` direction
- it stays form-based without turning into a giant scroll page
- it scales better than Option B when pipelines have more jobs
- it avoids the heavier enterprise-table feel of Option C
- it fits the panel-scoped scrolling rule better than the other options

## Scroll Behavior

Apply these rules when implementing Option A:

- the full app shell should fit the viewport height
- the main config page should not push the browser page into long vertical scroll
- `JOB OUTLINE` should scroll independently when the job list is long
- `EDITOR FORM` should scroll independently when the selected job form is long
- right inspector should scroll independently if its content exceeds height

## Next Decision

After choosing an option here, the next design detail should be:

- job card structure
- execution step card structure
- connection editing flow

## Job Outline Density Options

These options apply to the left `JOB OUTLINE` panel inside Option A.

### Option 1: Compact Row List

Recommended option.

```text
+-----------------------------------------+
| [ + Add Job ]                           |
|-----------------------------------------|
| Jobs                                    |
| > extract-order   CHUNK   2 steps       |
|   upsert-order    JOB     1 step        |
|   notify-order    JOB     1 step        |
+-----------------------------------------+
```

Pros:

- strongest fit for `Clean Productivity`
- highest information density without looking heavy
- most jobs remain visible at once
- easiest to scan and switch quickly
- correctly matches the current backend model, where job order is implied by list sequence

Cons:

- less room for secondary metadata

### Option 2: Medium Summary Cards

```text
+-----------------------------------------+
| [ + Add Job ]                           |
|-----------------------------------------|
| [extract-order]                         |
| Atomic: CHUNK                           |
| Steps: 2                                |
|-----------------------------------------|
| [upsert-order]                          |
| Atomic: JOB                             |
| Steps: 1                                |
|-----------------------------------------|
| [notify-order]                          |
| Atomic: JOB                             |
| Steps: 1                                |
+-----------------------------------------+
```

Pros:

- easier to read for first-time users
- more visual separation between jobs
- room for slightly richer summary

Cons:

- consumes much more height
- fewer jobs remain visible
- easier for the panel to feel bulky

### Option 3: Mini Structure Tree

```text
+-----------------------------------------+
| [ + Add Job ]                           |
|-----------------------------------------|
| Jobs                                    |
| > extract-order                         |
|   |- step 1                             |
|   |- step 2                             |
| > upsert-order                          |
|   |- step 1                             |
| > notify-order                          |
|   |- step 1                             |
+-----------------------------------------+
```

Pros:

- expresses structure more explicitly
- useful when users think in step hierarchy

Cons:

- starts to feel like a designer too early
- duplicates structure that already exists in the editor form
- weaker fit for V1 simplicity

## Recommendation For Job Outline

Choose **Option 1: Compact Row List**.

Reason:

- best match for the selected visual direction
- supports the full-viewport, panel-scoped scrolling rule well
- leaves more space for the editor form, which is where the real detail lives

## Job Card Options

These options apply to the right `EDITOR FORM` panel inside Option A.

### Option A1: Section Stack Card

Recommended option.

```text
+------------------------------------------------------+
| Selected Job: extract-order                          |
|------------------------------------------------------|
| Basic                                                |
| Name:            [ extract-order                  ]  |
| Atomic Level:    [ CHUNK v ]                         |
| Execution Type:  [ READER_TO_DB v ]                  |
|------------------------------------------------------|
| Database                                             |
| Reader Source:   [ orders_db                      ]  |
| Writer Target:   [ warehouse_db                   ]  |
|------------------------------------------------------|
| Steps                                                |
| [ Step 1 Card .................................... ] |
| [ Step 2 Card .................................... ] |
| [ + Add Step ]                                       |
+------------------------------------------------------+
```

Pros:

- clearest hierarchy
- easiest to implement and validate
- strongest fit for `Clean Productivity`
- works naturally with panel-scoped scrolling

Cons:

- can grow vertically when a job has many steps
- relies on good spacing discipline to avoid feeling long

### Option A2: Accordion Sections

```text
+------------------------------------------------------+
| Selected Job: extract-order                          |
|------------------------------------------------------|
| [v] Basic                                            |
| Name:            [ extract-order                  ]  |
| Atomic Level:    [ CHUNK v ]                         |
| Execution Type:  [ READER_TO_DB v ]                  |
|------------------------------------------------------|
| [>] Database                                         |
|------------------------------------------------------|
| [v] Steps                                            |
| [ Step 1 Card .................................... ] |
| [ Step 2 Card .................................... ] |
| [ + Add Step ]                                       |
+------------------------------------------------------+
```

Pros:

- keeps the visible form shorter
- helps when jobs have many optional sections
- can reduce scroll pressure

Cons:

- adds interaction overhead
- hides information too aggressively for V1
- easier to make state feel fiddly

### Option A3: Two-Column Metadata + Step Stack

```text
+------------------------------------------------------+
| Selected Job: extract-order                          |
|------------------------------------------------------|
| Name:           [ extract-order                  ]   |
| Atomic Level:   [ CHUNK v ]   Execution: [ ...  ]   |
| Reader Source:  [ orders_db                      ]   |
| Writer Target:  [ warehouse_db                   ]   |
|------------------------------------------------------|
| Steps                                                |
| [ Step 1 Card .................................... ] |
| [ Step 2 Card .................................... ] |
| [ + Add Step ]                                       |
+------------------------------------------------------+
```

Pros:

- compact
- keeps key metadata visible above the fold
- suitable for wide desktop layouts

Cons:

- field alignment is more fragile
- easier to feel cramped
- less calm than a simple section stack

## Recommendation For Job Card

Chosen:

- **Option A1: Section Stack Card**

Reason:

- best balance between structure and simplicity
- easiest starting point for form validation and inline errors
- avoids accordion complexity
- cleaner and calmer than the denser two-column layout

## Step Card Options

These options apply inside the `Steps` section of the selected job card.

### Option S1: Compact Stacked Step Cards

```text
+------------------------------------------------------+
| Steps                                                |
|------------------------------------------------------|
| [ Step 1: extract                                   ]|
| Type: [ READER v ]   Name: [ extract            ]    |
| SQL:  [ textarea................................. ]  |
| Params: 2                                            |
| [Expand] [Delete]                                    |
|------------------------------------------------------|
| [ Step 2: upsert                                    ]|
| Type: [ WRITER v ]   Name: [ upsert             ]    |
| Dest Table: [ orders_target                     ]    |
| Params: 1                                            |
| [Expand] [Delete]                                    |
|------------------------------------------------------|
| [ + Add Step ]                                       |
+------------------------------------------------------+
```

Pros:

- very explicit
- little hidden state
- easier to understand at first glance

Cons:

- grows vertically too quickly
- weaker fit for panel-scoped scrolling

### Option S2: One Expanded Step, Others Collapsed

Chosen option.

```text
+------------------------------------------------------+
| Steps                                                |
|------------------------------------------------------|
| [v] Step 1: extract                                  |
| Type: [ READER v ]                                   |
| Name: [ extract                                  ]   |
| SQL:  [ textarea................................. ]  |
| Params:                                              |
| - limit = 1000                                       |
| - watermark = updated_at                             |
|------------------------------------------------------|
| [>] Step 2: upsert                                   |
| [>] Step 3: notify                                   |
|------------------------------------------------------|
| [ + Add Step ]                                       |
+------------------------------------------------------+
```

Pros:

- best balance between detail and vertical space
- keeps editing focused on one step at a time
- fits the full-viewport shell better than fully expanded stacks

Cons:

- requires clear expand/collapse affordance
- hidden sections must still show enough summary

### Option S3: Table Summary + Detail Panel

```text
+------------------------------------------------------+
| Steps                                                |
|------------------------------------------------------|
| Name        Type        Key Info          Actions    |
| extract     READER      SQL               [Edit]     |
| upsert      WRITER      dest=orders       [Edit]     |
| notify      TASKLET     notify            [Edit]     |
|------------------------------------------------------|
| Selected Step Detail                                 |
| Name: [ extract                                  ]   |
| Type: [ READER v ]                                   |
| SQL:  [ textarea................................. ]  |
+------------------------------------------------------+
```

Pros:

- compact overview for many steps
- more desktop-like density

Cons:

- starts to feel table-heavy
- less natural for form editing
- weaker fit for `Clean Productivity`

## Recommendation For Step Card

Chosen:

- **Option S2: one expanded step, others collapsed**

Reason:

- best fit for the panel-scoped scrolling rule
- avoids long fully expanded forms
- keeps the editor focused without becoming table-heavy

## Connection Editing Options

These options apply to the `Database` section inside the selected job card.

### Option C1: Inline Fields Inside The Job Card

Chosen option.

```text
+------------------------------------------------------+
| Database                                             |
| Reader Source:   [ orders_db                      ]  |
| Writer Target:   [ warehouse_db                   ]  |
| Driver:          [ org.postgresql.Driver          ]  |
| URL:             [ jdbc:postgresql://...          ]  |
| Username:        [ app_user                       ]  |
| Password:        [ ********                       ]  |
+------------------------------------------------------+
```

Pros:

- best match for the current backend contract
- keeps editing in one place
- no extra dialog flow is required
- straightforward for V1 implementation

Cons:

- can feel form-heavy
- later secret-management refactor may change this area

### Option C2: Compact Selectors Plus Edit Dialog

```text
+------------------------------------------------------+
| Database                                             |
| Reader Source: [ orders_db v ] [Edit]               |
| Writer Target: [ warehouse_db v ] [Edit]            |
+------------------------------------------------------+
```

Pros:

- visually cleaner
- keeps the main job card shorter

Cons:

- implies reusable connection records that backend does not yet provide
- adds dialog complexity too early

### Option C3: Read-Only Summary Plus Manage Dialog

```text
+------------------------------------------------------+
| Database                                             |
| Reader: orders_db                                    |
| Writer: warehouse_db                                 |
| [Manage Reader] [Manage Writer]                      |
+------------------------------------------------------+
```

Pros:

- shortest visual footprint
- future-friendly if settings/secret management becomes separate

Cons:

- weakest match for the current backend
- too indirect for V1 editing flow

## Recommendation For Connection Editing

Chosen:

- **Option C1: inline fields inside the job card**

Reason:

- aligns with the current backend model
- avoids premature abstraction around connection registries or settings pages
- keeps the first editor iteration practical
