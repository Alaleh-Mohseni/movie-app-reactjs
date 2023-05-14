import { useState, useContext } from "react";
import { stateContext } from "../../contexts";

import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const {setLogged, setLogin} = useContext(stateContext)

    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
    });

    const [formError, setFormError] = useState({
        email: "",
        password: "",
    });


    const handleUserInput = (name, value) => {
        setFormInput({
            ...formInput,
            [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const getToken = async () => {
            try {
                const formData = new URLSearchParams();
                formData.append("grant_type", "password");
                formData.append("username", formInput.email);
                formData.append("password", formInput.password);

                const customConfig = {
                    headers: {
                        "content-type": "application/x-www-form-urlencoded"
                    }
                }

                const response = await axios.post("https://moviesapi.ir/oauth/token", formData, customConfig)
                console.log('response', response)

                const accessToken = await response.data.access_token
                localStorage.setItem('access-token', JSON.stringify(accessToken))

                const refreshToken = await response.data.refresh_token
                localStorage.setItem('refresh-token', JSON.stringify(refreshToken))

                setLogged(true)
                setLogin(false)

            } catch (error) {
                console.log(error);
            }
        }


        let inputError = {
            email: "",
            password: "",
        }

        if (!formInput.email && !formInput.password) {
            setFormError({
                ...inputError,
                email: "Please enter your email address",
                password: "Password should not be empty",
            });
            return
        }

        getToken()
        setFormError(inputError)
    };


    return (
        <form className="p-md-5" onSubmit={handleFormSubmit}>
            <h3 className="display-4 fw-bold lh-1 text-body-emphasis mb-5 text-center fs-1">Login</h3>
            <div className="form-floating mb-3">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    value={formInput.email}
                    onChange={({ target }) => handleUserInput(target.name, target.value)}
                />
                <label htmlFor="email">Email address</label>
                <p className="text-danger">{formError.email}</p>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={formInput.password}
                    onChange={({ target }) => handleUserInput(target.name, target.value)}
                />
                <label htmlFor="password">Password</label>
                <p className="text-danger">{formError.password}</p>
            </div>
            <div className="checkbox mb-3 d-flex justify-content-between">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
                <span className="text-body-secondary">
                    <Link className="text-decoration-none text-primary" to="/login/forgotpassword">Forgot Password?</Link>
                </span>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
            <hr className="mb-3 mt-4" />
            <p className="text-body-secondary">
                Don't have an account?
                <Link className="text-decoration-none text-primary" to="/register"> Register</Link>
            </p>
        </form>
    )
}

export default Login