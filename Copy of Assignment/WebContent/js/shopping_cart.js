function homeKeys(Home_product_keys){
   
  for(var i=0;i<Home_product_keys.length;i++)
    {
      var price=Home_product_keys[i]["price"];
      var price_range="0";
      if(0<price && price<=499){
        price_range="h0-499";
      }
      else if(500<=price && price<=999){
        price_range="h500-999";
      }
      else if(1000<=price && price<=2999){
        price_range="h1000-2999";
      }
      else if(price>=3000){
        price_range="hover-3000";
      }
     $('#type1-body>.row>.products-list').append('<div class="col-sm-5 product-details mobile-div filter-hide '+price_range+'" id="'+Home_product_keys[i]["id"]+'"style="margin:30px"><img \
      src='+Home_product_keys[i]["image"]+' class="desktop-image mobile-image"><div class="product-footer"><div><a \
      href="product.do?productId='+Home_product_keys[i]["id"]+'">'+Home_product_keys[i]["name"]+'</a></div><div>Rs.'+Home_product_keys[i]["price"]+'</div>\
      </div></div>'); 
    }  
}
function sports(Sports_products_keys){
  
	for(var k=0;k<Sports_products_keys.length;k++){
	      var price2=Sports_products_keys[k]["price"];
	      var price_range2="0"; 
	      var brand=Sports_products_keys[k]["brand"];
	      var add_brand="0";
	      if(0<price2 && price2<=499){
	        price_range2="s0-499";
	      }
	      else if(500<=price2 && price2<=999){
	        price_range2="s500-999";
	      }
	      else if(1000<=price2 && price2<=2999){
	        price_range2="s1000-2999";
	      }
	      else if(price2>=3000){
	        price_range2="sover-3000";
	      }
	      if(brand==="Adidas"){
	        add_brand="sadidas";
	      }
	      else if(brand==="Wilson"){
	        add_brand="swilson";
	      }
	      else if(brand==="Nike"){
	        add_brand="snike";
	      }
	      else if(brand==="Puma"){
	        add_brand="spuma";
	      }
	      $('#type2-body>.row>.products-list').append('<div class="col-sm-5 product-details mobile-div filter-hide2 '+price_range2+' '+add_brand+'" id="'+Sports_products_keys[k]["id"]+'"style="margin:30px"><img \
	      src='+Sports_products_keys[k]["image"]+' class="desktop-image mobile-image"><div class="product-footer"><div><a \
	      href="product.do?productId='+Sports_products_keys[k]["id"]+'">'+Sports_products_keys[k]["name"]+'</a></div><div>Rs.'+Sports_products_keys[k]["price"]+'</div>\
	      </div></div>'); 
	    }
}
function books(Books_product_keys){
  
    for(var i=0;i<Books_product_keys.length;i++)
    {
      var price=Books_product_keys[i]["price"];
      var price_range="0";
      if(0<price && price<=499){
        price_range="b0-499";
      }
      else if(500<=price && price<=999){
        price_range="b500-999";
      }
      else if(1000<=price && price<=2999){
        price_range="b1000-2999";
      }
      else if(price>=3000){
        price_range="bover-3000";
      }
     $('#type3-body>.row>.products-list').append('<div class="col-sm-5 product-details mobile-div filter-hide3 '+price_range+'" id="'+Books_product_keys[i]["id"]+'"style="margin:30px"><img \
      src='+Books_product_keys[i]["image"]+' class="desktop-image mobile-image"><div class="product-footer"><div><a \
      href="product.do?productId='+Books_product_keys[i]["id"]+'">'+Books_product_keys[i]["name"]+'</a></div><div>Rs.'+Books_product_keys[i]["price"]+'</div>\
      </div></div>'); 
    }
}
function electronics(Electronics_products_keys){
 
    for(var k=0;k<Electronics_products_keys.length;k++){
      var price2=Electronics_products_keys[k]["price"];
      var price_range2="0"; 
      var brand=Electronics_products_keys[k]["brand"];
      var add_brand="0";
      if(0<price2 && price2<=499){
        price_range2="e0-499";
      }
      else if(500<=price2 && price2<=999){
        price_range2="e500-999";
      }
      else if(1000<=price2 && price2<=2999){
        price_range2="e1000-2999";
      }
      else if(price2>=3000){
        price_range2="eover-3000";
      }
      if(brand==="Samsung"){
        add_brand="samsung";
      }
      else if(brand==="Nokia"){
        add_brand="nokia";
      }
      else if(brand==="Dell"){
        add_brand="dell";
      }
      else if(brand==="Hp"){
        add_brand="hp";
      }
      $('#type4-body>.row>.products-list').append('<div class="col-sm-5 product-details mobile-div filter-hide4 '+price_range2+' '+add_brand+'" id="'+Electronics_products_keys[k]["id"]+'"style="margin:30px"><img \
      src='+Electronics_products_keys[k]["image"]+' class="desktop-image mobile-image"><div class="product-footer"><div><a \
      href="product.do?productId='+Electronics_products_keys[k]["id"]+'">'+Electronics_products_keys[k]["name"]+'</a></div><div>Rs.'+Electronics_products_keys[k]["price"]+'</div>\
      </div></div>'); 
    }
}
function clothing(Clothing_products_keys){
  
    for(var k=0;k<Clothing_products_keys.length;k++){
      var price2=Clothing_products_keys[k]["price"];
      var price_range2="0"; 
      var brand=Clothing_products_keys[k]["brand"];
      var add_brand="0";
      if(0<price2 && price2<=499){
        price_range2="c0-499";
      }
      else if(500<=price2 && price2<=999){
        price_range2="c500-999";
      }
      else if(1000<=price2 && price2<=2999){
        price_range2="c1000-2999";
      }
      else if(price2>=3000){
        price_range2="cover-3000";
      }
      if(brand==="Adidas"){
        add_brand="cadidas";
      }
      else if(brand==="Wilson"){
        add_brand="cwilson";
      }
      else if(brand==="Nike"){
        add_brand="cnike";
      }
      else if(brand==="Puma"){
        add_brand="cpuma";
      }
      $('#type5-body>.row>.products-list').append('<div class="col-sm-5 product-details mobile-div filter-hide5 '+price_range2+' '+add_brand+'" id="'+Clothing_products_keys[k]["id"]+'"style="margin:30px"><img \
      src='+Clothing_products_keys[k]["image"]+' class="desktop-image mobile-image"><div class="product-footer"><div><a \
      href="product.do?productId='+Clothing_products_keys[k]["id"]+'">'+Clothing_products_keys[k]["name"]+'</a></div><div>Rs.'+Clothing_products_keys[k]["price"]+'</div>\
      </div></div>'); 
    }
}

function filters() {
      var sel = $('#type1-body input[type=checkbox]:checked').map(function(_, el) {
          return $(el).val();
      }).get();
      var sel2 = $('#type2-body input[name=price-filter]:checked').map(function(_, el) {
          return $(el).val();
      }).get();
      var sel3 = $('#type2-body input[name=brand-filter]:checked').map(function(_, el) {
          return $(el).val();
      }).get();
      var sel4 = $('#type3-body input[name=price-filter]:checked').map(function(_, el) {
          return $(el).val();
      }).get();
      var sel5 = $('#type4-body input[name=price-filter]:checked').map(function(_, el) {
          return $(el).val();
      }).get();
      var sel6 = $('#type4-body input[name=brand-filter]:checked').map(function(_, el) {
          return $(el).val();
      }).get();
      var sel7 = $('#type5-body input[name=price-filter]:checked').map(function(_, el) {
          return $(el).val();
      }).get();
      var sel8 = $('#type5-body input[name=brand-filter]:checked').map(function(_, el) {
          return $(el).val();
      }).get();
      if (sel.length === 0) {
        $('.filter-hide').show();
      }
      else {
        $('.filter-hide').hide();
        for (var j=0;j<sel.length;j++){
        $('.' +sel[j]).show();
        }
      }
      if(sel2.length === 0 && sel3.length === 0){
        $('.filter-hide2').show();
      }
      else if(sel2.length === 0 && sel3.length !== 0){
        $('.filter-hide2').hide();
        for (var i=0;i<sel3.length;i++){
          $('.'+sel3[i]).show();
        }
      }
      else if(sel2.length !== 0 && sel3.length === 0){
        $('.filter-hide2').hide();
        for (var i=0;i<sel2.length;i++){
          $('.'+sel2[i]).show();
        }
      }
      else{
        $('.filter-hide2').hide();
        for (var i=0;i<sel2.length;i++){
          for (var k=0;k<sel3.length;k++){
            $('.'+sel3[k]+'.'+sel2[i]).show();
          }
        }

      }
      if (sel4.length === 0) {
        $('.filter-hide3').show();
      }
      else {
        $('.filter-hide3').hide();
        for (var j=0;j<sel4.length;j++){
        $('.' +sel4[j]).show();
        }
      }
      if(sel5.length === 0 && sel6.length === 0){
        $('.filter-hide4').show();
      }
      else if(sel5.length === 0 && sel6.length !== 0){
        $('.filter-hide4').hide();
        for (var i=0;i<sel6.length;i++){
          $('.'+sel6[i]).show();
        }
      }
      else if(sel5.length !== 0 && sel6.length === 0){
        $('.filter-hide4').hide();
        for (var i=0;i<sel5.length;i++){
          $('.'+sel5[i]).show();
        }
      }
      else{
        $('.filter-hide4').hide();
        for (var i=0;i<sel5.length;i++){
          for (var k=0;k<sel6.length;k++){
            $('.'+sel6[k]+'.'+sel5[i]).show();
          }
        }

      }
      if(sel7.length === 0 && sel8.length === 0){
        $('.filter-hide5').show();
      }
      else if(sel7.length === 0 && sel8.length !== 0){
        $('.filter-hide5').hide();
        for (var i=0;i<sel8.length;i++){
          $('.'+sel8[i]).show();
        }
      }
      else if(sel7.length !== 0 && sel8.length === 0){
        $('.filter-hide5').hide();
        for (var i=0;i<sel7.length;i++){
          $('.'+sel7[i]).show();
        }
      }
      else{
        $('.filter-hide5').hide();
        for (var i=0;i<sel7.length;i++){
          for (var k=0;k<sel8.length;k++){
            $('.'+sel8[k]+'.'+sel7[i]).show();
          }
        }

      }
  }

                 
$(document).ready(function(){
	$('input:checkbox').prop('checked', false);
	 
	 $.ajax({
	    	url:"/Assignment/home.do",
	    	success: function(Home_product_keys){
	    		
	    		homeKeys(Home_product_keys);
			
			$(".product-details").click(function(){
		       var product_id = $(this).attr('id');
		       for(var i=0;i<Home_product_keys.length;i++){
		         if(Home_product_keys[i]["id"] == product_id){
		           product_desc = Home_product_keys[i];
		         }
		       }
		       
		       localStorage.setItem('product_desc2', JSON.stringify(product_desc));
		           	
		           	window.location="product.do?productId="+product_id+"";

			 });
			  
	    

	    	}});
   
   $.ajax({
   	url:"/Assignment/books.do",
   	success: function(Books_product_keys){
   		
   		books(Books_product_keys);
		
		$(".product-details").click(function(){
			
	       var product_id = $(this).attr('id');
	       for(var i=0;i<Books_product_keys.length;i++){
	         if(Books_product_keys[i]["id"] == product_id){
	           product_desc = Books_product_keys[i];
	         }
	       }
	       localStorage.setItem('product_desc2', JSON.stringify(product_desc));
	           	
	           	window.location="product.do?productId="+product_id+"";

		 });
		  
   

   	}});
 
   $.ajax({
	   	url:"/Assignment/electronics.do",
	   	success: function(Electronics_products_keys){
	   		
	   		electronics(Electronics_products_keys);
			
			$(".product-details").click(function(){
				
		       var product_id = $(this).attr('id');
		       for(var i=0;i<Electronics_products_keys.length;i++){
		         if(Electronics_products_keys[i]["id"] == product_id){
		           product_desc = Electronics_products_keys[i];
		         }
		       }
		       localStorage.setItem('product_desc2', JSON.stringify(product_desc));
		           	
		           	window.location="product.do?productId="+product_id+"";

			 });
			  
	   

	   	}});
   $.ajax({
	   	url:"/Assignment/clothing.do",
	   	success: function(Clothing_products_keys){
	   		
	   		clothing(Clothing_products_keys);
			
			$(".product-details").click(function(){
				
		       var product_id = $(this).attr('id');
		       for(var i=0;i<Clothing_products_keys.length;i++){
		         if(Clothing_products_keys[i]["id"] == product_id){
		           product_desc = Clothing_products_keys[i];
		         }
		       }
		       localStorage.setItem('product_desc2', JSON.stringify(product_desc));
		           	
		           	window.location="product.do?productId="+product_id+"";

			 });
			  
	   

	   	}});
    $.ajax({
    	url:"/Assignment/sports.do",
    	success: function(Sports_products_keys){
    		console.log(Sports_products_keys);
		sports(Sports_products_keys);
		
		$(".product-details").click(function(){
			console.log("hdfj");
			
	       var product_id = $(this).attr('id');
	       for(var i=0;i<Sports_products_keys.length;i++){
	         if(Sports_products_keys[i]["id"] == product_id){
	           product_desc = Sports_products_keys[i];
	         }
	       }
	       
	       
	       localStorage.setItem('product_desc2', JSON.stringify(product_desc));
	           	
	           	window.location="product.do?productId="+product_id+"";

		 });
		  
    

    	}});
    
	
    
    $('.product-filter').on("change", function(){filters();});
    

});