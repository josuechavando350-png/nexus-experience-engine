# Nexus Experience Engine architecture

## Purpose

Nexus Experience Engine is a structured knowledge system for producing original premium web experiences. It connects creative intent to reusable mechanics, constraints, degradation, and evidence. It is deliberately not a website, template collection, asset archive, or snippet library.

Foundation 01 defines **Experience Genome v0.1** and the smallest architecture required to validate it. It contains no external research and no production technique claims.

## Modules

| Module | Responsibility |
| --- | --- |
| `genome/` | Canonical JSON Schema and the lightweight validator. |
| `techniques/` | Reviewed technique records; currently empty by design. |
| `protocols/` | Future versioned observation-to-validation procedures. |
| `directors/` | Future Strategy and Creative Direction contracts. |
| `critic/` | Future quality and originality evaluation rules. |
| `research/` | Future raw observations and provenance, kept apart from abstractions. |
| `tests/` | Positive and negative schema fixtures plus executable tests. |
| `docs/` | Architecture and operating documentation. |

The root `AGENTS.md` is the permanent constitution governing every module.

## Information flow

The future controlled flow is:

1. **Observe:** Research records a behavior and its provenance without copying assets or code.
2. **Describe:** a protocol separates verifiable behavior from interpretation.
3. **Abstract:** a candidate Genome record captures intent and objective mechanics rather than a layout recipe.
4. **Reconstruct:** Builder produces an original internal implementation, when needed.
5. **Validate:** automated schema checks and later human/technical checks gather evidence.
6. **Review and admit:** only reviewed entries move to `techniques/`; Critic can reject or deprecate them.
7. **Select and combine:** Directors query domains, emotional character, compatibility, constraints, and tiers.

Raw research, reusable abstraction, and implementation remain separate. This boundary prevents an observation from silently becoming a template.

## Experience Genome v0.1

Each JSON entry is a capability contract. Required fields cover identity and lifecycle; one or more creative domains; purpose and mechanics; triggers and tunable parameters; dependencies and implementation families; CPU, GPU, and memory estimates; accessibility; mobile-specific behavior; reduced motion and fallback; emotional character and industry fit; compatibility and conflict; scoring; performance variants; internal implementation references; provenance; and notes.

Mobile is a structured decision, not a boolean. A record must state desktop and mobile behavior, touch alternatives, hover replacement, gestures, reduced complexity, and its mobile performance fallback.

Performance variants use `ULTRA`, `HIGH`, `MEDIUM`, and `STATIC`. The schema records a recommended tier and at least one behavioral variant. It does not detect hardware or prescribe runtime selection.

Emotional character is an extensible, normalized lowercase vocabulary. Values such as `quiet luxury`, `precision`, or `warmth` can evolve without a schema release while still supporting future intent-based queries.

### Score semantics

Both scores are integers from **0 through 100**:

- `saturationScore`: **0** means rarely encountered in the stated contemporary context; **100** means severely overused. A high score warns against default use and demands stronger differentiation.
- `originalityScore`: **0** means conventional or undifferentiated in context; **100** means highly distinctive. It evaluates the abstraction and execution evidence, never ownership of a broad idea.

Scores are not universal truth. Future real entries must support them with dated observations and review context. This foundation assigns no real-world technique scores; fixture zeroes only test schema boundaries.

## Registering a technique

1. Follow the repository constitution and the applicable versioned protocol.
2. Keep evidence in `research/`; create a candidate JSON record outside the accepted catalog during review.
3. Describe why the capability exists before how it works. Include objective mechanics, not source code.
4. Complete mobile, accessibility, reduced-motion, cost, fallback, avoidance, tier, compatibility, and provenance fields.
5. Run the validation tests and validate the candidate.
6. Obtain creative and technical review. A `DRAFT` record is not established knowledge.
7. Move an approved record into `techniques/` and advance its lifecycle status according to the future governance protocol.

JSON Schema prevents missing required fields, unknown fields, invalid enums, malformed identifiers, and out-of-range scores. Tests ensure both acceptance and rejection paths work. Schema validity is necessary but not sufficient: later review protocols must assess evidence, originality, usability, implementation quality, and whether stated fallbacks preserve intent.

## Avoiding a snippet collection

The schema emphasizes intent, observable mechanics, constraints, combinations, provenance, and validation. `implementationReference` can point only to an original internal prototype/module/spec or to nothing; the Genome does not embed source code. Research and implementations have separate lifecycles. Admission requires abstraction and review, and the `avoidWhen` field makes limitations first-class.

## Future responsibilities

- **Strategy** will interpret business, audience, ticket, positioning, and desired outcome.
- **Creative Direction** will translate that strategy into emotional and experiential intent across art direction, motion, cinema, and game interaction, then select compatible Genome records.
- **Builder** will turn approved direction into an original frontend implementation using internal references and tier constraints.
- **Critic** will challenge generic structure, repetition, poor UX, purposeless motion, weak originality, accessibility failures, and technical risk.

These are boundaries, not agents implemented in this sprint.

## Anti-repetition readiness

A future build artifact can store a structural fingerprint adjacent to build metadata without changing technique records. Its dimensions can include hero structure, navigation, typography, grid, section composition, CTA patterns, image behavior, motion vocabulary, and scroll rhythm. Directors can compare fingerprints while Genome entries remain reusable capability units. No similarity engine or fingerprint data is implemented yet.

## Validation commands

Install the pinned development dependencies once, then run:

```sh
npm test
npm run validate
```

The first command checks valid and invalid fixtures. The second validates every accepted JSON entry in `techniques/`; an empty catalog is valid at foundation time and is reported explicitly. See `tests/README.md` for the concise runbook.
