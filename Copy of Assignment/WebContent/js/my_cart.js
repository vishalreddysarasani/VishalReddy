 $(document).ready(function(){
	var total=0;
	 $.ajax({
		 url:"cart.do",
		 success: function(cart_data){
			 for(var i=0;i<cart_data.length;i++)
			 	{	total+=cart_data[i]["price"];
			 		$('.cart-table').append('<tr class="row"><td class="col-sm-4"><img src='+cart_data[i]["image"]+' style="width:100px"></td>\
			 			<td class="col-sm-4">'+cart_data[i]["name"]+'</td><td class="col-sm-3">Rs.'+cart_data[i]["price"]+'</td><td><span\
			 			 class="glyphicon glyphicon-remove-circle close1 col-sm-1" id="'+cart_data[i]["cartId"]+'" style="cursor:pointer" aria-hidden="true"></span></td></tr>');
			 	} 
			 $('.totalcost').append('<b>Total:</b>Rs.'+total);
			 $('.close1').click(function(){
				 var id = $(this).attr('id');
				 window.location="deleteFromCart.do?cartId="+id+"";
			 });
		 }
	 });
	 
	 

 	
});