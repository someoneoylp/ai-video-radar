(function () {
  const report = window.AI_VIDEO_REPORT;
  const videos = window.AI_VIDEO_SUMMARIES || [];
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

  function renderTools(items) {
    return items.map((item) => `<span class="tool-pill">${escapeHtml(item)}</span>`).join("");
  }

  function renderVideoPage(video) {
    return `
      <section class="hero compact-hero">
        <div class="hero__content">
          <div class="meta">
            <span>${escapeHtml(video.date)}</span>
            <span>Jeff Su</span>
          </div>
          <h2>${escapeHtml(video.title)}</h2>
          <p class="brief-copy">${escapeHtml(video.summary)}</p>
          <div class="hero-actions">
            <a class="primary-link" href="${escapeHtml(video.url)}" target="_blank" rel="noreferrer">打开原视频</a>
            <a class="source-link" href="${escapeHtml(video.path)}" target="_blank" rel="noreferrer">独立页面</a>
          </div>
        </div>
      </section>

      <section class="panel key-takeaway">
        <p class="eyebrow">技术情报</p>
        <h2 class="section-title">快速理解</h2>
        <p class="lead brief-copy">${escapeHtml(video.oneLine)}</p>
        <div class="brief-actions">
          <h3>建议行动</h3>
          ${list(video.actions)}
        </div>
      </section>

      <section class="panel">
        <p class="eyebrow">分节理解</p>
        <h2 class="section-title">每个小节讲了什么</h2>
        <div class="section-list">
          ${video.chapters.map((chapter, index) => `
            <article class="section-card">
              <div class="section-card__head">
                <div class="chapter-kicker">
                  <span>Chapter ${index + 1}</span>
                  <strong>${escapeHtml(chapter.time)}</strong>
                </div>
                <div>
                  <h3>${escapeHtml(chapter.title)}</h3>
                  <p class="section-card__summary brief-copy">${escapeHtml(chapter.context)}</p>
                </div>
              </div>
              <div class="section-card__body">
                <div class="section-card__cell section-card__author">
                  <h4>作者观点</h4>
                  <div class="author-panel">
                    <p class="author-body brief-copy">${escapeHtml(chapter.authorView)}</p>
                  </div>
                  <blockquote>${escapeHtml(chapter.sourceCue)}</blockquote>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="panel">
        <h2 class="section-title">关键工具 / 产品</h2>
        <div class="tool-row">${renderTools(video.tools)}</div>
      </section>
    `;
  }

  function renderSidebar(activeId) {
    return `
      <aside class="sidebar-nav">
        <div class="sidebar-nav__header">
          <p class="eyebrow">目录</p>
          <h2>视频说明页面</h2>
        </div>
        <nav>
          ${videos.map((video) => `
            <button class="nav-item ${video.id === activeId ? "is-active" : ""}" data-video-id="${escapeHtml(video.id)}">
              <span>${escapeHtml(video.date)}</span>
              <strong>${escapeHtml(video.title)}</strong>
            </button>
          `).join("")}
        </nav>
      </aside>
    `;
  }

  function render(activeId) {
    const current = videos.find((video) => video.id === activeId) || videos[0];
    app.innerHTML = `
      <header class="topbar">
        <div>
          <p class="eyebrow">AI Video Radar</p>
          <h1>Jeff Su AI 技术情报</h1>
        </div>
        <a class="source-link" href="${escapeHtml(report.video.channelUrl)}" target="_blank" rel="noreferrer">频道</a>
      </header>

      <main class="blog-layout">
        ${renderSidebar(current.id)}
        <article class="reader-shell article-layout two-page-brief">
          ${renderVideoPage(current)}
        </article>
      </main>
    `;

    app.querySelectorAll("[data-video-id]").forEach((button) => {
      button.addEventListener("click", () => {
        render(button.getAttribute("data-video-id"));
      });
    });
  }

  render(videos[0] && videos[0].id);
})();
