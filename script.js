// Tradução
const langSwitcher = document.getElementById("languageSwitcher");
langSwitcher.addEventListener("change", e => {
  setLanguage(e.target.value);
});

// Animação canvas (partículas como rede neural)
const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight / 2;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Criar partículas
for (let i = 0; i < 40; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 3,
    dx: (Math.random() - 0.5) * 1.5,
    dy: (Math.random() - 0.5) * 1.5
  });
}

// Desenhar
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#0a0a0a";
    ctx.fill();

    // Conectar partículas próximas
    for (let j = i + 1; j < particles.length; j++) {
      let p2 = particles[j];
      let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
      if (dist < 120) {
        ctx.strokeStyle = "rgba(214,69,69,0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }

    // movimento
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(draw);
}
draw();
