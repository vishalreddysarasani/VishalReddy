package assign.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
//import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Hello2
 */
@WebServlet("/Hello2")
public class Hello2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Hello2() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String usr = request.getParameter("userid").toLowerCase();
		String psw = request.getParameter("psw");
		try{
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/jdbctut", "root", "beehyv123");
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery("Select * FROM servlet where id='"+usr+"';");
			if(rs.next()){
				response.setContentType("text/html");
				request.setAttribute("error","Username already exists");
//				request.getRequestDispatcher("Login.jsp").forward(request, response); 
				request.getRequestDispatcher("login.jsp").forward(request, response);
			}
			else{
		        stmt.executeUpdate("insert into servlet values('"+usr+"','"+psw+"');"); 
//		        response.sendRedirect("Login.jsp");
		        response.sendRedirect("login.jsp");
			}
	        
		}
		catch(SQLException | ClassNotFoundException e){
			System.err.println("Error");
			e.printStackTrace();
		}
	}

}
