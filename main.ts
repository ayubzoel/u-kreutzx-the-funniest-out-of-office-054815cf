// The Funniest Out-of-Office — make.fun program/v1 entry.
// Writes one single-line out-of-office reply to entry.txt.
// Deterministic: no clock, no randomness, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: one out-of-office reply a real person would set,
// with a twist the reader does not see coming.
const ENTRY =
  "I'm out of the office until Monday. My inbox is unsupervised and has already started replying to people, so good luck to us all.";

// The harness sets MAKEFUN_OUTPUT_DIR; local runs fall back to ./output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
