import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";

const Register = () => {
    
    const [formInput, setFormInput] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [formError, setFormError] = useState({
        username: "",
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

        const postRequest = async () => {
            try {
                const payload = {
                    email: formInput.email,
                    password: formInput.password,
                    name: formInput.username,
                }
                const response = await axios.post(`https://moviesapi.ir/api/v1/register`, payload)
                console.log('response', response.data);
            } catch (error) {
                console.log(error);
                console.log({ errResp: error.response })
            }
        }


        let inputError = {
            username: "",
            email: "",
            password: "",
        }

        if (!formInput.username && !formInput.email && !formInput.password) {
            setFormError({
                ...inputError,
                username: "Please enter your name",
                email: "Please enter your email address",
                password: "Please enter a password",
            });
            return
        }

        if (formInput.password.length < 8) {
            setFormError({
                ...inputError,
                password: "Password should contains atleast 8 charaters",
            });
            return
        }

        postRequest()
        setFormError(inputError)
    };


    return (
        <form className="p-4 p-md-5" onSubmit={handleFormSubmit}>
            <h3 className="display-4 fw-bold fs-2 lh-1 text-body-emphasis mb-5 text-center">Create an account</h3>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="registerUsername"
                    placeholder="username"
                    name="username"
                    value={formInput.username}
                    onChange={({ target }) => handleUserInput(target.name, target.value)}
                />
                <label htmlFor="registerUsername">Name</label>
                <p className="text-danger">{formError.username}</p>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="registerEmail"
                    placeholder="name@example.com"
                    value={formInput.email}
                    onChange={({ target }) => handleUserInput(target.name, target.value)}
                />
                <label htmlFor="registerEmail">Email address</label>
                <p className="text-danger">{formError.email}</p>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="registerPassword"
                    placeholder="Password"
                    value={formInput.password}
                    onChange={({ target }) => handleUserInput(target.name, target.value)}
                />
                <label htmlFor="registerPassword">Password</label>
                <p className="text-danger">{formError.password}</p>
            </div>
            <div className="checkbox mb-3">
                <label htmlFor="terms">
                    <input type="checkbox" value="terms" className="me-2" />I agree to the terms and conditions
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit" value="submit">Sign up</button>
            <hr className="my-4" />
            <div className="d-flex justify-content-start align-items-center mt-4">
                <span className="fw-normal">
                    Already have an account?
                    <Link className="text-decoration-none text-primary" to="/login"> Login here</Link>
                </span>
            </div>
        </form>
    )
}

export default Register
