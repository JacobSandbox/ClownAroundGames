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
                <h1 className="contactpage-header">Contact Us</h1>
                <p className="contactpage-content">Questions, comments, or concerns? Looking to sell our games in your store? Let us know what's on your mind!</p>
                <p className="contactpage-content">*Please provide as much info about your concerns as possible. This helps us more accurately respond to your issue(s)!</p>
                <div className="contactpage-mail">
                    <p>Message us at:</p>
                    <p>ClownAroundGames@gmail.com</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contactpage;