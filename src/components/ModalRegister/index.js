import { useContext } from "react";
import { authContext } from "../../contexts/auth-provider";

import "./style.css";

import Backdrop from "../Backdrop";
import Register from "../Register";

const ModalRegister = () => {

    const { register, handleModalClose } = useContext(authContext)

    return (
        <>
            <Backdrop show={register} onClick={handleModalClose} />
            < div
                className="modal__register rounded-4"
                style={{
                    display: register ? 'block' : 'none',
                }}
            >
                <Register />
            </div >
        </>
    )
}

export default ModalRegister