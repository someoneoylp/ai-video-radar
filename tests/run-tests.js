const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

const index = read("index.html");
const app = read("app.js");
const report = read("data/report.js");

assert(index.includes('<div id="app"'), "index.html should expose #app mount point");
assert(app.includes("技术情报"), "app.js should render the technology intelligence section");
assert(!app.includes("评论区观点"), "app.js should not render comment viewpoints");
assert(app.includes("思维导图"), "app.js should render the mind map section");
assert(app.includes("mindmap-image"), "app.js should render the mind map as an image asset");
assert(index.includes("assets/claude-cowork-mindmap.svg") || app.includes("claude-cowork-mindmap.svg"), "page should reference the mind map SVG asset");
const mindmap = read("assets/claude-cowork-mindmap.svg");
assert(mindmap.includes("Claude Cowork：把聊天框变成 AI 工作空间"), "mind map should include the center topic");
assert(mindmap.includes("memory.md 保存长期事实"), "mind map should include a concrete child node");
assert(app.includes("快速理解"), "app.js should render a quick understanding section");
assert(app.includes("作者观点"), "app.js should render author viewpoints per section");
assert(!app.includes("<h4>技术含义</h4>"), "section cards should not render a technical meaning column");
assert(!app.includes("section-card__comments"), "section cards should not render comments row");
assert(app.includes("reader-shell"), "page should use a reader shell layout");
assert(app.includes("key-takeaway"), "page should highlight the key takeaway");
assert(app.includes("section-card__summary"), "section cards should expose a short summary strip");
assert(!app.includes("reader-rail"), "page should not use a distracting left rail");
assert(app.includes("article-layout"), "page should use a focused single-column article layout");
assert(app.includes("chapter-kicker"), "section cards should use readable chapter labels");
assert(app.includes("author-body"), "author viewpoints should be rendered as emphasized reading text");
assert(app.includes("author-panel"), "author viewpoint should have a dedicated readable panel");
assert(app.includes("two-page-brief"), "page should use a compact two-page brief layout");
assert(!app.includes("高赞评论会补充什么"), "page should not render a separate verbose comments section");
assert(app.includes("section-title"), "section headings should use a calmer title style");
assert(app.includes("brief-copy"), "body copy should use a consistent brief typography class");
assert(app.includes("summary-links"), "home page should link to generated summary documents");
assert(!app.includes("技术重点怎么理解"), "app.js should not render the redundant technical explanation section");
assert(!app.includes("主播到底在解决什么问题"), "app.js should not render the redundant context section");
assert(report.includes("My Simple Claude Cowork System"), "report data should include the latest tested Jeff Su video");
assert(report.includes("commentsStatus"), "report data should include comment collection status");
assert(report.includes("contextFirst"), "report data should include context-first analysis");
assert(report.includes("mindMap"), "report data should include mind map data");
assert(report.includes("sections"), "report data should include section-level analysis");

console.log("All static report tests passed.");
