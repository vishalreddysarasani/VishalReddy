package businesslogic;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import dao.UserJDBCTemplate;
import model.User;


@Component
public class Validation {
	@Autowired
	private UserJDBCTemplate userJDBCTemplate;

	public  boolean validateUser(String userId,String password){
		boolean b = false;
		String generatedPassword = EncryptPassword.encryptPassword(password);
		userId = userId.toLowerCase();
	      List<User> user = userJDBCTemplate.getUser(userId,generatedPassword);
	      
	   
	    	if(!user.isEmpty()){
	    		b=true;  
		    }
	    return b;
	}
}
