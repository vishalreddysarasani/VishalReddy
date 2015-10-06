$(document).ready(function() {
	var retrievedObject = localStorage.getItem('product_desc2');
    productDescription(JSON.parse(retrievedObject));
    function productDescription(product_desc) {
    	$('.product-image').append('<img src='+product_desc["image"]+' style="width:300px;margin-left:-65px">');
    	$('.product-description').append('<h3>'+product_desc["name"]+'</h3><h4>Rs.'+product_desc["price"]+'</h4>\
            <h6>Available:Instock</h6><h6>Shipping:Free</h6><h6>Replaceable</h6>');
    	$('.add-to-cart').wrap('<a href="my_cart.jsp"></a>');
    	$('.add-to-cart').click(function(){
    		var cart= JSON.parse(localStorage.getItem('newStorage')) || [];
    		cart.push(product_desc);
    		localStorage.setItem('newStorage', JSON.stringify(cart));
    	});
    }
});