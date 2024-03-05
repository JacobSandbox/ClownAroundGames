// Info page about Clown Around Games

import Footer from "./Footer";
import Header from "./Header";
import "./styles/Aboutpage.css"
import portrait from "./images/bio_pic.JPG";
import img from "./images/logo.png";

function Aboutpage() {
    return (
        <div className="aboutpage-root">
            <Header menuItems={["Games", "Home", "$About", "Contact"]}/>
            <div className="aboutpage-content global-content-box">
                <img className="aboutpage-photo" src={portrait} alt="A portrait of the founder and lead designer of Clown Around Games" />
                <h1>About</h1>
                <p className="aboutpage-text">
                    My name is Jacob Salemi and in 2023 I created Clown Around Games.
                    Born on the West Coast, USA, I have loved playing games as long as I can remember. Enraptured by each new rule and each little piece, my love for them grew over countless family game nights (most of which I started!) and each new game discovered. Whether it was card games or a board games, a tabletop or a video games, one thing I knew for certain: I had to make my own. <br />
                    This studio is the realization of that childhood dream. <br />
                    So what do I do here? I make games. Whatever kind I'm inspired to make! From art to rules, I create all of it. (But would love to partner with other creators in the future!) <br />
                    Independently produced and manufactured in the USA, my games are made for the love of gaming and the joy they bring to us. <br />
                    Clown Around Games is proud to present its creations to you and I hope you enjoy them!
                    I wish to keep learning and creating much more.
                    <br />
                    <br />
                    Here's to your next game night!
                    <br />
                    <br />
                    <br />

                    <img src={img} alt="Logo of purple jester hat with star and moon pattern"/>
                </p>
                <p className="aboutpage-note">(NOTE: Jacob Salemi is not actually a monkey but hopes to be one someday...)</p>
            </div>
            <Footer />
        </div>
    );
}

export default Aboutpage;