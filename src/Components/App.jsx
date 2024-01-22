import Homepage from "./Homepage";
import Gamepage from "./Gamepage";
import Librarypage from "./Librarypage";
import { createHashRouter, RouterProvider } from "react-router-dom";
import NotFound from "./NotFound";
import Contactpage from "./Contactpage";
import Aboutpage from "./Aboutpage";
import "./styles/App.css";

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
        path: "games",
        element: <Librarypage />
    },
    {
        path: "detail/:gameId",
        element: <Gamepage />
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
