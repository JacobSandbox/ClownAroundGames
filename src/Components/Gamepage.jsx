// Game page
// page to display game info

import GameStats from "./GameStats";
import Header from "./Header";
import Footer from "./Footer";
import ImageCollage from "./ImageCollage";
import "./styles/Gamepage.css"

var imageData = '{"setup":"https://picsum.photos/400","zoom":"https://picsum.photos/300","action":"https://picsum.photos/200","detail":"https://picsum.photos/100"}';
// var imageData = '{"setup":"","zoom":"","action":"","detail":""}';

function Gamepage(props) {
    return (
        <div>
            <Header menuItems={["Home", "About", "Contact"]} />
            <div className="gamepage-body">
                <div className="gamepage-top">
                    <ImageCollage imageData={imageData} />
                    <GameStats />
                </div>
                <div className="gamepage-bottom">
                    <p className="gamepage-headline">HEADLINE</p>
                    <p className="gamepage-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut augue interdum, scelerisque purus a, pharetra ipsum. Cras congue molestie sapien, vestibulum mattis velit egestas et. Nullam nibh quam, fringilla et eros id, volutpat posuere nulla. Quisque nec leo lacus. Fusce ut leo tincidunt, venenatis diam nec, faucibus metus. Integer id nisl rutrum, pellentesque metus et, varius ante. Morbi egestas ornare ex ornare aliquet. Praesent ut massa sit amet ante molestie aliquet. Donec ex elit, dignissim aliquam porttitor at, finibus eget velit. Aenean eget lobortis sapien. Pellentesque dapibus tortor vel cursus bibendum. Proin sed auctor neque. Sed augue sem, vestibulum vitae tempor eu, luctus vel metus. Curabitur nec tortor ac tortor iaculis elementum dapibus sed erat.
                        Praesent in tincidunt dui. Suspendisse porttitor porta nisl, ut vestibulum tellus porttitor nec. Duis ac purus eu mi lacinia ullamcorper. Pellentesque nec blandit sem. Phasellus mattis vehicula lacus, non aliquam ligula lobortis a. Vestibulum mollis sapien congue augue malesuada, id molestie urna efficitur. Vivamus metus mauris, rutrum a efficitur ut, maximus sit amet ante. Vestibulum libero nisi, placerat non sapien eget, mollis luctus velit. Nullam id est elit. Suspendisse potenti.
                        Donec ex purus, mattis quis massa quis, sollicitudin pulvinar arcu. Sed venenatis ligula magna, ac mollis dui posuere vestibulum. Nam tristique id diam vitae dapibus. Nunc neque enim, facilisis in neque eu, porttitor pretium enim. Aliquam ac ante quis metus mattis imperdiet. Vivamus facilisis eleifend bibendum. Maecenas enim ipsum, laoreet cursus lacus condimentum, dictum porttitor libero.</p>
                    <p className="gamepage-credits">CREDITS <br/> Design and Art by ME ME ME <br/> Released 2023</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Gamepage;