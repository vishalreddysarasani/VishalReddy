package assign.servlet;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class Validation {
	@Autowired
	private UserJDBCTemplate userJDBCTemplate;

	public  boolean validateUser(String userId,String password){
		boolean b = false;
		userId = userId.toLowerCase();
	      List<User> user = userJDBCTemplate.getUser(userId,password);
	      
	   
	    	if(!user.isEmpty()){
	    		b=true;  
		    }
	    return b;
	}
}
