$(document).ready(function() {
	var retrievedObject = localStorage.getItem('product_desc2');
    productDescription(JSON.parse(retrievedObject));
    function productDescription(product_desc) {
    	$('.add-to-cart').wrap('<a href="my_cart.jsp"></a>');
    	$('.add-to-cart').click(function(){
    		var cart= JSON.parse(localStorage.getItem('newStorage')) || [];
    		cart.push(product_desc);
    		localStorage.setItem('newStorage', JSON.stringify(cart));
    	});
    }
});