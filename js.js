var image = document.getElementById("add-image");
var checkHidden = document.getElementById("form-input");

function bagClick(){
	image.style.display = "none";
	checkHidden.style.display = "block";
}

function getVal(){
	if(document.getElementById("input-question").value == ""){
		document.getElementById("input-question").style.border = "1px solid red";
	}

	else{
		var newItem = document.createElement("LI");
		var newButton = document.createElement("BUTTON");
		var newQuestion = null;
		if(document.getElementById("input-author").value == ""){
			newQuestion = document.createTextNode("Anonymous: " + document.getElementById("input-question").value);
		}
		else{
			newQuestion = document.createTextNode(document.getElementById("input-author").value + ": " + document.getElementById("input-question").value);
		}

		newItem.appendChild(newQuestion);

		var listQuestion = document.getElementById("list-question");
		listQuestion.insertBefore(newItem, listQuestion.childNodes[0]);
		document.getElementById("form-input").style.display = "none";
		document.getElementById("add-image").style.display = "block";
	}
	document.getElementById("input-question").value = "";
	document.getElementById("input-author").value = "";

}

function cancelAddQuestion(){
	document.getElementById("input-question").value = "";
	document.getElementById("input-author").value = "";
	document.getElementById("input-question").style.border = "2px solid #aaa";
	checkHidden.style.display = "none";
	image.style.display = "block";
}