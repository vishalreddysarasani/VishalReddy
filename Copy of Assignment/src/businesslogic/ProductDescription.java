package businesslogic;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import dao.ProductJDBCTemplate;
import model.Product;
@Component
public class ProductDescription {
	@Autowired
	private ProductJDBCTemplate productJDBCTemplate;

	public Product getDetails(String id){
	
		
	      
	      String tableName = id.split("_")[0];
	      Product product = productJDBCTemplate.getProduct(id,tableName);
	      return product;
	    
	}
}
