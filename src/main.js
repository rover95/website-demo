const terminal = document.querySelector('#terminal');
const lines = [
  '$ whoami',
  'rover95 — AI-native frontend engineer',
  '',
  '$ focus --current',
  'Vue / Vite / Engineering / AI Agents / Performance',
  '',
  '$ mission',
  'turn messy product requirements into stable, elegant systems',
  '',
  '$ next',
  'personal site → blog → AI toolbox → project constellation'
];

let lineIndex = 0;
let charIndex = 0;

function typeTerminal() {
  if (!terminal) return;

  const currentLine = lines[lineIndex] ?? '';
  terminal.textContent = lines.slice(0, lineIndex).join('\n') + (lineIndex ? '\n' : '') + currentLine.slice(0, charIndex);

  if (charIndex < currentLine.length) {
    charIndex += 1;
    window.setTimeout(typeTerminal, 26);
    return;
  }

  if (lineIndex < lines.length - 1) {
    lineIndex += 1;
    charIndex = 0;
    window.setTimeout(typeTerminal, 180);
    return;
  }

  window.setTimeout(() => {
    lineIndex = 0;
    charIndex = 0;
    typeTerminal();
  }, 4200);
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
typeTerminal();
