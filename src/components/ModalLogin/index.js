import { useContext } from "react"
import { stateContext } from "../../contexts"

import "./style.css"
import Backdrop from "../Backdrop"
import Login from "../Login"

const ModalLogin = () => {

    const {login, handleModalClose} = useContext(stateContext)

    return (
        <>
            <Backdrop show={login} onClick={handleModalClose} />
            <div
                className="modal-login rounded-4"
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