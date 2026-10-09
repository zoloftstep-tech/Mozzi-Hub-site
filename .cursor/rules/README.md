# Cursor rules template — what to copy

Universal pack for future projects. Keep modules separate; do not merge into one mega-rule.

| File | Always? | Notes |
|------|---------|--------|
| `02-project-defaults.mdc` | Yes | Pragmatic internal tools |
| `03-web-and-automation.mdc` | Yes | Forms, CRUD, scripts |
| `04-safety-invariants.mdc` | Yes | Money/auth/idempotency exceptions to “least code” |
| `05-source-of-truth.mdc` | Yes if multi-surface or shared data | Single SoT |
| `06-integration-contracts.mdc` | Yes if ≥2 services/repos or webhooks | Skip for pure local scripts |
| `07-auth-webhooks-access.mdc` | Yes if accounts or machine APIs | Identity sections N/A without auth |
| `08-api-validation-boundaries.mdc` | Yes for Next/API apps | Allowlist + client/server split |
| `09-release-data-safety.mdc` | Yes for deployable apps with DB | Lightweight; ops detail → `OPS.md` |
| `01-seo-belarus.mdc` | Only public SEO sites | Not for CRM/admin/bots |

## Intentionally not in the universal pack

- MFA / forced re-auth (add in **project** rules if needed)
- Named permission catalogs / enterprise RBAC (project TZ + `00-*-invariants`)
- Full CI/secret-scan/restore-drill playbooks (OPS / project pre-push)

## Project-local layer

Add `00-<product>-invariants.mdc` for product-specific SoT, roles, money module paths, and hard bans. Universal rules stay generic; product rules stay strict.
