package businesslogic;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import dao.UserJDBCTemplate;
import model.User;

@Component
public class Register {
	
	@Autowired
	private  UserJDBCTemplate userJDBCTemplate;

	public boolean registerUser(String userId,String password){
		boolean b = false;
		String generatedPassword = EncryptPassword.encryptPassword(password);
	      List<User> users = userJDBCTemplate.listUsers();
	    for(User id:users){
	    	if(id.getUserId().equalsIgnoreCase(userId)){
	    		b=true;  
		    }
	    }
	    if(!b){
	    	 userId = userId.toLowerCase();
    		userJDBCTemplate.create(userId, generatedPassword);
	    }
	    return b;
	}
}
