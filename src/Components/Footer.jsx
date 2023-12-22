// Footer component for Clown Around site
import "./styles/Footer.css";

function Footer() {

    function returnToTop() {
        window.scrollTo(0,0);
    }

    return <footer className="footer">
        (C) Clown Around Games {new Date().getFullYear()}
        <p className="footer-return" onClick={returnToTop}>^Top^</p>
    </footer>
}

export default Footer;