import { useContext } from "react";
import { authContext } from "../../../../contexts/auth-provider";

import Backdrop from "../Backdrop";
import Login from "../../Login";
import Register from "../../Register";

import "./style.css";

const Modal = () => {

    const {login, register, handleModalClose} = useContext(authContext)

    return (
        <>
            <Backdrop showLogin={login} showRegister={register} onClick={handleModalClose} />
            <div
                className="modal__container rounded-4"
                style={{
                    display: register ? 'block' : login ? 'block' :'none',
                }}
            >
                {!register && <Login /> }
                {!login && <Register /> }
            </div>
        </>
    )
}

export default Modal