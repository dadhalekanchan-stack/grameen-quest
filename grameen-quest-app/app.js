const MIN_GRADE = 6;
const MAX_GRADE = 12;

const rawContent = {
  1: {
    Math: [
      { q: "2 + 3 = ?", options: ["4", "5", "6"], a: "5" },
      { q: "Which shape has 3 sides?", options: ["Square", "Triangle", "Circle"], a: "Triangle" }
    ],
    English: [
      { q: "Pick a vowel", options: ["B", "A", "T"], a: "A" },
      { q: "A cat says", options: ["Moo", "Meow", "Quack"], a: "Meow" }
    ],
    EVS: [
      { q: "We drink", options: ["Milk/Water", "Sand", "Smoke"], a: "Milk/Water" },
      { q: "Sun rises in", options: ["East", "West", "North"], a: "East" }
    ]
  },
  2: {
    Math: [
      { q: "9 - 2 = ?", options: ["7", "6", "8"], a: "7" },
      { q: "5 + 8 = ?", options: ["11", "12", "13"], a: "13" }
    ],
    English: [
      { q: "Opposite of big", options: ["Small", "Tall", "Fast"], a: "Small" },
      { q: "Plural of boy", options: ["Boys", "Boys", "Boies"], a: "Boys" }
    ],
    EVS: [
      { q: "A plant needs", options: ["Water", "Plastic", "Dust"], a: "Water" },
      { q: "Domestic animal", options: ["Cow", "Tiger", "Wolf"], a: "Cow" }
    ]
  },
  3: {
    Math: [
      { q: "4 x 3 = ?", options: ["12", "14", "10"], a: "12" },
      { q: "18 / 3 = ?", options: ["6", "7", "5"], a: "6" }
    ],
    English: [
      { q: "Noun is", options: ["Book", "Run", "Quickly"], a: "Book" },
      { q: "Past tense of eat", options: ["Eated", "Ate", "Eat"], a: "Ate" }
    ],
    Science: [
      { q: "We breathe", options: ["Oxygen", "Carbon", "Water"], a: "Oxygen" },
      { q: "Sense organ", options: ["Ear", "Chair", "Table"], a: "Ear" }
    ]
  },
  4: {
    Math: [
      { q: "24 + 17 = ?", options: ["41", "40", "39"], a: "41" },
      { q: "64 / 8 = ?", options: ["6", "7", "8"], a: "8" }
    ],
    English: [
      { q: "Adjective in phrase 'red ball'", options: ["Red", "Ball", "The"], a: "Red" },
      { q: "Synonym of happy", options: ["Sad", "Glad", "Weak"], a: "Glad" }
    ],
    Science: [
      { q: "Water boils at", options: ["100C", "50C", "0C"], a: "100C" },
      { q: "Heart pumps", options: ["Blood", "Air", "Food"], a: "Blood" }
    ]
  },
  5: {
    Math: [
      { q: "LCM of 4 and 6", options: ["10", "12", "24"], a: "12" },
      { q: "Area of rectangle 5 x 2", options: ["7", "10", "12"], a: "10" }
    ],
    English: [
      { q: "Collective noun for birds", options: ["Herd", "Flock", "Team"], a: "Flock" },
      { q: "Antonym of brave", options: ["Bold", "Cowardly", "Strong"], a: "Cowardly" }
    ],
    Social: [
      { q: "Capital of India", options: ["Delhi", "Pune", "Chennai"], a: "Delhi" },
      { q: "National flag colors count", options: ["2", "3", "4"], a: "3" }
    ]
  },
  6: {
    Math: [
      { q: "12 x 7 = ?", options: ["84", "74", "94"], a: "84" },
      { q: "Square root of 81", options: ["8", "9", "7"], a: "9" }
    ],
    Science: [
      { q: "Formula of water", options: ["H2O", "CO2", "NaCl"], a: "H2O" },
      { q: "Largest planet", options: ["Mars", "Jupiter", "Saturn"], a: "Jupiter" }
    ],
    Social: [
      { q: "Panchayat works at", options: ["Village level", "State level", "World level"], a: "Village level" },
      { q: "India is a", options: ["Monarchy", "Democracy", "Dictatorship"], a: "Democracy" }
    ]
  },
  7: {
    Math: [
      { q: "(3)^3 = ?", options: ["9", "27", "81"], a: "27" },
      { q: "Simple interest on 100 at 10% for 1 yr", options: ["5", "10", "15"], a: "10" }
    ],
    Science: [
      { q: "Photosynthesis needs", options: ["Sunlight", "Stone", "Plastic"], a: "Sunlight" },
      { q: "Acid turns blue litmus", options: ["Red", "Green", "Yellow"], a: "Red" }
    ],
    English: [
      { q: "Past participle of write", options: ["Writed", "Wrote", "Written"], a: "Written" },
      { q: "Adverb in 'He runs quickly'", options: ["He", "Runs", "Quickly"], a: "Quickly" }
    ]
  },
  8: {
    Math: [
      { q: "3x + 5 = 20, x = ?", options: ["5", "4", "3"], a: "5" },
      { q: "Pi approx", options: ["2.41", "3.14", "4.31"], a: "3.14" }
    ],
    Science: [
      { q: "Unit of force", options: ["Newton", "Joule", "Volt"], a: "Newton" },
      { q: "Metal liquid at room temp", options: ["Iron", "Mercury", "Gold"], a: "Mercury" }
    ],
    Social: [
      { q: "Parliament has", options: ["1 house", "2 houses", "3 houses"], a: "2 houses" },
      { q: "Freedom struggle leader", options: ["Gandhi", "Newton", "Einstein"], a: "Gandhi" }
    ]
  },
  9: {
    Math: [
      { q: "Roots of x2-5x+6", options: ["2,3", "1,6", "-2,-3"], a: "2,3" },
      { q: "sin 90 deg", options: ["0", "1", "-1"], a: "1" }
    ],
    Science: [
      { q: "Atomic number of oxygen", options: ["8", "16", "6"], a: "8" },
      { q: "Speed of light unit", options: ["m/s", "kg", "N"], a: "m/s" }
    ],
    Social: [
      { q: "Constitution effective year", options: ["1947", "1950", "1952"], a: "1950" },
      { q: "Green revolution linked to", options: ["Agriculture", "Mining", "Airlines"], a: "Agriculture" }
    ]
  },
  10: {
    Math: [
      { q: "Discriminant of ax2+bx+c", options: ["b2-4ac", "a2+b2", "ab+c"], a: "b2-4ac" },
      { q: "Distance formula based on", options: ["Pythagoras", "Trigonometry", "AP"], a: "Pythagoras" }
    ],
    Science: [
      { q: "pH of neutral solution", options: ["7", "0", "14"], a: "7" },
      { q: "Human heart chambers", options: ["2", "3", "4"], a: "4" }
    ],
    Social: [
      { q: "Fundamental rights are in", options: ["Constitution", "Novel", "Diary"], a: "Constitution" },
      { q: "Primary sector example", options: ["Farming", "Banking", "Coding"], a: "Farming" }
    ]
  },
  11: {
    Physics: [
      { q: "SI unit of electric current", options: ["Ampere", "Volt", "Watt"], a: "Ampere" },
      { q: "Dimension of force", options: ["MLT-2", "ML2T-2", "M0L0T0"], a: "MLT-2" }
    ],
    Chemistry: [
      { q: "Atomic number of sodium", options: ["11", "23", "12"], a: "11" },
      { q: "pH less than 7 means", options: ["Basic", "Acidic", "Neutral"], a: "Acidic" }
    ],
    Mathematics: [
      { q: "Derivative of x2", options: ["x", "2x", "x2"], a: "2x" },
      { q: "sin2x formula", options: ["2sinxcosx", "sinxcosx", "2tanx"], a: "2sinxcosx" }
    ]
  },
  12: {
    Physics: [
      { q: "Lens formula is", options: ["1/f=1/v-1/u", "f=u+v", "v=u/f"], a: "1/f=1/v-1/u" },
      { q: "Unit of magnetic flux", options: ["Weber", "Tesla", "Henry"], a: "Weber" }
    ],
    Chemistry: [
      { q: "IUPAC name of CH3OH", options: ["Methanol", "Ethanol", "Propanol"], a: "Methanol" },
      { q: "Polymer of ethene", options: ["PVC", "Polythene", "Nylon-6"], a: "Polythene" }
    ],
    Mathematics: [
      { q: "Integration of 1/x dx", options: ["ln|x| + C", "x + C", "1/x2 + C"], a: "ln|x| + C" },
      { q: "Determinant of 2x2 matrix gives", options: ["Area scaling", "Volume", "Slope"], a: "Area scaling" }
    ]
  }
};

const content = Object.fromEntries(
  Object.entries(rawContent).filter(([grade]) => Number(grade) >= MIN_GRADE && Number(grade) <= MAX_GRADE)
);

const ui = {
  english: {
    heroTagline: "Gamified learning for Class 6 to 12 students",
    profileTitle: "Profile",
    nameLabel: "Student Name",
    classLabel: "Class",
    villageLabel: "Village / School",
    namePlaceholder: "Enter name",
    villagePlaceholder: "Village name",
    save: "Save",
    tabLearn: "Learn",
    tabChallenge: "Challenge",
    tabMissions: "Missions",
    tabTeacher: "Parent/Teacher",
    learningTracks: "Learning Tracks",
    trackFoundation: "Class 6-8 foundation and middle skills selected.",
    trackMiddle: "Class 9-10 secondary skills selected.",
    trackSenior: "Class 11-12 senior secondary prep selected.",
    tipTitle: "Today's Tip",
    tipText: "Practice 10 minutes daily to build strong basics.",
    goalTitle: "Weekly Goal",
    goalText: "Earn 150 XP this week.",
    communityTitle: "Community",
    communityText: "Village learning day: Sunday 5 PM.",
    chooseSubject: "Choose a subject to begin practice.",
    next: "Next",
    weeklyChallenge: "Weekly Challenge",
    challengeInfo: "Solve 5 questions in one round and score above 60%.",
    startChallenge: "Start Challenge Round",
    notStarted: "Not started",
    challengeStarted: "Challenge started",
    challengeDone: "Challenge complete!",
    subjectProgress: "Subject Progress",
    badges: "Badges",
    dailyMissions: "Daily Missions",
    snapshotTitle: "Parent / Teacher Snapshot",
    snapshotEmpty: "No student activity yet.",
    exportPdf: "Export Progress (PDF)",
    recentActivity: "Recent Activity",
    noActivity: "No activity yet",
    footerText: "Designed for low-bandwidth rural contexts. Works offline after first load.",
    noBadges: "No badges yet.",
    claim: "Claim",
    claimed: "Claimed",
    reward: "Reward",
    roundComplete: "Round complete.",
    correct: "Correct! +20 XP, +10 coins",
    correctAnswer: "Correct answer",
    day: "day",
    days: "days",
    classWord: "Class",
    mission_m1: "Attempt 2 quizzes",
    mission_m2: "Score 1 perfect answer streak",
    mission_m3: "Earn 50 XP in a day",
    bestSubject: "Best subject",
    villageWord: "Village",
    levelWord: "Level",
    studentWord: "Student",
    reportTitle: "Grameen Quest Progress Report",
    generated: "Generated",
    questionsAttempted: "Questions Attempted",
    accuracy: "Accuracy"
  },
  hindi: {
    heroTagline: "????? 6 ?? 12 ?? ????????????? ?? ??? ???-?????? ???",
    profileTitle: "????????",
    nameLabel: "?????????? ?? ???",
    classLabel: "?????",
    villageLabel: "???? / ?????",
    namePlaceholder: "??? ???? ????",
    villagePlaceholder: "???? ?? ???",
    save: "??? ????",
    tabLearn: "?????",
    tabChallenge: "??????",
    tabMissions: "????",
    tabTeacher: "???????/??????",
    learningTracks: "??????? ???????",
    trackFoundation: "????? 6-8 ?? ??????? ?? ???? ???? ??? ???? ?? ???",
    trackMiddle: "????? 9-10 ?? ???????? ??? ???? ?? ???",
    trackSenior: "????? 11-12 ?? ?????? ???????? ?????? ???? ?? ???",
    tipTitle: "?? ?? ???",
    tipText: "??? 10 ???? ?????? ?? ??????? ????? ???? ???",
    goalTitle: "????????? ??????",
    goalText: "?? ?????? 150 XP ??????",
    communityTitle: "??????",
    communityText: "???? ??????? ??: ?????? ??? 5 ????",
    chooseSubject: "?????? ???? ???? ?? ??? ???? ??????",
    next: "????",
    weeklyChallenge: "????????? ??????",
    challengeInfo: "?? ????? ??? 5 ?????? ?? ???? ?? 60% ?? ???? ????? ?????",
    startChallenge: "?????? ????? ???? ????",
    notStarted: "???? ???? ???",
    challengeStarted: "?????? ????",
    challengeDone: "?????? ???? ???!",
    subjectProgress: "???? ??????",
    badges: "???",
    dailyMissions: "????? ????",
    snapshotTitle: "??????? / ?????? ????????",
    snapshotEmpty: "??? ??? ??????? ?????",
    exportPdf: "?????? ??????? (PDF)",
    recentActivity: "??? ?? ???????",
    noActivity: "??? ??? ??????? ????",
    footerText: "?? ??????? ???? ??????? ????????? ?? ??? ??????? ???? ???? ???? ??? ??? ?? ??? ?????? ??????",
    noBadges: "??? ??? ??? ?????",
    claim: "????? ????",
    claimed: "????? ?? ???",
    reward: "????",
    roundComplete: "????? ???? ????",
    correct: "???! +20 XP, +10 ????",
    correctAnswer: "??? ?????",
    day: "???",
    days: "???",
    classWord: "?????",
    mission_m1: "2 ?????? ?????? ????",
    mission_m2: "1 ??????? ????? ??????? ?????",
    mission_m3: "?? ??? ??? 50 XP ?????",
    bestSubject: "??????????? ????",
    villageWord: "????",
    levelWord: "????",
    studentWord: "??????????",
    reportTitle: "??????? ??????? ?????? ???????",
    generated: "??????? ???",
    questionsAttempted: "??? ??????",
    accuracy: "??????"
  },
  marathi: {
    heroTagline: "?????? 6 ?? 12 ????????????????? ???-?????? ??????",
    profileTitle: "????????",
    nameLabel: "?????????????? ???",
    classLabel: "??????",
    villageLabel: "??? / ????",
    namePlaceholder: "??? ????",
    villagePlaceholder: "?????? ???",
    save: "????? ???",
    tabLearn: "????",
    tabChallenge: "??????",
    tabMissions: "??????",
    tabTeacher: "????/??????",
    learningTracks: "??????? ???????",
    trackFoundation: "?????? 6-8 ?? ?????? ??? ????? ??????? ?????? ????.",
    trackMiddle: "?????? 9-10 ?? ???????? ??????? ?????? ????.",
    trackSenior: "?????? 11-12 ?????? ???????? ????? ?????? ???.",
    tipTitle: "???? ?????",
    tipText: "????? 10 ?????? ???? ???, ??????? ????? ????? ????.",
    goalTitle: "????????? ??????",
    goalText: "?? ???????? 150 XP ?????.",
    communityTitle: "??????",
    communityText: "??? ?????? ????: ?????? ???? 5 ?????.",
    chooseSubject: "???? ???? ?????????? ???? ?????.",
    next: "????",
    weeklyChallenge: "????????? ??????",
    challengeInfo: "??? ?????????? 5 ?????? ????? ??? 60% ?????? ????? ??? ?????.",
    startChallenge: "?????? ????? ???? ???",
    notStarted: "???? ????",
    challengeStarted: "?????? ????",
    challengeDone: "?????? ?????!",
    subjectProgress: "???? ??????",
    badges: "?????",
    dailyMissions: "????? ??????",
    snapshotTitle: "???? / ?????? ????????",
    snapshotEmpty: "???? ??????? ???? ????.",
    exportPdf: "?????? ??????? (PDF)",
    recentActivity: "??????? ????",
    noActivity: "???? ???? ????",
    footerText: "??? ??????? ???????? ??????? ???????? ???? ??????. ??????? ??????? ?????? ?????.",
    noBadges: "???? ??? ????.",
    claim: "????",
    claimed: "?????",
    reward: "??????",
    roundComplete: "????? ?????.",
    correct: "?????! +20 XP, +10 ????",
    correctAnswer: "????? ?????",
    day: "????",
    days: "????",
    classWord: "??????",
    mission_m1: "2 ????? ??????? ???",
    mission_m2: "1 ??????? ????? ??????? ?????",
    mission_m3: "??? ????? 50 XP ?????",
    bestSubject: "????????? ????",
    villageWord: "???",
    levelWord: "??????",
    studentWord: "??????????",
    reportTitle: "??????? ??????? ?????? ???????",
    generated: "???????? ???",
    questionsAttempted: "???? ??????",
    accuracy: "??????"
  }
};

const state = {
  profile: { name: "", grade: 6, village: "", language: "english" },
  xp: 0,
  coins: 0,
  streak: 0,
  lastDate: null,
  badges: [],
  progress: {},
  missions: [
    { id: "m1", key: "mission_m1", target: 2, value: 25, progress: 0, claimedOn: null },
    { id: "m2", key: "mission_m2", target: 1, value: 20, progress: 0, claimedOn: null },
    { id: "m3", key: "mission_m3", target: 50, value: 30, progress: 0, claimedOn: null }
  ],
  activity: [],
  quiz: { subject: null, queue: [], index: 0, answered: false },
  challenge: { active: false, total: 0, correct: 0 }
};

const el = {
  heroTagline: document.getElementById("heroTagline"),
  profileTitle: document.getElementById("profileTitle"),
  nameLabel: document.getElementById("nameLabel"),
  classLabel: document.getElementById("classLabel"),
  villageLabel: document.getElementById("villageLabel"),
  studentName: document.getElementById("studentName"),
  gradeSelect: document.getElementById("gradeSelect"),
  villageInput: document.getElementById("villageInput"),
  saveProfileBtn: document.getElementById("saveProfileBtn"),
  xpValue: document.getElementById("xpValue"),
  levelValue: document.getElementById("levelValue"),
  levelFill: document.getElementById("levelFill"),
  levelHint: document.getElementById("levelHint"),
  coinValue: document.getElementById("coinValue"),
  streakValue: document.getElementById("streakValue"),
  tabLearnBtn: document.getElementById("tabLearnBtn"),
  tabChallengeBtn: document.getElementById("tabChallengeBtn"),
  tabMissionsBtn: document.getElementById("tabMissionsBtn"),
  tabTeacherBtn: document.getElementById("tabTeacherBtn"),
  learningTracksTitle: document.getElementById("learningTracksTitle"),
  tipTitle: document.getElementById("tipTitle"),
  tipText: document.getElementById("tipText"),
  goalTitle: document.getElementById("goalTitle"),
  goalText: document.getElementById("goalText"),
  communityTitle: document.getElementById("communityTitle"),
  communityText: document.getElementById("communityText"),
  subjects: document.getElementById("subjects"),
  gradeBandText: document.getElementById("gradeBandText"),
  quizPrompt: document.getElementById("quizPrompt"),
  quizOptions: document.getElementById("quizOptions"),
  nextQuestionBtn: document.getElementById("nextQuestionBtn"),
  weeklyChallengeTitle: document.getElementById("weeklyChallengeTitle"),
  challengeInfo: document.getElementById("challengeInfo"),
  badgeList: document.getElementById("badgeList"),
  missionList: document.getElementById("missionList"),
  progressList: document.getElementById("progressList"),
  challengeStatus: document.getElementById("challengeStatus"),
  startChallengeBtn: document.getElementById("startChallengeBtn"),
  subjectProgressTitle: document.getElementById("subjectProgressTitle"),
  badgesTitle: document.getElementById("badgesTitle"),
  dailyMissionsTitle: document.getElementById("dailyMissionsTitle"),
  snapshotTitle: document.getElementById("snapshotTitle"),
  snapshotText: document.getElementById("snapshotText"),
  exportReportBtn: document.getElementById("exportReportBtn"),
  recentActivityTitle: document.getElementById("recentActivityTitle"),
  recentActivityList: document.getElementById("recentActivityList"),
  languageSelect: document.getElementById("languageSelect"),
  footerText: document.getElementById("footerText")
};

function t(key) {
  return (ui[state.profile.language] && ui[state.profile.language][key]) || ui.english[key] || key;
}

function today() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function parseDateKey(dateKey) {
  const [y, m, d] = dateKey.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function levelFromXp(xp) {
  return Math.floor(xp / 120) + 1;
}

function levelProgressFromXp(xp) {
  const levelWidth = 120;
  const current = xp % levelWidth;
  const percent = Math.round((current / levelWidth) * 100);
  return { current, target: levelWidth, percent };
}

function saveState() {
  localStorage.setItem("gq-prototype", JSON.stringify(state));
}

function loadState() {
  const raw = localStorage.getItem("gq-prototype");
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    Object.assign(state, parsed);
  } catch {
    localStorage.removeItem("gq-prototype");
  }
}

function normalizeState() {
  if (!ui[state.profile.language]) {
    state.profile.language = "english";
  }
  if (!state.profile.grade || state.profile.grade < MIN_GRADE || state.profile.grade > MAX_GRADE) {
    state.profile.grade = MIN_GRADE;
  }
  state.missions = (state.missions || []).map((m) => ({
    id: m.id,
    key: m.key || `mission_${m.id}`,
    target: m.target,
    value: m.value,
    progress: m.progress || 0,
    claimedOn: m.claimedOn || null
  }));
  if (!state.missions.length) {
    state.missions = [
      { id: "m1", key: "mission_m1", target: 2, value: 25, progress: 0, claimedOn: null },
      { id: "m2", key: "mission_m2", target: 1, value: 20, progress: 0, claimedOn: null },
      { id: "m3", key: "mission_m3", target: 50, value: 30, progress: 0, claimedOn: null }
    ];
  }
  state.activity = Array.isArray(state.activity) ? state.activity : [];
}

function updateStreak() {
  const localToday = today();
  if (!state.lastDate) {
    state.streak = 1;
    state.lastDate = localToday;
    return;
  }

  const diffDays = Math.floor((parseDateKey(localToday) - parseDateKey(state.lastDate)) / 86400000);
  if (diffDays === 1) state.streak += 1;
  if (diffDays > 1) state.streak = 1;
  if (diffDays < 0) state.streak = 1;
  state.lastDate = localToday;
}

function ensureProgress() {
  const gradeSubjects = Object.keys(content[state.profile.grade]);
  gradeSubjects.forEach((sub) => {
    if (!state.progress[sub]) state.progress[sub] = { asked: 0, correct: 0 };
  });
}

function grant(xp, coins) {
  state.xp += xp;
  state.coins += coins;
  state.missions[2].progress = Math.min(state.missions[2].target, state.missions[2].progress + xp);
  if (xp > 0 || coins > 0) {
    triggerRewardBurst(xp, coins);
  }
  addActivity(`+${xp} XP, +${coins} coins`);
  updateBadges();
  renderStats();
  renderProgress();
}

function triggerRewardBurst(xp, coins) {
  const burst = document.createElement("div");
  burst.className = "coin-burst";
  burst.textContent = `+${xp} XP  +${coins} ??`;
  document.body.appendChild(burst);
  setTimeout(() => burst.remove(), 1000);
}

function addActivity(text) {
  state.activity.unshift(`${new Date().toLocaleTimeString()} - ${text}`);
  state.activity = state.activity.slice(0, 6);
  renderActivity();
}

function updateBadges() {
  const b = new Set(state.badges);
  if (state.xp >= 120) b.add("Starter Star");
  if (state.xp >= 360) b.add("Village Scholar");
  if (state.streak >= 5) b.add("5-Day Streak");
  if (state.coins >= 180) b.add("Coin Captain");
  if (Object.values(state.progress).some((v) => v.asked >= 8 && v.correct / Math.max(v.asked, 1) >= 0.7)) {
    b.add("Subject Master");
  }
  state.badges = [...b];
}

function renderStats() {
  el.xpValue.textContent = String(state.xp);
  el.levelValue.textContent = String(levelFromXp(state.xp));
  el.coinValue.textContent = String(state.coins);
  el.streakValue.textContent = `${state.streak} ${state.streak === 1 ? t("day") : t("days")}`;
  const lvl = levelProgressFromXp(state.xp);
  if (el.levelFill) {
    el.levelFill.style.width = `${lvl.percent}%`;
  }
  if (el.levelHint) {
    const remaining = lvl.target - lvl.current;
    el.levelHint.textContent = `${lvl.current} / ${lvl.target} XP to next level (${remaining} left)`;
  }
}

function gradeBandText() {
  if (state.profile.grade <= 8) return t("trackFoundation");
  if (state.profile.grade <= 10) return t("trackMiddle");
  return t("trackSenior");
}

function renderGradeOptions() {
  el.gradeSelect.innerHTML = "";
  for (let g = MIN_GRADE; g <= MAX_GRADE; g += 1) {
    const o = document.createElement("option");
    o.value = String(g);
    o.textContent = `${t("classWord")} ${g}`;
    el.gradeSelect.appendChild(o);
  }
  el.gradeSelect.value = String(state.profile.grade);
}

function renderSubjects() {
  el.subjects.innerHTML = "";
  Object.keys(content[state.profile.grade]).forEach((subject) => {
    const b = document.createElement("button");
    b.className = "chip";
    b.textContent = subject;
    b.addEventListener("click", () => startQuiz(subject));
    el.subjects.appendChild(b);
  });
  el.gradeBandText.textContent = gradeBandText();
}

function renderBadges() {
  el.badgeList.innerHTML = "";
  if (!state.badges.length) {
    const span = document.createElement("span");
    span.textContent = t("noBadges");
    el.badgeList.appendChild(span);
    return;
  }
  state.badges.forEach((badge) => {
    const b = document.createElement("button");
    b.className = "chip";
    b.textContent = badge;
    b.disabled = true;
    el.badgeList.appendChild(b);
  });
}

function renderProgress() {
  ensureProgress();
  el.progressList.innerHTML = "";
  Object.entries(state.progress).forEach(([subject, value]) => {
    const item = document.createElement("div");
    item.className = "progress-item";
    const pct = Math.round((value.correct / Math.max(value.asked, 1)) * 100);
    const label = document.createElement("strong");
    label.textContent = `${subject} (${pct}%)`;
    const track = document.createElement("div");
    track.className = "progress-track";
    const fill = document.createElement("div");
    fill.className = "progress-fill";
    fill.style.width = `${pct}%`;
    track.appendChild(fill);
    item.appendChild(label);
    item.appendChild(track);
    el.progressList.appendChild(item);
  });
}

function renderMissions() {
  el.missionList.innerHTML = "";
  const todayStr = today();
  state.missions.forEach((m) => {
    const wrap = document.createElement("div");
    wrap.className = "mission";
    const done = m.progress >= m.target;
    const claimed = m.claimedOn === todayStr;
    const textWrap = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = (ui[state.profile.language] && ui[state.profile.language][m.key]) || ui.english[m.key] || m.key;
    const meta = document.createElement("div");
    meta.textContent = `${m.progress}/${m.target} | ${t("reward")}: ${m.value} XP`;
    textWrap.appendChild(title);
    textWrap.appendChild(meta);
    const btn = document.createElement("button");
    btn.textContent = claimed ? t("claimed") : t("claim");
    btn.disabled = !done || claimed;
    btn.addEventListener("click", () => {
      if (!done || claimed) return;
      m.claimedOn = todayStr;
      grant(m.value, 10);
      addActivity(`Mission claimed: ${t(m.key)}`);
      saveState();
      renderMissions();
      renderSnapshot();
    });
    wrap.appendChild(textWrap);
    wrap.appendChild(btn);
    el.missionList.appendChild(wrap);
  });
}

function startQuiz(subject) {
  state.quiz.subject = subject;
  state.quiz.queue = [...content[state.profile.grade][subject]];
  state.quiz.index = 0;
  state.quiz.answered = false;
  renderQuestion();
}

function renderQuestion() {
  const q = state.quiz.queue[state.quiz.index];
  if (!q) {
    el.quizPrompt.textContent = t("roundComplete");
    el.quizOptions.innerHTML = "";
    el.nextQuestionBtn.classList.add("hidden");
    saveState();
    return;
  }

  el.quizPrompt.textContent = `[${state.quiz.subject}] ${q.q}`;
  el.quizOptions.innerHTML = "";
  state.quiz.answered = false;

  q.options.forEach((opt) => {
    const b = document.createElement("button");
    b.textContent = opt;
    b.addEventListener("click", () => answerQuestion(opt));
    el.quizOptions.appendChild(b);
  });

  el.nextQuestionBtn.classList.add("hidden");
}

function answerQuestion(choice) {
  if (state.quiz.answered) return;
  const q = state.quiz.queue[state.quiz.index];
  const isCorrect = q.a === choice;
  state.quiz.answered = true;
  state.progress[state.quiz.subject].asked += 1;

  [...el.quizOptions.children].forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === q.a) btn.style.background = "#1e7a4f";
    if (btn.textContent === choice && !isCorrect) btn.style.background = "#a73a3a";
  });

  if (isCorrect) {
    state.progress[state.quiz.subject].correct += 1;
    state.missions[0].progress = Math.min(state.missions[0].target, state.missions[0].progress + 1);
    state.missions[1].progress = 1;
    grant(20, 10);
    el.quizPrompt.textContent = t("correct");
  } else {
    state.missions[1].progress = 0;
    el.quizPrompt.textContent = `${t("correctAnswer")}: ${q.a}`;
  }

  if (state.challenge.active) {
    state.challenge.total += 1;
    if (isCorrect) state.challenge.correct += 1;
    if (state.challenge.total >= 5) finishChallenge();
  }

  updateBadges();
  renderBadges();
  renderMissions();
  renderProgress();
  renderSnapshot();
  saveState();

  if (!state.challenge.active || state.challenge.total < 5) {
    el.nextQuestionBtn.classList.remove("hidden");
  }
}

function finishChallenge() {
  state.challenge.active = false;
  const pct = Math.round((state.challenge.correct / 5) * 100);
  if (pct >= 60) grant(40, 20);
  el.challengeStatus.textContent = `${t("challengeDone")} ${pct}%`;
  addActivity(`${t("challengeDone")} ${pct}%`);
  state.challenge.total = 0;
  state.challenge.correct = 0;
  el.nextQuestionBtn.classList.add("hidden");
}

function startChallenge() {
  const subjects = Object.keys(content[state.profile.grade]);
  const pick = subjects[Math.floor(Math.random() * subjects.length)];
  state.challenge = { active: true, total: 0, correct: 0 };
  el.challengeStatus.textContent = `${t("challengeStarted")}: ${pick}`;
  addActivity(`${t("challengeStarted")}: ${pick}`);
  startQuiz(pick);
}

function renderSnapshot() {
  const name = state.profile.name || t("studentWord");
  const grade = state.profile.grade;
  const village = state.profile.village || "N/A";
  const best = Object.entries(state.progress).sort((a, b) => b[1].correct - a[1].correct)[0];
  const bestText = best ? `${best[0]} (${best[1].correct}/${best[1].asked})` : t("noActivity");
  el.snapshotText.textContent = `${name}, ${t("classWord")} ${grade}, ${t("villageWord")}: ${village} | ${t("levelWord")} ${levelFromXp(state.xp)} | ${t("bestSubject")}: ${bestText}`;
}

function renderActivity() {
  el.recentActivityList.innerHTML = "";
  if (!state.activity.length) {
    const li = document.createElement("li");
    li.textContent = t("noActivity");
    el.recentActivityList.appendChild(li);
    return;
  }
  state.activity.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    el.recentActivityList.appendChild(li);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function exportReport() {
  const now = new Date();
  const reportDate = now.toLocaleString();
  const name = state.profile.name || "Student";
  const village = state.profile.village || "N/A";
  const progressRows = Object.entries(state.progress)
    .map(([subject, value]) => {
      const asked = value.asked || 0;
      const correct = value.correct || 0;
      const percent = Math.round((correct / Math.max(asked, 1)) * 100);
      return `<tr><td>${escapeHtml(subject)}</td><td>${asked}</td><td>${correct}</td><td>${percent}%</td></tr>`;
    })
    .join("");

  const badgeText = state.badges.length ? state.badges.map(escapeHtml).join(", ") : t("noBadges");
  const html = `<!doctype html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(t("reportTitle"))}</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 24px; color: #1f2a37; }
    h1 { margin: 0 0 8px; }
    p { margin: 4px 0; }
    .meta { margin-bottom: 16px; }
    table { width: 100%; border-collapse: collapse; margin-top: 12px; }
    th, td { border: 1px solid #d1d5db; padding: 8px; text-align: left; }
    th { background: #f3f4f6; }
  </style>
</head>
<body>
  <h1>${escapeHtml(t("reportTitle"))}</h1>
  <div class="meta">
    <p><strong>${escapeHtml(t("studentWord"))}:</strong> ${escapeHtml(name)}</p>
    <p><strong>${escapeHtml(t("classWord"))}:</strong> ${state.profile.grade}</p>
    <p><strong>${escapeHtml(t("villageLabel"))}:</strong> ${escapeHtml(village)}</p>
    <p><strong>XP:</strong> ${state.xp} | <strong>Level:</strong> ${levelFromXp(state.xp)} | <strong>Coins:</strong> ${state.coins} | <strong>Streak:</strong> ${state.streak}</p>
    <p><strong>${escapeHtml(t("badges"))}:</strong> ${badgeText}</p>
    <p><strong>${escapeHtml(t("generated"))}:</strong> ${escapeHtml(reportDate)}</p>
  </div>
  <table>
    <thead>
      <tr><th>Subject</th><th>${escapeHtml(t("questionsAttempted"))}</th><th>Correct</th><th>${escapeHtml(t("accuracy"))}</th></tr>
    </thead>
    <tbody>${progressRows || "<tr><td colspan='4'>No progress data yet.</td></tr>"}</tbody>
  </table>
</body>
</html>`;

  const reportWindow = window.open("", "_blank", "width=900,height=700");
  if (!reportWindow) return;
  reportWindow.document.open();
  reportWindow.document.write(html);
  reportWindow.document.close();
  reportWindow.focus();
  setTimeout(() => {
    reportWindow.print();
  }, 300);
}

let tabsBound = false;

function renderTabs() {
  if (tabsBound) return;
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
  tabsBound = true;
}

function setupProfile() {
  el.studentName.value = state.profile.name;
  el.villageInput.value = state.profile.village;
  el.gradeSelect.value = String(state.profile.grade);
  el.languageSelect.value = state.profile.language;
}

function saveProfile() {
  state.profile.name = el.studentName.value.trim() || t("studentWord");
  state.profile.grade = Number(el.gradeSelect.value);
  state.profile.village = el.villageInput.value.trim();
  ensureProgress();
  renderSubjects();
  renderProgress();
  renderSnapshot();
  addActivity(`Profile updated (${t("classWord")} ${state.profile.grade})`);
  saveState();
}

function applyUiText() {
  el.heroTagline.textContent = t("heroTagline");
  el.profileTitle.textContent = t("profileTitle");
  el.nameLabel.textContent = t("nameLabel");
  el.classLabel.textContent = t("classLabel");
  el.villageLabel.textContent = t("villageLabel");
  el.studentName.placeholder = t("namePlaceholder");
  el.villageInput.placeholder = t("villagePlaceholder");
  el.saveProfileBtn.textContent = t("save");
  el.tabLearnBtn.textContent = t("tabLearn");
  el.tabChallengeBtn.textContent = t("tabChallenge");
  el.tabMissionsBtn.textContent = t("tabMissions");
  el.tabTeacherBtn.textContent = t("tabTeacher");
  el.learningTracksTitle.textContent = t("learningTracks");
  el.tipTitle.textContent = t("tipTitle");
  el.tipText.textContent = t("tipText");
  el.goalTitle.textContent = t("goalTitle");
  el.goalText.textContent = t("goalText");
  el.communityTitle.textContent = t("communityTitle");
  el.communityText.textContent = t("communityText");
  el.weeklyChallengeTitle.textContent = t("weeklyChallenge");
  el.challengeInfo.textContent = t("challengeInfo");
  el.startChallengeBtn.textContent = t("startChallenge");
  if (!state.challenge.active && el.challengeStatus.textContent === "Not started") {
    el.challengeStatus.textContent = t("notStarted");
  }
  el.subjectProgressTitle.textContent = t("subjectProgress");
  el.badgesTitle.textContent = t("badges");
  el.dailyMissionsTitle.textContent = t("dailyMissions");
  el.snapshotTitle.textContent = t("snapshotTitle");
  el.exportReportBtn.textContent = t("exportPdf");
  el.recentActivityTitle.textContent = t("recentActivity");
  el.footerText.textContent = t("footerText");
  el.nextQuestionBtn.textContent = t("next");
}

function changeLanguage() {
  state.profile.language = el.languageSelect.value;
  applyUiText();
  renderGradeOptions();
  renderSubjects();
  renderBadges();
  renderMissions();
  renderProgress();
  renderStats();
  renderSnapshot();
  renderActivity();
  if (!state.quiz.subject) {
    el.quizPrompt.textContent = t("chooseSubject");
  }
  saveState();
}

function resetMissionsIfNewDay() {
  const t = today();
  state.missions.forEach((m) => {
    if (m.claimedOn !== t) {
      m.progress = 0;
    }
  });
}

function initPwaInstall() {
  const installBtn = document.getElementById("installBtn");
  let deferred;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferred = e;
    installBtn.classList.remove("hidden");
  });
  installBtn.addEventListener("click", async () => {
    if (!deferred) return;
    deferred.prompt();
    await deferred.userChoice;
    deferred = null;
    installBtn.classList.add("hidden");
  });
}

function registerSw() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
}

function init() {
  loadState();
  normalizeState();
  updateStreak();
  applyUiText();
  renderGradeOptions();
  ensureProgress();
  resetMissionsIfNewDay();
  setupProfile();
  renderSubjects();
  updateBadges();
  renderStats();
  renderBadges();
  renderMissions();
  renderProgress();
  renderSnapshot();
  renderActivity();
  renderTabs();
  if (!state.quiz.subject) {
    el.quizPrompt.textContent = t("chooseSubject");
  }

  el.saveProfileBtn.addEventListener("click", saveProfile);
  el.gradeSelect.addEventListener("change", saveProfile);
  el.startChallengeBtn.addEventListener("click", startChallenge);
  el.nextQuestionBtn.addEventListener("click", () => {
    state.quiz.index += 1;
    renderQuestion();
  });
  el.exportReportBtn.addEventListener("click", exportReport);
  el.languageSelect.addEventListener("change", changeLanguage);

  initPwaInstall();
  registerSw();
  saveState();
}

init();

