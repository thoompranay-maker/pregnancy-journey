<script type='text/javascript'>
//<![CDATA[


/* ========= NUMBER ANIMATION HELPER ========= */
function animateNumber(el, start, end, duration, suffix) {
  if (!el) return;
  var range = end - start;
  var startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = Math.min((timestamp - startTime) / duration, 1);
    var value = Math.floor(progress * range + start);
    el.textContent = value + (suffix || "");
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function animateCount(el, endValue, duration) {
  if (!el) return;

  let start = 0;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = Math.min((timestamp - startTime) / duration, 1);
    let value = Math.floor(progress * endValue);
    el.textContent = value;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function animateWeeksDays(el, targetWeeks, targetDays, duration) {
  if (!el) return;

  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = Math.min((timestamp - startTime) / duration, 1);

    let currentWeeks = Math.floor(progress * targetWeeks);
    let currentDays = Math.floor(progress * targetDays);

    el.textContent = currentWeeks + " Weeks " + currentDays + " Days";

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}



/* ========= MAIN SCRIPT ========= */
window.addEventListener("load", function () {

  /* --- BASIC PREGNANCY CALC --- */
  var lmp = new Date(2025, 10, 12); // 12 Nov 2025
  var totalDays = 280;

  var today = new Date();
  today.setHours(0,0,0,0);
  lmp.setHours(0,0,0,0);

  var daysDone = Math.floor((today - lmp) / 86400000);
  if (daysDone < 0) daysDone = 0;
  if (daysDone > totalDays) daysDone = totalDays;

  var weeks = Math.floor(daysDone / 7);
  var days = daysDone % 7;

  var trimester = "1st Trimester";
  if (weeks >= 13 && weeks < 28) trimester = "2nd Trimester";
  if (weeks >= 28) trimester = "3rd Trimester";

  var due = new Date(lmp.getTime() + totalDays * 86400000);

  /* --- GET ELEMENTS --- */
  var t = document.getElementById("trimester");
  var a = document.getElementById("currentAge");
  var d = document.getElementById("dueDate");
  var p = document.getElementById("progressFill");

  var lmpEl = document.getElementById("lmpDate");
  var daysFromLmpEl = document.getElementById("daysFromLmp");
  var daysToDueEl = document.getElementById("daysToDue");

  var mw = document.getElementById("milestoneWeek");
  var mt = document.getElementById("milestoneText");
  var bf = document.getElementById("babyFruit");

  /* --- TOP CARDS --- */
  if (t) t.textContent = trimester;
  if (d) d.textContent = due.toDateString();

  /* --- ANIMATE CURRENT AGE --- */
if (a) {
  a.textContent = "0 Weeks 0 Days";
  animateWeeksDays(a, weeks, days, 2000);
}

  /* --- ANIMATE PROGRESS BAR --- */
if (p) {
  var targetPercent = Math.round((daysDone / totalDays) * 100);
  var current = 0;
  var pp = document.getElementById("progressPercent");

var baby = document.getElementById("babyIcon");

var interval = setInterval(function () {
  current++;

  // Progress bar
  p.style.width = current + "%";

  // Percentage text
  if (pp) {
    pp.textContent = current + "% completed";
  }

  if (current >= targetPercent) clearInterval(interval);
}, 100); // 2-second smooth animation
}

  /* --- LMP & DUE COUNTS --- */
  if (lmpEl) lmpEl.textContent = lmp.toDateString();
  if (daysFromLmpEl) animateCount(daysFromLmpEl, daysDone, 2000);
  if (daysToDueEl) animateNumber(daysToDueEl, 0, totalDays - daysDone, 2000, "");

/* ===== BABY MESSAGE – WEEKLY LOVE NOTE ===== */

// Messages by week (0–39)
var babyMessages = [
  "Hi Amma & Nana 💕\nI’ve just begun my journey.\nThank you for dreaming about me.",
  "Hi Amma & Nana 💕\nI’m growing quietly inside.\nI feel your love already.",
  "Hi Amma & Nana 💕\nMy heart is learning to beat.\nEvery beat is for you.",
  "Hi Amma & Nana 💕\nMy tiny body is taking shape.\nThank you for protecting me.",
  "Hi Amma & Nana 💕\nI’m getting stronger each day.\nYour care means everything.",
  "Hi Amma & Nana 💕\nMy little arms and legs are growing.\nI feel safe with you.",
  "Hi Amma & Nana 💕\nMy brain is developing fast.\nYour love fuels me.",
  "Hi Amma & Nana 💕\nAll my organs are forming.\nThank you for being patient with Amma.",
  "Hi Amma & Nana 💕\nI’m starting to move a little.\nCan’t wait to meet you.",
  "Hi Amma & Nana 💕\nMy face is becoming clearer.\nI already look like you 😊",
  "Hi Amma & Nana 💕\nI’m growing steadily now.\nYour love keeps me warm.",
  "Hi Amma & Nana 💕\nMy reflexes are developing.\nI’m learning so much!",
  "Hi Amma & Nana 💕\nWelcome to the second trimester.\nI’m feeling stronger every day.",
  "Hi Amma & Nana 💕\nI can make tiny movements.\nSoon you might feel me.",
  "Hi Amma & Nana 💕\nI can hear sounds now.\nTalk to me, I love it.",
  "Hi Amma & Nana 💕\nI’m very active these days.\nThank you for nourishing me.",
  "Hi Amma & Nana 💕\nI’m gaining weight nicely.\nYour care shows.",
  "Hi Amma & Nana 💕\nYou may feel my movements.\nThat’s me saying hi!",
  "Hi Amma & Nana 💕\nI can kick and stretch.\nLife is exciting here.",
  "Hi Amma & Nana 💕\nMy hair is starting to grow.\nI’m becoming more like a baby.",
  "Hi Amma & Nana 💕\nI can swallow and digest.\nYour nutrition helps me.",
  "Hi Amma & Nana 💕\nMy senses are developing.\nI feel your emotions.",
  "Hi Amma & Nana 💕\nMy lungs are forming.\nEvery day is progress.",
  "Hi Amma & Nana 💕\nI respond to sounds now.\nPlease keep talking to me.",
  "Hi Amma & Nana 💕\nI’m gaining body fat.\nGetting ready for the world.",
  "Hi Amma & Nana 💕\nI practice breathing.\nAlmost there.",
  "Hi Amma & Nana 💕\nMy eyes may open soon.\nI’m curious already.",
  "Hi Amma & Nana 💕\nWelcome to the third trimester.\nWe’re getting close.",
  "Hi Amma & Nana 💕\nMy brain is growing rapidly.\nYour love helps me thrive.",
  "Hi Amma & Nana 💕\nI’m gaining weight quickly.\nThank you for resting, Amma.",
  "Hi Amma & Nana 💕\nI’m turning head-down.\nGetting into position.",
  "Hi Amma & Nana 💕\nMy bones are strong but soft.\nAlmost ready.",
  "Hi Amma & Nana 💕\nI’m preparing for birth.\nWe’ll meet soon.",
  "Hi Amma & Nana 💕\nI’m settling lower now.\nThe journey is nearly complete.",
  "Hi Amma & Nana 💕\nAlmost ready to meet you.\nI feel your excitement.",
  "Hi Amma & Nana 💕\nFinal preparations here.\nHold on.",
  "Hi Amma & Nana 💕\nI’m nearly full term.\nSo close now.",
  "Hi Amma & Nana 💕\nI’m full term.\nAny day now!",
  "Hi Amma & Nana 💕\nI’m waiting to meet you.\nThank you for everything.",
  "Hi Amma & Nana 💕\nI’m ready.\nLet’s meet ❤️"
];

// Typewriter animation
function typeText(el, text, speed) {
  el.textContent = "";
  var i = 0;
  var timer = setInterval(function () {
    el.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

// Display message
var babyMessageEl = document.getElementById("babyMessageText");
if (babyMessageEl) {
  var safeWeek = Math.min(Math.max(weeks, 0), babyMessages.length - 1);
  typeText(babyMessageEl, babyMessages[safeWeek], 35);
}

/* ===== BABY MESSAGE – WEEKLY LOVE NOTE END ===== */  


/* ===== DAILY BABY POPUP (ALWAYS SHOW + AUTO CLOSE) ===== */

// Daily baby messages
var dailyMessages = [
  "Hi Amma 💕\nPlease drink enough water today 💧\nI love you.",
  "Amma 💖\nYour heartbeat is my favorite sound.",
  "Amma 🌸\nThank you for resting today.\nI feel safe.",
  "Amma 🤍\nPlease eat something healthy today.\nI’m growing strong.",
  "Amma 😊\nWhen you smile, I smile too.",
  "Amma 💞\nTalk to me today.\nI love hearing your voice.",
  "Amma 🥰\nPlease don’t worry.\nI’m doing just fine."
];

// Elements
var popup = document.getElementById("babyPopup");
var popupText = document.getElementById("babyPopupText");
var popupClose = document.getElementById("babyPopupClose");
var heartsContainer = document.getElementById("babyHearts");

// Show popup
if (popup && popupText) {
  var msgIndex = new Date().getDate() % dailyMessages.length;
  popup.style.display = "flex";
  popupText.textContent = dailyMessages[msgIndex];

  // Auto close after 10 seconds
  setTimeout(function () {
    popup.style.opacity = "0";
    setTimeout(() => popup.style.display = "none", 600);
  }, 10000);
}

// Close button
if (popupClose) {
  popupClose.addEventListener("click", function () {
    popup.style.display = "none";
  });
}

// Create floating hearts
function createHeart() {
  var heart = document.createElement("span");
  heart.textContent = ["💖","💗","💓","💘","💝"][Math.floor(Math.random()*5)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-30px";
  heart.style.animationDuration = (Math.random() * 6 + 6) + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}

// Generate hearts continuously
if (heartsContainer) {
  setInterval(createHeart, 500);
}

/* ===== DAILY BABY POPUP (ALWAYS SHOW + AUTO CLOSE) END ===== */

/* --- MILESTONE & BABY SIZE --- */
  var milestones = [
    "Your baby is just beginning life.",
    "Cells are dividing rapidly.",
    "The heart and spinal cord start to form.",
    "Tiny limb buds appear.",
    "The heart starts beating.",
    "Brain and nervous system develop.",
    "Arms and legs grow longer.",
    "All major organs are present.",
    "The baby starts moving.",
    "Facial features become clearer.",
    "The baby is growing steadily.",
    "Reflexes begin developing.",
    "Second trimester begins.",
    "Baby can make sucking motions.",
    "Baby hears sounds.",
    "Baby is very active.",
    "Baby starts gaining weight.",
    "You may feel movements.",
    "Baby can kick and stretch.",
    "Hair begins to grow.",
    "Baby swallows and digests.",
    "Senses are developing.",
    "Lungs continue forming.",
    "Baby responds to sound.",
    "Baby gains body fat.",
    "Baby practices breathing.",
    "Eyes may open.",
    "Third trimester begins.",
    "Brain grows rapidly.",
    "Baby gains weight quickly.",
    "Baby turns head down.",
    "Bones are formed but soft.",
    "Baby prepares for birth.",
    "Baby drops lower.",
    "Almost ready to meet you.",
    "Final preparations.",
    "Full term approaches.",
    "Baby is full term.",
    "Waiting to meet your baby.",
    "Any day now."
  ];

  var babySizes = [
    "Poppy seed","Sesame seed","Lentil","Blueberry","Sweet pea",
    "Grape","Cherry","Raspberry","Green olive","Strawberry",
    "Lime","Plum","Peach","Lemon","Apple","Avocado","Pear",
    "Bell pepper","Tomato","Banana","Carrot","Eggplant",
    "Papaya","Corn","Zucchini","Cauliflower","Lettuce",
    "Cabbage","Pumpkin","Butternut squash","Coconut","Pineapple",
    "Cantaloupe","Honeydew","Watermelon","Large watermelon",
    "Pumpkin","Big pumpkin","Very large pumpkin","Ready to meet you"
  ];

  if (weeks < 0) weeks = 0;
  if (weeks > 39) weeks = 39;

  if (mw) mw.textContent = "Week " + weeks;
  if (mt) mt.textContent = milestones[weeks];
  if (bf) bf.textContent = babySizes[weeks];

});
//]]>
</script>
