const clockTitle = document.querySelector(".js-clock");

function dDayCount() {
  const date = new Date();
  const eveDay = new Date("2022-12-25");
  const gapDay = eveDay.getTime() - date.getTime(); //밀리초

  const day = Math.floor(gapDay / (1000*60*60*24));
  const hours = String(Math.floor(gapDay / (1000*60*60)) % 24).padStart(2, "0");
  const minutes = String(Math.floor(gapDay / (1000*60)) % 60).padStart(2, "0");
  const seconds = String(Math.floor(gapDay / 1000 % 60)).padStart(2, "0");
  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;

}

dDayCount();
setInterval(dDayCount, 1000);
