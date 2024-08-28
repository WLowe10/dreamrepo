# Dreamrepo

This is a sample TypeScript monorepo with pnpm workspaces. It utilizes ["live types"](https://colinhacks.com/essays/live-types-typescript-monorepo) in the using custom import conditions. This allows you to typecheck without building and removes the need to emit declarations for internal packages.

## Packages

-   foo
-   bar
-   shared (uses "foo" and "bar")

## Apps

-   server (simple fastify server, uses "shared")
-   web (simple remix app, uses "shared")

## Tooling

Used to hold our other packages that aren't source code

-   tsconfig (base tsconfigs for all packages)
