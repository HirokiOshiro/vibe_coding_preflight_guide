function toggleChecklistItem(item) {
  item.classList.toggle('checked');
  item.setAttribute('aria-pressed', String(item.classList.contains('checked')));
}

function copyPrompt(el) {
  navigator.clipboard.writeText(
    el.textContent.replace('📋 クリックでコピー', '').replace('✓ コピーしました', '').trim()
  );
  el.classList.add('copied');
  setTimeout(() => el.classList.remove('copied'), 1500);
}

window.copyPrompt = copyPrompt;

function initializeChecklist() {
  document.querySelectorAll('.checklist li').forEach(li => {
    li.setAttribute('role', 'button');
    li.setAttribute('tabindex', '0');
    li.setAttribute('aria-pressed', String(li.classList.contains('checked')));
    li.addEventListener('click', () => toggleChecklistItem(li));
    li.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleChecklistItem(li);
      }
    });
  });
}

function initializeStickyNav() {
  const sections = document.querySelectorAll('.section[id]');
  const links = document.querySelectorAll('.toc-link');

  if (!sections.length || !links.length || !window.IntersectionObserver) {
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(link => link.classList.remove('active'));
          const active = document.querySelector(`.toc-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { rootMargin: '-80px 0px -60% 0px' }
  );

  sections.forEach(section => observer.observe(section));
}

function initializeKeywordPromptCopy() {
  document.querySelectorAll('.kw-item').forEach(item => {
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');

    const copyKeywordPrompt = () => {
      const term = item.childNodes[0].textContent.trim();
      const prompt = `以下の用語について、バイブコーディング（AIにコードを書かせる開発手法）の文脈で、プログラミング初学者向けに教えてください。\n\n用語：${term}\n\n1. 一言での定義\n2. なぜバイブコーディングで重要か\n3. Webアプリを例にした具体例\n4. 関連概念`;
      navigator.clipboard.writeText(prompt);
      const original = item.innerHTML;
      item.style.borderColor = 'var(--accent)';
      item.innerHTML = '<span style="color:var(--accent);font-size:12px;">✓ プロンプトをコピーしました</span>';
      setTimeout(() => {
        item.innerHTML = original;
        item.style.borderColor = '';
      }, 1500);
    };

    item.addEventListener('click', copyKeywordPrompt);
    item.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        copyKeywordPrompt();
      }
    });
  });
}

function initializeDeepDiveCodeAccessibility() {
  document.querySelectorAll('.deepdive code').forEach(codeEl => {
    codeEl.setAttribute('role', 'button');
    codeEl.setAttribute('tabindex', '0');
    codeEl.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        copyPrompt(codeEl);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeChecklist();
  initializeStickyNav();
  initializeKeywordPromptCopy();
  initializeDeepDiveCodeAccessibility();
});
