---
name: pb-module-memory
description: Use when working on the PB project and the user mentions starting a new module, resuming an old module, changing module business behavior, touching PB low-code form/view/workflow/menu/permission configuration, or preparing a module for intranet handoff.
---

# PB Module Memory

Use this project-local skill to keep module knowledge reusable without creating one skill per module.

## Core Rules

- When the user asks to create a new PB module or substantial feature, ask once whether to create module memory for it.
- When the user mentions an existing module, search `references/modules/` for a matching memory before changing files, SQL, low-code forms, views, workflows, menus, or permissions.
- During development, append only useful facts: business rules, decisions, pitfalls, changed files, changed tables, SQL/config migration notes, and user preferences.
- Before intranet packaging or handoff, update the module memory with the final handoff summary, then use `pb-intranet-packager`.
- Do not store passwords, private tokens, or local-only secrets in module memory.
- Keep one total skill and many module memory files. Do not create a new skill for each module unless the user explicitly asks.

## Workflow

1. Identify the module name from the user's words or the touched files/tables.
2. Normalize the memory filename to lowercase hyphen-case, for example `party-member-adjustment.md`.
3. If no memory exists and the work is a new module/substantial feature, ask whether to create it.
4. If creating, copy the structure from `references/module-template.md`.
5. If resuming, read the matching module memory before implementation.
6. Update memory after important decisions, resolved bugs, platform pitfalls, or intranet packaging.

## What To Record

- Business purpose and current status.
- Tables, mandatory audit-field notes, and risky SQL.
- Low-code form, view, workflow, menu, permission, dictionary, and platform configuration.
- Java/JSP/JS/CSS/Mapper/XML files changed.
- Local test facts and known verification steps.
- Intranet delivery notes: copied files, SQL/config migration, manual platform steps, and baseline date.
- Communication notes: user preferences, rejected approaches, and decisions that prevented rework.

## Related PB Skills

- Use `pb-table-audit-fields` for every new or changed data table.
- Use `pb-frontend-guardrails` before adding frontend frameworks or shared UI dependencies.
- Use `pb-intranet-packager` when the user says to package or hand off to the intranet.
