// Created by data_expunged - March 2023 - Present
// Variables

var muffins = 0;
var muffinsPerSecond = 0;
var muffinsPerClick = 1;


var betterClickerCost = 20;
var ovencost = 30;
var farmCost = 1001;
var factoryCost = 10000;

var betterOvens = 0;
var betterClickers = 0;

let clickerImage = document.getElementById("muffinclickerimg")

// ALERT!! YOUR PROGRESS IS NOT SAVED!!
// But it will be soon!

window.alert("This game is in early alpha. All content is subject to change, and you cannot save. It is also advised to check the guide. (howtoplay.html)");

function increment() {

	muffins += muffinsPerClick;
	
	document.getElementById("muffinCounter").innerText = muffins + " muffins";

}

function CheckForNegative() {
 
 if (muffins <= -1)
 {
 	muffins = 0;
 }
 
}

function buyOvenUpgrade() {

	if (muffins >= ovencost)
	{
		CheckForNegative();
	 	muffinsPerSecond += 1;
		muffins -= ovencost;
		
		ovencost += 10;
		
		document.getElementById("muffinPerSecond").innerText = muffinsPerSecond;
		

	}
	else
	{
		errorPlay();
	}

}

function buyFarmUpgrade() {

	if (muffins >= 1000)
	{
		muffins -= 1000;
	 	muffinsPerSecond += 20;
		farmCost += 120;
		
		document.getElementById("muffinPerSecond").innerText = muffinsPerSecond;
		
		CheckForNegative();
	}
	else
	{
		errorPlay();
	}

}

function buyFactoryUpgrade() {

	if (muffins >= factoryCost)
	{
		muffins -= 10000;
		muffinsPerSecond += 50;
		muffinsPerClick += 5;
		factoryCost += 1000;
		
		CheckForNegative();
	}
	else
	{
		errorPlay();
	}

}


function buyHandsUpgrade() {
 
 	if (muffins >= 20)
	{
		muffinsPerClick += 1;
		document.getElementById("muffinsPerClick").innerText = muffinsPerClick;
		muffins -= 20;
		betterClickerCost += 15
		
		betterHands++;
	}
	else
	{
		errorPlay();
	}
 
}

function errorPlay() {

	let audio = new Audio("chord.mp3");
	audio.play();
	window.alert("You cannot buy this item!")

}

function help() {

	console.log("Player requested in-game help.");
	window.alert("How to Play: Click the muffin, it's that easy! Buy upgrades to increase your muffin production, and eventually, you'll get the ending!");
	window.alert("Credits: buttons2676 - Lead Developer");
	window.alert("Credits: <namehiddenuntilnotice> - Lead Ideas");

}


setInterval(function() {

	muffins += muffinsPerSecond;
	document.getElementById("muffinCounter").innerText = muffins + " muffins";
	document.title = muffins + " muffins - Muffin Clicker";

}, 1000)

setInterval(function() {

	document.getElementById("muffinCounter").innerText = muffins + " muffins";

}, 100)

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 219) {
        muffins += 100000;
		  muffinsPerClick += 1000;
		  muffinsPerSecond += 1000;
		  document.getElementById("muffinsPerClick").innerText = muffinsPerClick;
    }
    else if(event.keyCode == 39) {
        alert('Right was pressed');
    }
});