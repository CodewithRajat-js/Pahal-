const heartContainer = document.getElementById('heart-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Position the heart randomly within the container width
  const containerWidth = heartContainer.offsetWidth;
  const x = Math.random() * containerWidth;
  heart.style.left = x + 'px';
  heart.style.bottom = '0px';

  heartContainer.appendChild(heart);

  // Remove the heart after animation completes
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

document.getElementById('love-btn').addEventListener('click', () => {
  createHeart();
});

// Pulse hearts animation
let pulseInterval = null;

function createPulseHeart() {
  const pulseHeart = document.createElement('span');
  pulseHeart.classList.add('pulse-heart');
  pulseHeart.textContent = '💖';
  heartContainer.appendChild(pulseHeart);

  // Remove pulse heart after some time
  setTimeout(() => {
    pulseHeart.remove();
  }, 5000);
}

document.getElementById('pulse-btn').addEventListener('click', () => {
  if (pulseInterval) {
    clearInterval(pulseInterval);
    pulseInterval = null;
  } else {
    createPulseHeart();
    pulseInterval = setInterval(createPulseHeart, 1500);
  }
});

// Surprise button - show multiple hearts floating up quickly
document.getElementById('surprise-btn').addEventListener('click', () => {
  for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 100);
  }
});
