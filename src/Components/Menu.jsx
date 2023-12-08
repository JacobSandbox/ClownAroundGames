// Menu widget for header
import "./styles/Menu.css";

function Menu ( props ) {
    return <div className="menu-container">
        <div className="menu-content">
            <div className="menu-item-container">
                {props.items.map(item => {
                    return <button className="menu-item">{item}</button>
                })}
                <p>Menu</p>
            </div>
        </div>
    </div>
}

export default Menu;