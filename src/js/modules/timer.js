export const timer = () => {
  const timers = document.querySelectorAll("[data-timer]");
  const timerCountdown = document.querySelectorAll("[data-countDown]");

  function timerDeadline(deadline, timer, settings = null) {
    let deadlineTimer = deadline;

    if (settings !== null) {
      if (typeof window.timerSettings === "undefined") {
        alert(
          "Не существует объекта timerSettings, напишит window.timerSettings"
        );
        return false;
      } else if (typeof window.timerSettings[settings] === "undefined") {
        alert(
          `Не существует функции ${settings}, чтобы её создать нужно в объкте timerSettings написать метод`
        );
        return false;
      }
    }

    function countdownTimer() {
      let second = Math.floor(deadlineTimer % 60);
      let minute = Math.floor(deadlineTimer / 60);

      if (
        timer.querySelector("[data-minute]") &&
        timer.querySelector("[data-second]")
      ) {
        timer.querySelector("[data-minute]").textContent = `${
          minute < 10 ? `0${minute}` : minute
        }`;
        timer.querySelector("[data-second]").textContent = `${
          second < 10 ? `0${second}` : second
        }`;
      } else {
        timer.textContent = `${minute} ${second}`;
      }

      if (deadlineTimer === 0) {
        if (settings !== null) {
          timerSettings[settings]();
        }
        clearInterval(timerId);
      }
      deadlineTimer--;
    }

    countdownTimer();
    let timerId = setInterval(countdownTimer, 1000);
  }

  for (let idx = 0; idx < timers.length; idx++) {
    const timer = timers[idx];
    const time = timer.dataset.timer.split(",")[0].trim();
    const settingsName = timer.dataset.timer.split(",")[1]?.trim() || null;

    timerDeadline(time, timer, settingsName);
  }
  for (let idx = 0; idx < timerCountdown.length; idx++) {
    const timer = timerCountdown[idx];
    const date = timer.dataset.countdown.split(",")[0].trim();
    const settingsName = timer.dataset.countdown.split(",")[1]?.trim() || null;

    timerWait(date, timer, settingsName);
  }

  function timerWait(time, timer, settings) {
    if (settings !== null) {
      if (typeof window.timerSettings === "undefined") {
        alert(
          "Не существует объекта timerSettings, напишит window.timerSettings"
        );
        return false;
      } else if (typeof window.timerSettings[settings] === "undefined") {
        alert(
          `Не существует функции ${settings}, чтобы её создать нужно в объкте timerSettings написать метод`
        );
        return false;
      }
    }
    let countDownDate = new Date(time).getTime();
    let x = setInterval(calculateDate, 1000);

    function calculateDate() {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      if (distance < 0) {
        if (settings !== null) {
          timerSettings[settings]();
        }
        clearInterval(x);
        return;
      }

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (
        timer.querySelector("[data-day]") &&
        timer.querySelector("[data-hour]") &&
        timer.querySelector("[data-minute]") &&
        timer.querySelector("[data-second]")
      ) {
        timer.querySelector("[data-day]").textContent = `${
          days < 10 ? `0${days}` : days
        }`;
        timer.querySelector("[data-hour]").textContent = `${
          hours < 10 ? `0${hours}` : hours
        }`;
        timer.querySelector("[data-minute]").textContent = `${
          minutes < 10 ? `0${minutes}` : minutes
        }`;
        timer.querySelector("[data-second]").textContent = `${
          seconds < 10 ? `0${seconds}` : seconds
        }`;
      } else {
        timer.textContent = `${days < 10 ? `0${days}` : days} : ${
          hours < 10 ? `0${hours}` : hours
        } : ${minutes < 10 ? `0${minutes}` : minutes} : ${
          seconds < 10 ? `0${seconds}` : seconds
        }`;
      }
    }
    calculateDate();
  }
};
