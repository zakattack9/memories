var cardCounter = document.querySelectorAll("#wrapper .card").length;

var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var seven = document.getElementById("seven")
var eight = document.getElementById("eight")

var count = 0
function cardShuffle(){
  var dynamicArray = []

  for (var i = cardCounter; i > 0; i--) {
    count++
    dynamicArray.push(count); 
  }

  //loop below must be run after to prevent issues with pulling ungenerated numbers
  var newArray = []
  for (var i = cardCounter; i > 0; i--){
    reOrder = dynamicArray.splice(Math.floor(Math.random() * i), 1)[0];
    newArray.push(reOrder);
  }
  
  //add more depending on the amount of cards
  one.style.order = newArray[0];
  two.style.order = newArray[1];
  three.style.order = newArray[2];
  four.style.order = newArray[3];
  five.style.order = newArray[4];
  six.style.order = newArray[5];
  seven.style.order = newArray[6];
  eight.style.order = newArray[7];
}

function gameStart(){

  var startScreen = document.getElementById("startScreen");
  startScreen.style.animationPlayState = "running";

  var wrapperUnBlur = document.getElementById("wrapper");
  wrapperUnBlur.style.animationPlayState = "running";

  var headerAnimation = document.getElementById("header");
  headerAnimation.style.animationPlayState = "running";
  
  setTimeout(
  function delayFade(){
  startScreen.style.display = "none";
  }, 2000);

  //timer
	var time = 33;
  setInterval(
  function seconds(){
    time--;
    document.getElementById("countdown").innerText = "Time Left: " + time;
  }, 1000)
}

var firstFlip = 0;
var secondFlip = 0;
var flipCounter = 0;
var totalPoints = 0;

function cardCheck(x){
  if(x == 1){
  	firstFlip = 1;
  	flipCounter++;
  	document.getElementById("a").style.transform = "rotateY(0deg)";
  	document.getElementById("b").style.transform = "rotateY(-180deg)"; 
  }

  if(x == 2){
  	secondFlip = 1;
  	flipCounter++;
  	document.getElementById("c").style.transform = "rotateY(0deg)";
  	document.getElementById("d").style.transform = "rotateY(-180deg)";
  }

  if(x == 3){
  	firstFlip = 2;
  	flipCounter++;
  	document.getElementById("e").style.transform = "rotateY(0deg)";
  	document.getElementById("f").style.transform = "rotateY(-180deg)";
  }

  if(x == 4){
  	secondFlip = 2;
  	flipCounter++;
  	document.getElementById("g").style.transform = "rotateY(0deg)";
  	document.getElementById("h").style.transform = "rotateY(-180deg)";
  }

  if(x == 5){
  	firstFlip = 3;
  	flipCounter++;
  	document.getElementById("i").style.transform = "rotateY(0deg)";
  	document.getElementById("j").style.transform = "rotateY(-180deg)";
  }
  
  if(x == 6){
  	secondFlip = 3;
  	flipCounter++;
  	document.getElementById("k").style.transform = "rotateY(0deg)";
  	document.getElementById("l").style.transform = "rotateY(-180deg)";
  }
  
  if(x == 7){
  	firstFlip = 4;
  	flipCounter++;
  	document.getElementById("m").style.transform = "rotateY(0deg)";
  	document.getElementById("n").style.transform = "rotateY(-180deg)";
  }
  
  if(x == 8){
  	secondFlip = 4;
  	flipCounter++;
  	document.getElementById("o").style.transform = "rotateY(0deg)";
  	document.getElementById("p").style.transform = "rotateY(-180deg)";
  }
  
  if(firstFlip == secondFlip){
  	var points = document.getElementById("points");
  	console.log("match");
    if(firstFlip == 1){
    	totalPoints++
    	var ab = document.getElementById("one");
      ab.style.animationPlayState = "running";
      var cd = document.getElementById("two");
      cd.style.animationPlayState = "running";
      points.innerText = "Points: " + totalPoints;
      /*setTimeout(
  			function noneOne(){
  				ab.style.display = "none"
  				cd.style.display = "none"
        }, 1500)*/
    }
    if(firstFlip == 2){
    	totalPoints++
    	var ef = document.getElementById("three");
      ef.style.animationPlayState = "running";
      var gh = document.getElementById("four");
      gh.style.animationPlayState = "running";
      points.innerText = "Points: " + totalPoints;
      /*setTimeout(
  			function noneTwo(){
  				ef.style.display = "none"
  				gh.style.display = "none"
        }, 1500)*/
    }
    if(firstFlip == 3){
    	totalPoints++
    	var ij = document.getElementById("five");
      ij.style.animationPlayState = "running";
      var kl = document.getElementById("six");
      kl.style.animationPlayState = "running";
      points.innerText = "Points: " + totalPoints;
      /*setTimeout(
  			function noneThree(){
  				ij.style.display = "none"
  				kl.style.display = "none"
        }, 1500)*/
    }
    if(firstFlip == 4){
    	totalPoints++
    	var mn = document.getElementById("seven");
      mn.style.animationPlayState = "running";
      var op = document.getElementById("eight");
      op.style.animationPlayState = "running";
      points.innerText = "Points: " + totalPoints;
      /*setTimeout(
  			function noneFour(){
  				mn.style.display = "none"
  				op.style.display = "none"
        }, 1500)*/
    }
  	flipCounter = 0;
  	firstFlip = 0;
  	secondFlip = 0; 	
  }

  if(totalPoints == 4){
  //game winner message or picture config here
  }

  console.log(firstFlip);
  console.log(secondFlip);
  
  //delay timing of card flipping back over
  setTimeout(
  	function delay(){
	  	if(flipCounter == 2 && firstFlip != secondFlip){
		    console.log("no match");
		    flipCounter = 0;
		    firstFlip = 0;
		  	secondFlip = 0;
        
		  	var idFrontNames = ["a", "c", "e", "g", "i", "k", "m", "o"];
  			var idBackNames = ["b", "d", "f", "h", "j", "l", "n", "p"];
				for(var z = idFrontNames.length; z > 0; z--){
					frontId = idFrontNames.splice(0, 1)[0];
					backId = idBackNames.splice(0, 1)[0];
          
					document.getElementById(frontId).style.transform = "rotateY(-180deg)";
		  	  document.getElementById(backId).style.transform = "rotateY(0deg)";		
				}
	    }
    }, 1500);
}

/*

SIDE NOTES

//The code below simplifies repeating document.betElementById...
//I MADE THIS CODE :D
var idFrontNames = ["a", "c", "e", "g", "i", "k", "m", "o"];
var idBackNames = ["b", "d", "f", "h", "j", "l", "n", "p"];
for(var z = idFrontNames.length; z > 0; z--){
	frontId = idFrontNames.splice(0, 1)[0];
	backId = idBackNames.splice(0, 1)[0];
  
	document.getElementById(frontId).style.transform = "rotateY(-180deg)";
  document.getElementById(backId).style.transform = "rotateY(0deg)";		
}

//Simplifies this code
document.getElementById("a").style.transform = "rotateY(-180deg)";
document.getElementById("b").style.transform = "rotateY(0deg)";

document.getElementById("c").style.transform = "rotateY(-180deg)";
document.getElementById("d").style.transform = "rotateY(0deg)";

document.getElementById("e").style.transform = "rotateY(-180deg)";
document.getElementById("f").style.transform = "rotateY(0deg)";

document.getElementById("g").style.transform = "rotateY(-180deg)";
document.getElementById("h").style.transform = "rotateY(0deg)";

document.getElementById("i").style.transform = "rotateY(-180deg)";
document.getElementById("j").style.transform = "rotateY(0deg)";

document.getElementById("k").style.transform = "rotateY(-180deg)";
document.getElementById("l").style.transform = "rotateY(0deg)";

document.getElementById("m").style.transform = "rotateY(-180deg)";
document.getElementById("n").style.transform = "rotateY(0deg)";

document.getElementById("o").style.transform = "rotateY(-180deg)";
document.getElementById("p").style.transform = "rotateY(0deg)";

*/