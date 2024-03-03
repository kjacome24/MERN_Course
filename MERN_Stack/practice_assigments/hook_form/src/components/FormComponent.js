import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormComponent.css';

const FormComponent = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");



    return (
        <div>
            <form>
                <div className="row mb-3 align-items-center">
                    <label className="col-sm-4 col-form-label" >First Name: </label>
                    <div className="col-sm-8">
                        <input className="form-control" type="text" onChange={(e) => setFirstName(e.target.value)}  value={firstName}/>
                    </div>
                </div>
                <div className="row mb-3 align-items-center">
                    <label className="col-sm-4 col-form-label" >Last Name: </label>
                    <div className="col-sm-8">
                        <input className="form-control" type="text" onChange={(e) => setLastName(e.target.value)}  value={lastName}/>
                    </div>
                </div>
                <div className="row mb-3 align-items-center">
                    <label className="col-sm-4 col-form-label" >Email: </label>
                    <div className="col-sm-8">
                        <input className="form-control" type="text" onChange={(e) => setEmail(e.target.value)}  value={email}/>
                    </div>
                </div>
                <div className="row mb-3 align-items-center">
                    <label className="col-sm-4 col-form-label" >First Name: </label>
                    <div className="col-sm-8">
                        <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)}  value={password}/>
                    </div>
                </div>
                <div className="row mb-3 align-items-center">
                    <label className="col-sm-4 col-form-label" >Confirm Password: </label>
                    <div className="col-sm-8">
                        <input className="form-control" type="password" onChange={(e) => setConfirmPassword(e.target.value)}  value={confirmPassword}/>
                    </div>
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