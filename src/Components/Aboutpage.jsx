// Info page about Clown Around Games

import Footer from "./Footer";
import Header from "./Header";
import "./styles/Aboutpage.css"

function Aboutpage() {
    return (
        <div className="aboutpage-root">
            <Header menuItems={["Games", "Home", "$About", "Contact"]}/>
            <div className="aboutpage-content global-content-box">
                <img className="aboutpage-photo" src="https://picsum.photos/500" alt="A portrait of the founder and lead designer of Clown Around Games" />
                <h1>About</h1>
                <p className="aboutpage-text">
                    Started in 2023 <br />
                    Childhood dream <br />
                    Created and designed by me <br />
                    In West coast USA <br />
                    plans on expanding to video games
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Aboutpage;