// Set the date we're counting down to
let countDownDate = new Date("april 28, 2023 09:30:00").getTime();


// Update the count down every 1 second
let x = setInterval(function() {

   
    let now = new Date().getTime();
  
   
    let distance = countDownDate - now;
  
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
     
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);