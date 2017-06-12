var cargarPagina=function(){
	cargarPersonajes();
};

var cargarPersonajes=function(){
	$.ajax("https://swapi.co/api/people/",{
		method:'GET',
		dataType:'json',
		success:function(response){
		var personajes=response.results;
		var $ul=$("#personajes");
		personajes.forEach(function(personaje){
			var $li=$("<li />");
			$li.text(personaje.name);
			$ul.append($li);
		});
		},
		error: function(error){
			console.log("error", error);
		}
	});
};

$(document).ready(cargarPagina);