---
name: React-vite scaffold defaults
description: What dependencies/tooling the standard react-vite artifact scaffold already includes, so you don't waste time re-installing or re-checking.
---

The `createArtifact({ artifactType: "react-vite", ... })` scaffold's default `package.json` already includes: framer-motion, wouter, react-icons, radix-ui primitives / shadcn `components/ui/*`, `cmdk`, `date-fns`, `embla-carousel-react`, tailwind + `tw-animate-css`, `@tanstack/react-query`.

**Why:** When porting/adapting an existing app's UI into a freshly scaffolded artifact, it's tempting to assume you need to add these as new dependencies or copy the shadcn `components/ui` directory — usually neither is necessary; the scaffold's copies are already the same generic shadcn pieces.

**How to apply:** Before copying UI primitives/hooks/lib files from a reference repo into a new artifact, diff them first (e.g. `diff -rq`) — they're often byte-identical to the scaffold's own versions, so no copy is needed.
