// generating a random number from an array of [0-100]

var randomnum=Math.ceil(Math.random()*100);
var hotorcold= function(guess){

	// while (guess !== randomnum) {
		console.log('randomnum: ' + randomnum);
		
		if(isNaN(guess)){
			console.log("You have to input a number");
		}
		else if(guess===randomnum){
			console.log("You are right");
		}
		else if(guess>100){
			console.log("Your number is out of range")
		}
		else if(guess<randomnum){
			console.log("Your number is less");
		}
		else if(guess>randomnum){
			console.log("Your number is more-than");
		}
	// }
}


$('#submit').click(function(event) {
	event.preventDefault;
	var num = $('#enternumber').val();
	console.log('num: ' + num);
	hotorcold(num);
});