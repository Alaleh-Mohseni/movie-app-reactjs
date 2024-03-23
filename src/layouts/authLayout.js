import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <main>
            <div className="container col-xl-10 col-xxl-8 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-md-5 mx-auto col-lg-5 shadow-sm rounded-4 bg-body-tertiary border border-light">
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AuthLayout