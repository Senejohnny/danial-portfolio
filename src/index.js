import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";
// pages for this product
import Home from 'pages/Home';
import About from 'pages/About/About';
import Resume from 'pages/Resume/Resume';
import Projects from 'pages/Projects/Projects';
import Blog from 'pages/Blog/Blog';

// import reportWebVitals from './reportWebVitals';

var hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />
      <Route path="/home" component={Home} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
