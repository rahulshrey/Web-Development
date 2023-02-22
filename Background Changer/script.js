//Choose Random Color
let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
// button
let button= document.getElementById('button'); 

button.addEventListener('click', function(){
  console.log('test');
  //randomizer
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
);

