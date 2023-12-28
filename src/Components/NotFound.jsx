// 404 error page

import { Link } from "react-router-dom";
import "./styles/NotFound.css";

function NotFound() {
    return (
        <div className="not-found-content">
            <h1 className="not-found-404">404</h1>
            <h2>...No page here...</h2>
            <Link to="/">
                <p className="not-found-link">{"<-"} Home</p>
            </Link>
        </div>
    )
}

export default NotFound;