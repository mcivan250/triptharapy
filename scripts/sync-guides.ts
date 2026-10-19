// Mirrors the guide markdown from src/content/guides/ into public/guides/ so the
// raw text is also reachable at /guides/<id>.md (handy for direct links and for
// tools that want the markdown rather than the rendered page). The app itself
// imports the markdown from src/content/guides via `?raw`, so this is the only
// copy that has to be kept in sync — running it is part of `bun run build`.
import { copyFileSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const sourceDir = join(import.meta.dir, "..", "src", "content", "guides");
const targetDir = join(import.meta.dir, "..", "public", "guides");

mkdirSync(targetDir, { recursive: true });

const files = readdirSync(sourceDir).filter((name) => name.endsWith(".md"));
for (const name of files) {
  copyFileSync(join(sourceDir, name), join(targetDir, name));
}

console.log(`synced ${String(files.length)} guide(s) to public/guides/`);
