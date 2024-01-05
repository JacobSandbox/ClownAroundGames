// Contact page component for Clown Around Games site
import Footer from "./Footer";
import Header from "./Header";
import "./styles/Contactpage.css";

function Contactpage() {
    return (
        <div>
            <Header menuItems={["Games", "Home", "About"]} />
            <div className="contactpage-body">
                <h1>contact</h1>
            </div>
            <Footer />
        </div>
    );
}

export default Contactpage;