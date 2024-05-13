(function(){
"use strict";

var convertType = "miles";
		var heading = document.querySelector('h1');
		var intro = document.querySelector('p');
		var answerDiv = document.getElementById('answer');
		var from = document.getElementById('convert');

		document.addEventListener('keydown',function(event){
			var key = event.code;
			//alert(key);
			if(key==='KeyK')
			{
				convertType = "kilometers";
				heading.innerHTML = 'Miles to Kilometers Converter';
				intro.innerHTML = "Type in a number of Kilometers and click the button to convert the distance to miles."

			}
			else if(key==='KeyM')
			{
				convertType = "miles";
				heading.innerHTML = 'Kilometers to Miles  Converter';
				intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilmeters."
			}
			

		});

		from.addEventListener('submit',function(event){

			event.preventDefault();
			
			var distance = parseFloat(document.getElementById('distance').value);

			if(distance)
			{
				if(convertType=='miles')
				{
					var converted = (distance*1.609344).toFixed(3);
					answerDiv.innerHTML = `${distance} miles converts to ${converted} kilometers`;
				}
				else
				{
					var converted = (distance*0.621371192).toFixed(3);
					answer.innerHTML = `${distance} kilometers converts to ${converted} miles`;
				}
			}
			else
			{
				answerDiv.innerHTML = "<h2>Please Provide a Number!</h2>";
			}
		});

})();