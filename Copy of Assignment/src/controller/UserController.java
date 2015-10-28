package controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import businesslogic.ProductDescription;
import businesslogic.Register;
import businesslogic.Validation;
import model.CartProduct;
import model.Product;
import model.ProductJDBCTemplate;
import model.User;

@Controller
public class UserController {
	@Autowired
	private Validation validation;
	@Autowired
	private Register register;
	@Autowired
	private ProductDescription productDescription;
	@Autowired
	private ProductJDBCTemplate productJDBCTemplate;

   @RequestMapping(value = "/user.do", method = RequestMethod.GET)
   public ModelAndView user() {
      return new ModelAndView("login", "command", new User());
   }
   
   @RequestMapping(value = "/addUser.do", method = RequestMethod.POST)
   public String addUser(@ModelAttribute("SpringLogin")User user, HttpServletRequest request,
   ModelMap model) {
      if(validation.validateUser(user.getUserId(), user.getPassword())){
    	  HttpSession session = request.getSession();
    	  session.setAttribute("userId", user.getUserId());
    	  session.setAttribute("loggedIn", "yes");
	      return "redirect:shopping_cart.jsp";
      }
      else{
    	  model.addAttribute("error", "Invalid Username or Password");
    	  model.addAttribute("command", new User());
    	  return  "login";
      }
   }
   @RequestMapping(value = "/logout.do", method = RequestMethod.GET)
   public String logout(@ModelAttribute("SpringLogin")User user, HttpServletRequest request,
   ModelMap model) {
    	  HttpSession session = request.getSession();
    	  session.invalidate();
    	  
    	  model.addAttribute("command", new User());
    	  return  "login";
    	  
   }
   @RequestMapping(value = "/register.do", method = RequestMethod.POST)
   public String register(@ModelAttribute("SpringLogin")User user, 
   ModelMap model) {
	   
      if(register.registerUser(user.getUserId(), user.getPassword())){
    	  model.addAttribute("error1", "User already exists");
    	  model.addAttribute("command", new User());
	      return "login";
      }
      else{
    	  
    	  model.addAttribute("command", new User());
    	  return  "login";
      }
   }
   @RequestMapping(value = "/product.do", method = RequestMethod.GET)
	   public String productDetails(@RequestParam(value="productId") String productId, ModelMap model){
	   
	       Product product = productDescription.getDetails(productId);
	       model.addAttribute("productId", product.getId());
	       model.addAttribute("image", product.getImage());
	       model.addAttribute("name", product.getName());
	       model.addAttribute("price", product.getPrice());
	       
	       return "product_details2";
		  
	   }
   @ResponseBody
   @RequestMapping(value="/sports.do")
   	   public List<Product> sports(){
	      
	      List<Product> products = productJDBCTemplate.sportsProducts();
	      
	      return products;
   }
   @ResponseBody
   @RequestMapping(value="/home.do")
   	   public List<Product> home(){
	      
	      List<Product> products = productJDBCTemplate.homeProducts();
	      
	      return products;
   }
   @ResponseBody
   @RequestMapping(value="/books.do")
   	   public List<Product> books(){
	      
	      List<Product> products = productJDBCTemplate.booksProducts();
	      
	      return products;
   }
   @ResponseBody
   @RequestMapping(value="/electronics.do")
   	   public List<Product> electronics(){
	      
	      List<Product> products = productJDBCTemplate.electronicsProducts();
	      
	      return products;
   }
   @ResponseBody
   @RequestMapping(value="/clothing.do")
   	   public List<Product> clothing(){
	      
	      List<Product> products = productJDBCTemplate.clothingProducts();
	      
	      return products;
   }
   @RequestMapping(value = "/addToCart.do", method = RequestMethod.GET)
   public String addToCart(@RequestParam(value="productId") String productId,HttpServletRequest request, ModelMap model){
	   HttpSession session = request.getSession();
       Product product = productDescription.getDetails(productId);
       String id = (String)session.getAttribute("userId");
       if(id==null){
    	   id = "nouser";
       }
       productJDBCTemplate.addToCart(product.getId(), product.getName(), product.getImage(), product.getPrice(),id,product.getBrand());
       
       return "my_cart";
	  
   }
   @RequestMapping(value = "/deleteFromCart.do", method = RequestMethod.GET)
   public String deleteFromCart(@RequestParam(value="cartId") String cartId,HttpServletRequest request, ModelMap model){
	   
	   productJDBCTemplate.deleteCart(Integer.parseInt(cartId));
       
       return "my_cart";
	  
   }
   @ResponseBody
   @RequestMapping(value="/cart.do")
   	   public List<CartProduct> cart(HttpServletRequest request){
	   HttpSession session = request.getSession();
	   String id = (String)session.getAttribute("userId");
       if(id==null){
    	   id = "nouser";
       }
	      List<CartProduct> products = productJDBCTemplate.getCart(id);
	      
	      return products;
   }
   
}
