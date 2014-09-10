// generating a random number from an array of [0-100]
var playGame= {

	randomNum:0,
	initNum:0,
	enternumber:null,

	initialize: function(){
		playGame.randomNum = Math.ceil(Math.random()*100);
		playGame.enternumber = $("#enternumber");
		$('#submit').click(playGame.startGame); 
		$('#restart').click(playGame.restartGame);
	},

	restartGame: function(){
		location.reload();
	},


	
// checking for the validity of the input


	numValidity: function(enternumber){

		if((isNaN(enternumber)) || (enternumber === "")){
			$("#statement p").html("Your have to input a number to play");
		}
		else if(0>enternumber){
			$("#statement p").html("You have to input a positive number");
		}
		else if(enternumber>100){
			$("#statement p").html("Your input is out of range, Please input any digit from 0-100. :)");
		}
		else{
			return true;
		}
		return false;
	},

// the main operation

	startGame: function(){

		var enternumber = parseInt(playGame.enternumber.val(),10);
		if(!playGame.numValidity(enternumber))
		{
			return;
		}
		if(enternumber == playGame.randomNum){
			$("#statement p").html("Awesome...that was cool!");
			$("label").text('Press "New Game" to Play Again.');
			$("#enternumber").val("");
		}
		else if(Math.abs(playGame.randomNum - enternumber) > Math.abs(playGame.randomNum - playGame.initNum)){
			$("#statement p").html("Your number is cold");
			$("label").text('You\'re taking your eyes off the Ball!');
			$("#enternumber").val("");
		}
		else if(Math.abs(playGame.randomNum - enternumber) < Math.abs(playGame.randomNum - playGame.initNum)){
			$("#statement p").html("Your number is hot");
			$("label").text('Almost there!');
			$("#enternumber").val("");
		}

		playGame.initNum = enternumber;
		playGame.progressBar();
	},
	
	progressBar: function() {

		if (playGame.randomNum>50) {
				bar= parseInt(100-((Math.abs(playGame.randomNum - playGame.initNum)/Math.abs(playGame.randomNum-0)) * 100));
			}
				else if (playGame.randomNum<50)  {
					bar= parseInt(100-((Math.abs(playGame.randomNum - playGame.initNum)/Math.abs(playGame.randomNum-100)) * 100));
				}

			var barWidth = bar*$("#container").width()/ 100;  
		    $("#progressBar").animate({width:barWidth},700).html(bar + "%");
	},

};

$(document).ready(playGame.initialize);