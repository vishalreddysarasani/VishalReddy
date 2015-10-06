package assign.servlet;

import java.io.IOException;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;

import java.sql.SQLException;
import java.sql.Statement;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class ProductDetails
 */
@WebServlet("/ProductDetails")
public class ProductDetails extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ProductDetails() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String id = request.getParameter("productId");
		try{
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/jdbctut", "root", "beehyv123");
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery("Select * FROM sports where sports_id='"+ id +"';");
			HttpSession session = request.getSession();
			while(rs.next()){
				session.setAttribute("image", rs.getString("image"));
				session.setAttribute("name", rs.getString("name"));
				session.setAttribute("price", rs.getInt("price"));
			}
			
			response.sendRedirect("product_details2.jsp");
		}
		catch(SQLException | ClassNotFoundException e){
			System.err.println("Error");
			e.printStackTrace();
		}
	}

}
