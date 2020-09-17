let qualities = ['Full-Stack Developer', 'M.B.A. and Finance Expert', 'Open to freelance software Development'];
let count=0;
let t = setInterval(function () {
    let ele = document.querySelector('#blink');
    
    ele.innerHTML = qualities[count++];
    
    if(count===qualities.length)
      count=0;
  
}, 1000);

// let skills = [" HTML " , " CSS " , " Bootstrap " , "JavaScript" , " Ruby " , " Ruby on Rails " , " React " , " git "]
// let counter = 0;

// const animate =() => {
//   const selmaSkills = document.querySelector('#skills')
//   selmaSkills.innerHTML = skills[counter++]

//   if (counter === skills.length) {
//     counter=0;
//   }

// }

// let animation = setInterval(animate, 1000)