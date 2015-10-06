 $(document).ready(function(){
 	var cart_data = JSON.parse(localStorage.getItem('newStorage'));
 	var total=0;
 	for(var i=0;i<cart_data.length;i++)
 	{	total+=cart_data[i]["price"];
 		$('.cart-table').append('<tr class="row"><td class="col-sm-4"><img src='+cart_data[i]["image"]+' style="width:100px"></td>\
 			<td class="col-sm-4">'+cart_data[i]["name"]+'</td><td class="col-sm-3">Rs.'+cart_data[i]["price"]+'</td><td><span\
 			 class="glyphicon glyphicon-remove-circle close1 col-sm-1" id="'+i+'" style="cursor:pointer" aria-hidden="true"></span></td></tr>');
 	}
 	$('.close1').click(function(){
 		var close_id=$(this).attr('id');
 		for(var i=0;i<cart_data.length;i++){
 			if(close_id == i){
 			   cart_data.splice(i,1);
 			}
 		}
 		localStorage.setItem('newStorage', JSON.stringify(cart_data));
 		location.reload();
 	});
 	$('.totalcost').append('<b>Total:</b>Rs.'+total);
});