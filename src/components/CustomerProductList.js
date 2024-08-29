import { useEffect, useState } from "react";
import axios from 'axios';
import './CustomerProductList.css';
import { Link } from "react-router-dom";
 
function CustomerProductList() { 
    
    const [productsArray, setProductsArray ] = useState([]); 
    

    useEffect(() => 
    {
        getProductsClick();
    }, []);

    function getProductsClick()
    {     
        let url = " http://localhost:3500/products"; 
        axios.get(url).then( (resData) => 
        {
            setProductsArray(resData.data);
        });       
    }
 
    let resultArray = productsArray.map((item, index) =>  
        <div  className="card">
            	<img src={item.productImage} height={100} width="100" />
                <br/>
				<span className="prdName">{item.productName}</span>  <br/>
				<span className="prdPrice"> ₹ {item.unitPrice.toFixed(2)}</span>
                <br/>
                <Link to={"/ProductDetails/"+item.id}>View Details</Link>				 
        </div>        
     );

    return (
        <> 
            {resultArray} 
        </>
    );
}

export default CustomerProductList;