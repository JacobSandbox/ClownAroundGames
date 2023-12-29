// Menu widget for header
import {Link} from "react-router-dom";
import "./styles/Menu.css";

function Menu ( props ) {
    let indexes = new Array(props.items.length).keys();
    let menuItems = [];
    for ( let i = 0; i < props.items.length; i++ ) {
        menuItems.push({label: props.items[i]});
    }
    return <div className="menu-container">
        <div className="menu-content">
            <div className="menu-item-container">
                {props.items.map(item => {
                    let location = `/${item.toLowerCase()}`;
                    if ( location === "/home" ) location = "/";
                    return <Link key={props.items.indexOf(item)} to={location}><button className="menu-item">{item}</button></Link>
                })}
                <p>Menu</p>
            </div>
        </div>
    </div>
}

export default Menu;