let timer = function () {
   const hours = document.getElementById('hours')
   const minutes = document.getElementById('minutes')
   const second = document.getElementById('second')
   let hour = 11
   let minuts = 59
   let sec = 59
   function timeaut() {
      let tim = setTimeout(timeaut, 1000, --sec)
      second.innerHTML = sec
      if (sec < 1) {
         sec = 59
         --minuts
      }
      if (minuts < 1) {
         --hour
         minuts = 59
      }
      if (hour == 0) {
         clearTimeout(tim)
         minuts = 0
      }
      minutes.innerHTML = minuts + ' :'
      hours.innerHTML = hour + ' :'
      // tim()
   };
   setTimeout(timeaut, 1000, --sec)

};
timer()