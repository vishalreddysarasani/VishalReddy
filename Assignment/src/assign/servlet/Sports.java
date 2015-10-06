package assign.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Sports
 */
@WebServlet("/Sports")
public class Sports extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Sports() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try{
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/jdbctut", "root", "beehyv123");
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery("Select * FROM sports;");
			ResultSetMetaData rsmd = (ResultSetMetaData) rs.getMetaData();
			JSONArray json = new JSONArray();
			List<String> keys=new ArrayList<String>() ;
			int numColumns = rsmd.getColumnCount();
			while(rs.next()){
				JSONObject obj =new JSONObject();
				keys.add(rs.getString("sports_id"));
				for (int i=1; i<numColumns; i++) {
			        String columnName = rsmd.getColumnName(i);
			        if((rsmd.getColumnType(i)==java.sql.Types.VARCHAR)&&(columnName != "sports_id")){
			        obj.put(columnName, rs.getString(columnName));
			        }
			        else if(rsmd.getColumnType(i)==java.sql.Types.INTEGER){
			        	obj.put(columnName, rs.getInt(columnName));
			        }
			        else{
			        	continue;
			        }
				}
				json.put(obj);
			}
			JSONObject Sports_products = new JSONObject();
			for(int i=0;i<json.length();i++){
				Sports_products.put(keys.get(i), json.getJSONObject(i));
			}
			PrintWriter out =response.getWriter();
			out.println(Sports_products);
		}
		catch(SQLException | ClassNotFoundException e){
			System.err.println("Error");
			e.printStackTrace();
		}
		catch(JSONException e){
			System.err.println("Json Error");
		}
	}
}
