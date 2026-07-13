# DW Work Plan 3.0 Grassroot UI Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the grassroot modal blank area, improve task-row progress readability, and refresh the parent task list when a changed grassroot modal closes.

**Architecture:** Keep the existing JSP, jQuery, and page-local CSS. Constrain both grassroot columns to one viewport-height workspace with independent scrolling, render task progress as a full-width secondary block inside the title cell, and track modal mutations so the existing task reload path runs exactly once on close.

**Tech Stack:** JSP, jQuery, scoped CSS, PowerShell static verification, Playwright CLI.

## Global Constraints

- Change only the independent `dwworkplan3` module.
- Do not add or upgrade frontend frameworks or global PB assets.
- “必须完成” grassroot rows block staff completion until dispatched tasks reach `DYN_ZBRWB.RWZT='已完成'`; “自由完成” rows never block.

---

### Task 1: Add Regression Contracts

**Files:**
- Modify: `scripts/verify-dwworkplan3.ps1`

- [ ] Add assertions for the constrained grassroot workspace, the compact task progress block, and modal dirty-close refresh.
- [ ] Run `powershell -File .\scripts\verify-dwworkplan3.ps1` and confirm the new assertions fail before implementation.

### Task 2: Fix Grassroot Modal Layout

**Files:**
- Modify: `WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.css`

- [ ] Give the grassroot editor and list a shared responsive workspace height.
- [ ] Make the editor and list body scroll independently while preserving the stacked narrow-screen layout.
- [ ] Run the static verifier and confirm the layout assertions pass.

### Task 3: Improve Task Progress And Close Refresh

**Files:**
- Modify: `WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js`
- Modify: `WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.css`

- [ ] Render title and progress in a width-constrained title-content wrapper.
- [ ] Change the progress summary to compact count labels and a full-width track.
- [ ] Set a grassroot dirty flag after save, delete, or dispatch; on modal close call `afterTaskChanged()` once and clear the flag.
- [ ] Run `node --check` and the static verifier.

### Task 4: Verify Runtime And Business Rule

**Files:**
- Modify: `.codex/skills/pb-module-memory/references/modules/party-committee-work-plan-3.md`

- [ ] Confirm the Java required-completion guard remains wired into staff completion.
- [ ] Run the database verifier for required/free completion behavior.
- [ ] Restart PB with the dedicated skills.
- [ ] Log in as `910036`, capture desktop and narrow screenshots, and verify modal close refreshes the task list without manual reload.
- [ ] Run the PB frontend conflict scan and record the result in module memory.
