const clockTitle = document.querySelector(".js-clock");

function countClock() {
  const now = new Date();
  const Xmas = new Date("2023-12-25T00:00:00+0000");
  const diff = Xmas - now;

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHour = (Math.floor((diff / (1000 * 60 * 60)) % 24) + "").padStart(
    2,
    "0"
  );
  const diffMin = (Math.floor((diff / (1000 * 60)) % 60) + "").padStart(2, "0");
  const diffSec = (Math.floor((diff / 1000) % 60) + "").padStart(2, "0");

  clockTitle.innerText = `${diffDay}Day ${diffHour}H ${diffMin}Min ${diffSec}Sec`;
}

countClock();
setInterval(countClock, 1000);
