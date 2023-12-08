// Homepage component

import Header from "./Header";
import Reel from "./Reel";

let items = [
    {id:0,imgUrl:"./images/elephent.jpg",alt:"one"},
    {id:1,imgUrl:"./images/red_tent.jpg",alt:"two"}//,
    //{id:2,imgUrl:"./images/blue_tent.jpg",alt:"three"},
]

function Homepage() {
    return (<div>
        <Header menuItems={["Games", "About", "Contact"]}/>
        <Reel items={JSON.stringify(items)} />
    </div>);
}

export default Homepage;