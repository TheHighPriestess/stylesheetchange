$(document).ready(function(){
$(".togglebutton").click(function(){
	if ($("#colorswitch").attr("href")){
		$("#colorswitch").removeAttr("href");
	}
	else $("#colorswitch").attr("href", "css/newcolors.css");
	});

	 
});