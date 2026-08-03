// Ultra-Rock-Solid Fail-Safe State Engine (Permanent Offline Storage)
const STORAGE_KEYS = {
  STATS: 'kpss_pro_stats_v2',
  BOOKMARKS: 'kpss_pro_bookmarks_v2',
  MISSED: 'kpss_pro_missed_v2',
  COMPLETED_DENEMELER: 'kpss_pro_completed_v2',
  ACTIVE_SESSIONS: 'kpss_pro_active_sessions_v2',
  SAVED_QUESTIONS_STORE: 'kpss_pro_saved_q_store_v3'
};

function loadSafeState() {
  let stats = { totalSolved: 0, totalCorrect: 0, totalWrong: 0, totalNet: 0, completedDenemeler: {}, solvedQids: [] };
  let bookmarks = [];
  let missedQuestions = [];
  let activeSessions = {};
  let savedQuestionsStore = {};

  try {
    const rawStats = localStorage.getItem(STORAGE_KEYS.STATS) || localStorage.getItem('kpss_stats');
    if (rawStats) {
      const parsed = JSON.parse(rawStats);
      stats = Object.assign(stats, parsed);
      if (!Array.isArray(stats.solvedQids)) stats.solvedQids = [];
    }
  } catch (e) { console.warn('Stats load exception', e); }

  try {
    const rawComp = localStorage.getItem(STORAGE_KEYS.COMPLETED_DENEMELER);
    if (rawComp) {
      stats.completedDenemeler = Object.assign(stats.completedDenemeler || {}, JSON.parse(rawComp));
    }
  } catch (e) { console.warn('Completed denemeler load exception', e); }

  try {
    const rawBookmarks = localStorage.getItem(STORAGE_KEYS.BOOKMARKS) || localStorage.getItem('kpss_bookmarks');
    if (rawBookmarks) bookmarks = JSON.parse(rawBookmarks);
  } catch (e) { console.warn('Bookmarks load exception', e); }

  try {
    const rawMissed = localStorage.getItem(STORAGE_KEYS.MISSED) || localStorage.getItem('kpss_missed');
    if (rawMissed) missedQuestions = JSON.parse(rawMissed);
  } catch (e) { console.warn('Missed questions load exception', e); }

  try {
    const rawActive = localStorage.getItem(STORAGE_KEYS.ACTIVE_SESSIONS);
    if (rawActive) activeSessions = JSON.parse(rawActive);
  } catch (e) { console.warn('Active sessions load exception', e); }

  try {
    const rawStore = localStorage.getItem(STORAGE_KEYS.SAVED_QUESTIONS_STORE);
    if (rawStore) savedQuestionsStore = JSON.parse(rawStore);
  } catch (e) { console.warn('Saved store load exception', e); }

  return {
    activeView: 'view-home',
    selectedDiffFilter: 'all',
    selectedMatDiffFilter: 'all',
    selectedTarDiffFilter: 'all',
    selectedCogDiffFilter: 'all',
    selectedVatDiffFilter: 'all',
    activeFlashcardDeck: 'tarih',
    currentQuestions: [],
    currentIndex: 0,
    selectedOption: null,
    isAnswered: false,
    isExamMode: false,
    timerInterval: null,
    timeLeft: 900,
    savedTabMode: 'missed',
    sessionCorrect: 0,
    sessionWrong: 0,
    sessionEmpty: 0,
    sessionAnswers: {},
    activeSessions: activeSessions || {},
    savedQuestionsStore: savedQuestionsStore || {},
    flashcardIndex: 0,
    stats: stats,
    bookmarks: Array.isArray(bookmarks) ? bookmarks : [],
    missedQuestions: Array.isArray(missedQuestions) ? missedQuestions : []
  };
}

let appState = loadSafeState();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(appState.stats));
    localStorage.setItem(STORAGE_KEYS.COMPLETED_DENEMELER, JSON.stringify(appState.stats.completedDenemeler || {}));
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(appState.bookmarks || []));
    localStorage.setItem(STORAGE_KEYS.MISSED, JSON.stringify(appState.missedQuestions || []));
    localStorage.setItem(STORAGE_KEYS.ACTIVE_SESSIONS, JSON.stringify(appState.activeSessions || {}));
    localStorage.setItem(STORAGE_KEYS.SAVED_QUESTIONS_STORE, JSON.stringify(appState.savedQuestionsStore || {}));
  } catch (e) {
    console.warn('LocalStorage save error:', e);
  }
}

function registerSavedQuestion(q) {
  if (!q) return '';
  const qUniqueId = q.id || (appState.activeDenemeId ? `${appState.activeDenemeId}_q_${appState.currentIndex}` : `q_${appState.currentIndex}`);

  if (!appState.savedQuestionsStore) appState.savedQuestionsStore = {};

  const currentBadge = document.getElementById('quizCategoryBadge')?.textContent || 'KPSS Denemesi';

  let cleanQ = (q.question || '').replace(/^\[.*?\]\s*/, '').trim();

  appState.savedQuestionsStore[qUniqueId] = {
    id: qUniqueId,
    denemeTitle: currentBadge,
    denemeId: appState.activeDenemeId || 'deneme',
    questionIndex: appState.currentIndex || 0,
    questionNumber: (appState.currentIndex || 0) + 1,
    subcategory: q.subcategory || 'Soru',
    category: q.category || 'karma',
    question: cleanQ,
    options: q.options || [],
    correct: q.correct || 0,
    explanation: q.explanation || ''
  };

  return qUniqueId;
}

function saveActiveSessionProgress() {
  if (!appState.activeDenemeId) return;
  if (!appState.activeSessions) appState.activeSessions = {};

  appState.activeSessions[appState.activeDenemeId] = {
    denemeId: appState.activeDenemeId,
    currentIndex: appState.currentIndex,
    timeLeft: appState.timeLeft,
    sessionCorrect: appState.sessionCorrect,
    sessionWrong: appState.sessionWrong,
    sessionEmpty: appState.sessionEmpty,
    sessionAnswers: appState.sessionAnswers || {},
    lastUpdated: Date.now()
  };

  saveState();
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupDashboard();
  setupTurkceDenemelerModule();
  setupMatematikDenemelerModule();
  setupTarihDenemelerModule();
  setupCografyaDenemelerModule();
  setupVatandaslikDenemelerModule();
  setupQuizControls();
  setupFlashcards();
  setupSavedView();
  setupStatsView();
  setupPwaGuideModal();
  setupExamResultModal();
  registerServiceWorker();

  // Initial Pre-render of all 5 Subject Grids
  renderTurkceDenemeGrid();
  renderMatematikDenemeGrid();
  renderTarihDenemeGrid();
  renderCografyaDenemeGrid();
  renderVatandaslikDenemeGrid();
});

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(() => console.log('Service Worker registered.'))
      .catch(err => console.error('SW Error:', err));
  }
}

// Navigation Handler
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = item.getAttribute('data-target');
      switchView(targetView);
    });
  });
}

function switchView(viewId) {
  const views = document.querySelectorAll('.view');
  const navItems = document.querySelectorAll('.nav-item');

  views.forEach(v => v.classList.remove('active'));
  navItems.forEach(n => n.classList.remove('active'));

  const activeViewEl = document.getElementById(viewId);
  if (activeViewEl) {
    activeViewEl.classList.add('active');
  }

  const matchingNav = document.querySelector(`.nav-item[data-target="${viewId}"]`);
  if (matchingNav) {
    matchingNav.classList.add('active');
  }

  appState.activeView = viewId;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (viewId === 'view-home') setupDashboard();
  if (viewId === 'view-turkce-denemeler') renderTurkceDenemeGrid();
  if (viewId === 'view-matematik-denemeler') renderMatematikDenemeGrid();
  if (viewId === 'view-tarih-denemeler') renderTarihDenemeGrid();
  if (viewId === 'view-cografya-denemeler') renderCografyaDenemeGrid();
  if (viewId === 'view-vatandaslik-denemeler') renderVatandaslikDenemeGrid();
  if (viewId === 'view-flashcards') renderFlashcard();
  if (viewId === 'view-missed') renderMissedQuestions();
  if (viewId === 'view-favs') renderFavsQuestions();
  if (viewId === 'view-stats') renderStatsView();
}

// Universal Grid Renderer
function renderDenemeGridHelper(containerId, denemeList, diffFilterKey, idPrefix, borderClr = 'rgba(255,255,255,0.1)') {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = '';

  let list = Array.isArray(denemeList) ? denemeList : [];
  if (list.length === 0 && window[idPrefix + '40Denemeler']) {
    list = window[idPrefix + '40Denemeler'];
  }

  const currentDiff = appState[diffFilterKey] || 'all';
  const filtered = list.filter(d => currentDiff === 'all' || d.difficulty === currentDiff);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="glass-card" style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 30px;">
        <p>Henüz deneme yüklenemedi. Sayfayı yenileyiniz.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(deneme => {
    const isCompleted = appState.stats.completedDenemeler && appState.stats.completedDenemeler[deneme.id];
    const activeSession = appState.activeSessions && appState.activeSessions[deneme.id];

    let scoreInfo = 'Henüz Çözülmedi';
    let cardBorder = borderClr;
    let buttonLabel = 'Denemeyi Başlat 🚀';
    let statusText = '⏳ Henüz Çözülmedi';
    let statusColor = 'var(--text-muted)';
    let isResume = false;

    if (activeSession) {
      isResume = true;
      const qNum = (activeSession.currentIndex || 0) + 1;
      const minsLeft = Math.floor((activeSession.timeLeft || 0) / 60);
      statusText = `⏸️ Soru ${qNum}/${deneme.questionCount}'de Kaldınız (${minsLeft} dk kaldı)`;
      statusColor = '#fbbf24';
      cardBorder = '#f59e0b';
      buttonLabel = 'Kaldığın Yerden Devam Et 🔄';
    } else if (isCompleted) {
      scoreInfo = `Net: ${isCompleted.net.toFixed(2)} (${isCompleted.correct}D / ${isCompleted.wrong}Y)`;
      statusText = '✅ ' + scoreInfo;
      statusColor = '#10b981';
      cardBorder = '#10b981';
      buttonLabel = 'Tekrar Çöz 🎯';
    }

    const card = document.createElement('div');
    card.className = 'deneme-card';
    card.style.borderColor = cardBorder;
    card.innerHTML = `
      <div class="deneme-header">
        <span class="deneme-num">Deneme #${deneme.denemeNo}</span>
        <span class="diff-badge diff-badge-${deneme.difficulty}">${deneme.difficultyLabel}</span>
      </div>
      <div class="deneme-info">
        <span>${deneme.questionCount} Soru • ÖSYM Standartı</span>
        <div style="font-weight: 700; color: ${statusColor}; margin-top: 4px;">
          ${statusText}
        </div>
      </div>
      <button class="btn start-den-btn" style="${isResume ? 'background: linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(217, 119, 6, 0.35)) !important; border: 1px solid rgba(245, 158, 11, 0.6) !important; color: #fbbf24 !important;' : ''}">
        ${buttonLabel}
      </button>
    `;

    const startBtn = card.querySelector('.start-den-btn');
    startBtn.addEventListener('click', (e) => {
      e.preventDefault();
      startQuizSession(deneme.questions, true, `${deneme.title}`, deneme.id);
    });

    grid.appendChild(card);
  });
}

// 40 Deneme Module Setups
function setupTurkceDenemelerModule() {
  document.querySelectorAll('#diffFilterChips .chip').forEach(chip => {
    chip.onclick = (e) => {
      e.preventDefault();
      document.querySelectorAll('#diffFilterChips .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      appState.selectedDiffFilter = chip.getAttribute('data-diff');
      renderTurkceDenemeGrid();
    };
  });
}
function renderTurkceDenemeGrid() {
  renderDenemeGridHelper('turkceDenemeGrid', window.turkce40Denemeler || (typeof turkce40Denemeler !== 'undefined' ? turkce40Denemeler : []), 'selectedDiffFilter', 'turkce', 'rgba(168, 85, 247, 0.4)');
}

function setupMatematikDenemelerModule() {
  document.querySelectorAll('#matDiffFilterChips .chip').forEach(chip => {
    chip.onclick = (e) => {
      e.preventDefault();
      document.querySelectorAll('#matDiffFilterChips .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      appState.selectedMatDiffFilter = chip.getAttribute('data-diff');
      renderMatematikDenemeGrid();
    };
  });
}
function renderMatematikDenemeGrid() {
  renderDenemeGridHelper('matematikDenemeGrid', window.matematik40Denemeler || (typeof matematik40Denemeler !== 'undefined' ? matematik40Denemeler : []), 'selectedMatDiffFilter', 'matematik', 'rgba(244, 63, 94, 0.4)');
}

function setupTarihDenemelerModule() {
  document.querySelectorAll('#tarDiffFilterChips .chip').forEach(chip => {
    chip.onclick = (e) => {
      e.preventDefault();
      document.querySelectorAll('#tarDiffFilterChips .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      appState.selectedTarDiffFilter = chip.getAttribute('data-diff');
      renderTarihDenemeGrid();
    };
  });
}
function renderTarihDenemeGrid() {
  renderDenemeGridHelper('tarihDenemeGrid', window.tarih40Denemeler || (typeof tarih40Denemeler !== 'undefined' ? tarih40Denemeler : []), 'selectedTarDiffFilter', 'tarih', 'rgba(245, 158, 11, 0.4)');
}

function setupCografyaDenemelerModule() {
  document.querySelectorAll('#cogDiffFilterChips .chip').forEach(chip => {
    chip.onclick = (e) => {
      e.preventDefault();
      document.querySelectorAll('#cogDiffFilterChips .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      appState.selectedCogDiffFilter = chip.getAttribute('data-diff');
      renderCografyaDenemeGrid();
    };
  });
}
function renderCografyaDenemeGrid() {
  renderDenemeGridHelper('cografyaDenemeGrid', window.cografya40Denemeler || (typeof cografya40Denemeler !== 'undefined' ? cografya40Denemeler : []), 'selectedCogDiffFilter', 'cografya', 'rgba(16, 185, 129, 0.4)');
}

function setupVatandaslikDenemelerModule() {
  document.querySelectorAll('#vatDiffFilterChips .chip').forEach(chip => {
    chip.onclick = (e) => {
      e.preventDefault();
      document.querySelectorAll('#vatDiffFilterChips .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      appState.selectedVatDiffFilter = chip.getAttribute('data-diff');
      renderVatandaslikDenemeGrid();
    };
  });
}
function renderVatandaslikDenemeGrid() {
  renderDenemeGridHelper('vatandaslikDenemeGrid', window.vatandaslik40Denemeler || (typeof vatandaslik40Denemeler !== 'undefined' ? vatandaslik40Denemeler : []), 'selectedVatDiffFilter', 'vatandaslik', 'rgba(6, 182, 212, 0.4)');
}

// Dashboard Setup
function setupDashboard() {
  const solvedCount = Array.isArray(appState.stats.solvedQids) ? appState.stats.solvedQids.length : appState.stats.totalSolved;

  const totalSolvedEl = document.getElementById('dashTotalSolved');
  if (totalSolvedEl) totalSolvedEl.textContent = solvedCount;
  
  const totalNet = (appState.stats.totalCorrect - (appState.stats.totalWrong / 4)).toFixed(2);
  const netValEl = document.getElementById('dashNetVal');
  if (netValEl) netValEl.textContent = `${totalNet} Net`;

  const acc = solvedCount > 0 
    ? Math.round((appState.stats.totalCorrect / solvedCount) * 100) 
    : 0;
  const accuracyEl = document.getElementById('dashAccuracy');
  if (accuracyEl) accuracyEl.textContent = `%${acc}`;

  // Calculate 200 Deneme overall completion
  const compObj = appState.stats.completedDenemeler || {};
  const compCount = Object.keys(compObj).length;
  const pct = ((compCount / 200) * 100).toFixed(1);

  const compText = document.getElementById('overallCompletedText');
  if (compText) compText.textContent = `${compCount} / 200 Tamamlandı`;

  const pctText = document.getElementById('overallPercentageText');
  if (pctText) pctText.textContent = `%${pct}`;

  const progBar = document.getElementById('overallProgressBar');
  if (progBar) progBar.style.width = `${pct}%`;

  // Flashcards shortcut button
  const flashBtn = document.getElementById('openFlashcardsFromHomeBtn');
  if (flashBtn) {
    flashBtn.onclick = (e) => {
      e.preventDefault();
      switchView('view-flashcards');
    };
  }

  // Quick Action Hub Buttons
  const retryMissed = document.getElementById('quickRetryMissedBtn');
  if (retryMissed) {
    retryMissed.onclick = (e) => {
      e.preventDefault();
      switchView('view-missed');
    };
  }

  const openFavs = document.getElementById('quickOpenFavsBtn');
  if (openFavs) {
    openFavs.onclick = (e) => {
      e.preventDefault();
      switchView('view-favs');
    };
  }

  const openStats = document.getElementById('quickOpenStatsBtn');
  if (openStats) {
    openStats.onclick = (e) => {
      e.preventDefault();
      switchView('view-stats');
    };
  }

  document.querySelectorAll('.category-card').forEach(card => {
    card.onclick = (e) => {
      e.preventDefault();
      const cat = card.getAttribute('data-cat');
      if (cat === 'turkce') switchView('view-turkce-denemeler');
      else if (cat === 'matematik') switchView('view-matematik-denemeler');
      else if (cat === 'tarih') switchView('view-tarih-denemeler');
      else if (cat === 'cografya') switchView('view-cografya-denemeler');
      else if (cat === 'vatandaslik') switchView('view-vatandaslik-denemeler');
    };
  });
}

function getCategoryTitle(cat) {
  const titles = { tarih: 'Tarih', cografya: 'Coğrafya', vatandaslik: 'Vatandaşlık', turkce: 'Türkçe', matematik: 'Matematik' };
  return titles[cat] || 'Karma Test';
}

// Start Quiz Session
function startQuizSession(questionsList, isExamMode = false, titleBadge = 'Test', denemeId = null) {
  if (!questionsList || questionsList.length === 0) {
    alert('Seçilen denemede soru bulunamadı.');
    return;
  }

  appState.currentQuestions = questionsList;
  appState.isExamMode = isExamMode;
  appState.activeDenemeId = denemeId;

  // Restore Active Saved Session if present
  const savedSession = (denemeId && appState.activeSessions) ? appState.activeSessions[denemeId] : null;

  if (savedSession && typeof savedSession.currentIndex === 'number') {
    appState.currentIndex = Math.min(savedSession.currentIndex, questionsList.length - 1);
    appState.timeLeft = savedSession.timeLeft || (questionsList.length * 60);
    appState.sessionCorrect = savedSession.sessionCorrect || 0;
    appState.sessionWrong = savedSession.sessionWrong || 0;
    appState.sessionEmpty = savedSession.sessionEmpty || 0;
    appState.sessionAnswers = savedSession.sessionAnswers || {};
  } else {
    appState.currentIndex = 0;
    appState.timeLeft = questionsList.length * 60;
    appState.sessionCorrect = 0;
    appState.sessionWrong = 0;
    appState.sessionEmpty = 0;
    appState.sessionAnswers = {};
  }

  appState.selectedOption = null;
  appState.isAnswered = false;

  const badge = document.getElementById('quizCategoryBadge');
  if (badge) badge.textContent = titleBadge;

  const timerBadge = document.getElementById('timerBadge');
  if (isExamMode) {
    if (timerBadge) timerBadge.style.display = 'flex';
    startTimer();
  } else {
    if (timerBadge) timerBadge.style.display = 'none';
    clearInterval(appState.timerInterval);
  }

  switchView('view-quiz');
  renderCurrentQuestion();
}

function startTimer() {
  clearInterval(appState.timerInterval);
  updateTimerDisplay();

  appState.timerInterval = setInterval(() => {
    appState.timeLeft--;
    updateTimerDisplay();

    if (appState.timeLeft % 5 === 0) {
      saveActiveSessionProgress();
    }

    if (appState.timeLeft <= 0) {
      clearInterval(appState.timerInterval);
      finishQuizSession();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(appState.timeLeft / 60);
  const secs = appState.timeLeft % 60;
  const timerText = document.getElementById('timerText');
  if (timerText) {
    timerText.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
}

// Render Question Screen
function renderGeometryOrChartSvg(q) {
  if (!q) return '';
  const subcat = (q.subcategory || '').toLowerCase();
  const qStr = (q.question || '').toLowerCase();

  // --- COĞRAFYA & VATANDAŞLIK GÖRSEL ŞEMALAR ---
  if (qStr.includes('fay hatları') || qStr.includes('horst')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 250 120" class="svg-math-canvas">
          <path d="M 20 80 Q 70 40 120 70 T 220 50" fill="none" stroke="#10b981" stroke-width="3" />
          <path d="M 30 40 L 230 40" fill="none" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="4 2" />
          <path d="M 50 90 Q 140 100 230 80" fill="none" stroke="#38bdf8" stroke-width="2" />
          <circle cx="80" cy="55" r="5" fill="#f59e0b" />
          <circle cx="160" cy="60" r="5" fill="#f43f5e" />
          <text x="80" y="42" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">KAF</text>
          <text x="160" y="48" fill="#fda4af" font-size="10" font-weight="bold" text-anchor="middle">DAF</text>
          <text x="40" y="105" fill="#38bdf8" font-size="10" font-weight="bold">BAF (Horst-Graben)</text>
        </svg>
        <span class="diagram-caption">🗺️ Türkiye Fay Hatları ve Horst-Graben Dağları Harita Şeması</span>
      </div>
    `;
  }

  if (qStr.includes('izohips')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 220 130" class="svg-math-canvas">
          <ellipse cx="110" cy="65" rx="90" ry="50" fill="none" stroke="#64748b" stroke-width="1.8" />
          <ellipse cx="110" cy="65" rx="65" ry="35" fill="none" stroke="#818cf8" stroke-width="2" />
          <ellipse cx="110" cy="65" rx="40" ry="20" fill="none" stroke="#34d399" stroke-width="2.2" />
          <circle cx="110" cy="65" r="3" fill="#fbbf24" />
          <text x="110" y="60" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">Zirve (800 m)</text>
          <text x="175" y="70" fill="#94a3b8" font-size="9">200 m</text>
          <text x="150" y="70" fill="#a5b4fc" font-size="9">400 m</text>
          <text x="130" y="70" fill="#34d399" font-size="9">600 m</text>
        </svg>
        <span class="diagram-caption">📍 Eş Yükselti (İzohips) Topoğrafya Haritası (İzohips Aralığı: 200 m)</span>
      </div>
    `;
  }

  if (qStr.includes('yağış grafiği') || qStr.includes('iklim ve yağış')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 240 140" class="svg-math-canvas">
          <line x1="30" y1="15" x2="30" y2="115" stroke="#64748b" stroke-width="2" />
          <line x1="30" y1="115" x2="220" y2="115" stroke="#64748b" stroke-width="2" />
          <rect x="40" y="60" width="12" height="55" fill="#38bdf8" />
          <rect x="60" y="75" width="12" height="40" fill="#38bdf8" />
          <rect x="80" y="85" width="12" height="30" fill="#38bdf8" />
          <rect x="100" y="95" width="12" height="20" fill="#38bdf8" />
          <rect x="120" y="100" width="12" height="15" fill="#f59e0b" />
          <rect x="140" y="90" width="12" height="25" fill="#38bdf8" />
          <rect x="160" y="50" width="12" height="65" fill="#38bdf8" />
          <rect x="180" y="35" width="12" height="80" fill="#38bdf8" />
          <path d="M 45 90 Q 110 30 185 85" fill="none" stroke="#f43f5e" stroke-width="2.5" />
          <text x="215" y="118" fill="#cbd5e1" font-size="9">Aylar</text>
        </svg>
        <span class="diagram-caption">📊 İklim Sıcaklık (°C) ve Yağış (mm) Grafiği</span>
      </div>
    `;
  }

  if (qStr.includes('nüfus piramidi')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 220 130" class="svg-math-canvas">
          <line x1="110" y1="15" x2="110" y2="115" stroke="#94a3b8" stroke-width="2" />
          <line x1="20" y1="115" x2="200" y2="115" stroke="#94a3b8" stroke-width="2" />
          <polygon points="110,25 60,115 110,115" fill="rgba(99, 102, 241, 0.4)" stroke="#6366f1" />
          <polygon points="110,25 160,115 110,115" fill="rgba(244, 63, 94, 0.4)" stroke="#f43f5e" />
          <text x="75" y="105" fill="#a5b4fc" font-size="10" font-weight="bold">Erkek</text>
          <text x="135" y="105" fill="#fda4af" font-size="10" font-weight="bold">Kadın</text>
        </svg>
        <span class="diagram-caption">📊 Türkiye Yaş Grubu Demografik Nüfus Piramidi</span>
      </div>
    `;
  }

  if (qStr.includes('normlar hiyerarşisi')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 220 130" class="svg-math-canvas">
          <polygon points="110,15 30,115 190,115" fill="none" stroke="#f59e0b" stroke-width="2" />
          <line x1="90" y1="40" x2="130" y2="40" stroke="#f59e0b" stroke-width="1.5" />
          <line x1="70" y1="65" x2="150" y2="65" stroke="#f59e0b" stroke-width="1.5" />
          <line x1="50" y1="90" x2="170" y2="90" stroke="#f59e0b" stroke-width="1.5" />
          <text x="110" y="32" fill="#fbbf24" font-size="10" font-weight="extrabold" text-anchor="middle">1. ANAYASA</text>
          <text x="110" y="56" fill="#a5b4fc" font-size="10" font-weight="bold" text-anchor="middle">2. KANUN / ANTLAŞMA</text>
          <text x="110" y="81" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">3. CB KARARNAMESİ</text>
          <text x="110" y="106" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">4. YÖNETMELİK</text>
        </svg>
        <span class="diagram-caption">⚖️ Hukuk Kuralları Normlar Hiyerarşisi Piramidi</span>
      </div>
    `;
  }

  // --- 0. TABLO ANALİZİ PROBLEMLERİ ---
  if (qStr.includes('tablo') || qStr.includes('mağazalarının') || qStr.includes('ürün sayıları')) {
    const pAMatch = qStr.match(/a\s*│\s*(\d+)\s*│\s*(\d+)/i);
    const pBMatch = qStr.match(/b\s*│\s*(\d+)\s*│\s*(\d+)/i);
    let pA = '540', sA = '432', pB = '840', sB = '756';
    if (pAMatch && pBMatch) {
      pA = pAMatch[1]; sA = pAMatch[2];
      pB = pBMatch[1]; sB = pBMatch[2];
    }
    return `
      <div class="table-container-card">
        <table class="quiz-data-table">
          <thead>
            <tr>
              <th>Mağaza Kodu</th>
              <th>Üretilen Ürün</th>
              <th>Satılan Ürün</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong style="color: #818cf8;">A Mağazası</strong></td>
              <td>${pA} Adet</td>
              <td><strong style="color: #34d399;">${sA} Adet</strong></td>
            </tr>
            <tr>
              <td><strong style="color: #fb7185;">B Mağazası</strong></td>
              <td>${pB} Adet</td>
              <td><strong style="color: #34d399;">${sB} Adet</strong></td>
            </tr>
          </tbody>
        </table>
        <span class="diagram-caption">📊 ÖSYM Üretim & Satış Veri Tablosu</span>
      </div>
    `;
  }

  // --- MATEMATİK PROBLEM & MANTIK ŞEMALARI ---
  if (qStr.includes('şekerli su') || qStr.includes('karışım')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 220 110" class="svg-math-canvas">
          <rect x="30" y="30" width="50" height="60" rx="6" fill="rgba(99, 102, 241, 0.15)" stroke="#6366f1" stroke-width="2" />
          <rect x="140" y="30" width="50" height="60" rx="6" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2" />
          <text x="110" y="65" fill="#f59e0b" font-size="20" font-weight="bold" text-anchor="middle">+</text>
          <text x="55" y="65" fill="#a5b4fc" font-size="11" font-weight="bold" text-anchor="middle">%20</text>
          <text x="165" y="65" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">%40</text>
        </svg>
        <span class="diagram-caption">🧪 Şekerli Su Çözeltileri Karışım Şeması</span>
      </div>
    `;
  }

  if (qStr.includes('harekete başlıyor') || qStr.includes('hızları sırasıyla')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 240 100" class="svg-math-canvas">
          <line x1="30" y1="60" x2="210" y2="60" stroke="#64748b" stroke-width="3" />
          <circle cx="30" cy="60" r="6" fill="#6366f1" />
          <circle cx="210" cy="60" r="6" fill="#f43f5e" />
          <text x="25" y="42" fill="#a5b4fc" font-size="11" font-weight="bold">A Kenti (V₁)</text>
          <text x="175" y="42" fill="#fda4af" font-size="11" font-weight="bold">B Kenti (V₂)</text>
          <path d="M 40 55 Q 120 25 200 55" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 2" />
        </svg>
        <span class="diagram-caption">🚗 Karşılıklı Hareket Karşılaşma Şeması</span>
      </div>
    `;
  }

  if (qStr.includes('kümeleri') || qStr.includes('venn') || qStr.includes('eleman sayısı')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 220 120" class="svg-math-canvas">
          <circle cx="85" cy="60" r="42" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2" />
          <circle cx="135" cy="60" r="42" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2" />
          <text x="62" y="64" fill="#a5b4fc" font-size="12" font-weight="bold">A</text>
          <text x="158" y="64" fill="#34d399" font-size="12" font-weight="bold">B</text>
          <text x="110" y="64" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">A ∩ B</text>
        </svg>
        <span class="diagram-caption">📊 A ve B Kümeleri Venn Şeması</span>
      </div>
    `;
  }

  if (qStr.includes('eşitsizliğini sağlayan') || qStr.includes('sayı doğrusu')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 240 70" class="svg-math-canvas">
          <line x1="20" y1="35" x2="220" y2="35" stroke="#64748b" stroke-width="2.5" />
          <polyline points="212,30 220,35 212,40" fill="none" stroke="#64748b" stroke-width="2" />
          <line x1="60" y1="35" x2="170" y2="35" stroke="#f43f5e" stroke-width="4" />
          <circle cx="60" cy="35" r="5" fill="#f43f5e" />
          <circle cx="170" cy="35" r="5" fill="#f43f5e" />
          <text x="60" y="55" fill="#fda4af" font-size="11" font-weight="bold" text-anchor="middle">x₁</text>
          <text x="170" y="55" fill="#fda4af" font-size="11" font-weight="bold" text-anchor="middle">x₂</text>
        </svg>
        <span class="diagram-caption">📍 Sayı Doğrusunda Eşitsizlik Çözüm Aralığı</span>
      </div>
    `;
  }

  // --- 1. ÇEMBER & DAİRE ÖZEL TİPLERİ ---
  if (qStr.includes('teğet') || qStr.includes('daireye dışındaki')) {
    const tMatch = qStr.match(/\|pt\|\s*=\s*(\d+)/i);
    const dMatch = qStr.match(/\|po\|\s*=\s*(\d+)/i);
    const tVal = tMatch ? tMatch[1] : '12';
    const dVal = dMatch ? dMatch[1] : '13';
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 240 150" class="svg-math-canvas">
          <circle cx="75" cy="75" r="50" fill="rgba(99, 102, 241, 0.08)" stroke="#6366f1" stroke-width="2.5" />
          <circle cx="75" cy="75" r="3.5" fill="#818cf8" />
          <text x="65" y="72" fill="#a5b4fc" font-size="11" font-weight="bold">O</text>
          
          <line x1="75" y1="75" x2="210" y2="75" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="3 3" />
          <circle cx="210" cy="75" r="4" fill="#f43f5e" />
          <text x="215" y="79" fill="#fda4af" font-size="12" font-weight="bold">P</text>
          
          <line x1="75" y1="75" x2="75" y2="25" stroke="#818cf8" stroke-width="2" />
          <circle cx="75" cy="25" r="3.5" fill="#818cf8" />
          <text x="75" y="17" fill="#c7d2fe" font-size="11" font-weight="bold" text-anchor="middle">T</text>
          
          <line x1="210" y1="75" x2="75" y2="25" stroke="#f43f5e" stroke-width="2.5" />
          
          <polyline points="75,35 85,35 85,25" fill="none" stroke="#818cf8" stroke-width="1.5" />
          <circle cx="80" cy="30" r="1.2" fill="#818cf8" />

          <text x="145" y="43" fill="#fda4af" font-size="11" font-weight="bold">|PT| = ${tVal} cm</text>
          <text x="135" y="92" fill="#94a3b8" font-size="11" font-weight="bold">|PO| = ${dVal} cm</text>
          <text x="50" y="52" fill="#818cf8" font-size="11" font-weight="bold">r</text>
        </svg>
        <span class="diagram-caption">📍 O Merkezli Daireye P Noktasından Çizilen Teğet ([OT] ⊥ [PT])</span>
      </div>
    `;
  }

  if (qStr.includes('daire dilimi') || qStr.includes('merkez açısının ölçüsü α')) {
    const angleMatch = qStr.match(/α\s*=\s*(\d+)°/) || qStr.match(/(\d+)°/);
    const angleVal = angleMatch ? angleMatch[1] : '60';
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 220 150" class="svg-math-canvas">
          <circle cx="110" cy="75" r="55" fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="4 4" />
          <path d="M110,75 L165,75 A55,55 0 0,0 137.5,27.4 Z" fill="rgba(245, 158, 11, 0.25)" stroke="#f59e0b" stroke-width="2.5" />
          <circle cx="110" cy="75" r="3.5" fill="#f59e0b" />
          <text x="96" y="80" fill="#fbbf24" font-size="12" font-weight="bold">O</text>
          <text x="126" y="62" fill="#fbbf24" font-size="12" font-weight="extrabold">${angleVal}°</text>
          <text x="138" y="90" fill="#a5b4fc" font-size="11" font-weight="bold">r = 6 cm</text>
        </svg>
        <span class="diagram-caption">🥧 O Merkezli Daire Dilimi (α = ${angleVal}°)</span>
      </div>
    `;
  }

  if (qStr.includes('kiriş')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 220 150" class="svg-math-canvas">
          <circle cx="110" cy="75" r="55" fill="rgba(99, 102, 241, 0.05)" stroke="#6366f1" stroke-width="2.5" />
          <circle cx="110" cy="75" r="3.5" fill="#818cf8" />
          <text x="110" y="65" fill="#a5b4fc" font-size="11" font-weight="bold" text-anchor="middle">O (r=10)</text>
          
          <line x1="60" y1="110" x2="160" y2="110" stroke="#f43f5e" stroke-width="2.5" />
          <circle cx="60" cy="110" r="3" fill="#f43f5e" />
          <circle cx="160" cy="110" r="3" fill="#f43f5e" />
          <text x="48" y="114" fill="#fda4af" font-size="11" font-weight="bold">A</text>
          <text x="168" y="114" fill="#fda4af" font-size="11" font-weight="bold">B</text>

          <line x1="110" y1="75" x2="110" y2="110" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3 3" />
          <text x="115" y="95" fill="#7dd3fc" font-size="10" font-weight="bold">d = 6 cm</text>
        </svg>
        <span class="diagram-caption">📍 O Merkezli Çemberde Kirişe İnen Dikme</span>
      </div>
    `;
  }

  if (qStr.includes('çevre açı') || qStr.includes('m(acb)')) {
    const angleMatch = qStr.match(/m\(acb\)\s*=\s*(\d+)°/i) || qStr.match(/(\d+)°/);
    const angleVal = angleMatch ? angleMatch[1] : '40';
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 220 150" class="svg-math-canvas">
          <circle cx="110" cy="75" r="55" fill="none" stroke="#6366f1" stroke-width="2.5" />
          <circle cx="110" cy="75" r="3.5" fill="#f59e0b" />
          <text x="110" y="65" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">O (x = ?)</text>
          
          <line x1="60" y1="105" x2="110" y2="22" stroke="#10b981" stroke-width="2" />
          <line x1="160" y1="105" x2="110" y2="22" stroke="#10b981" stroke-width="2" />
          <circle cx="110" cy="22" r="3" fill="#10b981" />
          <text x="110" y="14" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">C (${angleVal}°)</text>

          <line x1="60" y1="105" x2="110" y2="75" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="3 3" />
          <line x1="160" y1="105" x2="110" y2="75" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="3 3" />
          <text x="48" y="112" fill="#a5b4fc" font-size="11" font-weight="bold">A</text>
          <text x="168" y="112" fill="#a5b4fc" font-size="11" font-weight="bold">B</text>
        </svg>
        <span class="diagram-caption">📍 Aynı Yayı Gören Çevre Açı (${angleVal}°) & Merkez Açı (x)</span>
      </div>
    `;
  }

  // --- 2. ÜÇGEN ÖZEL TİPLERİ ---
  if (qStr.includes('ikizkenar üçgen') || qStr.includes('m(adc)')) {
    const adcMatch = qStr.match(/m\(adc\)\s*=\s*(\d+)°/i);
    const adcVal = adcMatch ? adcMatch[1] : '108';
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 220 160" class="svg-math-canvas">
          <polygon points="110,25 40,135 180,135" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" stroke-width="2.5" />
          <text x="110" y="16" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">A (Tepe Açısı = ?)</text>
          <text x="25" y="142" fill="#34d399" font-size="12" font-weight="bold">B</text>
          <text x="190" y="142" fill="#34d399" font-size="12" font-weight="bold">C</text>

          <line x1="180" y1="135" x2="70" y2="84" stroke="#f43f5e" stroke-width="2.2" />
          <circle cx="70" cy="84" r="3.5" fill="#f43f5e" />
          <text x="50" y="80" fill="#fda4af" font-size="11" font-weight="bold">D</text>
          <text x="82" y="100" fill="#fda4af" font-size="11" font-weight="bold">${adcVal}°</text>
        </svg>
        <span class="diagram-caption">📍 ABC İkizkenar Üçgeni (|AB|=|AC|) ve [CD] İç Açıortayı</span>
      </div>
    `;
  }

  if (qStr.includes('öklit') || qStr.includes('[ah] ⊥ [bc]')) {
    const kMatch = qStr.match(/\|hc\|\s*=\s*(\d+)/i);
    const kVal = kMatch ? kMatch[1] : '9';
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 240 150" class="svg-math-canvas">
          <polygon points="40,120 200,120 40,30" fill="rgba(99, 102, 241, 0.08)" stroke="#6366f1" stroke-width="2.5" />
          <polyline points="40,108 52,108 52,120" fill="none" stroke="#6366f1" stroke-width="1.8" />
          
          <line x1="40" y1="30" x2="84" y2="120" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="4 2" />
          <polyline points="76,120 76,110 84,110" fill="none" stroke="#f43f5e" stroke-width="1.5" />

          <text x="25" y="30" fill="#a5b4fc" font-size="12" font-weight="bold">A (90°)</text>
          <text x="25" y="130" fill="#a5b4fc" font-size="12" font-weight="bold">B</text>
          <text x="205" y="130" fill="#a5b4fc" font-size="12" font-weight="bold">C</text>
          <text x="84" y="134" fill="#fda4af" font-size="12" font-weight="bold" text-anchor="middle">H</text>

          <text x="75" y="70" fill="#fda4af" font-size="11" font-weight="bold">h = ?</text>
          <text x="55" y="115" fill="#94a3b8" font-size="10" font-weight="bold">4 cm</text>
          <text x="140" y="115" fill="#94a3b8" font-size="10" font-weight="bold">${kVal} cm</text>
        </svg>
        <span class="diagram-caption">📐 Dik Üçgende Hipotenüse İnen Yükseklik (h² = p · k)</span>
      </div>
    `;
  }

  if (qStr.includes('45°') && qStr.includes('30°')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 240 150" class="svg-math-canvas">
          <polygon points="100,30 30,120 210,120" fill="rgba(245, 158, 11, 0.08)" stroke="#f59e0b" stroke-width="2.5" />
          <line x1="100" y1="30" x2="100" y2="120" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3 3" />
          
          <text x="100" y="20" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">A</text>
          <text x="15" y="130" fill="#fbbf24" font-size="12" font-weight="bold">B (45°)</text>
          <text x="215" y="130" fill="#fbbf24" font-size="12" font-weight="bold">C (30°)</text>
          <text x="100" y="134" fill="#7dd3fc" font-size="11" font-weight="bold" text-anchor="middle">H</text>

          <text x="105" y="80" fill="#7dd3fc" font-size="11" font-weight="bold">AH ⊥ BC</text>
        </svg>
        <span class="diagram-caption">📐 45°-45°-90° ve 30°-60°-90° Dik Üçgen Birleşimi</span>
      </div>
    `;
  }

  if (qStr.includes('iç açıortay')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 220 150" class="svg-math-canvas">
          <polygon points="90,25 30,125 190,125" fill="rgba(99, 102, 241, 0.08)" stroke="#6366f1" stroke-width="2.5" />
          <line x1="90" y1="25" x2="110" y2="125" stroke="#f43f5e" stroke-width="2.2" />
          
          <text x="90" y="16" fill="#a5b4fc" font-size="12" font-weight="bold" text-anchor="middle">A (Açıortay)</text>
          <text x="18" y="132" fill="#a5b4fc" font-size="12" font-weight="bold">B</text>
          <text x="195" y="132" fill="#a5b4fc" font-size="12" font-weight="bold">C</text>
          <text x="110" y="138" fill="#fda4af" font-size="12" font-weight="bold" text-anchor="middle">D</text>
        </svg>
        <span class="diagram-caption">📐 ABC Üçgeninde [AD] İç Açıortay Teoremi (|AB|/|AC| = |BD|/|DC|)</span>
      </div>
    `;
  }

  if (qStr.includes('m kuralı') || qStr.includes('d₁ // d₂') || qStr.includes('paralel doğrular')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 240 140" class="svg-math-canvas">
          <line x1="20" y1="30" x2="220" y2="30" stroke="#94a3b8" stroke-width="2.5" />
          <line x1="20" y1="110" x2="220" y2="110" stroke="#94a3b8" stroke-width="2.5" />
          <text x="223" y="34" fill="#cbd5e1" font-size="11" font-weight="bold">d₁</text>
          <text x="223" y="114" fill="#cbd5e1" font-size="11" font-weight="bold">d₂</text>

          <polyline points="50,30 130,70 60,110" fill="none" stroke="#f43f5e" stroke-width="2.8" />
          <circle cx="130" cy="70" r="3.5" fill="#f43f5e" />

          <text x="65" y="44" fill="#fda4af" font-size="11" font-weight="bold">m(A) [Sağ]</text>
          <text x="75" y="102" fill="#fda4af" font-size="11" font-weight="bold">m(B) [Sağ]</text>
          <text x="138" y="74" fill="#f59e0b" font-size="12" font-weight="extrabold">m(C) [Sol = A + B]</text>
        </svg>
        <span class="diagram-caption">📐 d₁ // d₂ Paralel Doğrularında Z / M Kuralı</span>
      </div>
    `;
  }

  if (qStr.includes('üçgende dış açılar') || qStr.includes('dış açısının')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 220 140" class="svg-math-canvas">
          <polygon points="70,30 30,110 160,110" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" stroke-width="2.5" />
          <line x1="30" y1="110" x2="200" y2="110" stroke="#64748b" stroke-width="2" stroke-dasharray="3 3" />
          <line x1="70" y1="30" x2="90" y2="5" stroke="#64748b" stroke-width="2" stroke-dasharray="3 3" />

          <text x="70" y="22" fill="#34d399" font-size="12" font-weight="bold">A</text>
          <text x="15" y="115" fill="#34d399" font-size="12" font-weight="bold">B</text>
          <text x="160" y="124" fill="#34d399" font-size="12" font-weight="bold">C (İç Açı = ?)</text>
        </svg>
        <span class="diagram-caption">📐 Üçgenin Dış Açıları Toplamı (360°)</span>
      </div>
    `;
  }

  // --- 3. DÖRTGENLER & BENZERLİK ---
  if (qStr.includes('[de] // [bc]') || qStr.includes('benzerlik')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 220 150" class="svg-math-canvas">
          <polygon points="110,20 30,130 190,130" fill="rgba(99, 102, 241, 0.05)" stroke="#6366f1" stroke-width="2.5" />
          <line x1="62" y1="86" x2="158" y2="86" stroke="#f43f5e" stroke-width="2.5" />
          <polygon points="110,20 62,86 158,86" fill="rgba(244, 63, 94, 0.15)" />

          <text x="110" y="14" fill="#a5b4fc" font-size="12" font-weight="bold" text-anchor="middle">A</text>
          <text x="50" y="86" fill="#fda4af" font-size="11" font-weight="bold">D</text>
          <text x="165" y="86" fill="#fda4af" font-size="11" font-weight="bold">E</text>
          <text x="18" y="135" fill="#a5b4fc" font-size="12" font-weight="bold">B</text>
          <text x="195" y="135" fill="#a5b4fc" font-size="12" font-weight="bold">C</text>

          <text x="110" y="60" fill="#fda4af" font-size="11" font-weight="bold" text-anchor="middle">Alan(ADE) = 4S</text>
          <text x="110" y="112" fill="#a5b4fc" font-size="11" font-weight="bold" text-anchor="middle">Alan(DBCE) = 21S</text>
        </svg>
        <span class="diagram-caption">📐 [DE] // [BC] Üçgende Benzerlik ve Alan Dağılımı (k → k²)</span>
      </div>
    `;
  }

  if (qStr.includes('dik yamuk') || qStr.includes('yamuğun alanı')) {
    const cMatch = qStr.match(/\|dc\|\s*=\s*(\d+)/i);
    const aMatch = qStr.match(/\|ab\|\s*=\s*(\d+)/i);
    const cVal = cMatch ? cMatch[1] : '6';
    const aVal = aMatch ? aMatch[1] : '14';
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 240 140" class="svg-math-canvas">
          <polygon points="40,110 200,110 130,30 40,30" fill="rgba(245, 158, 11, 0.08)" stroke="#f59e0b" stroke-width="2.5" />
          <polyline points="40,40 50,40 50,30" fill="none" stroke="#f59e0b" stroke-width="1.5" />
          <polyline points="40,100 50,100 50,110" fill="none" stroke="#f59e0b" stroke-width="1.5" />

          <text x="25" y="32" fill="#fbbf24" font-size="12" font-weight="bold">D</text>
          <text x="135" y="25" fill="#fbbf24" font-size="12" font-weight="bold">C (${cVal} cm)</text>
          <text x="25" y="115" fill="#fbbf24" font-size="12" font-weight="bold">A</text>
          <text x="205" y="115" fill="#fbbf24" font-size="12" font-weight="bold">B (${aVal} cm)</text>

          <text x="18" y="74" fill="#fbbf24" font-size="11" font-weight="bold">h=8</text>
        </svg>
        <span class="diagram-caption">📐 ABCD Dik Yamuk (Alan = [(a + c) / 2] · h)</span>
      </div>
    `;
  }

  if (qStr.includes('eşkenar dörtgen')) {
    const eMatch = qStr.match(/e\s*=\s*(\d+)/i);
    const fMatch = qStr.match(/f\s*=\s*(\d+)/i);
    const eVal = eMatch ? eMatch[1] : '12';
    const fVal = fMatch ? fMatch[1] : '16';
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 220 150" class="svg-math-canvas">
          <polygon points="110,20 190,75 110,130 30,75" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" stroke-width="2.5" />
          <line x1="30" y1="75" x2="190" y2="75" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3 3" />
          <line x1="110" y1="20" x2="110" y2="130" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3 3" />
          <circle cx="110" cy="75" r="3" fill="#38bdf8" />

          <text x="110" y="12" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">A</text>
          <text x="196" y="79" fill="#34d399" font-size="11" font-weight="bold">B</text>
          <text x="110" y="142" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">C</text>
          <text x="18" y="79" fill="#34d399" font-size="11" font-weight="bold">D</text>

          <text x="140" y="70" fill="#7dd3fc" font-size="10" font-weight="bold">e = ${eVal}</text>
          <text x="115" y="45" fill="#7dd3fc" font-size="10" font-weight="bold">f = ${fVal}</text>
        </svg>
        <span class="diagram-caption">📐 Köşegenleri Dik Kesişen Eşkenar Dörtgen</span>
      </div>
    `;
  }

  if (qStr.includes('düzgün altıgen')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 220 150" class="svg-math-canvas">
          <polygon points="70,25 150,25 190,75 150,125 70,125 30,75" fill="rgba(99, 102, 241, 0.08)" stroke="#6366f1" stroke-width="2.5" />
          <line x1="30" y1="75" x2="190" y2="75" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="4 2" />
          
          <text x="110" y="68" fill="#fda4af" font-size="11" font-weight="extrabold" text-anchor="middle">En Uzun Köşegen = 2a</text>
          <text x="110" y="20" fill="#a5b4fc" font-size="11" font-weight="bold" text-anchor="middle">a</text>
        </svg>
        <span class="diagram-caption">📐 Düzgün Altıgen ve En Uzun Köşegen (2a)</span>
      </div>
    `;
  }

  if (subcat.includes('dörtgen') || qStr.includes('dikdörtgen') || qStr.includes('kare')) {
    const sideAMatch = qStr.match(/(\d+)\s*cm\s*ve\s*(\d+)\s*cm/);
    const sideA = sideAMatch ? sideAMatch[1] : '6';
    const sideB = sideAMatch ? sideAMatch[2] : '10';
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 220 140" class="svg-math-canvas">
          <rect x="40" y="30" width="140" height="80" rx="4" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" stroke-width="2.5" />
          <text x="110" y="22" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">b = ${sideB} cm</text>
          <text x="22" y="74" fill="#fbbf24" font-size="12" font-weight="bold">a = ${sideA} cm</text>
          <text x="110" y="75" fill="#fcd34d" font-size="12" font-weight="extrabold" text-anchor="middle">Alan = a · b</text>
        </svg>
        <span class="diagram-caption">📍 Dikdörtgen (${sideA} cm x ${sideB} cm)</span>
      </div>
    `;
  }

  // --- 4. ANALİTİK GEOMETRİ ---
  if (subcat.includes('analitik') || qStr.includes('analitik') || qStr.includes('doğrularının kesim') || qStr.includes('noktanın doğruya')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 230 150" class="svg-math-canvas">
          <line x1="20" y1="120" x2="210" y2="120" stroke="#64748b" stroke-width="2" />
          <line x1="40" y1="15" x2="40" y2="135" stroke="#64748b" stroke-width="2" />
          <text x="205" y="135" fill="#94a3b8" font-size="11" font-weight="bold">x</text>
          <text x="28" y="20" fill="#94a3b8" font-size="11" font-weight="bold">y</text>
          
          <line x1="30" y1="110" x2="170" y2="30" stroke="#38bdf8" stroke-width="2.2" />
          <line x1="50" y1="20" x2="160" y2="110" stroke="#f43f5e" stroke-width="2.2" />
          <circle cx="114" cy="62" r="4.5" fill="#f59e0b" />
          <text x="122" y="58" fill="#fbbf24" font-size="11" font-weight="extrabold">K(a, b)</text>
        </svg>
        <span class="diagram-caption">📍 Analitik Düzlemde Doğrular ve Kesişim Noktası K(a, b)</span>
      </div>
    `;
  }

  // --- 5. GRAFİK VE SÜTUN ŞEMALARI ---
  if (qStr.includes('sütun grafiği') || qStr.includes('sütun')) {
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 240 160" class="svg-math-canvas">
          <!-- Grid Lines & Y-Axis Scale -->
          <line x1="35" y1="20" x2="35" y2="130" stroke="#64748b" stroke-width="2" />
          <line x1="35" y1="130" x2="220" y2="130" stroke="#64748b" stroke-width="2" />
          
          <line x1="35" y1="30" x2="220" y2="30" stroke="rgba(255,255,255,0.06)" stroke-width="1" stroke-dasharray="3 3" />
          <line x1="35" y1="65" x2="220" y2="65" stroke="rgba(255,255,255,0.06)" stroke-width="1" stroke-dasharray="3 3" />
          <line x1="35" y1="100" x2="220" y2="100" stroke="rgba(255,255,255,0.06)" stroke-width="1" stroke-dasharray="3 3" />

          <text x="28" y="34" fill="#94a3b8" font-size="9" text-anchor="end">100</text>
          <text x="28" y="69" fill="#94a3b8" font-size="9" text-anchor="end">50</text>
          <text x="28" y="104" fill="#94a3b8" font-size="9" text-anchor="end">25</text>
          <text x="28" y="133" fill="#94a3b8" font-size="9" text-anchor="end">0</text>

          <!-- Vertical Bars -->
          <rect x="55" y="65" width="30" height="65" rx="3" fill="url(#barGradA)" stroke="#6366f1" stroke-width="1.5" />
          <text x="70" y="58" fill="#a5b4fc" font-size="10" font-weight="bold" text-anchor="middle">50k</text>
          <text x="70" y="143" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">A Şubesi</text>

          <rect x="110" y="35" width="30" height="95" rx="3" fill="url(#barGradB)" stroke="#f43f5e" stroke-width="1.5" />
          <text x="125" y="28" fill="#fda4af" font-size="10" font-weight="bold" text-anchor="middle">80k</text>
          <text x="125" y="143" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">B Şubesi</text>

          <rect x="165" y="78" width="30" height="52" rx="3" fill="url(#barGradC)" stroke="#10b981" stroke-width="1.5" />
          <text x="180" y="71" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">40k</text>
          <text x="180" y="143" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">C Şubesi</text>

          <defs>
            <linearGradient id="barGradA" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#818cf8"/><stop offset="100%" stop-color="#4f46e5"/></linearGradient>
            <linearGradient id="barGradB" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fb7185"/><stop offset="100%" stop-color="#e11d48"/></linearGradient>
            <linearGradient id="barGradC" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#34d399"/><stop offset="100%" stop-color="#059669"/></linearGradient>
          </defs>
        </svg>
        <span class="diagram-caption">📊 ÖSYM Dikey Sütun Grafiği (Kâr Miktarları Analizi)</span>
      </div>
    `;
  }

  if (qStr.includes('dairesel grafik') || qStr.includes('daire grafiği')) {
    const angleMatch = qStr.match(/(\d+)°/);
    const angle = angleMatch ? angleMatch[1] : '90';
    return `
      <div class="svg-diagram-card">
        <svg viewBox="0 0 240 160" class="svg-math-canvas">
          <!-- Pie Slices -->
          <circle cx="95" cy="80" r="55" fill="none" stroke="#6366f1" stroke-width="2.5" />
          <path d="M95,80 L150,80 A55,55 0 0,0 95,25 Z" fill="rgba(245, 158, 11, 0.4)" stroke="#fbbf24" stroke-width="2" />
          <path d="M95,80 L95,25 A55,55 0 0,0 40,80 Z" fill="rgba(99, 102, 241, 0.4)" stroke="#818cf8" stroke-width="2" />
          <path d="M95,80 L40,80 A55,55 0 1,0 150,80 Z" fill="rgba(16, 185, 129, 0.4)" stroke="#34d399" stroke-width="2" />
          
          <circle cx="95" cy="80" r="3.5" fill="#ffffff" />
          <text x="109" y="62" fill="#fbbf24" font-size="12" font-weight="extrabold">${angle}°</text>

          <!-- Legend -->
          <circle cx="175" cy="55" r="4" fill="#fbbf24" /><text x="185" y="58" fill="#cbd5e1" font-size="10" font-weight="bold">Mat</text>
          <circle cx="175" cy="75" r="4" fill="#818cf8" /><text x="185" y="78" fill="#cbd5e1" font-size="10" font-weight="bold">Fizik</text>
          <circle cx="175" cy="95" r="4" fill="#34d399" /><text x="185" y="98" fill="#cbd5e1" font-size="10" font-weight="bold">Kimya</text>
        </svg>
        <span class="diagram-caption">🥧 ÖSYM Daire Grafiği Dağılımı (${angle}°)</span>
      </div>
    `;
  }

  return '';
}

function formatRichExplanation(q, isCorrect, selectedOptIndex) {
  if (!q) return '';
  const correctOptText = (q.options && typeof q.correct === 'number') ? q.options[q.correct] : '';
  const userOptText = (q.options && typeof selectedOptIndex === 'number') ? q.options[selectedOptIndex] : '';
  const subcat = q.subcategory || q.category || 'ÖSYM Müfredat Konusu';

  let statusBanner = '';
  if (typeof selectedOptIndex === 'number') {
    if (isCorrect) {
      statusBanner = `
        <div style="display: flex; align-items: center; gap: 10px; background: rgba(16, 185, 129, 0.16); border: 1px solid rgba(16, 185, 129, 0.45); padding: 10px 14px; border-radius: 10px; margin-bottom: 12px; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);">
          <span style="font-size: 1.4rem;">✅</span>
          <div>
            <strong style="color: #34d399; font-size: 0.95rem; display: block; font-weight: 800;">TEBRİKLER! DOĞRU CEVAP</strong>
            <span style="font-size: 0.82rem; color: #a7f3d0;">Doğru seçeneği başarıyla tespit ettiniz.</span>
          </div>
        </div>
      `;
    } else {
      statusBanner = `
        <div style="display: flex; align-items: center; gap: 10px; background: rgba(244, 63, 94, 0.16); border: 1px solid rgba(244, 63, 94, 0.45); padding: 10px 14px; border-radius: 10px; margin-bottom: 12px; box-shadow: 0 4px 12px rgba(244, 63, 94, 0.25);">
          <span style="font-size: 1.4rem;">❌</span>
          <div>
            <strong style="color: #fda4af; font-size: 0.95rem; display: block; font-weight: 800;">YANLIŞ CEVAP</strong>
            <span style="font-size: 0.82rem; color: #fecdd3;">İşaretlenen: <strong style="color: #ffffff;">${userOptText}</strong></span>
          </div>
        </div>
      `;
    }
  }

  let expBody = (q.explanation || 'Bu sorunun çözümü ÖSYM sınav müfredatı standartlarına uygun olarak detaylandırılmıştır.').trim();
  expBody = expBody.replace(/\n/g, '<br>');

  return `
    ${statusBanner}
    <div style="font-size: 0.9rem; line-height: 1.6; color: #cbd5e1;">
      <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
        <span style="background: rgba(99, 102, 241, 0.22); color: #a5b4fc; border: 1px solid rgba(99, 102, 241, 0.4); padding: 4px 10px; border-radius: 8px; font-size: 0.8rem; font-weight: 800; display: inline-flex; align-items: center; gap: 4px;">📌 ${subcat}</span>
        <span style="background: rgba(16, 185, 129, 0.22); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.4); padding: 4px 10px; border-radius: 8px; font-size: 0.8rem; font-weight: 800; display: inline-flex; align-items: center; gap: 4px;">🎯 Doğru Seçenek: ${correctOptText}</span>
      </div>
      <div style="background: rgba(15, 23, 42, 0.8); border-left: 4px solid #6366f1; padding: 14px 16px; border-radius: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); border-right: 1px solid rgba(255, 255, 255, 0.08); border-bottom: 1px solid rgba(255, 255, 255, 0.08); box-shadow: inset 0 2px 6px rgba(0,0,0,0.3);">
        <strong style="color: #fbbf24; font-size: 0.92rem; display: flex; align-items: center; gap: 6px; margin-bottom: 8px; font-weight: 800;">
          <span>💡</span> <span>ÖSYM Detaylı Çözüm ve Analiz Açıklaması:</span>
        </strong>
        <div style="color: #f1f5f9; font-size: 0.9rem; line-height: 1.7; font-weight: 400;">
          ${expBody}
        </div>
      </div>
    </div>
  `;
}

function renderCurrentQuestion() {
  try {
    const q = appState.currentQuestions[appState.currentIndex];
    if (!q) return;

    appState.selectedOption = null;
    appState.isAnswered = false;

    const total = appState.currentQuestions.length;
    const currentNum = appState.currentIndex + 1;

    const counter = document.getElementById('questionCounterText');
    if (counter) counter.textContent = `Soru ${currentNum} / ${total}`;

    const bar = document.getElementById('quizProgressBar');
    if (bar) bar.style.width = `${(currentNum / total) * 100}%`;

    const bookmarkBtn = document.getElementById('toggleBookmarkBtn');
    if (bookmarkBtn) {
      const isBookmarked = Array.isArray(appState.bookmarks) && appState.bookmarks.includes(q.id);
      bookmarkBtn.classList.toggle('active', isBookmarked);
    }

    const qTextEl = document.getElementById('questionText');
    if (qTextEl) {
      let cleanQ = (q.question || '').replace(/^\[.*?\]\s*/, '').trim();
      const diagramHtml = renderGeometryOrChartSvg(q);

      if (cleanQ.includes('│') || cleanQ.includes('───') || cleanQ.includes('┌') || cleanQ.includes('└')) {
        cleanQ = cleanQ.split('\n')
          .filter(line => !line.includes('│') && !line.includes('───') && !line.includes('┌') && !line.includes('└') && !line.includes('┼') && !line.includes('█'))
          .join('\n').trim();
      }

      // Auto-format Roman numerals in parentheses: (I), (II), (III), (IV), (V), (VI) on separate lines
      cleanQ = cleanQ.replace(/\s+(\((?:I|II|III|IV|V|VI|VII|VIII|IX|X)\))/gi, '\n$1');

      // Auto-format Roman numerals with dots: II., III., IV., V. on separate lines
      cleanQ = cleanQ.replace(/([^\n])\s+((?:II|III|IV|V|VI|VII|VIII|IX|X)\.\s+)/g, '$1\n$2');

      // Auto-format numeric criteria: (1), (2), (3) or 1., 2., 3. or 1), 2), 3) on separate lines
      cleanQ = cleanQ.replace(/([^\n])\s+((?:\(\d+\)|\d+\))\s+[A-ZÇĞİÖŞÜa-zçğıöşü])/g, '$1\n$2');

      // Add double spacing before final question prompt
      cleanQ = cleanQ.replace(/([^\n])\n*(\s*(?:Numaralanmış|Bu parçada|Bu parçaya|Bu parçadan|Buna göre|Aşağıdakilerden|Yukarıdaki|Yukarıda verilen)\b)/gi, '$1\n\n$2');

      let formattedText = cleanQ.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('<br>');

      qTextEl.innerHTML = `
        <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 6px; font-weight: 500;">
          <span>📌 ${q.subcategory || 'Soru'}</span>
        </div>
        ${diagramHtml}
        <div style="line-height: 1.7; font-size: 0.96rem; font-weight: 500; color: #f8fafc;">${formattedText}</div>
      `;
    }

    const savedAns = appState.sessionAnswers && appState.sessionAnswers[appState.currentIndex];
    if (savedAns && typeof savedAns.selectedOption === 'number') {
      appState.isAnswered = true;
      appState.selectedOption = savedAns.selectedOption;
    }

    const optionsList = document.getElementById('optionsList');
    if (optionsList) {
      optionsList.innerHTML = '';

      q.options.forEach((optText, index) => {
        const optCard = document.createElement('div');
        optCard.className = 'option-card';

        let iconText = '';
        if (savedAns) {
          if (index === q.correct) {
            optCard.classList.add('correct-ans');
            iconText = '✅';
          } else if (index === savedAns.selectedOption && !savedAns.isCorrect) {
            optCard.classList.add('wrong-ans');
            iconText = '❌';
          }
        }

        optCard.innerHTML = `
          <span>${optText}</span>
          <span class="option-icon">${iconText}</span>
        `;
        optCard.addEventListener('click', (e) => {
          e.preventDefault();
          selectOption(index);
        });
        optionsList.appendChild(optCard);
      });
    }

    const expBox = document.getElementById('explanationBox');
    const expText = document.getElementById('explanationText');
    if (expBox && expText) {
      if (savedAns) {
        expText.innerHTML = formatRichExplanation(q, savedAns.isCorrect, savedAns.selectedOption);
        expBox.style.display = 'flex';
        expBox.classList.add('active');
      } else {
        expBox.classList.remove('active');
        expBox.style.display = 'none';
      }
    }

    const nextBtn = document.getElementById('nextQuestionBtn');
    if (nextBtn) {
      nextBtn.textContent = (currentNum === total) ? 'Testi Bitir 🏁' : 'Sonraki Soru ❯';
    }

    const prevBtn = document.getElementById('prevQuestionBtn');
    if (prevBtn) {
      prevBtn.style.display = (appState.currentIndex > 0) ? 'block' : 'none';
    }

    const quizCard = document.querySelector('#view-quiz .glass-card');
    if (quizCard) quizCard.scrollTop = 0;
  } catch (err) {
    console.error('Error rendering question:', err);
  }
}

// Option Selection - Auto Saved to Storage
function selectOption(optionIndex) {
  if (appState.isAnswered) return;

  appState.isAnswered = true;
  appState.selectedOption = optionIndex;

  const q = appState.currentQuestions[appState.currentIndex];
  if (!q) return;

  const optionCards = document.querySelectorAll('.option-card');
  const isCorrect = (optionIndex === q.correct);

  // Generate unique question ID and register metadata
  const qUniqueId = registerSavedQuestion(q);

  if (!Array.isArray(appState.stats.solvedQids)) {
    appState.stats.solvedQids = [];
  }

  const isNewQuestion = !appState.stats.solvedQids.includes(qUniqueId);

  if (isNewQuestion) {
    appState.stats.solvedQids.push(qUniqueId);
    appState.stats.totalSolved++;

    if (isCorrect) {
      appState.stats.totalCorrect++;
      appState.sessionCorrect++;
      if (Array.isArray(appState.missedQuestions)) {
        appState.missedQuestions = appState.missedQuestions.filter(id => id !== qUniqueId);
      }
    } else {
      appState.stats.totalWrong++;
      appState.sessionWrong++;
      if (Array.isArray(appState.missedQuestions) && !appState.missedQuestions.includes(qUniqueId)) {
        appState.missedQuestions.push(qUniqueId);
      }
    }
  } else {
    // Re-solving question in current exam session
    if (isCorrect) {
      appState.sessionCorrect++;
      if (Array.isArray(appState.missedQuestions)) {
        appState.missedQuestions = appState.missedQuestions.filter(id => id !== qUniqueId);
      }
    } else {
      appState.sessionWrong++;
      if (Array.isArray(appState.missedQuestions) && !appState.missedQuestions.includes(qUniqueId)) {
        appState.missedQuestions.push(qUniqueId);
      }
    }
  }

  if (!appState.sessionAnswers) appState.sessionAnswers = {};
  appState.sessionAnswers[appState.currentIndex] = {
    selectedOption: optionIndex,
    isCorrect: isCorrect
  };

  saveActiveSessionProgress();
  setupDashboard();

  optionCards.forEach((card, idx) => {
    if (idx === q.correct) {
      card.classList.add('correct-ans');
      const icon = card.querySelector('.option-icon');
      if (icon) icon.textContent = '✅';
    } else if (idx === optionIndex && !isCorrect) {
      card.classList.add('wrong-ans');
      const icon = card.querySelector('.option-icon');
      if (icon) icon.textContent = '❌';
    }
  });

  const expBox = document.getElementById('explanationBox');
  const expText = document.getElementById('explanationText');
  if (expBox && expText) {
    expText.innerHTML = formatRichExplanation(q, isCorrect, optionIndex);
    expBox.style.display = 'flex';
    setTimeout(() => expBox.classList.add('active'), 50);
  }
}

// Quiz Controls
function setupQuizControls() {
  const exitBtn = document.getElementById('exitQuizBtn');
  const exitModal = document.getElementById('exitConfirmModal');
  const cancelExitBtn = document.getElementById('cancelExitBtn');
  const confirmExitBtn = document.getElementById('confirmExitBtn');
  const closeExitModalBtn = document.getElementById('closeExitModalBtn');

  function openExitModal() {
    clearInterval(appState.timerInterval);
    const desc = document.getElementById('exitModalDescription');
    if (desc) {
      const qNum = appState.currentIndex + 1;
      const total = appState.currentQuestions ? appState.currentQuestions.length : 30;
      const mins = Math.floor((appState.timeLeft || 0) / 60);
      const secs = (appState.timeLeft || 0) % 60;
      desc.textContent = `Şu an Soru ${qNum} / ${total}'desiniz ve Kalan Süreniz ${mins}:${secs.toString().padStart(2, '0')}. İlerlemeniz kaydedilecek ve kaldığınız yerden devam edebileceksiniz.`;
    }
    if (exitModal) exitModal.classList.add('active');
  }

  function closeExitModal() {
    if (exitModal) exitModal.classList.remove('active');
  }

  if (exitBtn) {
    exitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openExitModal();
    });
  }

  if (cancelExitBtn) {
    cancelExitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeExitModal();
      if (appState.isExamMode) startTimer();
    });
  }

  if (closeExitModalBtn) {
    closeExitModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeExitModal();
      if (appState.isExamMode) startTimer();
    });
  }

  if (confirmExitBtn) {
    confirmExitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      saveActiveSessionProgress();
      closeExitModal();

      // Refresh all deneme grids so "Kaldığın Yerden Devam Et" appears
      renderTurkceDenemeGrid();
      renderMatematikDenemeGrid();
      renderTarihDenemeGrid();
      renderCografyaDenemeGrid();
      renderVatandaslikDenemeGrid();

      if (appState.activeDenemeId) {
        if (appState.activeDenemeId.startsWith('mat-')) switchView('view-matematik-denemeler');
        else if (appState.activeDenemeId.startsWith('tar-')) switchView('view-tarih-denemeler');
        else if (appState.activeDenemeId.startsWith('cog-')) switchView('view-cografya-denemeler');
        else if (appState.activeDenemeId.startsWith('vat-')) switchView('view-vatandaslik-denemeler');
        else switchView('view-turkce-denemeler');
      } else {
        switchView('view-home');
      }
    });
  }

  const bookmarkBtn = document.getElementById('toggleBookmarkBtn');
  if (bookmarkBtn) {
    bookmarkBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const q = appState.currentQuestions[appState.currentIndex];
      if (!q) return;

      const qUniqueId = registerSavedQuestion(q);
      if (!Array.isArray(appState.bookmarks)) appState.bookmarks = [];

      const idx = appState.bookmarks.indexOf(qUniqueId);
      if (idx > -1) {
        appState.bookmarks.splice(idx, 1);
      } else {
        appState.bookmarks.push(qUniqueId);
      }
      saveState();
      bookmarkBtn.classList.toggle('active', appState.bookmarks.includes(qUniqueId));
      renderFavsQuestions();
    });
  }

  const prevBtn = document.getElementById('prevQuestionBtn');
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (appState.currentIndex > 0) {
        appState.currentIndex--;
        renderCurrentQuestion();
      }
    });
  }

  const nextBtn = document.getElementById('nextQuestionBtn');
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();

      if (!appState.isAnswered) {
        appState.sessionEmpty++;
      }

      if (appState.currentIndex < appState.currentQuestions.length - 1) {
        appState.currentIndex++;
        renderCurrentQuestion();
      } else {
        finishQuizSession();
      }
    });
  }
}

function finishQuizSession() {
  clearInterval(appState.timerInterval);

  if (appState.activeDenemeId) {
    if (!appState.stats.completedDenemeler) appState.stats.completedDenemeler = {};
    const net = appState.sessionCorrect - (appState.sessionWrong / 4);
    appState.stats.completedDenemeler[appState.activeDenemeId] = {
      correct: appState.sessionCorrect,
      wrong: appState.sessionWrong,
      empty: appState.sessionEmpty,
      net: net,
      timestamp: Date.now()
    };

    // Remove active session since exam is completed
    if (appState.activeSessions && appState.activeSessions[appState.activeDenemeId]) {
      delete appState.activeSessions[appState.activeDenemeId];
    }
  }

  saveState();

  // Re-render deneme grids
  renderTurkceDenemeGrid();
  renderMatematikDenemeGrid();
  renderTarihDenemeGrid();
  renderCografyaDenemeGrid();
  renderVatandaslikDenemeGrid();

  showExamResultModal();
}

// Flashcards Setup (With 3 Distinct Subject Decks & Embedded Footer Controls)
function setupFlashcards() {
  const cardEl = document.getElementById('flashcardElement');
  const wrapper = document.getElementById('flashcardWrapper');

  if (wrapper && cardEl) {
    wrapper.addEventListener('click', (e) => {
      // Don't flip card if user clicks inside footer navigation buttons
      if (e.target.closest('.flash-nav-btn')) return;
      e.preventDefault();
      cardEl.classList.toggle('flipped');
    });
  }

  document.querySelectorAll('#flashcardSubjectChips .chip').forEach(chip => {
    chip.onclick = (e) => {
      e.preventDefault();
      document.querySelectorAll('#flashcardSubjectChips .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      appState.activeFlashcardDeck = chip.getAttribute('data-deck');
      appState.flashcardIndex = 0;
      if (cardEl) cardEl.classList.remove('flipped');
      renderFlashcard();
    };
  });

  function goPrevCard(e) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    if (appState.flashcardIndex > 0) {
      appState.flashcardIndex--;
      if (cardEl) cardEl.classList.remove('flipped');
      setTimeout(renderFlashcard, 150);
    }
  }

  function goNextCard(e) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    const deck = getActiveFlashcardDeck();
    if (appState.flashcardIndex < deck.length - 1) {
      appState.flashcardIndex++;
      if (cardEl) cardEl.classList.remove('flipped');
      setTimeout(renderFlashcard, 150);
    }
  }

  ['prevFlashcardBtn', 'prevFlashcardBtnBack'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', goPrevCard);
  });

  ['nextFlashcardBtn', 'nextFlashcardBtnBack'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', goNextCard);
  });
}

function getActiveFlashcardDeck() {
  if (appState.activeFlashcardDeck === 'cografya') {
    return (typeof kpssFlashcardsCografya !== 'undefined') ? kpssFlashcardsCografya : [];
  }
  if (appState.activeFlashcardDeck === 'vatandaslik') {
    return (typeof kpssFlashcardsVatandaslik !== 'undefined') ? kpssFlashcardsVatandaslik : [];
  }
  return (typeof kpssFlashcardsTarih !== 'undefined') ? kpssFlashcardsTarih : [];
}

function renderFlashcard() {
  const deck = getActiveFlashcardDeck();
  const card = deck[appState.flashcardIndex];
  if (!card) return;

  const counter = document.getElementById('flashcardCounter');
  if (counter) counter.textContent = `${appState.flashcardIndex + 1} / ${deck.length}`;

  const badge = document.getElementById('flashCategoryBadge');
  if (badge) {
    const catTitle = getCategoryTitle(card.category || appState.activeFlashcardDeck);
    badge.textContent = catTitle;

    // Dynamic Subject Color Badges
    if (appState.activeFlashcardDeck === 'tarih') {
      badge.style.background = 'rgba(245, 158, 11, 0.2)';
      badge.style.color = '#fbbf24';
      badge.style.border = '1px solid rgba(245, 158, 11, 0.5)';
    } else if (appState.activeFlashcardDeck === 'cografya') {
      badge.style.background = 'rgba(16, 185, 129, 0.2)';
      badge.style.color = '#34d399';
      badge.style.border = '1px solid rgba(16, 185, 129, 0.5)';
    } else {
      badge.style.background = 'rgba(99, 102, 241, 0.2)';
      badge.style.color = '#818cf8';
      badge.style.border = '1px solid rgba(99, 102, 241, 0.5)';
    }
  }

  // Clean title: Remove any [Tarih Bilgisi #1], (Modül 1), etc.
  let cleanTitle = (card.title || '').replace(/\[.*?\]/g, '').replace(/\(Modül \d+\)/gi, '').trim();
  let cleanDesc = (card.content || '').replace(/📌 Detaylı ÖSYM Analizi #\d+ \[.*?\]:/gi, '📌').trim();

  const title = document.getElementById('flashFrontTitle');
  if (title) title.textContent = cleanTitle;

  const desc = document.getElementById('flashBackContent');
  if (desc) desc.textContent = cleanDesc;
}

function getAllQuestionsPool() {
  const allMap = new Map();

  const collect = (list) => {
    if (!Array.isArray(list)) return;
    list.forEach(item => {
      if (item && item.questions && Array.isArray(item.questions)) {
        item.questions.forEach(q => {
          if (q && q.id) allMap.set(q.id, q);
        });
      } else if (item && item.id && item.question) {
        allMap.set(item.id, item);
      }
    });
  };

  if (typeof kpssQuestions !== 'undefined') collect(kpssQuestions);
  if (window.turkce40Denemeler) collect(window.turkce40Denemeler);
  if (typeof turkce40Denemeler !== 'undefined') collect(turkce40Denemeler);
  if (window.matematik40Denemeler) collect(window.matematik40Denemeler);
  if (typeof matematik40Denemeler !== 'undefined') collect(matematik40Denemeler);
  if (window.tarih40Denemeler) collect(window.tarih40Denemeler);
  if (typeof tarih40Denemeler !== 'undefined') collect(tarih40Denemeler);
  if (window.cografya40Denemeler) collect(window.cografya40Denemeler);
  if (typeof cografya40Denemeler !== 'undefined') collect(cografya40Denemeler);
  if (window.vatandaslik40Denemeler) collect(window.vatandaslik40Denemeler);
  if (typeof vatandaslik40Denemeler !== 'undefined') collect(vatandaslik40Denemeler);

  return Array.from(allMap.values());
}

// Saved Questions Setup
function setupSavedView() {
  const tabMissedBtn = document.getElementById('tabMissedBtn');
  const tabFavsBtn = document.getElementById('tabFavsBtn');

  if (tabMissedBtn && tabFavsBtn) {
    tabMissedBtn.addEventListener('click', (e) => {
      e.preventDefault();
      appState.savedTabMode = 'missed';
      tabMissedBtn.className = 'btn quiz-next-btn saved-tab-btn';
      tabFavsBtn.className = 'btn btn-secondary saved-tab-btn';
      renderSavedQuestions();
    });

    tabFavsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      appState.savedTabMode = 'favs';
      tabFavsBtn.className = 'btn quiz-next-btn saved-tab-btn';
      tabMissedBtn.className = 'btn btn-secondary saved-tab-btn';
      renderSavedQuestions();
    });
  }
}

function formatQuestionLabel(id, questionData, storeItem) {
  // 1. Store item match
  if (storeItem && storeItem.denemeTitle) {
    let title = storeItem.denemeTitle.replace(/KPSS\s*/gi, '').trim();
    title = title.replace(/Denemesi\s*#/gi, 'Deneme ').replace(/Deneme\s*#/gi, 'Deneme ');
    return `${title} • Soru ${storeItem.questionNumber}`;
  }

  // 2. Question object denemeNo / questionNo match
  if (questionData && (questionData.denemeNo || questionData.denemeId)) {
    let subj = getCategoryTitle(questionData.category) || 'KPSS';
    let dNo = questionData.denemeNo;
    let qNo = questionData.questionNo || (questionData.questionIndex ? questionData.questionIndex + 1 : null);

    if (!dNo && questionData.denemeId) {
      const dMatch = questionData.denemeId.match(/\d+/);
      if (dMatch) dNo = dMatch[0];
    }

    if (dNo && qNo) {
      return `${subj} Deneme ${dNo} • Soru ${qNo}`;
    }
  }

  // 3. String ID regex matching
  if (typeof id === 'string') {
    // Format A: turkce-d1-q2, mat-d1-q5, tar-d2-q3, cog-d1-q1, vat-d4-q8
    let match = id.match(/^(turkce|matematik|mat|tarih|tar|cografya|cog|vatandaslik|vat)-d(\d+)-q(\d+)$/i);
    if (match) {
      const subjectMap = {
        'turkce': 'Türkçe Deneme',
        'matematik': 'Matematik Deneme',
        'mat': 'Matematik Deneme',
        'tarih': 'Tarih Deneme',
        'tar': 'Tarih Deneme',
        'cografya': 'Coğrafya Deneme',
        'cog': 'Coğrafya Deneme',
        'vatandaslik': 'Vatandaşlık Deneme',
        'vat': 'Vatandaşlık Deneme'
      };
      const subjectName = subjectMap[match[1].toLowerCase()] || 'KPSS Deneme';
      const denemeNum = match[2];
      const qNum = match[3];
      return `${subjectName} ${denemeNum} • Soru ${qNum}`;
    }

    // Format B: turkce_deneme_1_q_0, mat_deneme_2_q_3
    match = id.match(/^(turkce|matematik|mat|tarih|tar|cografya|cog|vatandaslik|vat)_deneme_(\d+)_q_(\d+)$/i);
    if (match) {
      const subjectMap = {
        'turkce': 'Türkçe Deneme',
        'matematik': 'Matematik Deneme',
        'mat': 'Matematik Deneme',
        'tarih': 'Tarih Deneme',
        'tar': 'Tarih Deneme',
        'cografya': 'Coğrafya Deneme',
        'cog': 'Coğrafya Deneme',
        'vatandaslik': 'Vatandaşlık Deneme',
        'vat': 'Vatandaşlık Deneme'
      };
      const subjectName = subjectMap[match[1].toLowerCase()] || 'KPSS Deneme';
      const denemeNum = match[2];
      const qNum = parseInt(match[3], 10) + 1;
      return `${subjectName} ${denemeNum} • Soru ${qNum}`;
    }
  }

  // 4. Fallback category matching
  if (questionData && questionData.category) {
    const subj = getCategoryTitle(questionData.category);
    const qNo = questionData.questionNo || (typeof id === 'string' ? id.match(/\d+$/)?.[0] : '1') || '1';
    return `${subj} Deneme 1 • Soru ${qNo}`;
  }

  return 'KPSS Deneme 1 • Soru 1';
}

function renderMissedQuestions() {
  const badge = document.getElementById('missedCountBadge');
  const count = Array.isArray(appState.missedQuestions) ? appState.missedQuestions.length : 0;
  if (badge) badge.textContent = `${count} Yanlış Soru`;

  const container = document.getElementById('missedQuestionsContainer');
  if (!container) return;
  container.innerHTML = '';

  if (!Array.isArray(appState.missedQuestions) || appState.missedQuestions.length === 0) {
    container.innerHTML = `
      <div class="glass-card" style="text-align: center; color: var(--text-muted); padding: 30px;">
        <span style="font-size: 2.2rem; display: block; margin-bottom: 8px;">✨</span>
        <p style="font-weight: 700; color: #f3f4f6;">Henüz yanlış yaptığınız soru bulunmuyor.</p>
        <span style="font-size: 0.8rem; color: var(--text-muted);">Çözdüğünüz denemelerde yanlış yaptığınız sorular otomatik olarak buraya eklenir.</span>
      </div>
    `;
    return;
  }

  const pool = getAllQuestionsPool();
  const poolMap = new Map(pool.map(q => [q.id, q]));
  const store = appState.savedQuestionsStore || {};

  appState.missedQuestions.forEach(id => {
    const storeItem = store[id];
    const poolItem = poolMap.get(id);
    const questionData = storeItem || poolItem;

    const labelText = formatQuestionLabel(id, questionData, storeItem);
    const subcatText = (questionData && questionData.subcategory) ? questionData.subcategory : '';

    const card = document.createElement('div');
    card.className = 'saved-icon-card';
    card.innerHTML = `
      <div class="saved-card-info">
        <span class="saved-card-badge">❌</span>
        <div class="saved-card-text-group">
          <span class="saved-card-title">${labelText}</span>
          ${subcatText ? `<span class="saved-card-sub">${subcatText}</span>` : ''}
        </div>
      </div>
      <button class="saved-solve-icon-btn" title="Soruyu Çöz">🎯</button>
    `;

    card.querySelector('.saved-solve-icon-btn').addEventListener('click', (e) => {
      e.preventDefault();
      const qToSolve = questionData || { id: id, question: labelText };
      startQuizSession([qToSolve], false, labelText);
    });

    container.appendChild(card);
  });
}

function renderFavsQuestions() {
  const badge = document.getElementById('favsCountBadge');
  const count = Array.isArray(appState.bookmarks) ? appState.bookmarks.length : 0;
  if (badge) badge.textContent = `${count} Kayıtlı Soru`;

  const container = document.getElementById('favsQuestionsContainer');
  if (!container) return;
  container.innerHTML = '';

  if (!Array.isArray(appState.bookmarks) || appState.bookmarks.length === 0) {
    container.innerHTML = `
      <div class="glass-card" style="text-align: center; color: var(--text-muted); padding: 30px;">
        <span style="font-size: 2.2rem; display: block; margin-bottom: 8px;">★</span>
        <p style="font-weight: 700; color: #f3f4f6;">Henüz favorilere eklenmiş soru bulunmuyor.</p>
        <span style="font-size: 0.8rem; color: var(--text-muted);">Sınav çözerken sağ üstteki yıldız butonuna basarak soruları buraya kaydedebilirsiniz.</span>
      </div>
    `;
    return;
  }

  const pool = getAllQuestionsPool();
  const poolMap = new Map(pool.map(q => [q.id, q]));
  const store = appState.savedQuestionsStore || {};

  appState.bookmarks.forEach(id => {
    const storeItem = store[id];
    const poolItem = poolMap.get(id);
    const questionData = storeItem || poolItem;

    const labelText = formatQuestionLabel(id, questionData, storeItem);
    const subcatText = (questionData && questionData.subcategory) ? questionData.subcategory : '';

    const card = document.createElement('div');
    card.className = 'saved-icon-card';
    card.style.borderColor = 'rgba(245, 158, 11, 0.4)';
    card.innerHTML = `
      <div class="saved-card-info">
        <span class="saved-card-badge" style="color: #fbbf24;">★</span>
        <div class="saved-card-text-group">
          <span class="saved-card-title">${labelText}</span>
          ${subcatText ? `<span class="saved-card-sub">${subcatText}</span>` : ''}
        </div>
      </div>
      <button class="saved-solve-icon-btn" title="Soruyu Çöz" style="background: linear-gradient(135deg, #f59e0b, #d97706) !important; border-color: rgba(245, 158, 11, 0.6) !important; box-shadow: 0 4px 14px rgba(245, 158, 11, 0.4) !important;">🎯</button>
    `;

    card.querySelector('.saved-solve-icon-btn').addEventListener('click', (e) => {
      e.preventDefault();
      const qToSolve = questionData || { id: id, question: labelText };
      startQuizSession([qToSolve], false, labelText);
    });

    container.appendChild(card);
  });
}

// Stats Setup
function setupStatsView() {
  const resetBtn = document.getElementById('resetStatsBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const confirmReset = confirm('Tüm çözülmüş soru verileriniz, netleriniz ve kaydedilmiş sınav oturumlarınız tamamen sıfırlanacak. Emin misiniz?');
      if (!confirmReset) return;

      appState.stats = { totalSolved: 0, totalCorrect: 0, totalWrong: 0, totalNet: 0, solvedQids: [], completedDenemeler: {} };
      appState.bookmarks = [];
      appState.missedQuestions = [];
      appState.activeSessions = {};
      appState.savedQuestionsStore = {};
      saveState();

      renderStatsView();
      setupDashboard();
      renderTurkceDenemeGrid();
      renderMatematikDenemeGrid();
      renderTarihDenemeGrid();
      renderCografyaDenemeGrid();
      renderVatandaslikDenemeGrid();
      renderMissedQuestions();
      renderFavsQuestions();

      alert('✨ Tüm veritabanı ve istatistikler başarıyla sıfırlandı.');
    });
  }
}

function renderStatsView() {
  const solved = appState.stats.totalSolved;
  const correct = appState.stats.totalCorrect;
  const wrong = appState.stats.totalWrong;
  const net = (correct - (wrong / 4)).toFixed(2);
  const acc = solved > 0 ? Math.round((correct / solved) * 100) : 0;

  const accVal = document.getElementById('statsAccuracyVal');
  if (accVal) accVal.textContent = `%${acc}`;

  const accBar = document.getElementById('statsAccuracyBar');
  if (accBar) accBar.style.width = `${acc}%`;

  const netCalc = document.getElementById('statsNetCalcVal');
  if (netCalc) netCalc.textContent = `${net} NET`;

  const corrTotal = document.getElementById('statsCorrectTotal');
  if (corrTotal) corrTotal.textContent = correct;

  const wrgTotal = document.getElementById('statsWrongTotal');
  if (wrgTotal) wrgTotal.textContent = wrong;
}

// Exam Result Scorecard Modal
function setupExamResultModal() {
  const modal = document.getElementById('examResultModal');
  const closeBtn = document.getElementById('closeExamModalBtn');
  const confirmBtn = document.getElementById('confirmExamModalBtn');

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.remove('active');
    });
  }

  if (confirmBtn) {
    confirmBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.remove('active');
      if (appState.activeDenemeId) {
        if (appState.activeDenemeId.startsWith('mat-')) switchView('view-matematik-denemeler');
        else if (appState.activeDenemeId.startsWith('tar-')) switchView('view-tarih-denemeler');
        else if (appState.activeDenemeId.startsWith('cog-')) switchView('view-cografya-denemeler');
        else if (appState.activeDenemeId.startsWith('vat-')) switchView('view-vatandaslik-denemeler');
        else switchView('view-turkce-denemeler');
      } else {
        switchView('view-home');
      }
    });
  }
}

function showExamResultModal() {
  const modal = document.getElementById('examResultModal');
  if (!modal) return;

  const correct = appState.sessionCorrect;
  const wrong = appState.sessionWrong;
  const empty = appState.sessionEmpty;
  const net = correct - (wrong / 4);

  const cEl = document.getElementById('examModalCorrect');
  if (cEl) cEl.textContent = correct;

  const wEl = document.getElementById('examModalWrong');
  if (wEl) wEl.textContent = wrong;

  const eEl = document.getElementById('examModalEmpty');
  if (eEl) eEl.textContent = empty;

  const nEl = document.getElementById('examModalNet');
  if (nEl) nEl.textContent = `${net.toFixed(2)} NET`;

  modal.classList.add('active');
}

// PWA Guide Modal
function setupPwaGuideModal() {
  const modal = document.getElementById('pwaModal');
  const openBtn = document.getElementById('openPwaGuideBtn');
  const closeBtn = document.getElementById('closePwaModalBtn');
  const confirmBtn = document.getElementById('confirmPwaModalBtn');

  if (openBtn) openBtn.addEventListener('click', () => modal && modal.classList.add('active'));
  if (closeBtn) closeBtn.addEventListener('click', () => modal && modal.classList.remove('active'));
  if (confirmBtn) confirmBtn.addEventListener('click', () => modal && modal.classList.remove('active'));
}
