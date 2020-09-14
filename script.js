function func() {
	var elem = document.getElementById('test');
	var age = elem.value; 
	if (age < 19){
		alert("You are too young");
	}
	else if (age > 65) {
		alert("You are too old!");
	}
	else {
		alert("You are ok");
	}
}