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
function button(text) {

	function hello() {
		alert("Hello World");
	}

	const button = document.createElement("button");
	button.type = "button";
	button.style.margin = "2vw";
	button.innerHTML += text;
	button.addEventListener("click", hello);
	universalDiv.appendChild(button);
}

let rockButton = button("Rock");
let paperButton = button("Paper");
let scissorsButton = button("Scissors");

// Click one button and append a message below

