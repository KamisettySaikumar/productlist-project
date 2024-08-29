import { Link } from "react-router-dom";

function  NavBar(){
    return( 
    <>

<div class="container">  

<nav   class="fixed-top navbar navbar-expand-sm bg-dark navbar-dark">

  
  <a class="navbar-brand" href="/">		
		<i style={{fontSize:"40px"}} class="bi bi-house-heart"></i>    
  </a>
  
  
  <button 	class="navbar-toggler" type="button" 
					data-bs-toggle="collapse" 
					data-bs-target="#div1">
    <span class="navbar-toggler-icon"></span>
  </button>
    
   
  <div class="collapse navbar-collapse" id="div1">
  
    <ul class="navbar-nav">
      <li class="nav-item">     
        <Link class="nav-link" to="/Admin">Admin</Link>
      </li>
      <li class="nav-item">      
        <Link class="nav-link" to="/AllProducts">Products</Link>
      </li>
      <li class="nav-item">      
        <Link class="nav-link" to="/ShoppingCart">Cart</Link>
      </li>

    
    <li class="nav-item dropdown">
      <a 	class="nav-link dropdown-toggle" href="#" id="navbardrop" 
			data-bs-toggle="dropdown">
       Categories
      </a>
      <div class="dropdown-menu">       
        <Link class="dropdown-item" to="/ProductByCategory/Smart">Smart Watches</Link>
        <Link class="dropdown-item" to="/ProductByCategory/Classic">Classic Watches</Link>
         
      </div>   
	</li>
	
	</ul>
  </div>  
  
</nav> 

</div>        
    </>);
  };


 export default NavBar; 