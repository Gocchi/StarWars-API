var cargarPagina=function(){
	cargarPersonajes();
};

var cargarPersonajes=function(){
	var url='https://swapi.co/api/people/';
	$.getJSON(url, function(response){
	console.log(response);
	var personajes=response.results;
	var total=response.count;
	mostrarTotalPersonajes(total);
	mostrarPersonajes(personajes);
});
};
var mostrarTotalPersonajes = function(total) {
    $('#total').text(total);
};

var mostrarPersonajes = function(personajes) {
    
    personajes.forEach(function(personaje) {
              var $li = $("<li />");
              var $ul = $('#personajes');
              
         $ul.append($li);
          $li.text(personaje.name);
              console.log(personaje.name);
          });
    
};
$(document).ready(cargarPagina);
