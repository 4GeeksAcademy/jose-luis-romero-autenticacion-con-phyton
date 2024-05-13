import React,{useEffect, useState, useContext}from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import { Context } from "../store/appContext";

const Login=()=>{
    const {store, actions} =useContext(Context);
    /* ------------------------------------------- */

    /* Estas lineas creamos los useState de los inputs */
    const[name, setName]= useState("");
	const[password, setPassword]= useState("")
    /* ------------------------------------------------- */

    const handleSubmit = e =>{
		e.preventDefault();
        
    }

    return(
        <div className="container">
                <form >
                    <div className="content">
                        <header>LOGIN</header>
                            <p>Please enter your Login and your password</p>

                                <div className="input-group mb-4 mt-4" id="field">
                                    <span className="input-group-text span-email" id="email">
                                        <i className="bi bi-envelope-at"></i>
                                    </span>
                                    <input type="text" 
                                    className="inputs form-control"   
                                    placeholder="E-mail" 
                                    value={name}
					                onChange={e =>setName(e.target.value)}
                                    />
                                    
                            </div>
                            <div className="input-group mb-3 " id="field">
                                    <span className="input-group-text span-pass" id="password">
                                        <i className="bi bi-lock-fill"></i>
                                    </span>
                                    <input type="password" 
                                    className="inputs form-control"  
                                    placeholder="Password" 
                                    value={password}
					                onChange={e =>setPassword(e.target.value)}
                                    />
                            </div>
                            <Link to="/private">
						        <button className="btn btn-success mb-5 ">LOGIN</button>
					        </Link>
                        <div>
                            <p className="info-signup">Don`t have an account ?</p>
                            <Link to="/signup">
                                    <button className="redirect" type="submit">SIGNUP NOW</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
       
    )
}
export default Login;