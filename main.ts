// Dad Joke Showdown — make.fun bounty entry (u-mfnakmal-dad-joke-showdown-1d2ce3e5)
// Harness: program/v1 — writes the entry text to <output>/entry.txt.
// Output dir resolves from the MAKEFUN_OUTPUT_DIR env var, defaulting to /output.
// Deterministic: byte-identical on every run, Node stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Why did the hospital technician bring a ladder to his night shift? Because the doctor told him the patients' spirits needed lifting.";

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
}

main();
