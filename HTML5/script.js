
console.log("Script loaded!")
var form1 = document.getElementById("form");
var content = document.getElementById("form-content");
var mainList = document.getElementById("mainList");
function getName(id){
	content.innerHTML+=id;
}
form1.addEventListener("submit", function(event){
	event.preventDefault();
	const data = Object.fromEntries(new FormData(event.target).entries());
	console.log(event);
	console.log("submit");
	console.log(data)
	content.innerHTML += "<h1>Nombre: </h1>";
	content.innerHTML += "<p>" + data.name + "</p>";
	content.innerHTML = "<h1>Number: </h1>";
	content.innerHTML += "<p>" + data.number + "</p>";
  	content.innerHTML += data.password;

});
function example () {

	return []
}

