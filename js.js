var image = document.getElementById("add-image");
var checkHidden = document.getElementById("form-input");

function bagClick(){
	image.style.display = "none";
	checkHidden.style.display = "block";
}
 
function getVal(){
	if(document.getElementById("input-question").value.trim() == ""){
		document.getElementById("input-question").style.border = "1px solid red";
	}

	else{
		var replyButton = document.createElement("input");
		replyButton.type = "button";
		replyButton.id = "reply-button";
		replyButton.value = "Reply";
		if(document.getElementById("input-author").value.trim() == ""){
			newQuestion = "Anonymous: " + document.getElementById("input-question").value;
		}
		else{
			newQuestion = document.getElementById("input-author").value + ": " + document.getElementById("input-question").value;
		}
		
		var table = document.getElementsByTagName('table')[0];

		var newRow = table.insertRow(0);

		var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);

        cel1.innerHTML = newQuestion;
        cel2.appendChild(replyButton)
		checkHidden.style.display = "none";
		image.style.display = "block";
		document.getElementById("input-question").style.border = "";
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