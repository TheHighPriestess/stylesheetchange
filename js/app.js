$(document).ready(function(){
$(".togglebutton").click(function(){
	if ($("#colorswitch").attr("href")){
		$("#colorswitch").removeAttr("href");
	}
	else $("#colorswitch").attr("href", "css/newcolors.css");
	});	 

$(".styleone").click(function(){
	$("#colorswitch").attr("href","css/styleone.css");
});

$(".styletwo").click(function(){
	$("#colorswitch").attr("href","css/styletwo.css");
});

$(".stylethree").click(function(){
	$("#colorswitch").attr("href","css/stylethree.css");
});

});