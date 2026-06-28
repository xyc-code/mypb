# PB Frontend Risk Guide

## Existing Stack

This PB project is a legacy low-code Java Web platform. Existing pages commonly use:

- JSP with server-side tags and platform includes
- jQuery 1.8/1.9 era scripts
- jQuery EasyUI 1.3.5
- layer v2.3
- Bootstrap assets under `WebRoot/static/h5/bootstrap`
- zTree, jqGrid, select2, WebUploader, ECharts, CKPlayer, PDF.js
- platform scripts under `WebRoot/static/js/platform`
- low-code/eform pages under `WebRoot/avicit/eformmodule`
- BPM and workflow scripts under `WebRoot/avicit/platform6/bpm*`

## Safe Modernization Pattern

Use a frontend island:

```jsp
<div class="pb-modern-page pb-feature-x" id="pb-feature-x-root">
  <!-- new feature UI -->
</div>
<link rel="stylesheet" href="static/pb-modern/feature-x/feature-x.css">
<script src="static/pb-modern/feature-x/feature-x.js"></script>
```

Rules:

- Scope CSS to `.pb-modern-page` or `.pb-feature-x`.
- Avoid selectors such as `body`, `html`, `*`, `input`, `.panel`, `.tabs`, `.window`, `.datagrid`, `.easyui-*`, `.layui-*`, `.modal`, `.btn` unless nested under the wrapper.
- Avoid global JS names. Use an IIFE or module-style bundle exposing at most one feature namespace.
- Do not override `window.$`, `window.jQuery`, `$.fn`, `Date.prototype`, `Array.prototype`, or platform globals.
- Do not import a second jQuery or EasyUI into existing pages.
- Do not add external `http://`, `https://`, CDN, Google Fonts, npm CDN, unpkg, jsDelivr, bootcdn, or fontawesome CDN references.
- Keep fonts/images local and include them in intranet packages.

## Framework Choices

Recommended for isolated features:

- Plain JS + scoped CSS for small pages.
- Vue runtime as a local static asset for richer page islands, mounted to a single root.
- Alpine.js-style local enhancement only if no global conflicts are introduced.
- Existing Bootstrap/ECharts/jqGrid/layer when they already satisfy the need.

Use extra caution:

- React/Vue with build tooling: build outside intranet and copy final static assets only.
- Element UI/Element Plus/Ant Design: likely global CSS conflicts; require wrapper, reset review, and visual testing.
- Tailwind preflight or CSS reset: disable preflight or scope output; never apply global reset.
- Bootstrap upgrades: do not replace existing Bootstrap globally.

Avoid unless explicitly approved:

- Global SPA router takeover.
- Replacing platform navigation, login, EasyUI layouts, BPM/eform runtime pages.
- Global CSS variables/reset that affect the whole application.
- Any dependency that requires intranet npm install/build.

## Pages That Need Extra Caution

- Login pages under `WebRoot/login`
- Platform console/system pages under `WebRoot/avicit/platform6`
- Eform low-code pages under `WebRoot/avicit/eformmodule`
- BPM pages and workflow utilities
- Any page using `easyui-layout`, `datagrid`, `tabs`, `window`, or platform common includes

## Intranet Packaging Notes

When frontend assets are added, the PB intranet package must include:

- JSP entry files
- feature JS/CSS
- fonts/images/icons
- built vendor chunks
- source maps only if intentionally needed

Do not package npm cache, `node_modules`, Vite/Webpack dev server files, or external build artifacts outside `WebRoot/static/...`.
