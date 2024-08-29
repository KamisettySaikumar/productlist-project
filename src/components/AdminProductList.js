import { useEffect, useState } from "react";
import axios from 'axios';
 
function AdminProductList() { 
    
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
         <tr key={index}>
             <td>   {item.id}  </td>
             <td>   {item.productName}  </td>
             <td>   {item.category}  </td>
             <td>   {item.description}  </td> 
             <td>   {item.unitPrice}  </td> 
             <td> <img width="100" src={item.productImage}  />  </td> 
             <td>                  
             </td>
        </tr>
     );

    return (
        <>
            <input type="button" value="Get Products" onClick={getProductsClick} />
          
            <hr/>

            <table border="2" width="600" cellspacing="0" cellpadding="5">
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Unit Price</th>
                    <th>Product Image</th>                   
                    <th></th>
                </tr>
                {resultArray}
            </table>
        </>
    );
}

export default AdminProductList;