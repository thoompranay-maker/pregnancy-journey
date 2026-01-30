/* ================== HELPERS ================== */

// Animate single number
function animateNumber(el, start, end, duration, suffix = "") {
  if (!el) return;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = Math.min((timestamp - startTime) / duration, 1);
    let value = Math.floor(progress * (end - start) + start);
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// Animate weeks + days together
function animateWeeksDays(el, targetWeeks, targetDays, duration) {
  if (!el) return;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = Math.min((timestamp - startTime) / duration, 1);

    let w = Math.floor(progress * targetWeeks);
    let d = Math.floor(progress * targetDays);

    el.textContent = w + " Weeks " + d + " Days";
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// Typewriter effect
function typeText(el, text, speed = 35) {
  if (!el) return;
  el.textContent = "";
  let i = 0;
  let timer = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

/* ================== MAIN ================== */

window.addEventListener("load", () => {

  /* ===== CONFIG ===== */
  const LMP_DATE = new Date(2025, 10, 12); // 12 Nov 2025
  const TOTAL_DAYS = 280;

  /* ===== DATE CALC ===== */
  const today = new Date();
  today.setHours(0,0,0,0);
  LMP_DATE.setHours(0,0,0,0);

  let daysDone = Math.floor((today - LMP_DATE) / 86400000);
  daysDone = Math.max(0, Math.min(daysDone, TOTAL_DAYS));

  let weeks = Math.floor(daysDone / 7);
  let days = daysDone % 7;

  const dueDate = new Date(LMP_DATE.getTime() + TOTAL_DAYS * 86400000);

  /* ===== TRIMESTER ===== */
  let trimester = "1st Trimester";
  if (weeks >= 13 && weeks < 28) trimester = "2nd Trimester";
  if (weeks >= 28) trimester = "3rd Trimester";

  /* ===== ELEMENTS ===== */
  const trimesterEl = document.getElementById("trimester");
  const ageEl = document.getElementById("currentAge");
  const dueEl = document.getElementById("dueDate");
  const lmpEl = document.getElementById("lmpDate");
  const daysFromLmpEl = document.getElementById("daysFromLmp");
  const daysToDueEl = document.getElementById("daysToDue");
  const progressFill = document.getElementById("progressFill");
  const progressPercent = document.getElementById("progressPercent");

  const milestoneWeekEl = document.getElementById("milestoneWeek");
  const milestoneTextEl = document.getElementById("milestoneText");
  const babyFruitEl = document.getElementById("babyFruit");
  const babyMessageEl = document.getElementById("babyMessageText");

  /* ===== TOP CARDS ===== */
  if (trimesterEl) trimesterEl.textContent = trimester;
  if (dueEl) dueEl.textContent = dueDate.toDateString();
  if (lmpEl) lmpEl.textContent = LMP_DATE.toDateString();

  /* ===== CURRENT AGE ANIMATION ===== */
  if (ageEl) {
    ageEl.textContent = "0 Weeks 0 Days";
    animateWeeksDays(ageEl, weeks, days, 2000);
  }

  /* ===== DAYS COUNTS ===== */
  if (daysFromLmpEl) animateNumber(daysFromLmpEl, 0, daysDone, 2000);
  if (daysToDueEl) animateNumber(daysToDueEl, 0, TOTAL_DAYS - daysDone, 2000);

  /* ===== BABY LOVE MESSAGES ===== */
  const babyMessages = [
    "Hi Amma & Nana 💕\nI’ve just begun my journey.\nThank you for dreaming about me.",
    "I’m growing quietly inside.\nI feel your love already 💖",
    "My heart is learning to beat.\nEvery beat is for you ❤️",
    "My tiny body is taking shape.\nThank you for protecting me.",
    "I’m getting stronger each day.\nYour care means everything.",
    "My arms and legs are growing.\nI feel safe with you.",
    "My brain is developing fast.\nYour love fuels me.",
    "All my organs are forming.\nThank you for being patient.",
    "I’m starting to move a little.\nCan’t wait to meet you.",
    "My face is becoming clearer 😊",
    "I’m growing steadily now.\nYour love keeps me warm.",
    "My reflexes are developing.\nI’m learning so much!",
    "Welcome to the second trimester 💕",
    "I can make tiny movements.",
    "I can hear sounds.\nTalk to me!",
    "I’m very active now 😄",
    "I’m gaining weight nicely.",
    "You may feel my movements!",
    "I can kick and stretch.",
    "My hair is starting to grow.",
    "I can swallow and digest.",
    "My senses are developing.",
    "My lungs are forming.",
    "I respond to sounds.",
    "I’m gaining baby fat 🥰",
    "I practice breathing.",
    "My eyes may open soon.",
    "Welcome to the third trimester ❤️",
    "My brain is growing rapidly.",
    "I’m gaining weight quickly.",
    "I’m turning head-down.",
    "My bones are forming.",
    "I’m preparing for birth.",
    "I’m settling lower now.",
    "Almost ready to meet you 💕",
    "Final preparations!",
    "Full term approaches.",
    "I’m full term now!",
    "Any day now!",
    "I’m ready ❤️",
    "Hooray! I am with you! ❤️"
  ];

  if (babyMessageEl) {
    let safeWeek = Math.min(Math.max(weeks, 0), babyMessages.length - 1);
    typeText(babyMessageEl, babyMessages[safeWeek], 35);
  }

  /* ===== MILESTONES ===== */
  const milestones = [
    "Your baby is just beginning life.",
    "Cells are dividing rapidly.",
    "The heart and spinal cord start forming.",
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
    "Any day now.",
    "Hi, Amma & Nana."
  ];

  const babySizes = [
    "Poppy seed","Sesame seed","Lentil","Blueberry","Sweet pea",
    "Grape","Cherry","Raspberry","Green olive","Strawberry",
    "Lime","Plum","Peach","Lemon","Apple","Avocado","Pear",
    "Bell pepper","Tomato","Banana","Carrot","Eggplant",
    "Papaya","Corn","Zucchini","Cauliflower","Lettuce",
    "Cabbage","Pumpkin","Butternut squash","Coconut","Pineapple",
    "Cantaloupe","Honeydew","Watermelon","Large watermelon",
    "Pumpkin","Big pumpkin","Very large pumpkin","Ready to meet you","How Am I in your hands! Do you love me!"
  ];

  weeks = Math.max(0, Math.min(weeks, 39));

  if (milestoneWeekEl) milestoneWeekEl.textContent = "Week " + weeks;
  if (milestoneTextEl) milestoneTextEl.textContent = milestones[weeks];
  if (babyFruitEl) babyFruitEl.textContent = babySizes[weeks];

  
/* ===== FINAL PREGNANCY TIMELINE ===== */

const timelineEl = document.getElementById("pregnancyTimeline");

if (timelineEl) {
  for (let week = 1; week <= 40; week++) {
    const weekDiv = document.createElement("div");
    weekDiv.className = "timeline-week";
    weekDiv.dataset.week = week;

    // State
    if (week < weeks) weekDiv.classList.add("past");
    else if (week === weeks) weekDiv.classList.add("current");
    else weekDiv.classList.add("future");

    weekDiv.innerHTML = `
      <div class="week-header">
        <span class="week-dot"></span>
        <span class="week-title">Week ${week}</span>
        <span class="week-lock">
  ${
    week > weeks
      ? ""
      : week < weeks
      ? "🔓"
      : ""
  }
</span>
      </div>

      <div class="week-content">
        <p class="week-message">👶 ${babyMessages[week] || ""}</p>
        <p class="week-milestone"><strong>Milestone:</strong> ${milestones[week] || ""}</p>
        <p class="week-size"><strong>Size:</strong> ${babySizes[week] || ""}</p>
      </div>
    `;

  /* ✅ PASTE THIS PART HERE */
  if (week < weeks) {
    const content = weekDiv.querySelector(".week-content");
    if (content) {
      content.style.maxHeight = "0";
      content.style.opacity = "0";
    }
  }
  
    timelineEl.appendChild(weekDiv);

    const content = weekDiv.querySelector(".week-content");

    // Auto-open current week
    if (week === weeks) {
      weekDiv.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1";
    }

    // Click toggle (past only)
    weekDiv.addEventListener("click", () => {
      if (weekDiv.classList.contains("future")) return;

      if (weekDiv.classList.contains("open")) {
        weekDiv.classList.remove("open");
        content.style.maxHeight = "0";
        content.style.opacity = "0";
      } else {
        weekDiv.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = "1";
      }
    });
  }
}

   /* ===== FINAL PREGNANCY TIMELINE END ===== */

/* ===== PROGRESS BAR ===== */
if (progressFill && progressPercent) {
  const percent = Math.round((daysDone / TOTAL_DAYS) * 100);
  let current = 0;

  const progressTimer = setInterval(() => {
    current++;
    progressFill.style.width = current + "%";
    progressPercent.textContent = current + "% completed";

    if (current >= percent) clearInterval(progressTimer);
  }, 30);
}

  /* ===== DAILY BABY POPUP (ALWAYS SHOW + AUTO CLOSE) ===== */

  var dailyMessages = [
 "<strong>Amma 💕</strong>\nPlease drink enough water today 💧",
  "<strong>Amma 💓</strong>\nYour heartbeat is my favorite sound.",
  "<strong>Amma 🌷</strong>\nThank you for resting today.",
  "<strong>Amma 🤍</strong>\nPlease eat something healthy today.",
  "<strong>Amma 😊</strong>\nWhen you smile, I smile too.",
  "<strong>Amma 💞</strong>\nTalk to me today.\nI love hearing your voice.",
  "<strong>Amma 🥰</strong>\nI’m safe and happy inside you.",

  "<strong>Amma 🌸</strong>\nI feel your love every moment.",
  "<strong>Amma 💖</strong>\nYour warmth keeps me cozy.",
  "<strong>Amma 🫶</strong>\nSlow down today.\nI’m growing gently.",
  "<strong>Amma 🌼</strong>\nThank you for choosing me.",
  "<strong>Amma 💓</strong>\nI’m getting stronger because of you.",
  "<strong>Amma 🤰</strong>\nYour care is my first home.",
  "<strong>Amma ✨</strong>\nEvery breath you take comforts me.",

  "<strong>Amma 🌙</strong>\nRest well tonight.\nI’ll watch over you.",
  "<strong>Amma 💗</strong>\nYour laughter reaches me.",
  "<strong>Amma 🌷</strong>\nI love our quiet moments together.",
  "<strong>Amma 💞</strong>\nSing to me when you can.",
  "<strong>Amma 🌈</strong>\nI feel peaceful when you are calm.",
  "<strong>Amma 🥹</strong>\nThank you for protecting me.",
  "<strong>Amma 🤍</strong>\nYour body is doing something magical.",

  "<strong>Amma 🌸</strong>\nI’m growing perfectly in my own time.",
  "<strong>Amma 💕</strong>\nPlease don’t worry.\nI’m okay.",
  "<strong>Amma 🫶</strong>\nYour love is my strength.",
  "<strong>Amma 🌼</strong>\nI feel safe when you rest.",
  "<strong>Amma 💓</strong>\nEach day, I grow a little more.",
  "<strong>Amma 🌺</strong>\nThank you for talking to me.",
  "<strong>Amma ✨</strong>\nI can’t wait to meet you someday.",

  "<strong>Amma 🌙</strong>\nGood night.\nI’m cuddled close.",
  "<strong>Amma 🤍</strong>\nYour heartbeat guides me.",
  "<strong>Amma 💞</strong>\nI love being with you.",
  "<strong>Amma 🌸</strong>\nPlease be kind to yourself today.",
  "<strong>Amma 💖</strong>\nYou’re already the best Amma.",
  "<strong>Amma 🌈</strong>\nYour happiness makes me glow.",
  "<strong>Amma 🥰</strong>\nI’m growing with love inside you."
  ];

  var popup = document.getElementById("babyPopup");
  var popupText = document.getElementById("babyPopupText");
  var popupClose = document.getElementById("babyPopupClose");
  var heartsContainer = document.getElementById("babyHearts");

  if (popup && popupText) {
    popup.style.display = "flex";

    var msgIndex = new Date().getDate() % dailyMessages.length;
    popupText.textContent = dailyMessages[msgIndex];

    setTimeout(function () {
      popup.style.opacity = "0";
      setTimeout(function () {
        popup.style.display = "none";
      }, 600);
    }, 10000);
  }

  if (popupClose) {
    popupClose.onclick = function () {
      popup.style.display = "none";
    };
  }

  function createHeart() {
    if (!heartsContainer) return;

    var heart = document.createElement("span");
    heart.textContent = ["💖","💗","💓","💘","💝"][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.animationDuration = (Math.random() * 6 + 6) + "s";

    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 12000);
  }

  if (heartsContainer) {
    setInterval(createHeart, 500);
  }

  /* ===== DAILY BABY POPUP END ===== */

/* ===== TIMELINE CLICK TO TOGGLE (SAFE) ===== */

document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".timeline-week").forEach(week => {
    week.addEventListener("click", () => {

      // ❌ Do nothing for future weeks
      if (week.classList.contains("future")) return;

      // Toggle past weeks
      if (week.classList.contains("past")) {
        week.classList.toggle("open");

        const content = week.querySelector(".week-content");
        if (content) {
          if (week.classList.contains("open")) {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.opacity = "1";
          } else {
            content.style.maxHeight = "0";
            content.style.opacity = "0";
          }
        }
      }

    });
  });
/* ===== TIMELINE CLICK TO TOGGLE (SAFE) ===== */
  
});

  
});
/* ===== JUMP TO BUTTON ===== */
const jumpBtn = document.getElementById("jumpToCurrent");
if (jumpBtn) {
  jumpBtn.addEventListener("click", () => {
    const currentWeek = document.querySelector(".timeline-week.current");
    if (currentWeek) {
      currentWeek.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}
/* ===== JUMP TO BUTTON ===== */

/* ===== NIGHT MODE AUTO + MANUAL ===== */

function enableNightMode() {
  document.body.classList.add("night");
}

function disableNightMode() {
  document.body.classList.remove("night");
}

// Auto night mode (7 PM – 6 AM)
const hour = new Date().getHours();
if (hour >= 18 || hour < 6) {
  enableNightMode();
}

// Optional: expose toggle for later use
window.toggleNightMode = function () {
  document.body.classList.toggle("night");
};

/* ===== NIGHT MODE AUTO + MANUAL ===== */

/* ===== NIGHT BUTTON ===== */
const nightBtn = document.getElementById("nightToggle");
if (nightBtn) {
  nightBtn.onclick = () => toggleNightMode();
}
/* ===== NIGHT BUTTON END ===== */
