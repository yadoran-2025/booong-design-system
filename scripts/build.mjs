import { mkdir, readFile, writeFile } from "node:fs/promises";

const packageJsonText = await readFile(new URL("../package.json", import.meta.url), "utf8");
const packageJson = JSON.parse(packageJsonText.replace(/^\uFEFF/, ""));
const version = packageJson.version;

const banner = `/*!
 * BOOONG Design System v${version}
 * Tokens, base styles, and legacy-compatible components.
 */\n\n`;

const base = await readFile(new URL("../src/base.css", import.meta.url), "utf8");
const components = await readFile(new URL("../src/components.css", import.meta.url), "utf8");
const output = `${banner}${base.trim()}\n\n${components.trim()}\n`;

await mkdir(new URL("../dist/", import.meta.url), { recursive: true });
await mkdir(new URL(`../docs/releases/v${version}/`, import.meta.url), { recursive: true });
await writeFile(new URL("../dist/booong.css", import.meta.url), output, "utf8");
await writeFile(new URL(`../docs/releases/v${version}/booong.css`, import.meta.url), output, "utf8");

