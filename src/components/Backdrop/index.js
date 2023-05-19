import "./style.css"

const Backdrop = ({ show, onClick }) => {
    return (
        show ? <div className="back__drop" onClick={onClick}></div> : null
    )
}

export default Backdrop