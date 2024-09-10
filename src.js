// In this exercise: 
// 1 is rock
// 2 is paper
// 3 is scissors
const universalDiv = document.createElement("div");
universalDiv.style.backgroundColor = "#faf4ed";
universalDiv.style.height = "100vh";
universalDiv.style.width = "100vw";
universalDiv.style.display = "flex";
universalDiv.style.flexDirection = "column";
universalDiv.style.justifyContent = "center";
universalDiv.style.alignItems = "center";
document.body.appendChild(universalDiv);

// Create two buttons
function rock() {
	function message() {
		let random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
		let result;
		switch (random) {
			case 1:
				result = document.createTextNode("You lost");
				universalDiv.appendChild(result);
				break;
			case 2:
				result = document.createTextNode("You lost");
				universalDiv.appendChild(result);
				break;
			case 3:
				result = document.createTextNode("You won");
				universalDiv.appendChild(result);
				break;
		}
	}
	const button = document.createElement("button");
	button.type = "button";
	button.style.margin = "2vw";
	button.innerHTML += "Rock";
	button.addEventListener("click", message);
	universalDiv.appendChild(button);
}

function paper() {
	function message() {
		let random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
		switch (random) {
			case 1:
				alert("You won");
				break;
			case 2:
				alert("It's a tie");
				break;
			case 3:
				alert("You lost");
				break;
		}
	}
	const button = document.createElement("button");
	button.type = "button";
	button.style.margin = "2vw";
	button.innerHTML += "Paper";
	button.addEventListener("click", message);
	universalDiv.appendChild(button);
}


function scissors() {
	function message() {
		let random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
		switch (random) {
			case 1:
				alert("You lost");
				break;
			case 2:
				alert("You won");
				break;
			case 3:
				alert("It's a tie");
				break;
		}
	}
	const button = document.createElement("button");
	button.type = "button";
	button.style.margin = "2vw";
	button.innerHTML += "Scissors";
	button.addEventListener("click", message);
	universalDiv.appendChild(button);
}

rock();
paper();
scissors();

