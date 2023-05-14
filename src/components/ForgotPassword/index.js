import Wrapper from "../Wrapper";

const ForgotPassword = () => {
    return (
        <Wrapper>
            <div className="signin-inner bg-white p-lg-5 w-100 fmxw-500">
                <h3>Forgot your password?</h3>
                <p className="mb-4">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
                <form>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Your Email</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Recover Password</button>
                </form>
            </div>
        </Wrapper>
    );
};

export default ForgotPassword