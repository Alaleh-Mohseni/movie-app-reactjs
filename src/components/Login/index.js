import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { stateContext } from "../../contexts";
import { httpClient } from "../../services/Http";
import { LOGIN } from "../../config/api-endpoints";
import { set } from "../../services/CreateStorage";


const Login = () => {

    const { setLogged, setLogin } = useContext(stateContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')


    const getHandler = (setter) => {
        return function handler(e) {
            setter(e.target.value)
        }
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();

        const getToken = async () => {
            try {
                const formData = new URLSearchParams();
                formData.append("grant_type", "password");
                formData.append("username", email);
                formData.append("password", password);

                const customConfig = {
                    headers: {
                        "content-type": "application/x-www-form-urlencoded"
                    }
                }

                const response = await httpClient.post(LOGIN, formData, customConfig)
                console.log('response', response)

                const accessToken = await response.data.access_token
                const refreshToken = await response.data.refresh_token
                set('access_token', accessToken)
                set('refresh_token', refreshToken)


                setLogged(true)
                setLogin(false)

            } catch (error) {
                console.log(error);
            }
        }

        if (!email) {
            setEmailError('Please enter your email address')
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Please enter a password')
        } else {
            setPasswordError('')
        }

        getToken()
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
                    value={email}
                    onChange={getHandler(setEmail)}
                />
                <label htmlFor="email">Email address</label>
                {emailError && <p className="text-danger" style={{ fontSize: '13px' }}>{emailError}</p>}
            </div>
            <div className="form-floating mb-3">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={getHandler(setPassword)}
                />
                <label htmlFor="password">Password</label>
                {passwordError && <p className="text-danger" style={{ fontSize: '13px' }}>{passwordError}</p>}
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