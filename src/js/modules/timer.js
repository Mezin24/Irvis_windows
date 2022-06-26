const timer = (selector, deadline) => {
  const addZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const getTimeRemaining = (endTime) => {
    const timeRemaining = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    return {
      timeRemaining,
      seconds,
      minutes,
      hours,
      days,
    };
  };

  const renderTimer = (selector, endTime) => {
    const timer = document.querySelector(selector);
    const seconds = timer.querySelector('#seconds');
    const minutes = timer.querySelector('#minutes');
    const hours = timer.querySelector('#hours');
    const days = timer.querySelector('#days');
    const timerInterval = setInterval(setTime, 1000);

    setTime();

    function setTime() {
      const t = getTimeRemaining(endTime);
      seconds.textContent = addZero(t.seconds);
      minutes.textContent = addZero(t.minutes);
      hours.textContent = addZero(t.hours);
      days.textContent = addZero(t.days);

      if (t.timeRemaining <= 0) {
        clearInterval(timerInterval);
        seconds.textContent = '00';
        minutes.textContent = '00';
        hours.textContent = '00';
        days.textContent = '00';
      }
    }
  };

  renderTimer(selector, deadline);
};

export default timer;
