# Validation

From the repository root:

```sh
npm install
npm test
npm run validate
```

`npm test` proves that a complete fixture passes and an incomplete, malformed fixture fails. `npm run validate` checks all accepted `techniques/*.json` records and exits non-zero if any record is invalid. The command succeeds with an explicit message while the catalog is intentionally empty.

