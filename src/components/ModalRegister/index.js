import { useContext } from "react";
import { stateContext } from "../../contexts";

import "./style.css";

import Backdrop from "../Backdrop";
import Register from "../Register";

const ModalRegister = () => {

    const { register, handleModalClose } = useContext(stateContext)

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