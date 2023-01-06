import { React, useState } from "react";
import axios from "axios";


export const AuthPage = ({ isLogged, setIsLogged, userName, setUserName }) => {

    // states
    const [password, setPassword] = useState("");

    // handlers
    const handleUserName = (event) => {
        setUserName(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSignUp = () => {
        if (userName === "" || password === "") return console.log("Invalid credentials");
        const data = {
            userName: userName,
            password: password
        };
        axios.post("http://localhost:5000/auth/register", data)
        .then(res => console.log(res.data))
        .catch((err) => console.error(err));
    };

    const handleLogIn = () => {
        if (userName === "" || password === "") return console.log("Invalid credentials");
        const data = {
            userName: userName,
            password: password
        };
        axios.post("http://localhost:5000/auth/login", data)
        .then(res => {
            console.log(res.data);
            setIsLogged(true);
        })
        .catch((err) => console.error(err));
    };

    return (
        <form>
        <br></br>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">User</label>
                <input type="text" className="form-control" id="exampleUserInput" onChange={handleUserName} />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={handlePassword}/>
                <div id="passwordHelpBlock" className="form-text">Your password must be 6-16 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</div>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={() => handleSignUp()}>Sign Up</button>
                <button type="button" className="btn btn-primary" onClick={() => handleLogIn()}>Log In</button>
            </div>
        </form>
    );
};
 