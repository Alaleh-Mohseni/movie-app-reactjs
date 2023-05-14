import "./style.css"

const Backdrop = ({ show, onClick }) => {
    return (
        show ? <div className="back_drop" onClick={onClick}></div> : null
    )
}

export default Backdrop