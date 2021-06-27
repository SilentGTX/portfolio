import React from "react";
import "./App.css";
import NavMenu from "./components/NavMenu/NavMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SmoothScrollBar from "./components/SmoothScrollBar/SmoothScrollBar";

<link
  href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
  rel="stylesheet"
/>;
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
  rel="stylesheet"
/>;

export default function App() {
  return (
    <Router>
      <NavMenu />
      <SmoothScrollBar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </SmoothScrollBar>
    </Router>
  );
}
