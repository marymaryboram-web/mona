// MONA app shared script

// ── Top tabs (홈: 기부해요 / 필요해요) ──
document.querySelectorAll('[data-tab-group]').forEach(group => {
  const groupName = group.dataset.tabGroup;
  group.querySelectorAll('[data-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      // toggle tab buttons in same group
      group.querySelectorAll('[data-tab]').forEach(t => t.classList.toggle('active', t === tab));
      // toggle panels with matching data-tab-panel and group
      document.querySelectorAll(`[data-tab-panel][data-tab-group-panel="${groupName}"]`).forEach(p => {
        p.classList.toggle('hidden', p.dataset.tabPanel !== target);
      });
    });
  });
});

// ── Bottom sheet (modal) ──
document.querySelectorAll('[data-open-sheet]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.openSheet;
    const sheet = document.getElementById(id);
    if (sheet) sheet.classList.add('open');
  });
});
document.querySelectorAll('[data-close-sheet]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const sheet = btn.closest('.sheet-overlay');
    if (sheet) sheet.classList.remove('open');
  });
});
// Close on overlay click
document.querySelectorAll('.sheet-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

// ── Reject sheet option selection ──
document.querySelectorAll('.sheet-options').forEach(opts => {
  opts.querySelectorAll('.sheet-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      opts.querySelectorAll('.sheet-opt').forEach(o => o.classList.toggle('selected', o === opt));
    });
  });
});

// ── Filter chips (simple visual toggle within group) ──
document.querySelectorAll('[data-chip-group]').forEach(group => {
  group.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      group.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c === chip));
    });
  });
});

// ── Pay method selection ──
document.querySelectorAll('[data-pay-group]').forEach(group => {
  group.querySelectorAll('.pay-method').forEach(m => {
    m.addEventListener('click', () => {
      group.querySelectorAll('.pay-method').forEach(x => {
        x.classList.toggle('on', x === m);
        const radio = x.querySelector('.pm-radio');
        if (radio) radio.classList.toggle('on', x === m);
      });
    });
  });
});

// ── Delivery method (single-select buttons) ──
document.querySelectorAll('[data-delivery-group]').forEach(group => {
  group.querySelectorAll('[data-delivery]').forEach(btn => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('[data-delivery]').forEach(b => {
        const on = b === btn;
        b.style.border = on ? '1.5px solid var(--yellow)' : '0.5px solid var(--border-mid)';
        b.style.background = on ? 'var(--yellow-light)' : 'white';
        b.style.color = on ? 'var(--yellow-dark)' : 'var(--text-sub)';
        b.style.fontWeight = on ? '700' : '600';
      });
    });
  });
});
