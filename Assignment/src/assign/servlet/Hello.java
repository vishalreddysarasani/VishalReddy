package assign.servlet;

//import java.io.File;
//import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
//import java.util.Enumeration;
//import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


/**
 * Servlet implementation class Hello
 */
@WebServlet("/Hello")
public class Hello extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Hello() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
//	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		String usr = request.getParameter("userid");
		String psw = request.getParameter("psw");
		PrintWriter out=response.getWriter();
		try{
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/jdbctut", "root", "beehyv123");
			Statement stmt = conn.createStatement();
	        ResultSet rs = stmt.executeQuery("Select * FROM servlet where id='"+usr+"';");
	        if (rs.next()){
	        	String s = rs.getString("password");
	        	if(s.equals(psw)){
	        		response.setContentType("text/html");
	        		HttpSession session=request.getSession();  
			        session.setAttribute("name",usr.toLowerCase());  
//			        request.getRequestDispatcher("Successfull_login.jsp").forward(request, response);
			        request.getRequestDispatcher("shopping_cart.jsp").forward(request, response);
			        
	        	}
	        	else{
	        		response.setContentType("text/html");
					request.setAttribute("error","Password is incorrect");
//					request.getRequestDispatcher("Login.jsp").forward(request, response);
					request.getRequestDispatcher("login.jsp").forward(request, response); 
	        	}
	        }
	        else{
	        	response.setContentType("text/html");
				request.setAttribute("error","Invalid Username");
//				request.getRequestDispatcher("Login.jsp").forward(request, response); 
				request.getRequestDispatcher("login.jsp").forward(request, response); 
	        }
	        conn.close();
	        out.close();
	        
		}
		catch(SQLException | ClassNotFoundException e){
			System.err.println("Error");
			e.printStackTrace();
		}
		catch(NullPointerException e){
			
		}
		
			
		
	}

}
