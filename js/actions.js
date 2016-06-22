/**************************************
	Patrícia Poltts .: poltss@gmail.com :.
	http://poltts.heroku.com
**************************************/

document.addEventListener("DOMContentLoaded", function() { 
	menuHandle(); 
}, false);

var menuState;

function menuHandle(){
	$("#nav-btn").click(function(){
		menuState = $("#nav-menu").css('display');
		
		if(menuState !== 'none'){
			$("#nav-btn").html('<i class="fa fa-bars" aria-hidden="true"  title="Abrir menu."></i>');
			$("#nav-menu").hide();
		}else{
			$("#nav-btn").html('<i class="fa fa-times" aria-hidden="true" title="Fechar menu."></i>');
			$("#nav-menu").show();
		}

	});
}