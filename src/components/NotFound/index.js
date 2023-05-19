import { Link } from "react-router-dom";
import "./style.css";

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found__body">
                <div className="not-found__404">
                    <h1>404</h1>
                </div>
                <h2>Sorry, but the page you requested was not found</h2>
                <Link className="not-found__link" to="/">
                    <button className="not-found__btn">Go Home</button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound