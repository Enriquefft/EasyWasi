# Agent Instructions

This repository hosts **EasyWasi**, a web application built with **Next.js**, **TypeScript**, **Bun**, **Tailwind CSS**, and **Drizzle ORM**.

## Workflow

1. **Format** all changed files with **Biome**:
   ```bash
   bun run format
   # or
   biome format --write
   ```
2. **Type-check** the code:
   ```bash
   bunx tsc --noEmit
   ```
3. **Run tests**:
   ```bash
   bun test
   ```
   If these commands cannot run because of missing dependencies or network limits, note this in the PR description.
4. Keep commits small and focused with clear messages. Prefix them with `feat:`, `fix:`, `style:`, or `chore:` when suitable.
5. Pull request descriptions must summarize the changes, cite any updated files, and show test output.

## Repository Structure

- `src/app` – Next.js routes and pages.
- `src/components` – shared React components. Reusable UI primitives live in `src/components/ui`.
- `src/db` – Drizzle schemas and database utilities.
- `src/styles` – global CSS and fonts.
- `tests` – unit tests configured for Bun.
- `docs` – documentation such as the brand guideline template at `docs/brand.md`.
- `public` - location for the `opengraph-image.webp`, logo.png & other public assets.

## Code Style

- Follow patterns already established in the components and utilities.
- Use **Tailwind CSS** classes and Shadcn/UI components for UI work.
- Components and types use **PascalCase**. Variables and functions use **camelCase**. File names use **kebab-case**.
- Keep lines under 80 characters when practical and remove unused code.
- Single source of truth is a must everywhere and for everything.


## AGENTS.md Inheritance

These instructions govern the entire repository. If another `AGENTS.md` is added in a subdirectory, its rules override these instructions for files within that folder.

By following these guidelines, you can keep the codebase consistent and maintainable.
