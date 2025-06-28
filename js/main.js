// function createHeart() {
//   const heart = document.createElement("div");
//   heart.classList.add("heart");
//   heart.style.left = Math.random() * 100 + "vw";
//   heart.style.animationDuration = 3 + Math.random() * 3 + "s";
//   heart.innerHTML = "❤️";
//   document.body.appendChild(heart);
//   setTimeout(() => heart.remove(), 6000);
// }

// setInterval(createHeart, 300);

// // 💬 Эффект печати
// const text = "Для Эли 💗";
// let index = 0;
// function typeText() {
//   if (index < text.length) {
//     document.getElementById("typing").innerHTML += text[index];
//     index++;
//     setTimeout(typeText, 150);
//   }
// }
// typeText();

// // 💖 Летающие сердечки
// function createHeart() {
//   const heart = document.createElement("div");
//   heart.className = "heart";
//   heart.textContent = "❤️";
//   heart.style.left = Math.random() * 100 + "vw";
//   heart.style.fontSize = Math.random() * 20 + 10 + "px";
//   heart.style.animationDuration = Math.random() * 3 + 3 + "s";
//   heart.style.opacity = Math.random();
//   document.body.appendChild(heart);
//   setTimeout(() => heart.remove(), 6000);
// }
// setInterval(createHeart, 300);

// // 🎵 Музыка по кнопке
// document.getElementById("playMusic").addEventListener("click", () => {
//   document.getElementById("audio").play();
// });

// // 💌 Секретное послание
// document.getElementById("showMessage").addEventListener("click", () => {
//   document.getElementById("secretMessage").style.opacity = 1;
// });

// // 💬 Печать текста
// const text = "Для Эли 💗";
// let index = 0;
// function typeText() {
//   if (index < text.length) {
//     document.getElementById("typing").innerHTML += text[index];
//     index++;
//     setTimeout(typeText, 150);
//   }
// }
// typeText();

// // 💖 Сердечки
// function createHeart() {
//   const heart = document.createElement("div");
//   heart.className = "heart";
//   heart.textContent = "❤️";
//   heart.style.left = Math.random() * 100 + "vw";
//   heart.style.fontSize = Math.random() * 20 + 10 + "px";
//   heart.style.animationDuration = Math.random() * 3 + 3 + "s";
//   heart.style.opacity = Math.random();
//   document.body.appendChild(heart);
//   setTimeout(() => heart.remove(), 6000);
// }
// setInterval(createHeart, 300);

// // 🎵 Музыка
// document.getElementById("playMusic").addEventListener("click", () => {
//   document.getElementById("audio").play();
// });

// // 💌 Послание
// document.getElementById("showMessage").addEventListener("click", () => {
//   document.getElementById("secretMessage").style.opacity = 1;
// });

// Элементы
const typingEl = document.getElementById("typing");
const secretEl = document.getElementById("secretMessage");
const quotesEl = document.getElementById("quotes");
const playMusicBtn = document.getElementById("playMusic");
const showMsgBtn = document.getElementById("showMessage");
const restartBtn = document.getElementById("restart");
const audio = document.getElementById("audio");
const typingSound = document.getElementById("typing-sound");
const container = document.getElementById("container");
const profile = document.querySelector(".profile");

let typingIndex = 0;
const typingText = "Для Эли 💗";
let secretText = "Ты — единственная причина, по которой мой мир стал ярче ✨";

const quotes = [
  "Любовь — это когда счастье другого важнее твоего.",
  "Ты — мой свет в темноте.",
  "Каждый день с тобой — как маленькое чудо.",
  "С тобой мир становится ярче.",
];

let quoteIndex = 0;

// Функция печати с эффектом печатной машинки и звуком
function typeWriter(text, element, callback) {
  let i = 0;
  element.textContent = "";
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      if (typingSound.paused) typingSound.play();
      i++;
      setTimeout(typing, 150);
    } else {
      typingSound.pause();
      typingSound.currentTime = 0;
      if (callback) callback();
    }
  }
  typing();
}

// Запуск эффекта печати имени
function startTypingName() {
  typeWriter(typingText, typingEl, () => {
    fadeInElements([playMusicBtn, showMsgBtn, profile], 0);
  });
}

// Плавное появление элементов с задержкой
function fadeInElements(elements, delay) {
  elements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("fade-in");
      el.style.opacity = 1;
    }, delay + i * 800);
  });
}

// Сброс анимаций и состояния
function reset() {
  typingEl.textContent = "";
  secretEl.textContent = "";
  secretEl.style.opacity = 0;
  quotesEl.textContent = "";
  quotesEl.style.opacity = 0;
  playMusicBtn.style.display = "inline-block";
  showMsgBtn.style.display = "inline-block";
  restartBtn.style.display = "none";
  startTypingName();
}

// Секретное послание с эффектом печати
function showSecretMessage() {
  secretEl.style.opacity = 1;
  typeWriter(secretText, secretEl, () => {
    showMsgBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
    cycleQuotes();
  });
}

// Циклическая смена цитат
function cycleQuotes() {
  quotesEl.style.opacity = 1;
  quotesEl.textContent = quotes[quoteIndex];
  quoteIndex = (quoteIndex + 1) % quotes.length;
  setTimeout(cycleQuotes, 6000);
}

// Интерактивные сердечки
function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = x - 10 + "px";
  heart.style.top = y - 10 + "px";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

// Сердечки реагируют на движение мыши
window.addEventListener("mousemove", (e) => {
  if (Math.random() < 0.1) createHeart(e.clientX, e.clientY);
});

// Сердечки всплывают при клике
window.addEventListener("click", (e) => {
  for (let i = 0; i < 5; i++) {
    setTimeout(
      () =>
        createHeart(
          e.clientX + Math.random() * 30 - 15,
          e.clientY + Math.random() * 30 - 15
        ),
      i * 100
    );
  }
});

// Параллакс эффект при прокрутке
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  container.style.transform = `translateZ(${scrollY * 0.5}px)`;
});

// Кнопки
playMusicBtn.addEventListener("click", () => {
  audio.play();
  playMusicBtn.style.display = "none";
});

showMsgBtn.addEventListener("click", () => {
  showSecretMessage();
});

restartBtn.addEventListener("click", () => {
  reset();
});

// Запуск
reset();
