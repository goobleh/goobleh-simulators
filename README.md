# Goobleh Simulators

A modular collection of customisable, event-driven simulation games. The platform is designed to host multiple independent simulators while sharing common navigation, account, season and interface systems.

## Current project

### PEAK — Simulator 001
A survival and social simulation following a group of climbers through six biomes.

Route rules:
- Biome 1 is always **Shore**.
- Biome 2 is **Tropics** or **Roots**.
- Biome 3 is **Mesa** or **Alpine**.
- Biome 4 is **Gloom** or **Caldera**.
- Biome 5 is linked to biome 4: **Gloom → The Citadel**, **Caldera → The Kiln**.
- Biome 6 is always **The Peak**.

There are eight possible route combinations.

## Structure

- `index.html`, `styles.css`, `app.js`: shared collection homepage and global styling.
- `peak/`: PEAK simulator pages and simulator-specific styling/logic.
- Future simulators should live in their own directory and reuse shared platform systems where appropriate.

## Running locally

This is a static HTML/CSS/JavaScript project. Open `index.html` in a browser, or enable GitHub Pages for the repository.

## Development roadmap

1. Shared platform shell and simulator directory.
2. PEAK setup flow: season details, biome designer, cast builder, relationships and preview.
3. PEAK simulation engine: character attributes, class/archetype behaviour, event generation, survival and campfire reports.
4. Accounts and cloud season storage using Firebase Authentication and Firestore.
5. Additional simulators.

Firebase is not configured yet. No credentials or private keys should be committed to this repository.
