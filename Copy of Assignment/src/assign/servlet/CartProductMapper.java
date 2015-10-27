package assign.servlet;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;
@Component
public class CartProductMapper implements RowMapper<CartProduct> {
   public CartProduct mapRow(ResultSet rs, int rowNum) throws SQLException {
      CartProduct product = new CartProduct();
      product.setName(rs.getString("name"));
      product.setImage(rs.getString("image"));
      product.setPrice(rs.getInt("price"));
      product.setId(rs.getString("id"));
      product.setBrand(rs.getString("brand"));
      product.setCartId(rs.getInt("cartId"));
      return product;
   }
}