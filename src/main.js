const chatLog = document.querySelector('#chatLog');
const heroTitle = document.querySelector('#heroTitle');
const heroDesc = document.querySelector('#heroDesc');
const tagList = document.querySelector('#tagList');
const metrics = document.querySelector('#metrics');
const projectList = document.querySelector('#projectList');
const workflowList = document.querySelector('#workflowList');

const steps = [
  {
    role: 'user',
    text: '先别一步到位，先从简陋页面开始，再一层层做炫酷。',
    apply() {
      heroTitle.textContent = 'Rover95 · 从 0 到 1 构建可进化前端系统';
    }
  },
  {
    role: 'agent',
    text: '收到，先补品牌定位与核心标签。',
    think: '思考：先建立身份锚点，避免后续内容漂移。',
    cmd: 'execute: update(hero, chips)',
    apply() {
      heroDesc.textContent = '专注 Vue/Vite 工程化、性能治理、AI 协作交付，把复杂需求拆解成稳定上线路径。';
      ['Vue3', 'Vite', 'TypeScript', 'AI Agent', 'Performance', 'Automation'].forEach(name => {
        const chip = document.createElement('span');
        chip.className = 'chip';
        chip.textContent = name;
        tagList.appendChild(chip);
      });
    }
  },
  {
    role: 'user',
    text: '加入有说服力的数据卡片。'
  },
  {
    role: 'agent',
    text: '已生成关键指标卡。',
    think: '思考：先展示结果，再讲过程，转化更高。',
    cmd: 'execute: create(metrics[3])',
    apply() {
      [
        ['32%', '图纸首屏提速'],
        ['18+', '复杂问题闭环'],
        ['7x', 'AI 研发效率增益']
      ].forEach(([num, label]) => {
        const card = document.createElement('div');
        card.className = 'metric';
        card.innerHTML = `<strong>${num}</strong><span>${label}</span>`;
        metrics.appendChild(card);
      });
    }
  },
  {
    role: 'agent',
    text: '继续补“项目星图”和“协作流程”，让页面完整。',
    think: '思考：项目证明能力，流程证明可复制性。',
    cmd: 'execute: append(projects, workflow)',
    apply() {
      const projects = [
        ['图纸协作系统', '完成 CAD/H5 图纸链路升级，兼容复杂对比与缓存策略。'],
        ['稳定性治理', '定位长任务与 GC 抖动，完善监控和发布兜底。'],
        ['Agent 自动化', '实现 CR 初审、日报生成、风险变更识别。']
      ];
      projects.forEach(([title, desc]) => {
        const block = document.createElement('div');
        block.className = 'block';
        block.innerHTML = `<strong>${title}</strong><p>${desc}</p>`;
        projectList.appendChild(block);
      });

      const flow = ['需求澄清与边界定义', 'Agent 产出方案初稿', '人工评审与风险校验', '自动化发布与回归监控'];
      flow.forEach((item, idx) => {
        const step = document.createElement('div');
        step.className = 'step';
        step.innerHTML = `<strong>Step ${idx + 1}</strong><p>${item}</p>`;
        workflowList.appendChild(step);
      });
    }
  }
];

function renderMessage(item) {
  const node = document.createElement('div');
  node.className = `msg ${item.role}`;
  node.innerHTML = `<div class="type">${item.role === 'user' ? 'USER' : 'AGENT'}</div><div>${item.text}</div>`;
  if (item.think) {
    const think = document.createElement('span');
    think.className = 'think';
    think.textContent = item.think;
    node.appendChild(think);
  }
  if (item.cmd) {
    const cmd = document.createElement('code');
    cmd.className = 'cmd';
    cmd.textContent = item.cmd;
    node.appendChild(cmd);
  }
  chatLog.appendChild(node);
  chatLog.scrollTop = chatLog.scrollHeight;
}

steps.forEach((item, i) => {
  setTimeout(() => {
    renderMessage(item);
    item.apply?.();
  }, i * 1300 + 400);
});
