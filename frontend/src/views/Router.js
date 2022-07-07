import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import NotFound from "./NotFound"
import NavMenu from "../components/NavMenu/NavMenu";

const RouterSetup = () => {
    return (
        <Router>
            <NavMenu />
            <Routes>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Routes>
        </Router>
    );
};

export default RouterSetup;