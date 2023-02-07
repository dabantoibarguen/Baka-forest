//-----------------------------------------------------------------------BAKA FOREST----------------------------------------------------------------------------

var	i = 0 
var text = document.getElementById("inside")
var all = document.getElementById("cover")
var box = document.getElementById("storyBox")
var msg = document.getElementById("say")
var writeHere = document.getElementById("toWrite")

// -------------ITEMS------------

var bucket = document.getElementById("buck")
var dagger = document.getElementById("dag")
var buck = false
var watered = false
var object = ""
//-----------*sigh*---------Zebra----

var motherfuckingZebra =  document.getElementById("notAnItem")
var zebraName = ""

function alterZebra(state){
	if(state === "confuse"){
		motherfuckingZebra.src = "confused.jpg"
		motherfuckingZebra.style.animation = "floatText 1.3s infinite linear alternate"
	}
	if(state === "damage"){
		motherfuckingZebra.style.animation = "shaky 0.1s infinite linear alternate"
	}
	if(state === "respect"){
		motherfuckingZebra.style.transform = "rotate(315deg)"
		//animate
	}
	if(state === "fade"){
		if(i<100){
		motherfuckingZebra.style.opacity = 1 - i/100
		i = i+1
	}
	else{
		i = 0
		return;
	}
	setTimeout(function(){alterZebra("fade")}, 20)
	}
	if(state === "reset"){
		motherfuckingZebra.style.animation = "floatText 2s infinite linear alternate"
		motherfuckingZebra.src = "zebra.png"
		bucket.style.width = "125pt"
		bucket.style.height = "125pt"
		bucket.style.left = "0"	
		bucket.src = "bucket.png"
		buck = false
		i = 0
	}
}

//-------------DECISIONS------------

var lefty = document.getElementById("left")
var righty = document.getElementById("right")
var jessie = document.getElementById("yes")
var hoi = document.getElementById("no")
var snake = document.getElementById("snape")
var rope = document.getElementById("robe")

//--------CONTROLLERS---------
var controller = 0
var leftControl = 0
var rightControl = 0 
var yesControl = 0
var noControl = 0
var die = 69
//------------BUTTONS CLICKED-------------

lefty.onclick = function(){
	leftControl = leftControl + 1
	story()
}

righty.onclick = function(){
	rightControl = rightControl + 1
	story()
}

jessie.onclick = function(){
	yesControl = yesControl + 1
	story()
}

hoi.onclick = function(){
	noControl = noControl + 1
	story()
}

rope.onclick = function(){
	die = 1
	story()
}

snake.onclick = function(){
	die = 0
	story()
}

//-----------COOL AS FUCK FUNCTIONS--------------

function animateIt(item){
	if(i<42){
	object.style.left = i + "vw"
	object.style.width = 125 - i*1.7 + "pt"
	object.style.height = 125 - i*1.7 + "pt"
	i = i+1
}
else{
	return;
}
setTimeout(animateIt, 25)
}

function fuckUp(){
	controller = 0
	leftControl = 0
	rightControl = 0 
	yesControl = 0
	noControl = 0
	die = false
	jessie.style.display = "none"
	hoi.style.display = "none"
	lefty.style.display = "none"
	righty.style.display = "none"
	snake.style.display = "none"
	rope.style.display = "none"
	box.style.display = "none"
	dagger.style.display = "none"
	motherfuckingZebra.style.display = "none"
	bucket.style.display = "none"
	all.style.display = "none"
	zebraName = ""
	writeHere.style.display = "none"
	alterZebra("reset")
	msg.style.display = "none"
}

function press(event){
	if(event.keyCode === 27){
	//var conf = confirm("You sure? This will reset your progress")
	//if(conf===true){
	controller = 0
	leftControl = 0
	rightControl = 0 
	yesControl = 0
	noControl = 0
	die = false
	jessie.style.display = "none"
	hoi.style.display = "none"
	lefty.style.display = "none"
	righty.style.display = "none"
	snake.style.display = "none"
	rope.style.display = "none"
	box.style.display = "none"
	dagger.style.display = "none"
	motherfuckingZebra.style.display = "none"
	bucket.style.display = "none"
	all.style.display = "none"
	zebraName = ""
	writeHere.style.display = "none"
	alterZebra("reset")
	msg.style.display = "none"
//}
//	if(conf===false){
//	return
//}
}
if(event.keyCode === 32 || event.keyCode === 13){
	story()
}
if(event.keyCode === 37 && lefty.style.display === "block"){
	leftControl = leftControl + 1
	story()	
}
if(event.keyCode === 37 && jessie.style.display === "block" || event.keyCode === 89 && jessie.style.display === "block"){
	yesControl = yesControl + 1
	story()	
}
if(event.keyCode === 37 && rope.style.display === "block" || event.keyCode === 83 && rope.style.display === "block"){
	die = 0
	story()	
}


if(event.keyCode === 39  && hoi.style.display === "block"  || event.keyCode === 78 && hoi.style.display === "block"){
	noControl = noControl + 1
	story()	
}
if(event.keyCode === 39 && righty.style.display === "block"){
	rightControl = rightControl + 1
	story()
}	
if(event.keyCode === 39 && rope.style.display === "block" || event.keyCode === 82 && rope.style.display === "block"){
	die = 1
	story()
}
}

//--------------THE STORY--------------------


/* THE TESTS
function story(){
var words = "You are in a forest."
if(i<words.length){
if(controller === 0){
box.style.display = "block"
all.style.display = "block"
text.innerHTML += words[i]
i = i+1
setTimeout(story,60)
}

if(words.length === i){
setTimeout(function(){
controller = controller + 1
i =i = 0
return;}, 60)
}}
*/

function story(){
if(controller === 0){
box.style.display = "block"
all.style.display = "block"
text.innerHTML = "You are in a forest."
msg.style.display = "block"
controller = controller + 1
return;
}

if(controller === 10416){
	fuckUp()
}

if(controller === 1){
	text.innerHTML = "Where do you want to go?"
	lefty.style.display = "block"
	righty.style.display = "block"
	msg.style.display = "none"
	controller = controller + 1
	return;
}

//----------LEFT-----------

	if(controller === 2 && leftControl === 1){
		text.innerHTML = "You find a bucket on the floor."
		bucket.style.display = "block"
		lefty.style.display = "none"
		righty.style.display = "none"
		msg.style.display = "block"
		controller = controller + 1
		return;
	}

	if(controller === 3 && leftControl === 1){
		text.innerHTML = "Do you want to pick it up?" 
		jessie.style.display = "block"
		hoi.style.display = "block"
		msg.style.display = "none"
		controller = controller + 1
		return;
	}


			if(controller === 4 && yesControl === 1 && leftControl === 1){
			text.innerHTML = "You pick up the bucket. I don't know where you'll keep it, but okay, it's your choice"
			object = bucket
			animateIt()
			jessie.style.display = "none"
			hoi.style.display = "none"
			msg.style.display = "block"
			buck = true
			controller = controller + 1
			return;
		}


			if(controller === 4 && noControl === 1 && leftControl === 1){
			text.innerHTML = "You decide to leave the bucket alone."
			bucket.style.display = "none"
			jessie.style.display = "none"
			hoi.style.display = "none"
			msg.style.display = "block"
			controller = controller + 1
			return;
		}		

			if(controller === 5 && leftControl === 1){
			text.innerHTML = "You keep walking down the road."
			setTimeout(function(){i = 0}, 1000)
			controller = controller + 1
			return;
		}

			if(controller === 6 && leftControl === 1){
			text.innerHTML = "You find a river."
			controller = controller + 1
			return;
		}

			if(controller === 7 && leftControl ===1 && buck){
			text.innerHTML = "You want to fill the bucket with water?"
			jessie.style.display = "block"
			hoi.style.display = "block"
			msg.style.display = "none"
			controller = controller + 1
			return;
		}
			if(controller === 8 && leftControl ===1 && buck && yesControl === 2){
			text.innerHTML = "You fill your bucket with some fresh water (probably)."
			bucket.src = "bucketWater.png	"
			jessie.style.display = "none"
			hoi.style.display = "none"
			msg.style.display = "block"
			controller = controller + 1
			watered = true
			return;
		}
			//--------
			if(controller === 8 && leftControl ===1 && buck && yesControl === 1 && noControl === 1){
			text.innerHTML = "You decide not to fill your bucket, you hear a crow mocking you on the background."
			jessie.style.display = "none"
			hoi.style.display = "none"
			msg.style.display = "block"
			controller = controller + 1
			return;
		}



			if(controller === 9 && leftControl ===1 && buck){
			text.innerHTML = "You keep walking."
			controller = controller + 1
			return;
		}
			if(controller === 10 && leftControl ===1 && buck){
			text.innerHTML = "You find a dagger, you pick it up like any smart person would do."
			dagger.style.display = "block"
			controller = controller +1
			return;
		}

			//--------------NO BUCKET----------------

			if(controller === 7 && leftControl === 1 && buck === false){
			text.innerHTML = "You don't have a bucket."
			controller = controller + 1
			return;
		}
		
			if(controller === 8 && leftControl === 1 && buck === false){
			text.innerHTML = "You walk around the river and keep following the road."
			controller = controller + 1
			return;
		}		
			if(controller === 9 && leftControl === 1 && buck === false){
			text.innerHTML = "You fall in quicksand."
			controller = controller + 1
			return;
		}	

			if(controller === 10 && leftControl === 1 && buck === false){
			text.innerHTML = "You see a snake and a rope."
			controller = controller + 1
			return;
		}	
			if(controller === 11 && leftControl === 1 && buck === false){
			text.innerHTML = "Which one do you want to use?"
			rope.style.display = "block"
			msg.style.display = "none"
			snake.style.display = "block"
			controller = controller + 1
			return;
		}	
			if(controller === 12 && leftControl ===1 && buck === false && die === 0){
			text.innerHTML = "You grab the snake..."
			rope.style.display = "none"
			snake.style.display = "none"
			msg.style.display = "block"
			controller = controller + 1
			return;
		}

			if(controller === 13 && leftControl ===1 && buck === false && die === 0){
			text.innerHTML = "It turned  out to be a thick rope."
			rope.style.display = "none"
			snake.style.display = "none"
			msg.style.display = "block"
			controller = controller + 1
			die = 69
			return;
		}

			//-----------------Heh---------------
			if(controller === 12 && leftControl ===1 && buck === false && die === 1){
			text.innerHTML = "You grab the rope..."
			rope.style.display = "none"
			snake.style.display = "none"
			msg.style.display = "block"
			controller = controller + 1
			return;
		}
			if(controller === 13 && leftControl ===1 && buck === false && die){
			text.innerHTML = "It broke, you drowned. (BAD END)"
			controller = 10416
			return;
		}

//---------------------------------------------------------------MAIN DIVISION----------------------------------------------------------------

/*
if(binChoice === "yes")
{

if(roadChoice==="left")
{
	confirm("You find a dagger, you pick it up");
	confirm("You begin to walk down the road");
	confirm("You fall in quicksand");
	confirm("You see a rope and a snake");
var surviveChoice = prompt("Which one do you want to use?").toLowerCase()
if(surviveChoice==="rope")
{
	confirm("You begin to pull the rope");
	confirm("It breaks...");
	confirm("You drowned (Bad End)");
	
}
if(surviveChoice==="snake")
	{
	confirm("You grab the snake...");
	confirm("It turned out to be a thick rope");
	confirm("You pull it and you get out of the sand");
	confirm("You get attacked by a dragon");
	confirm("You use your dagger to stab him");
	confirm("Your dagger gets stuck so you leave it there");
	confirm("You start to walk and you see a tall building");
	

	var buildingChoice = prompt("Do you want to enter the building").toLowerCase();

	if(buildingChoice ==="yes")
	{
	confirm("You push the wooden door and it opens");
	confirm("You fall over and see a flashlight");
	confirm("It doesn't have batteries so you put it in your pocket");
	confirm("You start to wander the building and you see some stairs");

	var stairChoice = prompt("Do you want to go up the stairs").toLowerCase();
		if(stairChoice==="yes")
	{
		confirm("You begin to go up and you see 3 doors");
		var doorChoice = prompt("Which door do you want to use").toLowerCase()
		if(doorChoice=== 1){
			confirm("The door is locked");
		}
		if(doorChoice=== 2){
			confirm("");
		}
	}

	}

	}

if(buildingChoice==="no")
	{
	confirm("You go around the hole and keep walking down the road");
	confirm("You start to feel cold");
	confirm("You see a small wooden shack");
	var shackChoice = prompt("Do you want to enter the shack?")
	if(shackChoice ==="yes")
	{
	confirm("You enter the shack and you see a cat");
	}
	}

}

	{
if(roadChoice==="right"){
		confirm("You see a big rock");
	var rockChoice = prompt("Do you want to pick it up?").toLowerCase()

	if(rockChoice==="yes")
	{
		confirm("I bet it's heavy");
		confirm("You begin to walk down the road");
		confirm("You fall in quicksand");
		confirm("You try to get out but the rock keeps dragging you down");
		confirm("You drowned (Bad End)");
		
	}

	if(rockChoice==="no"){
		confirm("Good choice");
		confirm("You don't need to pick up everything you find");
		confirm("You begin to walk down the road");
		confirm("You fall in quicksand");
		confirm("You see a rope and a snake");

	var surviveChoice = prompt("Which one do you want to use?").toLowerCase()
	if(surviveChoice==="rope")
	{
		confirm("You begin to pull the rope");
		confirm("It breaks...");
		confirm("You drowned (Bad End)");
		
	}
	if(surviveChoice==="snake"){
		confirm("You grab the snake...");
		confirm("It turned out to be a thick rope");
		confirm("You pull it and you get out of the sand");
		confirm("You get attacked by a dragon");
		confirm("You don't have any weapon so you decide to run");
		confirm("You fall in a hole");

	var holeChoice= prompt("You find 5 different cave holes in the hole, which one do you wnat? (please choose a number)")
	if(holeChoice === "1")
	{
		confirm("You begin to walk down the cave hole, you are scared");
		confirm("You get killed by a giant worm (Bad End)");
		
	}
	if(holeChoice === "2")
	{
		confirm("You start to shiver, the cave is cold");
		confirm("You hit a wall");
		confirm("There are two other roads inside the cave hole");
		var caveChoice = prompt("Which one do you want to take?left or right")
		if(caveChoice==="left")
		{
		confirm("You walk the dark road and trip over");
		confirm("You start to bleed out from your mouth and end up dying (Bad End)");
		
		}
	if(caveChoice==="right")
	{
		confirm("You begin to walk a barely iluminated path");
		confirm("You find a lever");

	var leverChoice = prompt("Do you want to pull it?")
	if(leverChoice==="yes")
	{
		confirm("You pull the lever and see a flash");
		confirm("You see an open hole in the cave");
		confirm("You get out of the cave");
	}
	if(leverChoice==="no")
	{
		confirm("You leave the lever and find a button");
		confirm("You press the button and the cave blows up (Bad End)");
		

	}
	}
	if(holeChoice === "3")
	{
		confirm("You find a dog inside");
			var dogName = prompt("How do you want to call it")
		    if(dogName.length>0)
			confirm("You find a way out and take "+ dogName+" with you");
				}
}

}

}

}

}

}

}


*/
//-----------RIGHT-------------

	if(controller === 2 && rightControl === 1){
		text.innerHTML = "You are attacked by a Zebra while going right."
		motherfuckingZebra.style.display = "block"
		motherfuckingZebra.style.display = "block"
		lefty.style.display = "none"
		righty.style.display = "none"
		msg.style.display = "block"
		controller = controller + 1
		return;
	}

		if(controller === 3 && rightControl === 1){
		text.innerHTML = "Are you going to attack?"
		jessie.style.display = "block"
		hoi.style.display = "block"
		msg.style.display = "none"
		controller = controller + 1
		return;
	}

			if(controller === 4 && yesControl === 1 && rightControl === 1){
			text.innerHTML = "You hit the zebra in the head!"
			alterZebra("confuse")
			jessie.style.display = "none"
			hoi.style.display = "none"
			msg.style.display = "block"
			controller = controller + 1
			return;
		}
				if(controller === 5 && yesControl === 1 && rightControl === 1){
				text.innerHTML = "The zebra is confused! WHO WOULD HIT A ZEBRA?!"
				controller = controller + 1
				return;
			}

				if(controller === 6 && yesControl === 1 && rightControl === 1){
				text.innerHTML = "It hurt itself in its confusion!"
				alterZebra("damage")
				controller = controller + 1
				return;
			}
				if(controller === 7 && yesControl === 1 && rightControl === 1){
				text.innerHTML = "You throw yourself at the zebra..."
				motherfuckingZebra.style.animation = "none"
				controller = controller + 1
				return;
			}
				if(controller === 8 && yesControl === 1 && rightControl === 1){
				text.innerHTML = "Zebra was caught."
				motherfuckingZebra.style.animation = "none"
				motherfuckingZebra.src = "zebra.jpg"
				controller = controller + 1
				return;
			}
				if(controller === 9 && yesControl === 1 && rightControl === 1){
				text.innerHTML = "How do you want to call it?"
				msg.innerHTML = "enter a name (no spaces) and click anywhere to continue"
				motherfuckingZebra.style.animation = "none"
				writeHere.style.display = "block"
				zebraName = writeHere.value
				if(zebraName.length > 0){
				controller = controller + 1
				msg.innerHTML = "click anywhere to continue"
			}
			}			
				if(controller === 10 && yesControl === 1 && rightControl === 1){
				text.innerHTML = "You captured " + zebraName + ". You lucky bastard."
				writeHere.style.display = "none"
				motherfuckingZebra.style.animation = "none"
				controller = controller + 1
				return;
			}


			//----------NOT ATTACKING-----------

			if(controller === 4 && noControl === 1 && rightControl === 1){
			text.innerHTML = "You only defend yourself."
			motherfuckingZebra.style.animation = "none"
			jessie.style.display = "none"
			hoi.style.display = "none"
			msg.style.display = "block"
			controller = controller + 1
			return;
		}

			if(controller === 5 && noControl === 1 && rightControl === 1){
			text.innerHTML = "The zebra acknowledges your strength."
			alterZebra("respect")
			controller = controller + 1
			return;
		}

			if(controller === 6 && noControl === 1 && rightControl === 1){
			text.innerHTML = "You become rivals with the zebra."
			controller = controller + 1
			motherfuckingZebra.style.transform = "rotate(0deg)"
			return;
		}
			if(controller === 7 && noControl === 1 && rightControl === 1){
			text.innerHTML = "How do you want to call it?"
			msg.innerHTML = "enter a name (no spaces) and click anywhere to continue"
			motherfuckingZebra.style.animation = "none"
			writeHere.style.display = "block"
			zebraName = writeHere.value
			if(zebraName.length > 0){
			controller = controller + 1
		}	
			msg.innerHTML = "click anywhere to continue"
		}
			if(controller === 8 && noControl === 1 && rightControl === 1){
			text.innerHTML = "You bid farewell to " + zebraName + " until you meet again"
			alterZebra("fade")
			writeHere.style.display = "none"
			controller = controller + 1
			return;
		}
			if(controller === 9 && noControl === 1 && rightControl === 1){
			text.innerHTML = "You walk in the opposite direction from " + zebraName + "."
			controller = controller + 1
			return;
		}
			if(controller === 10 && noControl === 1 && rightControl === 1){
			text.innerHTML = "You find a dead pidgeon on the floor."
			controller = controller + 1
			return;
		}
			if(controller === 11 && noControl === 1 && rightControl){
			text.innerHTML = "Do you want to pick it up?" 
			jessie.style.display = "block"
			hoi.style.display = "block"
			msg.style.display = "none"
			controller = controller + 1
			return;
		}


}

/*
-------------------------------------------------------------------------------------------





		if(zName.length > 0){
			confirm("You captured "+zName+", you lucky bastard!");
		}
		confirm("You begin to ride "+zName);
		confirm("You get hungry");
		var eatZebra = prompt("Do you want to eat "+zName)
		if(eatZebra==="yes"){
		confirm("You eat "+zName);
		confirm("You died from apathy and indigestion(Bad End)");
		
		}
		if(eatZebra==="no")
		{
			confirm("You resist the hunger and control yourself")
		}
	}



	if(zebraChoice ==="no")
	{
			if(pidgeon === "yes"){
				confirm("You picked up the pidgeon")
				confirm("You begin to walk");
				confirm("You see a unicorn");
				confirm("The unicorn tries to attack you");
				confirm("You throw the pidgeon at it");
				confirm("You fed the unicorn");
				confirm("The unicorn is happy");
				confirm("You befriended the unicorn")
				var unicorn = prompt("How do you want to call it?")
				if(unicorn.length>0){
					confirm("You begin to ride "+unicorn)
					confirm
				}
			}
			if(pidgeon=== "no"){
				confirm("You didn't pick up the pidgeon");
				confirm("You begin to walk");
				confirm("You see a unicorn");
				confirm("The unicorn attacks you");
				confirm("You try to defend yourself but the unicorn is too strong");
				confirm("The unicorn broke your leg and ate it, then it left");
				confirm("You see a silhouette, it seems familiar");
				confirm("The silhouette throws a stick to you");
				confirm("You watch closely and recognize the silhouette");
				confirm("it's "+zebraName);
				var trust = prompt("Do you want to trust "+zebraName+"?")
				if(trust==="yes"){
					confirm("You pick up the stick and begin to walk")
				}
				if(trust==="no"){
					confirm("You throw the stick back at "+zebraName)
					confirm(zebraName+ " falls over you")
					confirm("You begin to bleed out")
					confirm("You died together with "+zebraName+ " (Bad End)")
					
				}
			}
	}
}
document.getElementById("inventory").style.display = "none"
*/



//ONCE FINISHED, ERASE COMMENTS TO SAVE THIS VERSION FOR MYSELF
//P3DRU4N0 as a shitty boss