function myFunction() {
	var d = new Date();
	var n = d.toLocaleTimeString();
	var z = d.toLocaleDateString();
	var dnt = z + " " + n;
	alert(dnt); 
	console.log(dnt);
}