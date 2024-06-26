  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.minute-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    const audio = document.getElementById("tiktok");
    if(audio){console.log("audio found");}
    if(!audio){console.log("audio not found");}
    // audio.currentTime = 0;
    audio.play();
  }

  setInterval(setDate, 1000);
  setDate();

