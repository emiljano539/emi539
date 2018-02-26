$(function (){
	var $lendet = $('#lendet');
	var $lenda = $('#lenda');
	var $linku = $('#linku');
	var shumanotave = 0;
 $.ajax({
  type: 'GET',
  contentType: 'json',
  url: 'https://api.myjson.com/bins/t9zi5',
  success: function(lendet) {
    console.log("Tabela:", lendet);
	console.log("ShumaLendeve:", shumanotave);
	$.each(lendet, function(i, lenda) {
	$lendet.append('<tr><th scope="row">'+ lenda.numri +'</th><td>'+ lenda.emri +'</td><td>'+ lenda.kreditet +'</td><td>'+ lenda.nota +'</td></tr></tbody>');
	shumanotave+= parseInt(lendet.nota);
	});
	},

  	error: function() {
		alert('Error loading the database');
	}
	});
});