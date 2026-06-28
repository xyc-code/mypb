---
name: pb-frontend-guardrails
description: Guardrails for adding modern frontend frameworks or prettier UI to the PB low-code Java Web project without breaking existing JSP, jQuery, EasyUI, layer, platform components, eform, BPM, login, or intranet deployment behavior. Use when the user wants to add Vue/React/Bootstrap/Element UI/layui/other frontend assets, modernize pages, improve UI styling, or check whether new frontend code conflicts with the existing PB platform.
---

# PB Frontend Guardrails

Use this project-local skill before adding or packaging frontend framework code for PB. The goal is local page enhancement, not a global frontend rewrite.

## Default Strategy

1. Prefer a small, page-local frontend island over changing platform-wide JSP/layout/theme files.
2. Put new static assets under a feature namespace, for example `WebRoot/static/pb-modern/<feature>/`.
3. Keep all CSS under one wrapper class, for example `.pb-modern-page` or `.pb-<feature>-page`.
4. Do not replace or globally upgrade jQuery, EasyUI, layer, Bootstrap, platform common scripts, login scripts, eform scripts, or BPM scripts.
5. Do not depend on CDN or intranet npm builds. Build externally if needed, then commit/copy final local JS/CSS assets.
6. Before finishing, run `scripts/check-frontend-conflicts.ps1` and review warnings.

## Existing Frontend Surface

Read `references/frontend-risk-guide.md` before planning frontend framework additions or UI modernization.

## Conflict Check

Scan changed frontend files against the PB baseline:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\.codex\skills\pb-frontend-guardrails\scripts\check-frontend-conflicts.ps1
```

Scan specific files:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\.codex\skills\pb-frontend-guardrails\scripts\check-frontend-conflicts.ps1 -Paths WebRoot\avicit\demo\page.jsp,WebRoot\static\pb-modern\demo\demo.css
```

## Required Answer Shape

When using this skill, report:

- framework/assets proposed or added,
- where assets live,
- wrapper namespace,
- known conflicts checked,
- whether existing modules/login/eform/BPM/global styles are untouched,
- intranet packaging notes for JS/CSS/fonts/images.
