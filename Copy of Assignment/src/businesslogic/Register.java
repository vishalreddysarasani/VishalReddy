package businesslogic;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import model.User;
import model.UserJDBCTemplate;

@Component
public class Register {
	
	@Autowired
	private  UserJDBCTemplate userJDBCTemplate;

	public boolean registerUser(String userId,String password){
		boolean b = false;
	      List<User> users = userJDBCTemplate.listUsers();
	    for(User id:users){
	    	if(id.getUserId().equalsIgnoreCase(userId)){
	    		b=true;  
		    }
	    }
	    if(!b){
	    	 userId = userId.toLowerCase();
    		userJDBCTemplate.create(userId, password);
	    }
	    return b;
	}
}
