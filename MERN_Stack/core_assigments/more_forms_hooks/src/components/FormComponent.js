import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormComponent.css';

const FormComponent = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    let [titleError, setTitleError] = useState({firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : ""});

    const handleTitle = (e) => {
        if (e.target.name === "firstName") {
            setFirstName(e.target.value);
            if(e.target.value.length < 2) {
                setTitleError({...titleError,firstName: "First Name must be at least 2 characters"})
                    
            } else {
                setTitleError({...titleError, firstName: ""});
            }
        } else if (e.target.name === "lastName") {
            setLastName(e.target.value);
            if(e.target.value.length < 2) {
                setTitleError({...titleError,lastName: "Last Name must be at least 2 characters"});
            } else {
                setTitleError({...titleError, lastName: ""});
            }
        } else if (e.target.name === "email") {
            setEmail(e.target.value);
            if(e.target.value.length < 5 || !e.target.value.includes("@") || !e.target.value.includes(".")){
                setTitleError({...titleError, email: "Email must be at least 5 characters and contain an @ and a ."});
            } else {
                setTitleError({...titleError, email: ""});
            }
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
            if(e.target.value.length < 8) {
                setTitleError({...titleError,password: "Password must be at least 8 characters"});
            } else {
                setTitleError({...titleError,password: ""});
            }
        } else if (e.target.name === "confirmPassword") {
            setConfirmPassword(e.target.value);
            if(e.target.value !== password) {
                setTitleError({...titleError,confirmPassword: "Passwords must match"});
            } else {
                setTitleError({...titleError,confirmPassword: ""});
            }}
        console.log(titleError);

        }


    return (
        <div>
            <form>
                <div className="row mb-3 align-items-center">
                    <label className="col-sm-4 col-form-label" >First Name: </label>
                    <div className="col-sm-8">
                        <input className="form-control" name='firstName' type="text" onChange={handleTitle}  value={firstName}/>
                    </div>
                    { titleError.firstName !== "" ?
                    <p className="text-danger">{titleError.firstName}</p> : ""}
                </div>
                {/* {firstName.length < 2 && firstName.length >= 0 ? <p className="text-danger">First Name must be at least 2 characters</p> : ""} */}
                <div className="row mb-3 align-items-center">
                    <label className="col-sm-4 col-form-label" >Last Name: </label>
                    <div className="col-sm-8">
                        <input className="form-control" name='lastName' type="text" onChange={handleTitle}  value={lastName}/>
                    </div>
                    { titleError.lastName !== "" ? <p className="text-danger">{titleError.lastName}</p> : ""}
                </div>
                {/* {lastName.length < 2 && lastName.length >= 0 ? <p className="text-danger">Last Name must be at least 2 characters</p> : ""} */}
                <div className="row mb-3 align-items-center">
                    <label className="col-sm-4 col-form-label" >Email: </label>
                    <div className="col-sm-8">
                        <input className="form-control" name='email' type="email" onChange={handleTitle}  value={email}/>
                    </div>
                    { titleError.email !== "" ? <p className="text-danger">{titleError.email}</p> : ""}
                </div>
                <div className="row mb-3 align-items-center">
                    <label className="col-sm-4 col-form-label" >Password: </label>
                    <div className="col-sm-8">
                        <input className="form-control" name='password' type="password" onChange={handleTitle}  value={password}/>
                    </div>
                    { titleError.password !== "" ? <p className="text-danger">{titleError.password}</p> : ""}
                </div>
                <div className="row mb-3 align-items-center">
                    <label className="col-sm-4 col-form-label" >Confirm Password: </label>
                    <div className="col-sm-8">
                        <input className="form-control" name='confirmPassword' type="password" onChange={handleTitle}  value={confirmPassword}/>
                    </div>
                    { titleError.confirmPassword !== "" ? <p className="text-danger">{titleError.confirmPassword}</p> : ""}
                </div>

            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
}

export default FormComponent;