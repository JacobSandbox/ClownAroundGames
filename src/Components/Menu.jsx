// Menu widget for header
import {Link} from "react-router-dom";
import "./styles/Menu.css";

function Menu ( props ) {
    return <div className="menu-container">
        <div className="menu-content">
            <div className="menu-item-container">
                {props.items.map(item => {
                    let location = `/${item.toLowerCase()}`;
                    if ( location === "/home" ) location = "/";
                    console.log(location);
                    return <Link to={location}><button className="menu-item">{item}</button></Link>
                })}
                <p>Menu</p>
            </div>
        </div>
    </div>
}

export default Menu;