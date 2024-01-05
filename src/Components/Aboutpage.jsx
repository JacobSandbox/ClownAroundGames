// Info page about Clown Around Games

import Footer from "./Footer";
import Header from "./Header";
import "./styles/Aboutpage.css"

function Aboutpage() {
    return (
        <div className="aboutpage-root">
            <Header menuItems={["Games", "Home", "Contact"]}/>
            <div className="aboutpage-content global-content-box">
                <h1>About</h1>
                <p>about the studio on stuff... aardvarks are the first animal listed in all dictionaries</p>
            </div>
            <Footer />
        </div>
    );
}

export default Aboutpage;