// Menu widget for header
import {Link} from "react-router-dom";
import "./styles/Menu.css";

function Menu ( props ) {
    return <div className="menu-container">
        <div className="menu-content">
            <div className="menu-item-container">
                {props.items.map((item,index) => {
                    let location = `/${item.toLowerCase()}`;
                    if ( location === "/home" ) location = "/";
                    if ( location === "/games" ) location = "/games/all";
                    if ( item.charAt(0) === "$" ) return <p key={index} className="menu-current">{`-${item.slice(1)}-`}</p>
                    return <Link key={index} to={location}><button className="menu-item">{item}</button></Link>
                })}
                <p className="menu-label">Menu</p>
            </div>
        </div>
    </div>
}

export default Menu;