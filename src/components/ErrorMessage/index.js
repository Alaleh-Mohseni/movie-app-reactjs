import "./style.css";

const ErrorMessage = ({ click }) => {
    
	const clickHandler = () => {
        window.location.reload()
	}

    return (
        <div className="error">
            <h3>Ooops!</h3>
            <p>Something went wrong, sorry about that.</p>
            <button className="error-btn" onClick={clickHandler}>Let's try again</button>
        </div>
    )
}

export default ErrorMessage