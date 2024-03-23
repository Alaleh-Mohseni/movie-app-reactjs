import "./style.css";

const ErrorMessage = ({refetch}) => {

    return (
        <div className="error">
            <h3>Ooops!</h3>
            <p>Something went wrong, sorry about that.</p>
            <button className="error__btn" onClick={refetch}>Let's try again</button>
        </div>
    )
}

export default ErrorMessage