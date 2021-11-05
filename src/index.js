import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Blog from "./pages/Blog/Index";
import Contact from "./pages/Contact/Index";
import Navigation from "./components/Navigation";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
