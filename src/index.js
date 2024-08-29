import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductDetails from './ProductDetails';

 

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminProductList from './components/AdminProductList';
import CustomerProductList from './components/CustomerProductList';
import Found from './components/Found';
// import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import NavBar from './components/NavBar';
import ShoppingCart from './components/ShoppingCart';
import ProductsByCategory from './components/ProductsByCategory';


const routing = (
  <Router>

    <div style={  {textAlign : "center"}  }>
      {/* <h1>
      < marquee behavior="scroll" direction="left" scrollamount="5">e-Commerce Application using React JS</marquee>
      // </h1> */}
      <hr className='hr'/>
      <NavBar /> 
      <hr />
      <p></p>
    </div>

{/* 
      <Link to="/">Home</Link>  | 
      <Link to="/Admin">Admin</Link>  | 
      <Link to="/AllProducts">Products</Link>  | 
      <hr />
    </div>  */}


    <Routes> 
      <Route path="/" element={<App />} />
      <Route path="/Admin" element={<AdminProductList/>} />     
      <Route path="/AllProducts" element={<CustomerProductList />} />  
      <Route path="/Login" element={<Login />} />           
      <Route path="/ShoppingCart" element={<ShoppingCart />} />           
      <Route path="/ProductByCategory/:id" element={<ProductsByCategory />} />  
      <Route path="/ProductDetails/:id" element={<ProductDetails />} />    
      <Route path="*" element={<Found/>} />
      
    </Routes>
  </Router>

);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
