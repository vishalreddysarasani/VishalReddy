package dao;



import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import model.CartProduct;
import model.CartProductMapper;
import model.Product;
import model.ProductMapper;
@Component
public class ProductJDBCTemplate {
	
	@Autowired
	private ProductMapper productMapper;
	@Autowired
	private CartProductMapper cartProductMapper;
	
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplateObject;
	public void setDataSource(DataSource dataSource) {
	      this.dataSource = dataSource;
	      this.jdbcTemplateObject = new JdbcTemplate(dataSource);
	   }
	
	public Product getProduct(String id,String item){
		String SQL = "select * from "+item+" where id = ?";
	    Product product = jdbcTemplateObject.queryForObject(SQL,new Object[]{id},productMapper);
	    return product;
	}
	public List<Product> sportsProducts(){
		String SQL = "select * from sports";
	    List<Product> products = jdbcTemplateObject.query(SQL,productMapper);
	    return products;
	}
	public List<Product> homeProducts(){
		String SQL = "select * from home";
	    List<Product> products = jdbcTemplateObject.query(SQL,productMapper);
	    return products;
	}
	public List<Product> electronicsProducts(){
		String SQL = "select * from electronics";
	    List<Product> products = jdbcTemplateObject.query(SQL,productMapper);
	    return products;
	}
	public List<Product> booksProducts(){
		String SQL = "select * from books";
	    List<Product> products = jdbcTemplateObject.query(SQL,productMapper);
	    return products;
	}
	public List<Product> clothingProducts(){
		String SQL = "select * from clothing";
	    List<Product> products = jdbcTemplateObject.query(SQL,productMapper);
	    return products;
	}
	public void addToCart(String productId,String name,String image,Integer price,String userId,String brand){
		String SQL = "insert into cart ( user_id, image, name, price, id,brand) values (?, ?, ?, ?, ?, ?)";
		jdbcTemplateObject.update( SQL, userId, image, name, price, productId,brand);
		
	}
	public List<CartProduct> getCart(String userId){
		String SQL = "select cartId,image,name,brand,price,id from cart where user_id='"+userId+"'";
		List<CartProduct>products = jdbcTemplateObject.query(SQL,cartProductMapper);
		return products;
	}
	public void deleteCart(Integer cartId){
		String SQL = "delete from cart where cartId=?";
		jdbcTemplateObject.update( SQL,cartId);
		
	}
}

