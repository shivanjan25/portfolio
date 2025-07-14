const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Fullscreen canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(5, 18, 9, 0.45)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgba(20, 214, 6, 0.6)'; // neon green
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const char = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    // Reset drops randomly to create variation
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 33);
