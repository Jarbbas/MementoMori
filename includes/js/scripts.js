function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const month = Math.floor(total / (1000 * 60 * 60 * 24 * 7 * 4));
    const year = Math.floor(total / (1000 * 60 * 60 * 24 * 365));
    
    return {
      total,
      year,
      month,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const yearSpan = clock.querySelector('.years');
    const monthSpan = clock.querySelector('.months');
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
      
      yearSpan.innerHTML = t.year;
      monthSpan.innerHTML = t.month;
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  const deadline = '2079-07-21';
  initializeClock('clockdiv', deadline);


  const myBirth = new Date("07/22/1988");
  //calculate month difference from current date in time
  const month_diff = Date.now() - myBirth.getTime();
  
  //convert the calculated difference in date format
  const age_diference = new Date(month_diff); 
  
  //extract year from date    
  const year = age_diference.getUTCFullYear();
  
  //now calculate the age of the user
  const age = Math.abs(year - 1970);
  const timeleft = 90 - age;
  //display the calculated age
  document.getElementById("age").innerHTML = age;
  document.getElementById("timeleft").innerHTML = timeleft;