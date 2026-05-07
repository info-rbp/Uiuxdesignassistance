# Admin Operations Mock CRUD

This phase adds local mock CRUD support for Operations.

## Enabled section

- Operations

## Route coverage

- `/admin/operations`
- `/admin/operations/*`

## What this adds

- Local mock CRUD for operation area records
- Reuse of `useAdminLocalCrud`
- Create, edit, and delete behaviour for operation pathways
- In-memory-only state for finance, insurance, connectivity, calculators, and related operations content

## Why this matters

Operations is a core public content area and should be manageable in the admin interface before backend persistence is introduced.

## What this does not add

- Firebase persistence
- Backend collections
- Server validation
- Authentication changes
- Role-based permissions
- File uploads
- Audit logs
- Draft/publish persistence

## Next step

After this phase, the next practical step is adding local mock CRUD for Offers, because that starts moving into commercial content without touching real redemption or payment logic yet.
