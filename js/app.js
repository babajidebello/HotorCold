// generating a random number from an array of [0-100]
var enternumber;
var initNum=0;

$('#restart').click(function(event){
	location.reload();
});	


var randomNum=Math.ceil(Math.random()*100);

// checking for the validity of the number inputed


var numValidity= function(){

		enternumber = $("#enternumber").val();
		
		if((isNaN(enternumber)) || (enternumber === "")){
			$("#statement p").html("Your have to input a number to play");
		}
		else if(enternumber===null){
			$("#statement p").html("You have to input a number");
		}
		else if(0>enternumber){
			$("#statement p").html("You have to input a positive number");
		}
		else if(enternumber>100){
			$("#statement p").html("Your input is out of range");
		}
		else{
			hotorcold();
		}
}



// the main operation

var hotorcold= function(){

		enternumber = parseInt(enternumber)

		if(enternumber == randomNum){
			$("#statement p").html("You are Correct");
		}
		else if(Math.abs(randomNum - enternumber) > Math.abs(randomNum - initNum)){
			$("#statement p").html("Your number is colder");
		}
		else if(Math.abs(randomNum - enternumber) < Math.abs(randomNum - initNum)){
			$("#statement p").html("Your number is hotter");
		}

		initNum = enternumber
}
console.log('randomNum: ' + randomNum);

$('#submit').click(function(event) {
	event.preventDefault;
	numValidity();
});
