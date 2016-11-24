
	$(document).ready(function() {
	
    $(".animate").css("display", "none");
    $(".animate").fadeIn(2000);
    
	$(".animate").click(function(event){
		event.preventDefault();
		linkDestino = this.href;
		$(".animate").fadeOut(1000, redireccionarPag);		
	});
		
	function redireccionarPag() {
		window.location = linkDestino;
	}
	
});