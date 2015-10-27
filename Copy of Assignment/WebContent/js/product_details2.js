$(document).ready(function() {
	$('.add-to-cart').click(function(){
		var id = $(this).attr('id');
		window.location="addToCart.do?productId="+id+"";
	});
});