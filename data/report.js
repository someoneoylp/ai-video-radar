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
    id: "jeff-claude-cowork-system",
    author: "Jeff Su",
    title: "My Simple Claude Cowork System (for normal people)",
    date: "2026-04-28",
    path: "./videos/2026-04-28-claude-cowork-system.html",
    url: "https://www.youtube.com/watch?v=0_dSWLOHKng",
    oneLine: "把 Claude 从一次性聊天框组织成一个能长期协作的 AI 工作空间。",
    summary: "核心做法是把规则、记忆、资源和任务场景放进文件结构里，让 Claude 先进入有背景、有偏好、有任务边界的工作环境。",
    actions: ["归类为 AI Workspace / 长期上下文案例。", "关注规则文件、记忆和项目空间。", "不必完整看，除非你想搭自己的 Cowork。"],
    chapters: [
      { time: "00:00 - 03:39", title: "Claude Cowork 是什么", context: "Claude 能处理任务，但聊天框缺少稳定背景。", details: "Jeff 先用普通办公场景解释问题：Claude 已经能写邮件、整理资料、生成草稿，但如果每次都从聊天框开始，你还是要反复告诉它你的背景、风格、项目状态和输出要求。他把 Claude Cowork 介绍成一个工作空间，不是单纯的提示词集合。这个工作空间会保存规则、记忆和资料，让 Claude 接任务时先理解你是谁、你在做什么、你希望它怎么做。", authorView: "作者想强调，真正的变化不是 Claude 更聪明，而是你给它一个稳定工作环境，让它像长期协作同事。", sourceCue: "from a chatbot into a full operating system" },
      { time: "03:39 - 11:01", title: "三层结构", context: "Root、Workstations、Projects 分别保存全局规则、任务场景和具体上下文。", details: "他把整个系统拆成三层：Root 放全局规则、长期记忆和通用资料；Workstations 对应一类工作，比如邮件、财务、写作；Projects 则保存某个具体项目的上下文。这样做的重点不是文件夹好看，而是让 Claude 不同任务读取不同资料。比如写邮件时读语气和联系人背景，做 newsletter 时读过往样例和写作原则。", authorView: "作者把工作空间分层，是为了让长期偏好和具体任务分开，避免所有资料混在一起。", sourceCue: "three-level hierarchy" },
      { time: "11:01 - 18:44", title: "文件、记忆和真实用例", context: "CLAUDE.md、memory.md 和 resources 把隐性知识变成可复用资料。", details: "Jeff 继续展示关键文件怎么用：CLAUDE.md 像工作区说明书，告诉 Claude 任务规则和输出标准；memory.md 记录长期事实，比如你的偏好、项目进展、已经做过的决策；resources 放模板、样例和参考资料。随后他用邮件、支出追踪、newsletter 这类例子说明，上下文准备好以后，Claude 输出会更贴近你的真实工作，而不是生成一段泛泛的答案。", authorView: "作者真正想教的是维护上下文系统，而不是复制某一套模板。模板只是起点，长期可用靠持续沉淀规则和资料。", sourceCue: "CLAUDE.md instruction files, persistent memory" }
    ],
    tools: ["Claude Cowork", "CLAUDE.md", "memory.md", "Obsidian"]
  },
  {
    id: "jeff-claude-cowork-80-percent",
    author: "Jeff Su",
    title: "Learn 80% of Claude Cowork in Under 20 Minutes",
    date: "2026-04-07",
    path: "./videos/2026-04-07-claude-cowork-80-percent.html",
    url: "https://www.youtube.com/watch?v=z9rdrNrkvDY",
    oneLine: "这期是 Claude Cowork 的能力地图，先掌握 7 个核心能力，再开始自动化真实工作。",
    summary: "Jeff 把 Cowork 拆成几个可理解的能力：本地文件访问、持久记忆、连接器、Skills、Projects、浏览器扩展和定时任务。",
    actions: ["先理解能力边界，再决定是否迁移工作流。", "重点关注本地文件访问、持久记忆、Skills、定时任务。", "把它当成 Claude Cowork 功能地图，而不是深度技术课。"],
    chapters: [
      { time: "00:00 - 02:19", title: "先区分 Claude 的几个入口", context: "开头先做产品定位，帮助观众区分 Claude 的不同使用入口。", details: "Jeff 先把 Claude Chat、Claude Cowork 和 Claude Code 的使用场景分开：Chat 更像对话入口，适合临时问答；Cowork 面向电脑上的长期工作，能结合文件、记忆和工具；Code 则偏开发任务。他这样铺垫，是为了让观众别把 Cowork 当作普通聊天窗口的升级版，而是理解为一种更接近桌面工作台的产品。", authorView: "Jeff 想先划清边界，再讲能力，避免后面所有功能都被误解成聊天功能。", sourceCue: "Claude Chat, Cowork, Code" },
      { time: "02:19 - 08:44", title: "本地文件访问和持久记忆", context: "Cowork 能接触本地工作材料，并保存持续有效的记忆。", details: "他接着讲 Cowork 的两个基础能力：访问本地文件，以及保存跨会话记忆。本地文件访问意味着你不用把文档、表格、项目材料一段段复制进聊天框；持久记忆则让 Claude 记住你长期偏好和重复背景。Jeff 会把这些能力和真实工作联系起来：如果 AI 能直接读工作材料，又不用每次重新解释，它才有机会参与持续任务。", authorView: "Jeff 认为这两项决定 Cowork 能不能处理真实工作，因为它们减少复制粘贴和重复说明。", sourceCue: "local file access, persistent memory" },
      { time: "08:44 - 20:00", title: "工具、Skills、Projects 和定时任务", context: "后半段讲 Cowork 如何通过连接器、技能、项目和计划任务扩展工作范围。", details: "视频后半段把能力继续往外扩：连接器让 Claude 接入更多外部服务；Skills 像可复用能力包，让某类任务有固定做法；Projects 把某个长期主题的资料和规则收在一起；浏览器扩展和定时任务则让 Claude 更接近主动工作的助手。Jeff 不是逐个深挖技术细节，而是在告诉观众：Cowork 的价值来自这些能力组合起来以后形成的工作系统。", authorView: "作者希望观众先掌握能力地图，再决定哪些能力值得放进自己的工作流。", sourceCue: "Skills, Projects, Scheduled Tasks" }
    ],
    tools: ["Claude Cowork", "Claude Skills", "Cowork Projects", "Scheduled Tasks"]
  },
  {
    id: "jeff-notebooklm-2026",
    author: "Jeff Su",
    title: "NotebookLM Changed Completely: Here's What Matters (in 2026)",
    date: "2026-03-17",
    path: "./videos/2026-03-17-notebooklm-2026.html",
    url: "https://www.youtube.com/watch?v=_uXnyhrqmsU",
    oneLine: "NotebookLM 正在从资料问答工具，变成基于资料生成工作成果的内容工作台。",
    summary: "Jeff 把 NotebookLM 拆成 Sources、Chat、Studio 三栏，重点评估 Studio 里的报告、幻灯片、信息图和思维导图。",
    actions: ["优先试 Reports、Slide Decks、Infographics、Mind Maps。", "把 NotebookLM 理解为 source-grounded content studio。", "视频、音频、Quiz、Flashcards 按具体场景使用即可。"],
    chapters: [
      { time: "00:00 - 02:05", title: "NotebookLM 的核心优势", context: "它的优势不是泛泛回答，而是围绕你提供的 sources 工作。", details: "Jeff 开头先提醒：NotebookLM 的核心不是像 ChatGPT 那样泛聊，而是围绕你上传或添加的资料源工作。你给它论文、网页、文档或笔记，它会基于这些 sources 回答、总结和生成内容。因此判断 NotebookLM 的前提，是看它如何理解和使用资料，而不是只看它回答得是否流畅。", authorView: "Jeff 希望观众先把 NotebookLM 放在 source-grounded 工具的位置上，资料质量决定输出上限。", sourceCue: "Core Advantage" },
      { time: "02:05 - 07:51", title: "Sources、Chat、Studio 三栏", context: "视频中段解释 NotebookLM 新界面如何组织资料、对话和生成产物。", details: "他把界面拆成三块：Sources 用来管理输入资料；Chat 用来围绕资料提问、追问和查证；Studio 用来生成更成型的输出，比如报告、音频、视频、幻灯片、信息图、测验和思维导图。Jeff 的讲法不是逐个按钮介绍，而是让观众理解三栏之间的关系：先有资料，再有问答，最后把结果变成交付物。", authorView: "作者关注的是工作流闭环：资料进入 NotebookLM 后，能不能快速变成你能用的内容。", sourceCue: "Sources, Chat, Studio" },
      { time: "07:51 - 13:56", title: "最值得优先试的 Studio 工具", context: "Reports、Slide Decks、Infographics、Mind Maps 是最值得优先使用的工具。", details: "Jeff 把 Studio 工具分层，优先推荐 Reports、Slide Decks、Infographics、Mind Maps，因为它们能把资料直接转成更完整的工作成果。报告适合长文总结，幻灯片适合汇报，信息图和思维导图适合快速理解结构。相比之下，音频、视频、Quiz、Flashcards 更依赖具体场景，不一定每个人都高频使用。", authorView: "Jeff 认为重点不是功能越多越好，而是先掌握最能节省整理时间的高价值工具。", sourceCue: "Tier 1 Tools" }
    ],
    tools: ["NotebookLM", "Reports", "Slide Decks", "Infographics", "Mind Maps"]
  },
  {
    id: "tina-openclaw-setup",
    author: "Tina Huang",
    title: "My FULL OpenClaw Setup (steal my prompts!)",
    date: "2026-04-28",
    path: "",
    url: "https://www.youtube.com/watch?v=oOCN30ulVyo",
    oneLine: "这期是 Tina 的 OpenClaw 实战配置清单，重点是把本地 agent 环境从安装推进到多 agent 工作流。",
    summary: "她按自己的实际设置讲硬件选择、安装向导、Mission Control、Discord、项目构建、GitHub、多 Agent、安全检查和记忆修复。",
    actions: ["先看 OpenClaw 是否适合本地 agent 实验。", "重点关注 Mission Control、多 Agent、GitHub 和安全检查。", "提示词可借鉴，但不要照搬到敏感项目。"],
    chapters: [
      { time: "00:50 - 08:13", title: "硬件、下载和 Onboarding", context: "她先从环境准备讲起，降低 OpenClaw 上手门槛。", details: "Tina 先讲自己为什么关注硬件选择：本地 agent 要跑得顺，机器性能、系统环境和安装路径都会影响体验。接着她进入下载和 onboarding wizard，展示初次配置时要填什么、检查什么，以及怎样让 OpenClaw 知道你的本地开发环境。她不是只给一个安装命令，而是把从准备机器到进入工作台的流程走了一遍。", authorView: "Tina 想表达的是，本地 agent 不是只靠软件安装，硬件、初始配置和引导流程会直接影响后续体验。", sourceCue: "Hardware Selection / Download & Onboarding Wizard" },
      { time: "08:13 - 16:58", title: "Mission Control、Discord、项目和 GitHub", context: "中段展示 OpenClaw 如何从控制台进入真实项目协作。", details: "她接着讲 Custom Mission Control，把它当作管理 agent 工作的主控台：你可以查看任务、组织项目、安排 agent 做什么。之后她讲 Discord setup，说明 agent 工作流不一定只在 IDE 里发生，也可以接入沟通渠道。再往后是 build projects 和 GitHub：她展示如何让 agent 面向真实项目产出代码、接触仓库，并把结果和版本管理连接起来。", authorView: "她想让观众看到 OpenClaw 不只是本地聊天工具，而是围绕项目、沟通和代码仓库组织起来的 agent 环境。", sourceCue: "Custom Mission Control / Discord Setup / Github" },
      { time: "16:58 - 22:32", title: "Multi-Agent、安全和记忆修复", context: "后段进入更高级的 agent 协作、权限和记忆问题。", details: "最后她进入多 agent 框架，说明一个任务可以拆给多个 agent 协作，而不是让单个模型从头做到尾。随后她专门讲 security check，因为本地 agent 可能访问文件、执行命令或改代码，权限边界必须清楚。memory fixes 则用来解决 agent 持续工作时忘记背景、重复犯错或上下文不稳定的问题。", authorView: "她真正关心的是 agent 系统是否能可靠完成项目，而不是只跑 demo。", sourceCue: "Multi-Agent Framework / Security Check / Memory Fixes" }
    ],
    tools: ["OpenClaw", "Bolt", "GitHub", "Discord"]
  },
  {
    id: "tina-local-ai-agents",
    author: "Tina Huang",
    title: "Local AI Agents In 26 Minutes",
    date: "2026-04-15",
    path: "",
    url: "https://www.youtube.com/watch?v=M-NTwkM3VwM",
    oneLine: "这期是本地 AI Agent 入门，重点解释什么是 local agent，以及如何用 OpenClaw 和 Claude Cowork 实操。",
    summary: "视频先定义 Local AI Agent，再讲原则与技巧，随后用 OpenClaw 代码 demo 和 Claude Cowork no-code demo 展示两条路径。",
    actions: ["先理解 local agent 的边界。", "代码路径看 OpenClaw，低代码路径看 Claude Cowork。", "关注本地权限、文件访问和安全边界。"],
    chapters: [
      { time: "01:18 - 09:29", title: "Local AI Agent 定义和原则", context: "她先回答 local agent 是什么，以及使用时要注意哪些原则。", details: "Tina 先定义 local AI agent：它不是只在网页里回答问题，而是在你的本机环境里，能接触文件、工具和上下文，并围绕目标采取一系列动作。她强调使用原则：要给清楚目标，要限制权限，要知道 agent 能访问什么，也要理解本地运行并不等于自动更安全。她还提醒观众不要把 agent 当成完全自治的员工，早期使用仍然需要人来检查和纠偏。", authorView: "Tina 想让观众先建立正确预期：local agent 是工具化工作流，不是神奇自动化按钮。", sourceCue: "Definition Of Local AI Agent / Principles And Tips" },
      { time: "09:29 - 14:20", title: "用小测验检查理解", context: "中段穿插 quiz，帮助观众确认是否理解 local agent 的边界。", details: "她在讲完原则后穿插 quiz，不是为了制造互动感，而是让观众停下来判断：哪些任务适合 local agent，哪些场景需要谨慎，哪些权限不能随便放开。这部分把前面的概念落到具体选择题里，例如本地文件访问、工具调用、自动执行和安全边界之间的区别。", authorView: "她希望观众不是听完概念就开始乱用，而是先形成判断标准。", sourceCue: "Quiz 1" },
      { time: "14:20 - 24:22", title: "OpenClaw 与 Claude Cowork demo", context: "她分别展示代码方式和 no-code 方式。", details: "demo 部分分两条路：OpenClaw 是更偏代码和工程控制的路径，适合愿意配置框架、看代码、接入项目的人；Claude Cowork 是 no-code 路径，更适合先把本地文件、记忆和工作流串起来。她展示这两种方式，是为了说明 local agent 不是单一产品形态，而是一类可以从低门槛到高控制度逐步深入的工作方式。", authorView: "她用两个 demo 对比不同人群的入口：代码路径掌控更多细节，no-code 路径更容易开始。", sourceCue: "Demo: Openclaw / Demo: Claude Cowork" }
    ],
    tools: ["OpenClaw", "Claude Cowork", "Local AI Agents"]
  },
  {
    id: "tina-open-source-models",
    author: "Tina Huang",
    title: "Every Way To Run Open Source AI Models",
    date: "2026-03-24",
    path: "",
    url: "https://www.youtube.com/watch?v=vehYE1DfkZg",
    oneLine: "这期是运行开源 AI 模型的部署路径地图，从本地到托管 API、VPS、云和端侧。",
    summary: "Tina 按部署方式拆解：本地运行、浏览器/托管 playground、托管推理 API、VPS、托管云、端侧/边缘。",
    actions: ["学习阶段优先本地或 playground。", "产品验证可用托管推理 API。", "需要控制成本和性能时再评估 VPS、云和边缘。"],
    chapters: [
      { time: "01:40 - 07:47", title: "本地运行开源模型", context: "前半段先讲自己在电脑上跑模型的方式。", details: "Tina 先从本地运行讲起，因为这是理解开源模型最直接的入口。她会说明本地跑模型的好处：数据不一定要发到云端、调试自由度高、适合学习模型大小和硬件限制；同时也讲到现实门槛，比如显存、安装、速度和模型选择。她希望观众知道，本地运行适合学习和实验，但不一定适合所有生产场景。", authorView: "Tina 想让观众看到，本地运行给你控制权，但也把硬件和维护成本交给了你。", sourceCue: "Run Open Source Models Locally" },
      { time: "07:47 - 11:57", title: "Playground 和托管推理 API", context: "中段讲更容易上手、也更适合快速验证的方式。", details: "接着她讲浏览器或托管 playground：你不需要自己配置环境，就能试模型效果。再往后是 managed inference API，适合把模型能力接到应用里做产品验证。她会把这两类方式和本地运行对比：你放弃了一部分底层控制，但换来更快启动、更少维护和更稳定的服务体验。", authorView: "她认为学习阶段可以用 playground，做原型时 API 往往比自建推理更实际。", sourceCue: "Browser/Hosted Playgrounds / Managed Inference API" },
      { time: "11:57 - 16:01", title: "VPS、托管云和端侧", context: "后半段讲更偏部署和产品化的选择。", details: "最后她讲 VPS、managed cloud 和 on-device/edge。VPS 适合想控制环境但不想买硬件的人；托管云适合需要稳定扩缩容和工程支持的场景；端侧或边缘设备则适合关注隐私、延迟或离线能力的产品。Tina 不是说哪一种最好，而是把它们放在成本、控制权、运维难度、隐私和性能之间做权衡。", authorView: "她想强调，部署方式要跟目标匹配：实验、原型、稳定服务和端侧产品不是同一个答案。", sourceCue: "VPS / Managed Cloud / On-device/Edge" }
    ],
    tools: ["Open Source Models", "Managed Inference API", "VPS", "Edge"]
  },
  {
    id: "karpathy-how-i-use-llms",
    author: "Andrej Karpathy",
    title: "How I use LLMs",
    date: "2025-02-27",
    path: "",
    url: "https://www.youtube.com/watch?v=EWvNQjAaOHw",
    oneLine: "这期是 Karpathy 的 LLM 实用生态 walkthrough，展示他如何在生活和工作里使用各类 LLM 功能。",
    summary: "内容覆盖基础聊天、thinking models、搜索、deep research、文件上传、Python、Artifacts、Cursor、语音、NotebookLM、图像和视频、多模态、记忆与 Custom GPTs。",
    actions: ["把它当成 LLM 使用地图。", "重点看工具使用、文件上下文、代码、语音和多模态章节。", "用它校准自己对 LLM 产品生态的理解。"],
    chapters: [
      { time: "00:00 - 00:31:00", title: "基础聊天、模型选择和 thinking models", context: "开头解释 ChatGPT 交互、基础例子、模型和价格层级、thinking models。", details: "Karpathy 先从最普通的聊天入口讲起，用简单例子展示 LLM 可以解释概念、改写文字、辅助思考。然后他提醒观众注意自己正在用哪个模型：不同模型能力、速度、价格和推理深度不同。thinking models 这部分强调，有些模型会花更多时间推理，适合复杂问题；但并不是所有任务都需要最贵或最慢的模型。", authorView: "Karpathy 想让普通用户理解，LLM 不是一个单一产品，而是一组能力和成本不同的模型。", sourceCue: "Be aware of the model you're using" },
      { time: "00:31:00 - 01:14:02", title: "搜索、deep research、文件和 Python", context: "中段讲搜索、deep research、文件上传、Python、Claude Artifacts。", details: "他接着展示 LLM 连接工具后的变化：互联网搜索让模型补充新信息；deep research 适合更系统地查资料；文件上传让模型基于你的材料工作；Python 解释器负责计算、画图和处理数据；Claude Artifacts 可以把结果变成可交互或可展示的东西。这一段的重点是，LLM 不只是说话，它开始像一个带工具的工作台。", authorView: "他真正想展示的是 LLM 如何从聊天扩展成工作台：外部信息、私有上下文、计算和生成物互相配合。", sourceCue: "Tool use / File uploads / Claude Artifacts" },
      { time: "01:14:02 - 结束", title: "Cursor、语音、多模态、记忆和自定义助手", context: "后半段覆盖代码、语音、NotebookLM、图像视频、多模态和 Custom GPTs。", details: "后面 Karpathy 把使用场景继续展开：Cursor 代表 LLM 深入代码编辑器；语音模式让交互更接近对话；NotebookLM 更适合围绕资料工作；图像和视频能力说明模型正在进入多模态输入输出；记忆和 Custom GPTs 则让助手能保存偏好、固定任务方式和复用角色。整期像一次个人工具箱盘点，展示他会在不同任务里选不同 LLM 产品形态。", authorView: "他不是推荐唯一工具，而是在展示一种成熟用户的选择方式：按任务选择交互形态和上下文能力。", sourceCue: "Cursor / NotebookLM / Memory / Custom GPTs" }
    ],
    tools: ["ChatGPT", "Claude", "Gemini", "NotebookLM", "Cursor"]
  },
  {
    id: "karpathy-deep-dive-llms",
    author: "Andrej Karpathy",
    title: "Deep Dive into LLMs like ChatGPT",
    date: "2025-02-05",
    path: "",
    url: "https://www.youtube.com/watch?v=7xTGNNLPyMI",
    oneLine: "这期是面向大众的 LLM 全栈深潜，从预训练、tokenization、推理到后训练、RLHF 和未来趋势。",
    summary: "Karpathy 系统解释 LLM 如何从互联网数据预训练、如何 tokenization、如何推理、如何 post-training，以及 hallucination、tool use、RL、DeepSeek-R1 等概念。",
    actions: ["作为 LLM 技术底层入门主课。", "重点理解 pretraining 到 post-training 的过渡。", "把 hallucination、tool use、working memory 当作产品能力边界看。"],
    chapters: [
      { time: "00:01:00 - 00:59:23", title: "预训练、tokenization 和推理", context: "前半段讲模型如何从互联网数据学习，以及 token 和 neural network 的基本运作。", details: "Karpathy 先把 LLM 的起点讲清楚：模型在大量互联网文本上做预训练，学习根据前文预测下一个 token。tokenization 解释了文字如何被切成模型能处理的单位；神经网络则学习这些 token 之间的统计结构。推理时，模型不是直接拿出一个固定答案，而是一步步生成 token，所以输出会受提示词、采样和上下文影响。", authorView: "Karpathy 想把 LLM 去神秘化：它不是魔法，而是数据、token、神经网络和生成过程的组合。", sourceCue: "pretraining data / tokenization / inference" },
      { time: "00:59:23 - 01:52:00", title: "后训练、助手形态和幻觉", context: "中段讲模型如何从预测文本变成能对话的助手。", details: "他接着解释 post-training：预训练模型只是学会续写文本，还需要通过指令微调、人类偏好和强化学习变成更有用的助手。这里也会讲 hallucination：模型生成的是看起来合理的 token，不等于它真的知道事实。Karpathy 会把幻觉和模型机制联系起来，说明为什么引用、搜索、工具和资料 grounding 对真实使用很重要。", authorView: "他希望观众理解，ChatGPT 式助手不是预训练自然长出来的，而是后训练和产品设计塑造出来的。", sourceCue: "post-training / hallucinations" },
      { time: "01:52:00 - 03:21:46", title: "工具使用、RLHF、DeepSeek-R1 和未来", context: "后半段讲 tool use、RLHF、强化学习案例和未来方向。", details: "后半段继续讲现代 LLM 如何补短板：工具使用让模型调用搜索、代码执行和外部系统；RLHF 让输出更符合人类偏好；DeepSeek-R1 这类案例说明强化学习可以显著提升推理表现。他还会讨论工作记忆、上下文长度、多模态和 agent 方向，让观众看到 LLM 竞争已经不只是模型本体，而是训练方法、工具系统和产品形态的组合。", authorView: "他希望观众看到，现代 LLM 的能力来自多层系统：预训练只是地基，后训练、工具和推理机制决定可用性。", sourceCue: "tool use / RLHF / DeepSeek-R1" }
    ],
    tools: ["LLM", "GPT-2", "Llama", "DeepSeek-R1", "RLHF"]
  },
  {
    id: "karpathy-reproduce-gpt2",
    author: "Andrej Karpathy",
    title: "Let's reproduce GPT-2 (124M)",
    date: "2024-06-09",
    path: "",
    url: "https://www.youtube.com/watch?v=l8pRSuU81PU",
    oneLine: "这期是从零复现 GPT-2 124M 的工程课，覆盖模型实现、训练加速、超参数和完整训练运行。",
    summary: "视频从 OpenAI GPT-2 checkpoint 开始，逐步实现 GPT-2 nn.Module、forward pass、采样、训练 loop、data loader、参数共享、初始化和 GPU 加速。",
    actions: ["适合想真正理解 Transformer 训练工程的人。", "配合 build-nanogpt 和 nanoGPT repo 学习。", "重点看实现到训练加速的完整路径。"],
    chapters: [
      { time: "00:03:39 - 00:45:00", title: "从 checkpoint 到 GPT-2 模型结构", context: "开头从 OpenAI GPT-2 checkpoint 和 nn.Module 实现讲起。", details: "Karpathy 先加载 OpenAI GPT-2 124M 的 checkpoint，让观众看到要复现的目标长什么样。然后他开始实现 GPT-2 的 PyTorch nn.Module，把 token embedding、position embedding、Transformer block、attention、MLP 和输出 head 串起来。这一段不是讲概念图，而是把论文里的结构变成能运行的代码。", authorView: "他想让观众从真实代码理解 Transformer，而不是停留在架构示意图。", sourceCue: "implementing the GPT-2 nn.Module" },
      { time: "00:45:00 - 01:22:18", title: "forward、采样和训练循环", context: "中段把模型跑起来，并开始训练。", details: "模型结构搭好后，他实现 forward pass，解释输入 token 如何变成 logits 和 loss。随后加入 sampling，让模型能根据当前参数生成文本；再写训练 loop、data loader 和 loss 记录，让模型开始从数据里学习。这里的价值是把生成、损失函数、反向传播和数据批次连接成一条完整链路。", authorView: "Karpathy 想让你看到，语言模型训练不是一堆孤立概念，而是一个可以逐步搭起来的工程循环。", sourceCue: "forward pass / sampling / training loop" },
      { time: "01:22:18 - 结束", title: "训练加速和完整运行", context: "后半段进入 GPU、mixed precision、Tensor Cores、训练超参数和完整 run。", details: "后半段他开始把训练变快：把数据和模型放到 GPU，使用 mixed precision，利用 Tensor Cores，调整 batch、学习率、初始化和参数共享等细节。他还会讨论训练超参数、验证 loss、模型保存和完整 run。重点不是炫技，而是说明真正训练一个模型时，速度、数值稳定性、硬件利用率和可复现设置同样重要。", authorView: "他想强调，模型能跑起来只是第一步；训练工程决定你能不能高效、稳定地复现实验。", sourceCue: "Let's make it fast / Tensor Cores" }
    ],
    tools: ["GPT-2", "nanoGPT", "llm.c", "PyTorch", "Tensor Cores"]
  }
];
