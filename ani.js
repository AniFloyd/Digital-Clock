

setInterval(function(){

     let today = new Date()
let hr = today.getHours()
let min = today.getMinutes()
let sec = today.getSeconds()


     document.getElementById("hours").innerHTML = hr
     document.getElementById("minutes").innerHTML = min
     document.getElementById("seconds").innerHTML = sec

     if(hr < 10){
          hr = '0' +hr
     }

     if(min <10){
          min = '0' + min
     }
     if(sec < 10){
          sec = '0' + sec
     }
 


})