var Home_products={"home_product1":{"image":"images/dabba.JPG",
                        "name":"tomato puri dabba",
                        "price":399
                        },
                  "home_product2":{"image":"images/home2.JPG",
                        "name":"Folding wardrobe cupboard",
                        "price":3199
                        },
                  "home_product3":{"image":"images/home3.JPG",
                        "name":"Tajmahal show piece",
                        "price":1399
                         },
                  "home_product4":{"image":"images/home4.JPG",
                        "name":"Red ear phones",
                        "price":699
                        }
                    };  
//var Sports_products={"sports_product1":{"image":"images/sports1.JPG",
//                        "name":"Adidas F5 Trx football stockings",
//                        "brand":"Adidas",
//                        "price":399
//                        },
//                  "sports_product2":{"image":"images/sports4.jpg",
//                        "name":"Wilson F5 Trx football studs",
//                        "brand":"Wilson",
//                        "price":3199
//                        },
//                  "sports_product3":{"image":"images/sports3.jpg",
//                        "name":"Nike F5 Trx football studs",
//                        "brand":"Nike",
//                        "price":1399
//                         },
//                  "sports_product4":{"image":"images/sports2.JPG",
//                        "name":"Puma F5 Trx football shin pads medium",
//                        "brand":"Puma",
//                        "price":699
//                        },
//                  "sports_product5":{"image":"images/sports2.JPG",
//                        "name":"Puma F5 Trx football shin pads small",
//                        "brand":"Puma",
//                        "price":299
//                        }
//                    };
var Books_products={"books_product1":{"image":"images/book4.jpg",
                        "name":"Jee Physics material",
                        "price":399
                        },
                  "books_product2":{"image":"images/book1.JPG",
                        "name":"Arihant's mechanical engineeering",
                        "price":3199
                        },
                  "books_product3":{"image":"images/book1.JPG",
                        "name":"Arihant's mechanical engineeering2",
                        "price":1399
                         },
                  "books_product4":{"image":"images/book3.jpg",
                        "name":"GATE civil engineering",
                        "price":699
                        },
                  "books_product5":{"image":"images/book1.JPG",
                        "name":"Arihant's mechanical engineeering3",
                        "price":299
                        }
                    }; 
var Electronics_products={"electronics_product1":{"image":"images/electronics1.jpg",
                        "name":"Samsung Duos phone",
                        "brand":"Samsung",
                        "price":399
                        },
                  "electronics_product2":{"image":"images/electronics2.jpg",
                        "name":"Nokia Lumia phone",
                        "brand":"Nokia",
                        "price":3199
                        },
                  "electronics_product3":{"image":"images/electronics3.JPG",
                        "name":"Dell Inspiron laptop",
                        "brand":"Dell",
                        "price":1399
                         },
                  "electronics_product4":{"image":"images/electronics4.JPG",
                        "name":"HP Laptop",
                        "brand":"Hp",
                        "price":699
                        },
                  "electronics_product5":{"image":"images/electronics4.JPG",
                        "name":"HP Laptop",
                        "brand":"Hp",
                        "price":299
                        }
                    };  
var Clothing_products={"clothing_product1":{"image":"images/clothing1.jpg",
                        "name":"Adidas T-shirt",
                        "brand":"Adidas",
                        "price":399
                        },
                  "clothing_product2":{"image":"images/clothing2.jpg",
                        "name":"Wilson Women Lonsleeve tennis jacket",
                        "brand":"Wilson",
                        "price":3199
                        },
                  "clothing_product3":{"image":"images/clothing3.jpg",
                        "name":"Nike track-suit",
                        "brand":"Nike",
                        "price":1399
                         },
                  "clothing_product4":{"image":"images/clothing4.jpg",
                        "name":"Puma blue-shirt",
                        "brand":"Puma",
                        "price":699
                        },
                  "clothing_product5":{"image":"images/clothing5.jpg",
                        "name":"Puma red-shirt",
                        "brand":"Puma",
                        "price":299
                        }
                    };  
var Home_product_keys = Object.keys(Home_products);
//var Sports_products_keys = Object.keys(Sports_products);
var Books_product_keys = Object.keys(Books_products); 
var Electronics_products_keys = Object.keys(Electronics_products);
var Clothing_products_keys = Object.keys(Clothing_products);
function homeKeys(){
   
  for(var i=0;i<Home_product_keys.length;i++)
    {
      var price=Home_products[Home_product_keys[i]]["price"];
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
     $('#type1-body>.row>.products-list').append('<div class="col-sm-5 product-details mobile-div filter-hide '+price_range+'" id="'+Home_product_keys[i]+'"style="margin:30px"><img \
      src='+Home_products[Home_product_keys[i]]["image"]+' class="desktop-image mobile-image"><div class="product-footer"><div><a \
      href="product_details.jsp">'+Home_products[Home_product_keys[i]]["name"]+'</a></div><div>Rs.'+Home_products[Home_product_keys[i]]["price"]+'</div>\
      </div></div>'); 
    }  
}
//function sports(){
//  
//    for(var k=0;k<Sports_products_keys.length;k++){
//      var price2=Sports_products[Sports_products_keys[k]]["price"];
//      var price_range2="0"; 
//      var brand=Sports_products[Sports_products_keys[k]]["brand"];
//      var add_brand="0";
//      if(0<price2 && price2<=499){
//        price_range2="s0-499";
//      }
//      else if(500<=price2 && price2<=999){
//        price_range2="s500-999";
//      }
//      else if(1000<=price2 && price2<=2999){
//        price_range2="s1000-2999";
//      }
//      else if(price2>=3000){
//        price_range2="sover-3000";
//      }
//      if(brand==="Adidas"){
//        add_brand="sadidas";
//      }
//      else if(brand==="Wilson"){
//        add_brand="swilson";
//      }
//      else if(brand==="Nike"){
//        add_brand="snike";
//      }
//      else if(brand==="Puma"){
//        add_brand="spuma";
//      }
//      $('#type2-body>.row>.products-list').append('<div class="col-sm-5 product-details mobile-div filter-hide2 '+price_range2+' '+add_brand+'" id="'+Sports_products_keys[k]+'"style="margin:30px"><img \
//      src='+Sports_products[Sports_products_keys[k]]["image"]+' class="desktop-image mobile-image"><div class="product-footer"><div><a \
//      href="product_details.jsp">'+Sports_products[Sports_products_keys[k]]["name"]+'</a></div><div>Rs.'+Sports_products[Sports_products_keys[k]]["price"]+'</div>\
//      </div></div>'); 
//    }
//}
function books(){
  
    for(var i=0;i<Books_product_keys.length;i++)
    {
      var price=Books_products[Books_product_keys[i]]["price"];
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
     $('#type3-body>.row>.products-list').append('<div class="col-sm-5 product-details mobile-div filter-hide3 '+price_range+'" id="'+Books_product_keys[i]+'"style="margin:30px"><img \
      src='+Books_products[Books_product_keys[i]]["image"]+' class="desktop-image mobile-image"><div class="product-footer"><div><a \
      href="product_details.jsp">'+Books_products[Books_product_keys[i]]["name"]+'</a></div><div>Rs.'+Books_products[Books_product_keys[i]]["price"]+'</div>\
      </div></div>'); 
    }
}
function electronics(){
 
    for(var k=0;k<Electronics_products_keys.length;k++){
      var price2=Electronics_products[Electronics_products_keys[k]]["price"];
      var price_range2="0"; 
      var brand=Electronics_products[Electronics_products_keys[k]]["brand"];
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
      $('#type4-body>.row>.products-list').append('<div class="col-sm-5 product-details mobile-div filter-hide4 '+price_range2+' '+add_brand+'" id="'+Electronics_products_keys[k]+'"style="margin:30px"><img \
      src='+Electronics_products[Electronics_products_keys[k]]["image"]+' class="desktop-image mobile-image"><div class="product-footer"><div><a \
      href="product_details.jsp">'+Electronics_products[Electronics_products_keys[k]]["name"]+'</a></div><div>Rs.'+Electronics_products[Electronics_products_keys[k]]["price"]+'</div>\
      </div></div>'); 
    }
}
function clothing(){
  
    for(var k=0;k<Clothing_products_keys.length;k++){
      var price2=Clothing_products[Clothing_products_keys[k]]["price"];
      var price_range2="0"; 
      var brand=Clothing_products[Clothing_products_keys[k]]["brand"];
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
      $('#type5-body>.row>.products-list').append('<div class="col-sm-5 product-details mobile-div filter-hide5 '+price_range2+' '+add_brand+'" id="'+Clothing_products_keys[k]+'"style="margin:30px"><img \
      src='+Clothing_products[Clothing_products_keys[k]]["image"]+' class="desktop-image mobile-image"><div class="product-footer"><div><a \
      href="product_details.jsp">'+Clothing_products[Clothing_products_keys[k]]["name"]+'</a></div><div>Rs.'+Clothing_products[Clothing_products_keys[k]]["price"]+'</div>\
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
	 homeKeys();
//   sports();
   books();
   electronics();
   clothing();
	$.getJSON("Sports",function(Sports_products){
		var Sports_products_keys = Object.keys(Sports_products);
//		sports();
		for(var k=0;k<Sports_products_keys.length;k++){
		      var price2=Sports_products[Sports_products_keys[k]]["price"];
		      var price_range2="0"; 
		      var brand=Sports_products[Sports_products_keys[k]]["brand"];
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
		      $('#type2-body>.row>.products-list').append('<div class="col-sm-5 product-details2 mobile-div filter-hide2 '+price_range2+' '+add_brand+'" id="'+Sports_products_keys[k]+'"style="margin:30px"><img \
		      src='+Sports_products[Sports_products_keys[k]]["image"]+' class="desktop-image mobile-image"><div class="product-footer"><div><a \
		      href="ProductDetails">'+Sports_products[Sports_products_keys[k]]["name"]+'</a></div><div>Rs.'+Sports_products[Sports_products_keys[k]]["price"]+'</div>\
		      </div></div>'); 
		    }
		$(".product-details").click(function(){
            var product_id = $(this).attr('id');
            for(var i=0;i<Home_product_keys.length;i++){
              if(Home_product_keys[i] == product_id){
                product_desc = Home_products[Home_product_keys[i]];
              }
            }
            for(var i=0;i<Sports_products_keys.length;i++){
              if(Sports_products_keys[i] == product_id){
                product_desc = Sports_products[Sports_products_keys[i]];
              }
            }
            for(var i=0;i<Books_product_keys.length;i++){
              if(Books_product_keys[i] == product_id){
                product_desc = Books_products[Books_product_keys[i]];
              }
            }
            for(var i=0;i<Electronics_products_keys.length;i++){
              if(Electronics_products_keys[i] == product_id){
                product_desc = Electronics_products[Electronics_products_keys[i]];
              }
            }
            for(var i=0;i<Clothing_products_keys.length;i++){
              if(Clothing_products_keys[i] == product_id){
                product_desc = Clothing_products[Clothing_products_keys[i]];
              }
            }
            localStorage.setItem('product_desc2', JSON.stringify(product_desc));
            
          });
		  $(".product-details2").click(function(){
			  var product_id = $(this).attr('id');
			  for(var i=0;i<Sports_products_keys.length;i++){
	              if(Sports_products_keys[i] == product_id){
	                product_desc = Sports_products[Sports_products_keys[i]];
	              }
	            }
			  localStorage.setItem('product_desc2', JSON.stringify(product_desc));
			  $.ajax({
	                url : "ProductDetails",
	                type: "get",
	                data : {'productId':product_id},
	                error : function(){
	                   alert("Error Occured");
	                },
	                success : function(data) {
	                   window.location="ProductDetails";
	                }
	               });
		  });
		  
		  $(".product-details").wrap('<a href="product_details.jsp"></a>');
		  $(".product-details2").wrap('<a href="ProductDetails"></a>');
    

	});
    
    
    $('.product-filter').on("change", function(){filters();});
    

});