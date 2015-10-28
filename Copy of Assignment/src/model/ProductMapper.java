package model;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;
@Component
public class ProductMapper implements RowMapper<Product> {
   public Product mapRow(ResultSet rs, int rowNum) throws SQLException {
      Product product = new Product();
      product.setName(rs.getString("name"));
      product.setImage(rs.getString("image"));
      product.setPrice(rs.getInt("price"));
      product.setId(rs.getString("id"));
      product.setBrand(rs.getString("brand"));
      return product;
   }
}