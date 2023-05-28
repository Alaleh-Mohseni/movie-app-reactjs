import { useContext } from "react";
import { authContext } from "../../contexts/auth-provider";

import "./style.css";

import Backdrop from "../Backdrop";
import Login from "../Login";

const ModalLogin = () => {

    const {login, handleModalClose} = useContext(authContext)

    return (
        <>
            <Backdrop show={login} onClick={handleModalClose} />
            <div
                className="modal__login rounded-4"
                style={{
                    display: login ? 'block' : 'none',
                }}
            >
                <Login />
            </div>
        </>
    )
}

export default ModalLogin