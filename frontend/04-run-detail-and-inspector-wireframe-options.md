# Run Detail And Inspector Wireframe Options

## Purpose

This document narrows the right-side runtime inspection experience into concrete layout options.

The outer shell is already defined by:

- [README.md](README.md)
- [01-app-shell-and-screen-map.md](01-app-shell-and-screen-map.md)

This document focuses on:

- the right inspector while a run is selected
- the run detail focus route
- how summary, control, attempts, and latest jobs should be arranged

## Fixed Constraints

- right inspector remains visible as part of the full-viewport shell
- control actions stay in the right inspector
- `Execute` belongs to pipeline selection, not run selection
- `Stop`, `Resume`, `Rerun`, and `Delete Run` belong to run selection
- destructive actions use custom confirm dialogs
- the panel should scroll independently when content is long
- the UI is not a live log console

Backend data available here:

- run summary
- latest status
- attempts timeline
- latest jobs
- step execution summary

## Option R1: Stacked Inspector Sections

Recommended option.

```text
+------------------------------------------------------+
| Run #184                                             |
| Pipeline: sync-order                                 |
| Status: STARTED                                      |
| Requested Async: true                                |
| Started: 10:32                                       |
|------------------------------------------------------|
| Control                                              |
| [Stop] [Resume] [Rerun] [Delete Run]                 |
|------------------------------------------------------|
| Attempts                                             |
| 1. INITIAL   FAILED                                  |
| 2. RESUME    STARTED                                 |
|------------------------------------------------------|
| Latest Jobs                                          |
| > extract-order   COMPLETED                          |
|   upsert-order    STARTED                            |
|------------------------------------------------------|
| Step Summary                                         |
| step_extract   COMPLETED                             |
| step_upsert    STARTED                               |
+------------------------------------------------------+
```

Pros:

- simplest runtime inspection model
- strongest fit for `Clean Productivity`
- easiest to implement with panel-scoped scrolling
- keeps all core runtime signals visible at once

Cons:

- lower sections can fall below the fold on shorter screens
- step summary must stay concise

## Option R2: Stacked Header Plus Inner Tabs

```text
+------------------------------------------------------+
| Run #184                                             |
| Pipeline: sync-order                                 |
| Status: STARTED                                      |
| Requested Async: true                                |
|------------------------------------------------------|
| Control                                              |
| [Stop] [Resume] [Rerun] [Delete Run]                 |
|------------------------------------------------------|
| Tabs: [Attempts] [Jobs] [Steps]                      |
|------------------------------------------------------|
| 1. INITIAL   FAILED                                  |
| 2. RESUME    STARTED                                 |
+------------------------------------------------------+
```

Pros:

- uses inspector height more efficiently
- allows richer detail in each tab
- reduces long panel scrolling

Cons:

- hides information behind another navigation layer
- more interaction cost during monitoring
- weaker at quick glance status review

## Option R3: Summary Cards And Separate Run Detail Panel

```text
+------------------------------------------------------+
| Run Summary                                          |
| #184  STARTED  sync-order                            |
|------------------------------------------------------|
| Actions                                              |
| [Stop] [Resume] [Rerun] [Delete Run]                 |
|------------------------------------------------------|
| Attempts Card                                        |
| INITIAL -> FAILED                                    |
| RESUME  -> STARTED                                   |
|------------------------------------------------------|
| Jobs Card                                            |
| extract-order  COMPLETED                             |
| upsert-order   STARTED                               |
|------------------------------------------------------|
| [Open Full Run Detail]                               |
+------------------------------------------------------+
```

Pros:

- visually light
- suitable if the right inspector should stay minimal
- leaves deeper detail to a main-panel route

Cons:

- splits inspection across two locations
- weaker for direct operator control
- less aligned with the current shell principle of stable right-side inspection

## Recommendation

Chosen:

- **Option R1: Stacked Inspector Sections**

Reason:

- best match for the fixed shell direction
- keeps runtime control and observation tightly coupled
- avoids unnecessary tabs inside an already narrow panel
- strongest fit for the current backend API shape

## Next Decision

After choosing the inspector structure, the next detail should be:

- attempts timeline row density
- latest jobs row density
- step summary presentation

## Attempts Timeline Density Options

### Option T1: Compact Status Rows

```text
+--------------------------------------+
| Attempts                             |
|--------------------------------------|
| 1. INITIAL   FAILED                  |
| 2. RESUME    STARTED                 |
+--------------------------------------+
```

Pros:

- shortest layout
- easiest to scan quickly

Cons:

- too little timing context
- weaker for operational inspection

### Option T2: Medium Detail Rows

Chosen option.

```text
+--------------------------------------+
| Attempts                             |
|--------------------------------------|
| 1. INITIAL                           |
|    FAILED   10:02 -> 10:05           |
| 2. RESUME                            |
|    STARTED  10:06 -> now             |
+--------------------------------------+
```

Pros:

- best balance between readability and context
- keeps start/end timing visible
- still fits a narrow inspector

Cons:

- less compact than T1
- needs careful text truncation on smaller widths

### Option T3: Full Detail Rows

```text
+--------------------------------------+
| Attempts                             |
|--------------------------------------|
| 1. INITIAL                           |
|    executionId: 801                  |
|    status: FAILED                    |
|    requestedAsync: true              |
|    10:02 -> 10:05                    |
|--------------------------------------|
| 2. RESUME                            |
|    executionId: 802                  |
|    status: STARTED                   |
|    requestedAsync: true              |
|    10:06 -> now                      |
+--------------------------------------+
```

Pros:

- most explicit runtime detail
- better for engineering diagnostics

Cons:

- too heavy for the default inspector
- consumes height very quickly

## Recommendation For Attempts Timeline

Chosen:

- **Option T2: medium detail rows**

Reason:

- enough timing context for operators
- still fits the `Clean Productivity` direction
- avoids turning the inspector into a debug panel

## Latest Jobs Density Options

### Option J1: Compact Status Rows

```text
+--------------------------------------+
| Latest Jobs                          |
|--------------------------------------|
| extract-order   COMPLETED            |
| upsert-order    STARTED              |
| notify-order    PENDING              |
+--------------------------------------+
```

Pros:

- shortest presentation
- easiest to scan quickly

Cons:

- timing context is missing
- weaker for operator inspection

### Option J2: Medium Detail Rows

Chosen option.

```text
+--------------------------------------+
| Latest Jobs                          |
|--------------------------------------|
| extract-order                        |
| COMPLETED   10:02 -> 10:03           |
| upsert-order                         |
| STARTED     10:03 -> now             |
+--------------------------------------+
```

Pros:

- balanced density for an inspector panel
- preserves timing context
- matches the selected attempts timeline density

Cons:

- less compact than single-line rows
- long names need truncation rules

### Option J3: Full Job Rows

```text
+--------------------------------------+
| Latest Jobs                          |
|--------------------------------------|
| extract-order                        |
| atomic: CHUNK                        |
| status: COMPLETED                    |
| executionId: 998                     |
| 10:02 -> 10:03                       |
|--------------------------------------|
| upsert-order                         |
| atomic: JOB                          |
| status: STARTED                      |
| executionId: 999                     |
| 10:03 -> now                         |
+--------------------------------------+
```

Pros:

- richest engineering detail
- useful for deep runtime inspection

Cons:

- too heavy for the default inspector
- duplicates detail better suited to a dedicated run page

## Recommendation For Latest Jobs

Chosen:

- **Option J2: medium detail rows**

Reason:

- preserves enough operator context
- stays visually aligned with the attempts timeline
- avoids overloading the right inspector

## Step Summary Presentation Options

### Option SUI1: Compact Status List

```text
+--------------------------------------+
| Step Summary                         |
|--------------------------------------|
| step_extract   COMPLETED             |
| step_upsert    STARTED               |
+--------------------------------------+
```

Pros:

- shortest presentation
- easiest to scan quickly

Cons:

- too little context for runtime inspection
- does not explain throughput or focus

### Option SUI2: Medium Detail List

```text
+--------------------------------------+
| Step Summary                         |
|--------------------------------------|
| step_extract                         |
| COMPLETED   read:100  write:100      |
| step_upsert                          |
| STARTED     read:40   write:0        |
+--------------------------------------+
```

Pros:

- better operational context
- still relatively compact

Cons:

- grows quickly if multiple jobs are represented
- can make the inspector feel too dense

### Option SUI3: Selected-Job Steps Only

Chosen option.

```text
+--------------------------------------+
| Step Summary                         |
|--------------------------------------|
| Job: upsert-order                    |
| step_upsert                          |
| STARTED     read:40   write:0        |
+--------------------------------------+
```

Pros:

- best fit for a narrow inspector
- keeps the user focused on the currently selected job
- avoids turning the panel into a long debug surface

Cons:

- hides broader multi-job step context
- requires clear job selection behavior

## Recommendation For Step Summary

Chosen:

- **Option SUI3: selected-job steps only**

Reason:

- strongest fit for the full-viewport shell
- best protection against inspector overflow
- leaves deeper multi-job analysis to larger run detail views
