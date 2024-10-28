import { useState } from "react"
import "./Login.css"

function Login(){
    return(
        <>
        <div className="container">
            <h2>Welcome!</h2>
            <label>Email</label>
            <input type="text" placeholder="Email"/>
            <label>Password</label>
            <input type="password" placeholder="Password"/>
            <div className="buttons">
                <button className="submit">Login</button>
                <button className="submit">Register</button>
            </div>
        </div>
        </>
    );
}

export default Login