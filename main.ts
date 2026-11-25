import { mkdirSync, writeFileSync } from "node:fs";

// Two Days of Quiet Dread — one-line code review comment that approves a PR
// while carrying quiet existential dread. Gate: 1-140 chars, single line.
const LINE =
  "LGTM. In a thousand years only this diff and cockroaches; the cockroaches approve too.";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function main(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, LINE, "utf8");
}

main();
