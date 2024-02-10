// Contact page component for Clown Around Games site
import Footer from "./Footer";
import Header from "./Header";
import "./styles/Contactpage.css";

function Contactpage() {
    function storeValue() {
        let sel = document.getElementsByClassName("contactpage-topic")[0];
        sel.dataset.chosen = sel.value;
    }

    return (
        <div>
            <Header menuItems={["Games", "Home", "About", "$Contact"]} />
            <div className="contactpage-body global-content-box">
                <h1>Contact Us</h1>
                <p className="contactpage-content">Questions, comments, or concerns? Looking to sell our games in your store? Let us know what's on your mind!</p>
                <p className="contactpage-content">*Please add a subject line which describes the reason for contacting us. This helps us more accurately respond to your issue(s)!</p>
                <p className="contactpage-content">
                {"Contact us at: "}
                    <a className="contactpage-mailto" href="mailto:contact@clownaroundgames.com">Contact@ClownAroundGames.com</a>
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Contactpage;