# Learning Log

## [LRN-20260710-001] correction

**Logged**: 2026-07-10T12:00:00+08:00
**Priority**: high
**Status**: promoted
**Area**: infra

### Summary
PB start, restart, and stop requests must use the dedicated user-level PB skills before any generic Tomcat command.

### Details
The PB restart was initially handled with generic Tomcat scripts. The applicable skills were available under `C:\Users\xyc\.codex\skills`, but only the project-local `.codex\skills` directory was searched after startup trouble began. This caused a false conclusion that no dedicated startup skill was available and led to the wrong Tomcat environment and JVM stack settings being used.

### Suggested Action
For every PB runtime request, inspect the full available skill list first. Use `pb-stop-tomcat-local` with `-StopRedis` followed by `pb-start-local` for restarts. Use `pb-java-web-runbook` only if the fast path fails. Never infer skill absence from the project-local skill directory alone.

### Metadata
- Source: user_feedback
- Related Files: C:/Users/xyc/.codex/skills/pb-start-local/SKILL.md, C:/Users/xyc/.codex/skills/pb-stop-tomcat-local/SKILL.md
- Tags: pb, startup, tomcat, skill-routing
- Promoted: PB runtime operating rule

---
