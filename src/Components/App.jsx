import Homepage from "./Homepage";
import Gamepage from "./Gamepage";
import Librarypage from "./Librarypage";
import { createHashRouter, RouterProvider } from "react-router-dom";
import NotFound from "./NotFound";
// import ResetScroll from "./ResetScroll";
import "./styles/App.css";
import Contactpage from "./Contactpage";
import Aboutpage from "./Aboutpage";

var data = 
{
    photos : {
        path : "test"
    },

    title : "Test Title",

    metadata : {
        players : "2-4 players",
        time : 15,
        genre : "strategy"
    },

    content : {
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus eget enim eget volutpat. Donec porttitor aliquet varius. Nulla sagittis commodo ornare. Maecenas ut ipsum fermentum, vehicula ligula quis, maximus risus. Nulla faucibus nibh leo, vitae feugiat massa condimentum ut. Donec ac placerat mauris, nec interdum eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc sit amet orci odio. Nam felis quam, dignissim vitae lectus eget, pharetra facilisis erat. Suspendisse pretium, tellus quis iaculis bibendum, elit dolor vehicula mi, non congue urna lorem ac sapien. Maecenas iaculis interdum mauris at faucibus. Donec leo quam, molestie eu malesuada id, feugiat ut velit. Nulla in faucibus lectus. Nullam pretium placerat viverra. Nulla ornare orci vel orci condimentum tempus. Ut semper quam nibh, at molestie elit elementum vel.",
        documents : ["none"]
    },

    credits : {
        design : "ME",
        art : "YOU",
        year : 2023
    },

    link: "/..."
}

const router = createHashRouter([
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "games/:filter",
        element: <Librarypage />
    },
    {
        path: "detail/:gameId",
        element: <Gamepage gameData={JSON.stringify(data)} />
    },
    {
        path: "contact",
        element: <Contactpage />
    },
    {
        path: "about",
        element: <Aboutpage />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

                // <Routes>
                //     <Route index         element={<Homepage />} />
                //     <Route path="games"  element={<Librarypage />} />
                //     <Route path="detail" element={<Gamepage gameData={JSON.stringify(data)} />} />
                //     <Route path="*"      element={<NotFound />} />
                // </Routes>

function App() {
    return <RouterProvider router={router} />;
}

export default App;
