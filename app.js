(function () {
  const report = window.AI_VIDEO_REPORT;
  const app = document.getElementById("app");

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function list(items) {
    return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function productCards(products) {
    return products.map((item) => `
      <span class="tool-pill">${escapeHtml(item.name)} · ${escapeHtml(item.type)}</span>
    `).join("");
  }

  function summaryLinks(items) {
    return items.map((item) => `
      <a class="summary-link" href="${escapeHtml(item.path)}" target="_blank" rel="noreferrer">
        <span>${escapeHtml(item.date)}</span>
        <strong>${escapeHtml(item.title)}</strong>
      </a>
    `).join("");
  }

  function mindMap(map) {
    return `
      <figure class="mindmap-image">
        <img src="./assets/claude-cowork-mindmap.svg" alt="${escapeHtml(map.center)} 思维导图">
      </figure>
    `;
  }

  function sectionAnalysis(sections) {
    return sections.map((section, index) => `
      <article class="section-card">
        <div class="section-card__head">
          <div class="chapter-kicker">
            <span>Chapter ${index + 1}</span>
            <strong>${escapeHtml(section.time)}</strong>
          </div>
          <div>
            <h3>${escapeHtml(section.title)}</h3>
            <p class="section-card__summary brief-copy">${escapeHtml(section.context)}</p>
          </div>
        </div>
        <div class="section-card__body">
          <div class="section-card__cell section-card__author">
            <h4>作者观点</h4>
            <div class="author-panel">
              <p class="author-body brief-copy">${escapeHtml(section.authorView)}</p>
            </div>
            <blockquote>${escapeHtml(section.sourceCue)}</blockquote>
          </div>
        </div>
      </article>
    `).join("");
  }

  app.innerHTML = `
    <header class="topbar">
      <div>
        <p class="eyebrow">AI Video Radar</p>
        <h1>Jeff Su AI 技术情报</h1>
      </div>
      <a class="source-link" href="${escapeHtml(report.video.channelUrl)}" target="_blank" rel="noreferrer">频道</a>
    </header>

    <main class="reader-shell article-layout two-page-brief">
      <section class="hero compact-hero">
        <div class="hero__content">
          <div class="meta">
            <span>${escapeHtml(report.video.channel)}</span>
            <span>${escapeHtml(report.video.publishedAt)}</span>
            <span>${escapeHtml(report.video.duration)}</span>
          </div>
          <h2>${escapeHtml(report.video.title)}</h2>
          <p class="brief-copy">${escapeHtml(report.video.description)}</p>
          <div class="hero-actions">
            <a class="primary-link" href="${escapeHtml(report.video.url)}" target="_blank" rel="noreferrer">打开原视频</a>
            <a class="source-link" href="${escapeHtml(report.video.channelUrl)}" target="_blank" rel="noreferrer">频道</a>
          </div>
        </div>
      </section>

      <section class="panel key-takeaway">
        <p class="eyebrow">技术情报</p>
        <h2 class="section-title">快速理解</h2>
        <p class="lead brief-copy">${escapeHtml(report.intelligence.oneLine)}</p>
        <div class="quick-read">
          <article>
            <h3>简述</h3>
            <p class="brief-copy">${escapeHtml(report.intelligence.quickUnderstanding.summary)}</p>
          </article>
          <article>
            <h3>为什么值得关注</h3>
            <p class="brief-copy">${escapeHtml(report.intelligence.quickUnderstanding.whyWatch)}</p>
          </article>
          <article>
            <h3>信息边界</h3>
            <p class="brief-copy">${escapeHtml(report.intelligence.quickUnderstanding.caution)}</p>
          </article>
        </div>
        <div class="brief-actions">
          <h3>建议行动</h3>
          ${list(report.intelligence.actions.slice(0, 3))}
        </div>
      </section>

      <section class="panel">
        <p class="eyebrow">思维导图</p>
        <h2 class="section-title">先看全局，再看细节</h2>
        ${mindMap(report.intelligence.mindMap)}
      </section>

      <section class="panel">
        <p class="eyebrow">分节理解</p>
        <h2 class="section-title">每个小节讲了什么</h2>
        <div class="section-list">${sectionAnalysis(report.intelligence.sections)}</div>
      </section>

      <section class="panel">
        <h2 class="section-title">值得关注的工具 / 产品</h2>
        <div class="tool-row">${productCards(report.intelligence.products)}</div>
      </section>

      <section class="panel summary-links">
        <h2 class="section-title">最近 3 个摘要文档</h2>
        <div class="summary-link-list">${summaryLinks(window.AI_VIDEO_SUMMARIES || [])}</div>
      </section>
    </main>
  `;
})();
