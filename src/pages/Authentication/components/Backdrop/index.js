import "./style.css"

const Backdrop = ({ showLogin, showRegister, onClick }) => {
    return showLogin || showRegister ? <div className="back__drop" onClick={onClick}></div> : null
}

export default Backdrop