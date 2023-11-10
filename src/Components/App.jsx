import React from "react";
import Header from "./Header";
import Reel from "./Reel";

let items = [
  {id:0,url:"alpha",alt:"one"},
  {id:1,url:"beta",alt:"two"},
  {id:2,url:"gamma",alt:"three"},
]

function App() {
  return (<div>
    <Header />
    <Reel items={JSON.stringify(items)} />
  </div>);
}

export default App;
