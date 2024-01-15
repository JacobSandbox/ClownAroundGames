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
                <div className="contactpage-content">
                    <p>Questions, comments, concerns? Issue with a product? Want to sell our games in your store? Message us!</p>
                    <p>Please...</p>
                    <ul>
                        <li>a</li>
                        <li>b</li>
                        <li>c</li>
                        <li>d</li>
                    </ul>
                    <label htmlFor="topic">What's on your mind?</label>
                    <a className="contactpage-mailto" href="">[ \@/ ] Mail Link</a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contactpage;