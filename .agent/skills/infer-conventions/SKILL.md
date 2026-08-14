---
name: infer-conventions
description: >-
  Use this skill to analyze how a Laravel application is actually written and record its conventions as shared rules.
  Trigger when the user wants to detect, infer, document, or standardize project conventions or coding style, set up or grow .ai/rules,
  resolve mixed or conflicting patterns (e.g. "are we using Form Requests or inline validation?"), or onboard agents and teammates to "how we do things here".
  Covers a systematic sweep of ~49 Laravel convention dimensions, open-ended house-pattern discovery, conflict reporting, and recording rules scoped to paths via record-rule.
---

# Infer Conventions

## Description
This skill systematically audits and infers existing codebase conventions across ~49 dimensions of a Laravel application (validation, architecture, testing, database, frontend, controllers, models) and records them into `.ai/rules` using path-scoped rules. It is triggered when standardizing codebase conventions, onboarding teammates, or documenting house styles.

## System Instructions

Learn how this application writes Laravel, then record what you learn as durable, path-scoped rules other agents will read. You are documenting reality, not improving it.

### Ground Rules (read before you start)

- **Consistency first**: The codebase's majority style is the convention. Never judge it, never propose a "better" pattern, never record what the code should do. If the app validates inline everywhere, that is the rule.
- **Skip what an active tool produces, keep what a tool would fight**: Inspect Pint and Rector config first. Active tools may rewrite code toward one canonical form. When the app deliberate holds a form an active tool would refactor away, record that choice.
- **Record decisions, not defaults**: A consistent pattern earns a rule only when it reflects a choice. Framework defaults steer nothing, so skip them. Weigh the side the app took, and record only the side an agent would not reach for by itself.
- **Architecture choices are the gold**: Record presence and deliberate absence (Action classes, Services, DTOs, Form Requests vs inline validation, query repositories, module folders).
- **Never duplicate `.ai/rules`**: Read `.ai/rules/index.md` and area files before the sweep.
- **Evidence or silence**: A convention needs at least 3 consistent examples and no meaningful rival to become a candidate.
- **The recorded rule states the convention, nothing else**: One or two imperative lines: this project does X, so do X here.

### Process

#### Step 0: Orient
Read `composer.json`, `pint.json` / PHPStan / Rector config, `.ai/rules/index.md` if present, and map the `app/` tree. List every non-default directory under `app/` (and any `Modules/`, `src/`, `packages/`, or domain root).

#### Step 1: Predefined Sweep
Open `references/checklist.md` and work every applicable dimension using its search hints. Give each exactly one verdict:
- **Pattern**: Clears the bar, rival under ~20% of sites. Recording candidate.
- **Conflict**: Both styles present in meaningful numbers. Report split with counts.
- **Default**: Framework default. Skip.
- **No signal**: Under the bar. Skip.
- **Tooling-owned or Already-recorded**: Skip.

#### Step 2: Open-Ended Pass
Close out the architecture map from Step 0. Confirm structural patterns (Actions, Services, DTOs, Repository presence/absence). Scope each qualifying pattern to its own directory glob.

#### Step 3: Confirm
Present candidates in one batch with dimension, verdict, evidence, and proposed `glob`/`title`/`note`. Obtain approval unless in `yolo` mode.

#### Step 4: Record
Execute `record-rule` for each approved convention attached to specific globs.

#### Step 5: Summarize
List recorded rules, deferred conflicts, and remind user to commit `.ai/rules`.

### Glob Mapping Guidelines
- Models: `app/Models/**`
- Controllers, routing, validation: `app/Http/**`
- Actions, Services, DTOs: `app/Actions/**`, `app/Services/**`, `app/Data/**`
- Tests: `tests/**`
- Migrations: `database/migrations/**`
