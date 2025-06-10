const canvas = document.querySelector('.water-ripples');
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext('2d');
function ripple(x, y) {
    const rad = 60, grd = ctx.createRadialGradient(x, y, 0, x, y, rad);
    grd.addColorStop(0, 'rgba(255,255,255,0.15)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, 2 * Math.PI);
    ctx.fillStyle = grd;
    ctx.fill();
}
canvas.addEventListener('mousemove', e => ripple(e.clientX, e.clientY));
setInterval(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 100);