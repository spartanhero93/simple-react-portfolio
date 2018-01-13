import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import App from './App';
import ParticlesJS from "./Components/particles/Particles";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/home" component={ParticlesJS} />
      {/* <Route path="/c" component={Note} /> */}
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();