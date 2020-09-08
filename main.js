let qualities = ['Full-Stack Developer', 'M.B.A. and Finance Expert', 'Open to freelance software Development'];
let count=0;
let t = setInterval(function () {
    var ele = document.getElementById('blink');
    
    ele.innerHTML = qualities[count++];
    
    if(count===qualities.length)
      count=0;
  
}, 1000);