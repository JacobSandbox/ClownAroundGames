// Footer component for Clown Around site
import "./styles/Footer.css";

function Footer() {
    return <footer className="footer">
        (C) Clown Around Games {new Date().getFullYear()}
        <p className="footer-return">top^</p>
    </footer>
}

export default Footer;