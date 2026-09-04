/**
 * Build-time prerender: execute the built client bundle inside jsdom and write
 * the rendered markup back into dist/index.html.
 *
 * The landing page is fully client-rendered, so crawlers and social previews
 * would otherwise see an empty #app. The inlined snapshot gives them the
 * complete page (headings, copy, links, showcase) in the default language.
 * The same bundle still runs on load and rebuilds #app, so the page stays
 * fully interactive and localized exactly as before.
 */
import { readFile, readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { JSDOM } from "jsdom";

const distDir = resolve(process.cwd(), "dist");
const indexHtml = await readFile(resolve(distDir, "index.html"), "utf8");

// The emitted bundle is a single self-contained IIFE (no import/export
// statements), so it can be evaluated as a classic script — jsdom does not
// execute <script type="module"> tags on its own.
const assetsDir = resolve(distDir, "assets");
const bundleName = (await readdir(assetsDir)).find((name) =>
  /^index-.*\.js$/.test(name),
);
if (!bundleName) {
  throw new Error("prerender: no dist/assets/index-*.js bundle found");
}
const bundle = await readFile(resolve(assetsDir, bundleName), "utf8");

const dom = new JSDOM(indexHtml, {
  url: "https://vibex.peatboy.com/",
  runScripts: "outside-only",
  pretendToBeVisual: true,
});
const { window } = dom;

// jsdom has no layout engine, so clientWidth is always 0 and the desktop
// showcase would prerender collapsed (scale 0, height 0). Pretend a
// desktop-size viewport instead; the client bundle recomputes the real scale
// on load.
Object.defineProperty(window.HTMLElement.prototype, "clientWidth", {
  configurable: true,
  get: () => 1280,
});
if (typeof window.ResizeObserver !== "function") {
  window.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}
if (typeof window.matchMedia !== "function") {
  window.matchMedia = () => ({
    matches: false,
    media: "",
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent: () => false,
  });
}

window.eval(bundle);

const appHtml = window.document.querySelector("#app")?.innerHTML?.trim();
if (!appHtml) {
  throw new Error("prerender: #app is empty after bundle evaluation");
}
if (!window.document.querySelector("#main h1")) {
  throw new Error("prerender: expected #main h1 is missing");
}

// Function form avoids "$"-substitution in the markup (e.g. "$ for skills").
const output = indexHtml.replace(
  '<div id="app"></div>',
  () => `<div id="app">${appHtml}</div>`,
);
if (output === indexHtml) {
  throw new Error("prerender: could not inject markup into index.html");
}

await writeFile(resolve(distDir, "index.html"), output);
console.log(
  `prerender: inlined ${appHtml.length} bytes of markup into dist/index.html`,
);
window.close();
// The bundle registers keep-alive timers (phone clock, replay loops) that
// would otherwise hang the build.
process.exit(0);
