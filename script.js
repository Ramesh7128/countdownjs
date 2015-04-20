var heading = ["Eat","Sleep", "Rave", "Repeat"];
var images = ["sims.gif","test.gif","test1.gif","test3.gif"];
var color = ["red", "green", "yellow", "blue"];
var size = 0
var i = 0;
var secondsRemaining;
var check;
var intervalHandle;

function changeMess() {
	var head = document.getElementById("test");
	var body = document.getElementById('body');
	if (i==4) {
		i = 0;
	}
	size = (50*i)+90;	
	body.setAttribute("style","background-image: url("+ images[i] +"); background-size: 100%; background-repeat: no-repeat;");
	console.log(i);
	console.log(heading[i]);      
	head.innerHTML = heading[i];
	head.setAttribute("style", "font-size: "+size+"px;color: "+color[i]+";text-align: center;");
	i++;
}

function tick() {

	var timeDisplay = document.getElementById("timer");
	//console.log(secondsRemaining);
	var mins = Math.floor(secondsRemaining/60);
	var secs = secondsRemaining - (mins*60);
	//alert("mins:"+mins);	
	//alert("secs:"+secs);
	//console.log(mins);
	//console.log(secs);
	var message = mins.toString() + ":" + secs.toString();
	timeDisplay.innerHTML = message;

	if (secondsRemaining === 0) {
		alert("Done!!");
		clearInterval(intervalHandle);
		document.getElementById("timer").style.display = "none";
		document.getElementById("inst").style.display = "block";
 	}
	secondsRemaining--;

}

function startCountDown() {
	var minutes = document.getElementById("minutes").value;
	console.log(minutes);
	if (isNaN(minutes)) {
		alert("please enter a number");
		return;
	}
	secondsRemaining = minutes * 60;
	intervalHandle = setInterval(tick, 1000);
	document.getElementById("inst").style.display = "none";

}



window.onload = function() {
		
	setInterval(changeMess,500);
	check = document.createElement("input");
	check.setAttribute("type", "text");
	check.setAttribute("id", "minutes");
	check.style.textAlign = "center";
	check.setAttribute("value", "enter a no");
	var butt = document.createElement("input");
	butt.setAttribute("id", "butt");
	butt.setAttribute("type", "button");	
	butt.setAttribute("value", "countdown");
	butt.onclick = function() {
		startCountDown();
	};	
	document.getElementById("inst").appendChild(check);	
	document.getElementById("inst").appendChild(butt);
	
};

