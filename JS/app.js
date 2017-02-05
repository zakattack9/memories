var cardCounter = document.querySelectorAll("#wrapper .card").length;

var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var seven = document.getElementById("seven")
var eight = document.getElementById("eight")
var nine = document.getElementById("nine")
var ten = document.getElementById("ten")
var eleven = document.getElementById("eleven")
var twelve = document.getElementById("twelve")
var thirteen = document.getElementById("thirteen")
var fourteen = document.getElementById("fourteen")
var fifteen = document.getElementById("fifteen")
var sixteen = document.getElementById("sixteen")

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
  nine.style.order = newArray[8];
  ten.style.order = newArray[9];
  eleven.style.order = newArray[10];
  twelve.style.order = newArray[11];
  thirteen.style.order = newArray[4];
  fourteen.style.order = newArray[5];
  fifteen.style.order = newArray[6];
  sixteen.style.order = newArray[7];
}

var time = 30;
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
  //delayed due to animations
  setTimeout(function(){
    function seconds(){
      time--;
      document.getElementById("countdown").innerText = "Time Left: " + time;
      if(time == 0){
        clearInterval(stop);
      }
    }
    //stops timer at 0;
    var stop = setInterval(function(){ seconds(); }, 1000);
  }, 3000);
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

  if(x == 9){
    firstFlip = 5;
    flipCounter++;
    document.getElementById("q").style.transform = "rotateY(0deg)";
    document.getElementById("r").style.transform = "rotateY(-180deg)"; 
  }

  if(x == 10){
    secondFlip = 5;
    flipCounter++;
    document.getElementById("s").style.transform = "rotateY(0deg)";
    document.getElementById("t").style.transform = "rotateY(-180deg)";
  }

  if(x == 11){
    firstFlip = 6;
    flipCounter++;
    document.getElementById("u").style.transform = "rotateY(0deg)";
    document.getElementById("v").style.transform = "rotateY(-180deg)";
  }

  if(x == 12){
    secondFlip = 6;
    flipCounter++;
    document.getElementById("w").style.transform = "rotateY(0deg)";
    document.getElementById("x").style.transform = "rotateY(-180deg)";
  }

  if(x == 13){
    firstFlip = 7;
    flipCounter++;
    document.getElementById("y").style.transform = "rotateY(0deg)";
    document.getElementById("z").style.transform = "rotateY(-180deg)";
  }
  
  if(x == 14){
    secondFlip = 7;
    flipCounter++;
    document.getElementById("aa").style.transform = "rotateY(0deg)";
    document.getElementById("bb").style.transform = "rotateY(-180deg)";
  }
  
  if(x == 15){
    firstFlip = 8;
    flipCounter++;
    document.getElementById("cc").style.transform = "rotateY(0deg)";
    document.getElementById("dd").style.transform = "rotateY(-180deg)";
  }
  
  if(x == 16){
    secondFlip = 8;
    flipCounter++;
    document.getElementById("ee").style.transform = "rotateY(0deg)";
    document.getElementById("ff").style.transform = "rotateY(-180deg)";
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
    }
    if(firstFlip == 2){
    	totalPoints++
    	var ef = document.getElementById("three");
      ef.style.animationPlayState = "running";
      var gh = document.getElementById("four");
      gh.style.animationPlayState = "running";
      points.innerText = "Points: " + totalPoints;
    }
    if(firstFlip == 3){
    	totalPoints++
    	var ij = document.getElementById("five");
      ij.style.animationPlayState = "running";
      var kl = document.getElementById("six");
      kl.style.animationPlayState = "running";
      points.innerText = "Points: " + totalPoints;
    }
    if(firstFlip == 4){
    	totalPoints++
    	var mn = document.getElementById("seven");
      mn.style.animationPlayState = "running";
      var op = document.getElementById("eight");
      op.style.animationPlayState = "running";
      points.innerText = "Points: " + totalPoints;
    }
    if(firstFlip == 5){
      totalPoints++
      var qr = document.getElementById("nine");
      qr.style.animationPlayState = "running";
      var st = document.getElementById("ten");
      st.style.animationPlayState = "running";
      points.innerText = "Points: " + totalPoints;
    }
    if(firstFlip == 6){
      totalPoints++
      var uv = document.getElementById("eleven");
      uv.style.animationPlayState = "running";
      var wx = document.getElementById("twelve");
      wx.style.animationPlayState = "running";
      points.innerText = "Points: " + totalPoints;
    }
    if(firstFlip == 7){
      totalPoints++
      var yz = document.getElementById("thirteen");
      yz.style.animationPlayState = "running";
      var aabb = document.getElementById("fourteen");
      aabb.style.animationPlayState = "running";
      points.innerText = "Points: " + totalPoints;
    }
    if(firstFlip == 8){
      totalPoints++
      var ccdd = document.getElementById("fifteen");
      ccdd.style.animationPlayState = "running";
      var eeff = document.getElementById("sixteen");
      eeff.style.animationPlayState = "running";
      points.innerText = "Points: " + totalPoints;
    }

  	flipCounter = 0;
  	firstFlip = 0;
  	secondFlip = 0; 	
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
        
		  	var idFrontNames = ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y", "aa", "cc", "ee"];
  			var idBackNames = ["b", "d", "f", "h", "j", "l", "n", "p", "r", "t", "v", "x", "z", "bb", "dd", "ff"];
				for(var z = idFrontNames.length; z > 0; z--){
					frontId = idFrontNames.splice(0, 1)[0];
					backId = idBackNames.splice(0, 1)[0];
          
					document.getElementById(frontId).style.transform = "rotateY(-180deg)";
		  	  document.getElementById(backId).style.transform = "rotateY(0deg)";		
				}
	    }
    }, 1400);

  //winner ending animation
  if(totalPoints == 8){
    var winner = document.getElementById("winner");
    setTimeout(function(){
    winner.style.display = "block";
    winner.style.animationPlayState = "running";
    }, 2500);

    var winnerMessage = document.getElementById("winnerMessage");
    winnerMessage.style.animationPlayState = "running";

    var fin = document.getElementById("fin");
    fin.style.animationPlayState = "running";

    setTimeout(function(){
    document.getElementById("bye").innerText = "ByE bYe ;)"
    }, 9000);

    var grow = document.getElementById("grow");
    grow.style.animationPlayState = "running";

    setTimeout(function(){
    //reloads page
    location.reload();
    }, 13000);
  }
}

//checks amount of points at 0 seconds left
setInterval(function(){
    //loser animation
    //make sure to change totalPoints < ? , the ? should be set to the mac points
    if(totalPoints < 8 && time == 0){
      var loser = document.getElementById("loser");
      setTimeout(function(){
      loser.style.display = "block";
      loser.style.animationPlayState = "running";

      document.getElementById("wrapper").style.display = "none"; 
      }, 1000);
    }
}, 1000);

function gameOver(){
  var hinge = document.getElementById("hinge");
  hinge.style.animationPlayState = "running";

  setTimeout(function(){
  //reloads page
  location.reload();
  }, 2500);  
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