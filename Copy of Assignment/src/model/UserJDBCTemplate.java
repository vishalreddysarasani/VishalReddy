package model;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
@Component
public class UserJDBCTemplate {
	
	@Autowired
	private UserMapper userMapper;
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplateObject;
	public void setDataSource(DataSource dataSource) {
	      this.dataSource = dataSource;
	      this.jdbcTemplateObject = new JdbcTemplate(dataSource);
	   }
	public List<User> listUsers(){
		String SQL = "select * from servlet";
	    List<User> users =  jdbcTemplateObject.query(SQL,userMapper);
	    return users;
	}
	public List<User> getUser(String id, String password){
		String SQL = "select * from servlet where id = ? and password = ?";
	    List<User> users =  jdbcTemplateObject.query(SQL,new Object[]{id,password},userMapper);
	    return users;
	}
	public void create(String userId, String password) {
	      String SQL = "insert into servlet(id,password) values (?, ?)";
	     
	      jdbcTemplateObject.update( SQL, userId, password);
	     
	}
}
