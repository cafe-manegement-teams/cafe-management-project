import React, {useState} from 'react';
import { Link } from "react-router-dom";



function Login(){
  const [details,setDetails]=useState({username:"",password:""});
  const submitHandler = e => {
        e.preventDefault();
        Login(details);}
  const adminUser={
    username: "Admin",
    password: "123"
  }
  const[user,setUser]= useState({username:"",password:""});
  const[error,setError]= useState("");
  const Login = details => {
    console.log(details);

    if(details.username === adminUser.username && details.password === adminUser.password){
    console.log("Logged in");
    setUser({
      username: details.username,
      password: details.password
    });}
    else {
      console.log("Username or Password is wrong");
      setError("Username or Password is wrong")
    }
  }
  return (
    <div className="Login">
      {(user.password !=="")?(
        <div className="welcome">
          <h2>welcome,<span>{user.username}</span></h2>
          <Link to="/home">Home</Link>
        </div>
      ):(
        <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Login</h2>
            {(error !== "")? (<div className ="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" onChange={e => setDetails({...details,username: e.target.value})} value ={details.username}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" id="password"onChange={e => setDetails({...details,password: e.target.value})} value ={details.password}/>
            </div>
            
            <button type="submit" class="btn btn-primary">login</button>
            
        </div>
    </form>
      )}
    </div>
  )
}
export default Login;