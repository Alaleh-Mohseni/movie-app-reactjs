import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { httpClient } from "../../../services/Http";
import { REGISTER } from "../../../config/api-endpoints";
import { authContext } from "../../../contexts/auth-provider";

import "./style.css";

const Register = () => {

    const { setRegister, register } = useContext(authContext)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [nameError, setNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [error, setError] = useState('')
    const [allValid, setAllValid] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [submitted, setSubmitted] = useState(false);
    const [registerError, setRegisterError] = useState(false);


    const getHandler = (setter) => {
        return function handler(e) {
            setter(e.target.value)
        }
    }


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                name,
                email,
                password,
            }
            const response = await httpClient.post(REGISTER, payload)
            console.log('response', response.data);
            setSubmitted(true)
            setRegisterError(false)
        } catch (error) {
            setSubmitted(false)
            setRegisterError(true)
            setError(error.response.data.errors)
        }

        if (!name) {
            setNameError('Please enter your name')
        } else {
            setNameError('')
        }

        if (!email) {
            setEmailError('Please enter your email address')
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email address')
        } else if (email) {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Please enter a password')
        } else if (password.length < 8) {
            setPasswordError('Password should contains atleast 8 charaters')
        } else if (password) {
            setPasswordError('')
        }

        if (name.length !== 0 && email.length !== 0 && password.length !== 0) {
            setAllValid(true)
            setTimeout(() => {
                setAllValid(false)
            }, 3000);
        } else {
            setRegisterError(true)
            setTimeout(() => {
                setRegisterError(false)
            }, 3000);
        }

    };


    return (
        <form className="p-4 p-md-5" onSubmit={handleFormSubmit}>
            {submitted && allValid && (
                <div className="alert alert-success text-center">Success! Thank you for registering</div>
            )}
            {registerError && (
                <div className="alert alert-danger text-center messages">{error}</div>
            )}
            <h3 className="display-4 fw-bold fs-2 lh-1 text-body-emphasis mb-5 text-center">Create an account</h3>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="registerUsername"
                    placeholder="username"
                    name="username"
                    value={name}
                    onChange={getHandler(setName)}
                />
                <label htmlFor="registerUsername">Name</label>
                {nameError && <p className="text-danger messages">{nameError}</p>}
            </div>
            <div className="form-floating mb-3">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="registerEmail"
                    placeholder="name@example.com"
                    value={email}
                    onChange={getHandler(setEmail)}
                />
                <label htmlFor="registerEmail">Email address</label>
                {emailError && <p className="text-danger messages">{emailError}</p>}
            </div>
            <div className="form-floating mb-3">
                <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="form-control"
                    id="registerPassword"
                    placeholder="Password"
                    value={password}
                    onChange={getHandler(setPassword)}
                />
                <label htmlFor="registerPassword">Password</label>
                {passwordError && <p className="text-danger messages">{passwordError}</p>}
                <div className="checkbox">
                    <input
                        type="checkbox"
                        name="show"
                        id="show"
                        className="checkbox me-2 mt-3"
                        onClick={() => setShowPassword(!showPassword)}
                    />
                    <label htmlFor="show">Show password</label>
                </div>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit" value="submit">Sign up</button>
            <hr className="my-4" />
            <div className="d-flex justify-content-start align-items-center mt-4">
                <span className="fw-normal">
                    Already have an account?
                    <Link
                        className="text-decoration-none text-primary"
                        to="/login"
                        onClick={() => setRegister(!register)}
                    >
                        Login here
                    </Link>
                </span>
            </div>
        </form>
    )
}

export default Register
