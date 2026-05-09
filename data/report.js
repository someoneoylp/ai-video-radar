window.AI_VIDEO_REPORT = {
  generatedAt: "2026-05-09T12:30:00+08:00",
  sourceStatus: {
    transcript: "检测到英文自动字幕轨道，但当前环境下载字幕内容返回空。本报告基于公开视频元数据、官方描述、章节和可访问文字来源生成。",
    comments: "未检测到 YOUTUBE_API_KEY，且当前环境无法稳定加载 YouTube 动态评论区。页面已预留高赞评论展示位和 API 抓取脚本。"
  },
  video: {
    channel: "Jeff Su",
    channelUrl: "https://www.youtube.com/@JeffSu",
    title: "My Simple Claude Cowork System (for normal people)",
    url: "https://www.youtube.com/watch?v=0_dSWLOHKng",
    publishedAt: "2026-04-28",
    thumbnailUrl: "https://i.ytimg.com/vi/0_dSWLOHKng/hqdefault.jpg",
    duration: "约 19 分钟",
    description: "Jeff Su 介绍如何把 Claude Cowork 从聊天工具组织成一个有长期记忆、文件规则、任务路由和个人风格资料的工作系统。"
  },
  intelligence: {
    oneLine: "这期的技术价值不在具体 prompt，而在 AI 产品形态从 chatbot 走向 AI workspace / personal OS 的组织方式。",
    quickUnderstanding: {
      summary: "Jeff Su 这期不是讲某个新模型，而是在展示他如何把 Claude 组织成一个能长期协作的工作空间。核心做法是把规则、记忆、参考资料和任务场景放进一套文件结构里，让 AI 每次执行任务时先理解上下文，而不是从零开始聊天。",
      whyWatch: "如果你关注 AI 技术，这期值得看的不是具体工具模板，而是它体现了一个趋势：AI 应用正在从“问答界面”走向“带记忆、带文件、带任务路由的工作系统”。",
      caution: "由于当前没有拿到完整字幕，下面的时间点和原文线索主要来自视频描述章节、公开视频元数据和可访问资料；原文为接近视频表达的英文线索，不是完整逐字稿。"
    },
    contextFirst: {
      background: "这期不是在发布一个新模型，也不是讲 Claude 的底层能力升级。它讲的是一个更靠近产品和工程实践的问题：当 AI 已经能写邮件、总结资料、辅助创作以后，普通人怎样把它从“每次重新对话的聊天框”变成“知道你是谁、知道你在做什么、能持续帮你工作的系统”。",
      coreProblem: "主播到底在解决什么问题：单次聊天很好用，但它没有稳定的工作记忆。你每次都要重复背景、重复风格、重复文件位置、重复判断标准。Jeff Su 的方案，就是用一套文件结构把这些重复信息沉淀下来，让 Claude 每次进入任务前先读规则、读记忆、读相关资料。",
      whyItMatters: "这对理解 AI 技术趋势有用，因为现在很多 AI 产品都在往同一个方向走：不是单纯提升模型回答质量，而是给模型增加长期上下文、项目空间、文件系统、工具调用和任务路由。换句话说，竞争点正在从“模型会不会回答”转向“系统能不能组织工作”。"
    },
    explainedPoints: [
      {
        title: "1. 从 Prompt 到 Context System",
        plain: "以前我们常说“写好 prompt”。这期视频隐含的升级是：不要每次临时写 prompt，而是把常用背景、规则和偏好变成一套上下文系统。",
        example: "比如你想让 AI 写一封像你风格的邮件。普通做法是每次告诉它“语气自然一点、不要太营销”。Jeff Su 的做法是把你的写作原则放进 voice_principles.md，让 Claude 在相关任务里自动参考。",
        technicalMeaning: "这不是模型能力本身的变化，而是上下文工程。它通过外部文件稳定地给模型补充身份、偏好、约束和参考资料。"
      },
      {
        title: "2. CLAUDE.md 像一个项目级系统提示词",
        plain: "CLAUDE.md 的作用可以理解为：这个工作区里的 AI 使用说明书。它告诉 Claude 遇到什么任务该怎么做、该读哪些文件、输出要符合什么标准。",
        example: "如果任务是写 newsletter，就去读写作风格和过往样例；如果任务是整理财务，就读支出分类规则；如果任务是处理邮件，就读邮件模板和联系人背景。",
        technicalMeaning: "这相当于把系统提示词从产品内部搬到用户可编辑的文件里。好处是可版本化、可复用、可迁移，也更接近工程里的配置文件。"
      },
      {
        title: "3. memory.md 解决的是跨会话状态问题",
        plain: "聊天窗口的问题是记忆不稳定。memory.md 让用户主动记录长期事实，例如当前项目进展、个人偏好、常用联系人、已经做过的决策。",
        example: "你不需要每次告诉 Claude“我正在做一个 AI 情报页面，目标是看懂 AI 技术趋势，不是前端专项内容”。这类信息应该进入 memory，让后续摘要默认沿用。",
        technicalMeaning: "这是简化版的长期记忆机制。它没有复杂数据库，但用 Markdown 文件实现了可读、可控、可审计的持久状态。"
      },
      {
        title: "4. Workstation 是任务路由，不是文件夹装饰",
        plain: "Jeff Su 把不同任务分成不同工作站，例如邮件、财务、newsletter。重点不是分类好看，而是不同任务需要不同上下文。",
        example: "写邮件需要你的语气和联系人背景；做财务需要分类规则；做 AI 情报需要判断框架、信息源可信度和技术概念解释。把它们分开，AI 才不会把无关资料混在一起。",
        technicalMeaning: "这对应 AI Agent 里的 routing / context selection 问题：先判断任务类型，再加载最相关的上下文，避免一次性塞入所有材料。"
      },
      {
        title: "5. 这期真正值得关注的是 AI Workspace 趋势",
        plain: "如果只看表面，它像一个效率工作流教程；如果往深一层看，它展示的是 AI 产品形态变化。",
        example: "ChatGPT Projects、Claude Projects/Cowork、Cursor rules、Codex instructions 都在做类似事情：给 AI 一个长期工作空间，而不是只给一个聊天框。",
        technicalMeaning: "未来 AI 应用的关键能力会包括：长期记忆、上下文检索、文件系统、工具调用、权限边界、任务状态管理。模型只是核心之一，外层工作系统越来越重要。"
      }
    ],
    products: [
      {
        name: "Claude Cowork",
        type: "AI Workspace",
        value: "把 Claude 从单次问答扩展为可持续工作的个人/团队工作区。",
        signal: "值得跟踪。它代表 AI 助手从会话产品向工作操作系统演进。"
      },
      {
        name: "CLAUDE.md / memory.md",
        type: "工作流约定",
        value: "用普通 Markdown 文件承载系统提示词、记忆和项目规则。",
        signal: "技术含量不复杂，但工程价值高，适合迁移到任何 AI 编程工具。"
      },
      {
        name: "Obsidian",
        type: "Markdown 浏览器",
        value: "用于浏览和维护这些工作区文件，不是核心 AI 能力。",
        signal: "可选工具，不必重点关注。"
      }
    ],
    judgment: [
      "这是长期趋势，不只是效率工具教学。AI 工具正在把上下文管理、记忆和任务执行做成产品层能力。",
      "它没有介绍底层模型新能力，但很好地展示了模型能力如何被文件系统和工作流放大。",
      "对技术从业者的启发是：未来 AI 使用能力的一部分，会从“会问问题”转向“会组织上下文和状态”。"
    ],
    actions: [
      "把这期归类为“AI 工作空间 / 长期上下文 / Agent 工程化”案例，而不是模型新闻。",
      "后续看到 ChatGPT Projects、Claude Projects、Cursor rules、Codex instructions 这类功能时，重点观察它们如何处理记忆、文件、权限和任务路由。",
      "建立自己的 AI 技术情报框架：每期先判断它讲的是模型能力、产品形态、工程实践、商业包装，还是单纯效率技巧。",
      "这期可以不看原视频；真正要记住的是：AI 技术落地不只靠模型，越来越靠上下文系统。"
    ],
    mindMap: {
      center: "Claude Cowork：把聊天框变成 AI 工作空间",
      branches: [
        {
          title: "核心问题",
          items: [
            {
              text: "单次聊天缺少稳定记忆",
              children: ["memory.md 保存长期事实"]
            },
            {
              text: "背景和偏好需要反复说明",
              children: ["CLAUDE.md 固化工作规则"]
            },
            {
              text: "不同任务混用同一套上下文",
              children: ["workstations 区分任务场景"]
            }
          ]
        },
        {
          title: "解决机制",
          items: [
            {
              text: "规则、记忆、资料文件化",
              children: ["可读、可编辑、可复用"]
            },
            {
              text: "按任务加载相关上下文",
              children: ["减少噪音和 token 浪费"]
            }
          ]
        },
        {
          title: "技术含义",
          items: [
            {
              text: "从 prompt 技巧升级为 context engineering",
              children: ["关键不是一句提示词，而是一套上下文系统"]
            },
            {
              text: "AI Workspace 成为产品形态",
              children: ["模型 + 记忆 + 文件 + 工具 + 路由"]
            }
          ]
        },
        {
          title: "趋势判断",
          items: [
            {
              text: "AI 产品从 chatbot 走向 workspace",
              children: ["ChatGPT Projects / Claude Cowork / Cursor rules"]
            },
            {
              text: "Agent 工程化不只依赖模型本身",
              children: ["外层系统决定任务质量"]
            }
          ]
        }
      ]
    },
    sections: [
      {
        time: "00:00 - 03:39",
        title: "Claude Cowork 是什么：不是更聪明的聊天，而是更稳定的工作方式",
        context: "视频开头先把问题限定在普通用户能理解的场景：Claude 本身已经能帮你写邮件、整理资料、生成草稿，但如果每次都只靠聊天框，它很难持续知道你的背景、风格和当前任务状态。",
        authorView: "作者想强调：问题不在于 Claude 不够聪明，而在于我们通常把它当成一次性聊天工具来用。他认为真正的改变，是给 Claude 一个稳定的工作环境，让它知道你的偏好、正在做的事、常用资料和输出标准。这样 Claude 才更像一个长期协作的同事，而不是每次都要重新培训的助手。",
        sourceCue: "\"turns Claude from a chatbot into a full operating system for your work\"",
        technicalMeaning: "这里对应的技术概念是 context engineering。模型能力很重要，但外层系统要负责给模型准备稳定、相关、可复用的上下文。",
        commentView: "评论区观点待抓取。拿到高赞评论后，这里会补充观众是否认可“AI 工作系统”这个说法，还是认为它只是效率工具包装。"
      },
      {
        time: "03:39 - 11:01",
        title: "三层结构：Root、Workstations、Projects",
        context: "中段开始进入架构。他不是把所有资料都丢给 Claude，而是分层组织：根目录放全局规则和记忆；工作站负责某一类任务；具体项目再保存更细的上下文。",
        authorView: "作者的想法是：如果所有资料都堆在一起，AI 反而更难工作。他把工作空间分成 Root、Workstations、Projects，是为了让全局偏好和具体任务分开。Root 保存长期规则；Workstation 对应一类工作；Project 承载具体任务。这样 Claude 进入不同场景时，能拿到刚好相关的背景。",
        sourceCue: "\"a three-level hierarchy of workstations and projects\"",
        technicalMeaning: "这其实是任务路由和上下文选择问题。AI 系统需要先判断任务类型，再加载最相关的规则和资料。否则上下文越多，噪音越大。",
        commentView: "评论区观点待抓取。后续可以重点看有没有观众分享自己的目录结构，或者指出这种层级在真实使用中是否容易维护。"
      },
      {
        time: "04:58 - 16:17",
        title: "CLAUDE.md、memory.md 和 resources：把隐性知识变成显性文件",
        context: "作者在 Root Level 和 Workstations 里强调几个关键文件：CLAUDE.md 保存指令和工作规则，memory.md 保存长期事实，resources 保存模板、风格、样例和资料。",
        authorView: "作者最在意的是把隐性知识变成显性资料。比如你的写作风格、邮件偏好、项目背景、常用模板，如果一直停留在脑子里，就只能靠你每次重复说明。他建议把这些东西放进 CLAUDE.md、memory.md 和 resources，让 Claude 在任务开始前先读取它们。",
        sourceCue: "\"CLAUDE.md instruction files, persistent memory\"",
        technicalMeaning: "这是一种低技术门槛但很实用的长期记忆实现。它不像复杂 Agent 框架那样需要数据库和向量检索，但它让记忆可读、可编辑、可审计。",
        commentView: "评论区观点待抓取。这里尤其值得看高赞评论里是否有人质疑隐私、维护成本，或者分享更好的 memory 写法。"
      },
      {
        time: "17:06 - 18:44",
        title: "用例展示：邮件、支出追踪、newsletter",
        context: "后段用具体 demo 展示为什么这套结构有用：Email HQ 可以生成符合个人语气的邮件，spending tracker 可以按既定规则处理支出，newsletter draft 可以写得更像作者本人。",
        authorView: "作者用这些 demo 想证明：这套方法不是为了整理文件而整理文件，而是为了让 AI 输出更贴近真实工作。Email HQ 体现语气一致，spending tracker 体现规则一致，newsletter draft 体现个人风格一致。他想让观众看到，上下文系统搭好后，Claude 的输出会更像“懂你工作方式”的结果。",
        sourceCue: "\"Email HQ, spending trackers, and newsletter drafts that sound like me\"",
        technicalMeaning: "这些例子说明 AI 应用价值常常来自任务场景封装。模型只负责生成，真正决定质量的是：它有没有拿到正确的身份、约束、历史样例和任务目标。",
        commentView: "评论区观点待抓取。这里可以观察观众最关心哪个用例：邮件、财务、写作，还是整个 workspace 方法。"
      },
      {
        time: "18:44 - 结束",
        title: "Pro Tips：真正要学的是工作系统，不是模板",
        context: "结尾部分偏建议和推广资源，但可以抽出一个有用观点：不要把这套方法理解成固定模板，而是理解成如何让 AI 有稳定上下文。",
        authorView: "作者最后的态度比较明确：模板只是入门，不是最终答案。他更希望你把 Claude Cowork 理解成个人工作系统的基础设施。你可以从模板开始，但真正有价值的是持续补充自己的规则、记忆、样例和资料，让这个系统越来越贴合你的工作方式。",
        sourceCue: "\"Starter templates and prompt templates\" / \"Free Cowork Toolkit\"",
        technicalMeaning: "对 AI 技术观察来说，这说明未来很多 AI 产品会围绕 workspace、memory、toolkit、template marketplace 展开，而不是只比拼单次回答。",
        commentView: "评论区观点待抓取。后续可看用户是否觉得模板足够好用，还是更希望产品直接内置这些能力。"
      }
    ]
  },
  commentsStatus: {
    available: false,
    reason: "未配置 YouTube Data API key，且当前环境无法稳定加载动态评论区。",
    nextStep: "设置 YOUTUBE_API_KEY 后运行 scripts/fetch-youtube-comments.js，可按 likeCount 抓取并写入 data/comments.json。"
  },
  commentInsights: [
    "评论洞察区域已预留。拿到高赞评论后，会优先提炼：观众最认可的观点、争议点、补充资源、真实使用反馈。",
    "高赞评论比随机评论更适合判断视频是否真的有技术价值，因为它们常包含观众验证、替代工具和反例。"
  ],
  topComments: []
};

window.AI_VIDEO_SUMMARIES = [
  {
    id: "claude-cowork-system",
    title: "My Simple Claude Cowork System (for normal people)",
    date: "2026-04-28",
    path: "./videos/2026-04-28-claude-cowork-system.html",
    url: "https://www.youtube.com/watch?v=0_dSWLOHKng",
    oneLine: "把 Claude 从一次性聊天框组织成一个能长期协作的 AI 工作空间。",
    summary: "核心做法是把规则、记忆、资源和任务场景放进文件结构里，让 Claude 先进入有背景、有偏好、有任务边界的工作环境。",
    actions: [
      "把这期归类为 AI Workspace / 长期上下文 / Agent 工作区案例。",
      "关注 Claude、ChatGPT、Cursor、Codex 如何处理规则文件、记忆和项目空间。",
      "不必完整看视频，除非你想搭一套自己的 Claude Cowork 工作区。"
    ],
    chapters: [
      {
        time: "00:00 - 03:39",
        title: "Claude Cowork 是什么",
        context: "Claude 可以写邮件、整理资料，但如果只靠聊天框，很难持续知道你的背景、风格和任务状态。",
        authorView: "作者想强调，问题不在于 Claude 不够聪明，而在于我们通常把它当成一次性聊天工具使用。他希望观众把 Claude Cowork 理解成一个稳定工作环境，让 Claude 更像长期协作的同事。",
        sourceCue: "from a chatbot into a full operating system"
      },
      {
        time: "03:39 - 11:01",
        title: "三层结构：Root、Workstations、Projects",
        context: "根目录放全局规则和记忆，工作站负责某一类任务，项目保存更具体的上下文。",
        authorView: "作者把工作空间分层，是为了让长期偏好和具体任务分开。Root 保存长期规则，Workstation 对应一类工作，Project 承载具体任务。",
        sourceCue: "three-level hierarchy"
      }
    ],
    tools: ["Claude Cowork", "CLAUDE.md", "memory.md", "Obsidian"]
  },
  {
    id: "claude-cowork-80-percent",
    title: "Learn 80% of Claude Cowork in Under 20 Minutes",
    date: "2026-04-07",
    path: "./videos/2026-04-07-claude-cowork-80-percent.html",
    url: "https://www.youtube.com/watch?v=z9rdrNrkvDY",
    oneLine: "这期是 Claude Cowork 的能力地图，先掌握 7 个核心能力，再开始自动化真实工作。",
    summary: "视频按能力讲解 Cowork：本地文件访问、持久记忆、工具和连接器、Skills、Projects、浏览器扩展和定时任务。",
    actions: [
      "先理解 7 个能力，不要一上来就照抄模板。",
      "重点关注本地文件访问、持久记忆、Skills、定时任务。",
      "把它当成 Claude Cowork 功能地图，而不是深度技术教程。"
    ],
    chapters: [
      {
        time: "00:00 - 02:19",
        title: "Claude Chat、Cowork、Code 的区别",
        context: "开头先做产品定位，帮助观众区分 Claude 的不同使用入口。",
        authorView: "作者先划清边界，再讲能力，避免观众把 Cowork 当作更复杂的聊天窗口。他希望你把 Cowork 看成电脑上的生产力系统。",
        sourceCue: "Claude Chat, Cowork, Code"
      },
      {
        time: "02:19 - 08:44",
        title: "本地文件访问和持久记忆",
        context: "Cowork 能接触本地工作材料，并保存持续有效的记忆。",
        authorView: "作者认为这两项决定 Cowork 能不能处理真实工作。本地文件访问减少复制粘贴，持久记忆减少重复解释。",
        sourceCue: "local file access, persistent memory"
      }
    ],
    tools: ["Claude Cowork", "Claude Skills", "Cowork Projects", "Scheduled Tasks"]
  },
  {
    id: "notebooklm-2026",
    title: "NotebookLM Changed Completely: Here's What Matters (in 2026)",
    date: "2026-03-17",
    path: "./videos/2026-03-17-notebooklm-2026.html",
    url: "https://www.youtube.com/watch?v=_uXnyhrqmsU",
    oneLine: "NotebookLM 正在从基于资料问答，变成基于资料生成工作成果的内容工作台。",
    summary: "作者把 NotebookLM 拆成 Sources、Chat、Studio 三栏，并重点评估 Studio 里的报告、幻灯片、信息图和思维导图。",
    actions: [
      "重点试 Reports、Slide Decks、Infographics、Mind Maps。",
      "把 NotebookLM 当作 source-grounded content studio。",
      "Video / Audio / Quiz / Flashcards 按场景使用即可。"
    ],
    chapters: [
      {
        time: "00:00 - 02:05",
        title: "NotebookLM 的核心优势",
        context: "它的优势不是泛泛回答，而是围绕你提供的 sources 工作。",
        authorView: "作者希望观众先理解这个前提：NotebookLM 的输出质量取决于资料源质量，后面的报告、PPT、信息图和思维导图都建立在 source-grounded 的基础上。",
        sourceCue: "Core Advantage"
      },
      {
        time: "07:51 - 13:56",
        title: "Tier 1 Studio 工具",
        context: "Reports、Slide Decks、Infographics、Mind Maps 是最值得优先使用的工具。",
        authorView: "作者认为这些工具价值最高，因为它们能把资料直接变成可交付内容。重点不是功能多，而是优先掌握高频、高价值工具。",
        sourceCue: "Tier 1 Tools"
      }
    ],
    tools: ["NotebookLM", "Reports", "Slide Decks", "Infographics", "Mind Maps"]
  }
];
