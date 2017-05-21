$(document).ready(function(){

	var userScore = 0;
	var wins = 0;
	var losses = 0;
	var randomNum = 0;

	function getRandomNum() {
		randomNum = parseInt(Math.floor((Math.random() * 102) + 19));
		console.log(randomNum);
		$("#random-num").text(randomNum);
	};

	function resetAll() {
		userScore = 0;
		$("#total-score").text(" ");
		getRandomNum();
		generateValues();
	};


	function generateValues() {
		var crystalValues = [];
		for (var i = 0; i < 4; i++) {
			var randomGemVal = Math.floor((Math.random() * 12) + 1);
			crystalValues.push(randomGemVal);
		};

		console.log(crystalValues);
		
		for (var i = 0; i < crystalValues.length; i++) {
			function assignValue() {
				//$(".image").attr("data-crystalVal", crystalValues[i]);
				$("#blue-gem").attr("data-crystalVal", crystalValues[0]);
				$("#green-gem").attr("data-crystalVal", crystalValues[1]);
				$("#red-gem").attr("data-crystalVal", crystalValues[2]);
				$("#yellow-gem").attr("data-crystalVal", crystalValues[3]);
			}
			assignValue();
		}
	};

	getRandomNum();
	generateValues();

	$(".image").on("click", function(){

		var crystalVal=($(this).attr("data-crystalVal"));
		crystalVal = parseInt(crystalVal);
		console.log(crystalVal)
		userScore += crystalVal; 
		console.log(userScore);
		$("#total-score").text(userScore);
	

		if (userScore === randomNum) {
			$("#end-display").css("background", 'url(assets/images/golden-background.jpg)').text("YOU WON!!").fadeIn('fast', function(){
               $('#end-display').delay(1500).fadeOut();
            });
			wins++;
			$("#wins").text("Wins: " + wins);
			resetAll();
		}
		else if (userScore >= randomNum){
			$("#end-display").css("background", 'url(assets/images/green_cup.png)').text("you lost").fadeIn('fast', function(){
               $('#end-display').delay(1500).fadeOut();
            });
			losses++;
			$("#losses").text("Losses: " + losses);
			resetAll();
		};
	});
}); 