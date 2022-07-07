import React from "react";
import ReactDom from "react-dom";
import NavMenu from "../components/NavMenu/NavMenu";
import './Global.css';

function Home() {
  return (
    <React.StrictMode>

    <div className ="container">
        <NavMenu/>
        <h1>Hi</h1>
    </div>
    </React.StrictMode>
  );
}
const root =document.getElementById("root");
// root.render(<Home />);
ReactDom.render(<Home />, document.getElementById("root"));
export default Home;