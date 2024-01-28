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
                <div className="aboutpage-text">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel luctus eros, quis scelerisque est. Aliquam erat volutpat. Morbi eget metus nec diam tempor ornare eget ac sem. Proin id massa id justo mollis maximus. Aliquam et sem erat. Ut euismod placerat risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tincidunt scelerisque ligula, nec ultrices nisl accumsan nec. In molestie eros non lectus vehicula, non vestibulum dui ornare. Ut ut congue sem. Aliquam sodales urna non orci fermentum dignissim. Integer convallis felis lectus, et tincidunt ligula varius a. Sed vitae auctor magna. Mauris lobortis sagittis odio sed imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec luctus vulputate elit id rhoncus. Morbi vitae semper metus, nec mollis massa. In non nunc sodales, sollicitudin quam vitae, semper metus. Maecenas porta massa placerat tellus placerat, sed eleifend mi sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris accumsan, nibh in ullamcorper lacinia, lacus metus interdum tortor, quis ullamcorper mi nulla efficitur turpis. Proin non facilisis sapien. Morbi posuere porta nibh, in placerat nisl mollis ut. Proin ullamcorper suscipit sodales. Vivamus pellentesque, nulla sed porttitor ullamcorper, mauris libero rutrum lectus, ac tincidunt orci nunc eget tortor.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Aboutpage;