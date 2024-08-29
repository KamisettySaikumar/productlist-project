import {useState}  from 'react';
import { useNavigate } from 'react-router-dom';

function Login()
{
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const navigate = useNavigate();


    function loginClick()
    {
           if(uname == "admin" && password == "admin123") 
           {
                // setResult("Welcome to Admin");
                sessionStorage.setItem("USER_ID", uname);
                navigate("/");
           }
           else
           {
                setResult("Invalid User Id or password");
           }
    }

    return (<>

       
       <fieldset>
            <legend>User Login</legend>

            User Name :  
            <input  type="text"  onChange={ (e) => setUname(e.target.value) } />
            
            <br/><br/>
            Password:
            <input  type="password"  onChange={ (e) => setPassword(e.target.value) } />
        <br/><br/>
        <input type="button"  onClick={loginClick}  value="Login" />
       <p style={{color:"red"}}>{result}</p>
       </fieldset>
        
    
    
    </>);

}


export default Login;