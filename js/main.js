/* ── NAV: sticky shadow on scroll ──────────────────────────────────────── */
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 8) {
      nav.style.boxShadow = '0 2px 12px rgba(22,37,53,0.07)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }, { passive: true });
})();


/* ── SAVINGS CALCULATOR ─────────────────────────────────────────────────── */
(function () {
  let entityType = 'sole';

  const revSlider   = document.getElementById('rev');
  const expPctSlider = document.getElementById('exp-pct');
  const revDisplay  = document.getElementById('rev-display');
  const expDisplay  = document.getElementById('exp-display');
  const scorpVal    = document.getElementById('scorp-val');
  const deductVal   = document.getElementById('deduct-val');
  const totalVal    = document.getElementById('total-val');
  const resultCtx   = document.getElementById('result-context');
  const btnSole     = document.getElementById('btn-sole');
  const btnScorp    = document.getElementById('btn-scorp');

  if (!revSlider) return;

  function fmt(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function calculate() {
    const rev    = parseInt(revSlider.value, 10);
    const expPct = parseInt(expPctSlider.value, 10);
    const exp    = Math.round(rev * (expPct / 100));

    revDisplay.textContent = fmt(rev);
    expDisplay.textContent = expPct + '%';

    const netProfit = Math.max(rev - exp, 0);

    let scorpSavings = 0;
    if (entityType === 'sole') {
      const reasonableSalary = netProfit * 0.5;
      const profitDist = netProfit - reasonableSalary;
      scorpSavings = Math.max(profitDist * 0.153 * 0.9235, 0);
    }

    const marginalRate = rev > 400000 ? 0.37
                       : rev > 200000 ? 0.32
                       : rev > 100000 ? 0.24
                       : 0.22;
    const extraDeductions = exp * 0.20;
    const deductionSavings = extraDeductions * marginalRate;

    const total = scorpSavings + deductionSavings;

    scorpVal.textContent  = entityType === 'sole' ? fmt(scorpSavings) : '$0';
    deductVal.textContent = fmt(deductionSavings);
    totalVal.textContent  = fmt(total);

    if (entityType === 'sole') {
      resultCtx.textContent = `At ${fmt(rev)} revenue, S Corp election typically saves creators ${fmt(scorpSavings * 0.8)}–${fmt(scorpSavings * 1.2)}/yr in self-employment tax alone. We handle the election, payroll, and filings.`;
    } else {
      resultCtx.textContent = `You're already set up as an S Corp — great start. We focus on maximizing your creator-specific deductions and surfacing year-round strategies to capture the remaining ${fmt(deductionSavings)}.`;
    }
  }

  window.setEntity = function (type) {
    entityType = type;
    btnSole.classList.toggle('active', type === 'sole');
    btnScorp.classList.toggle('active', type === 'scorp');
    calculate();
  };

  revSlider.addEventListener('input', calculate);
  expPctSlider.addEventListener('input', calculate);

  calculate();
}());


/* ── COUNCIL: swap initials when photo fails ──────────────────────────── */
(function () {
  document.querySelectorAll('.council-avatar img').forEach(function (img) {
    img.addEventListener('error', function () {
      img.style.display = 'none';
      const initials = img.nextElementSibling;
      if (initials) initials.style.display = 'flex';
    });
  });
})();


/* ── SMOOTH SCROLL for anchor links ─────────────────────────────────────── */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
