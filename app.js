var cargarPagina=function(){
	cargarPersonajes();
	$(document).on("click", ".personaje", mostrarDetallePersonaje);

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
          $li.text(personaje.name+ " " + personaje.gender);
          $li.addClass("personaje");
          $li.attr("data-url", personaje.homeworld);
         
          });
    
};

var $plantillaPlaneta= '<h2>Planeta</h2>'+
						'<p>Nombre:</strong>__nombre__</p>'+
						'<p>Clima:</strong>__clima__</p>';

var mostrarDetallePersonaje =function(){
	var url= $(this).data("url");
	var $planetaContenedor= $("#planeta");
	$.getJSON(url, function(response){
		$planetaContenedor.html(
		$plantillaPlaneta.replace('__nombre__',response.name)
			.replace('__clima__',response.climate)
		);	
	});
};
$(document).ready(cargarPagina);
