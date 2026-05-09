const fs = require("fs");
const path = require("path");
const https = require("https");

const videoId = process.argv[2] || "0_dSWLOHKng";
const apiKey = process.env.YOUTUBE_API_KEY;

if (!apiKey) {
  console.error("Missing YOUTUBE_API_KEY. Get one from Google Cloud YouTube Data API v3.");
  process.exit(1);
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let body = "";
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`HTTP ${res.statusCode}: ${body}`));
          return;
        }
        resolve(JSON.parse(body));
      });
    }).on("error", reject);
  });
}

async function main() {
  const url = new URL("https://www.googleapis.com/youtube/v3/commentThreads");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("videoId", videoId);
  url.searchParams.set("maxResults", "50");
  url.searchParams.set("order", "relevance");
  url.searchParams.set("textFormat", "plainText");
  url.searchParams.set("key", apiKey);

  const data = await getJson(url.toString());
  const comments = data.items
    .map((item) => item.snippet.topLevelComment.snippet)
    .map((snippet) => ({
      author: snippet.authorDisplayName,
      text: snippet.textDisplay,
      likeCount: snippet.likeCount,
      publishedAt: snippet.publishedAt
    }))
    .sort((a, b) => b.likeCount - a.likeCount)
    .slice(0, 12);

  const output = {
    videoId,
    fetchedAt: new Date().toISOString(),
    topComments: comments
  };

  const outPath = path.resolve(__dirname, "..", "data", "comments.json");
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log(`Wrote ${comments.length} comments to ${outPath}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
