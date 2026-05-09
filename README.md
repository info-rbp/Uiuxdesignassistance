# Source Repository Notice

## Production source of truth moved to rbp-platform

This repository is no longer the production source of truth for the Remote Business Partner Platform.

The consolidated production repository is:

```text
https://github.com/info-rbp/rbp-platform
```

Current role of this repository:

- historical Phase 1 UI/UX source reference
- historical Phase 2 contract/spec source reference
- frontend prototype/reference repository
- not the canonical production repository after Phase 4 consolidation

Production development should continue from:

```text
info-rbp/rbp-platform
```

The Phase 4 consolidation imported the relevant frontend, contracts, specs, and supporting documentation into `rbp-platform`.

Do not treat this repository as the authoritative production source unless a future governance decision explicitly reverses that.

---


  # Remote Business Partner

  This is a code bundle for Remote Business Partner. The original project is available at https://www.figma.com/design/kD7hXNGAibAxGybLGVss3c/Remote-Business-Partner.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  

## Phase 5 Notice

This repository is now reference/source-history only.

Active Phase 5 Integration work must use:

    https://github.com/info-rbp/rbp-platform
    branch: main

Do not begin Phase 5 implementation work from this repository.
