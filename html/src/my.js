let v = console;
let d = document;


let a = d.getElementsByClassName("trans")[0];
function makeCounter() {
  var currentCount = 0;

  return function() { // (**)
	a.style.transform = 'rotateZ(' + currentCount + 'deg)'
    v.log(currentCount++);
  };
}

var counter = makeCounter();

setInterval(function(){
	//counter()
},10 )












