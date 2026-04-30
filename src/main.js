const chatLog = document.querySelector('#chatLog');
const heroTitle = document.querySelector('#heroTitle');
const heroDesc = document.querySelector('#heroDesc');
const tagList = document.querySelector('#tagList');
const liveBlocks = document.querySelector('#liveBlocks');
const pageRoot = document.querySelector('#pageRoot');
const profileCard = document.querySelector('#profileCard');

const conversation = [
  {
    role: 'user',
    text: '这个主页太空了，先给我一个清晰定位。',
    apply() {
      heroTitle.textContent = 'Rover · AI Native 前端工程师';
      heroDesc.textContent = '我专注把复杂前端需求拆成可交付系统，并用 agent 协同加速上线。';
    }
  },
  {
    role: 'agent',
    text: '收到，我先补核心身份和一句价值主张，再加技能标签。',
    apply() {
      ['Vue', 'Vite', 'AI Agent', 'Performance'].forEach(tag => {
        const el = document.createElement('span');
        el.textContent = tag;
        tagList.appendChild(el);
      });
    }
  },
  {
    role: 'user',
    text: '继续，增加项目版块，要看得出我做过什么。',
    apply() {
      const cards = [
        ['项目 A：图纸协作', '重构图纸页面，首屏提速 32%。'],
        ['项目 B：监控治理', '接入性能监控并定位长任务瓶颈。']
      ];
      cards.forEach(([title, desc]) => {
        const card = document.createElement('article');
        card.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;
        liveBlocks.appendChild(card);
      });
    }
  },
  {
    role: 'agent',
    text: '再补一块工作流，让访问者看到方法论。',
    apply() {
      const workflow = document.createElement('article');
      workflow.innerHTML = '<h3>交付工作流</h3><p>需求澄清 → 方案拆分 → Agent 生成初稿 → 人工校验发布。</p>';
      liveBlocks.appendChild(workflow);
    }
  },
  {
    role: 'user',
    text: '最后把视觉升级一下，像“被 agent 改造过”的感觉。',
    apply() {
      pageRoot.dataset.stage = '3';
      profileCard.querySelector('.label').textContent = 'stage 3 · agent enhanced';
    }
  },
  {
    role: 'agent',
    text: '完成：页面已从极简状态逐步演化为可展示的个人品牌首页。'
  }
];

function appendMessage(role, text) {
  const row = document.createElement('div');
  row.className = `msg ${role}`;
  row.textContent = `${role === 'user' ? '你' : 'agent'}：${text}`;
  chatLog.appendChild(row);
  chatLog.scrollTop = chatLog.scrollHeight;
}

conversation.forEach((step, index) => {
  window.setTimeout(() => {
    appendMessage(step.role, step.text);
    step.apply?.();
  }, 1200 * index + 500);
});
