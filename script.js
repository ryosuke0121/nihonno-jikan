let clockX = 0;
let clockY = 0;
const easingFactor = 0.1; 

function updateClock(event) {
  const now = new Date();
  const options = { timeZone: currentTimeZone, hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const formattedTime = now.toLocaleTimeString('ja-JP', options);

  const clock = document.getElementById('clock');
  clock.textContent = formattedTime;

  const targetX = event.pageX + 10;
  const targetY = event.pageY + 10;

  const dx = targetX - clockX;
  const dy = targetY - clockY;
  clockX += dx * easingFactor;
  clockY += dy * easingFactor;

  clock.style.left = clockX + 'px';
  clock.style.top = clockY + 'px';

  requestAnimationFrame(() => {
    updateClock(event);
  });
}

let currentTimeZone = 'Asia/Tokyo';

updateClock({ pageX: 0, pageY: 0 });

document.addEventListener('mousemove', updateClock);
