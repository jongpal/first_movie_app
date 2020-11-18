import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigator from "./components/Navigator";
import Detail from "./routes/Detail";
import Genre from "./routes/Genre";
import Genres from "./routes/genres";
function App() {
  //you can use either component or make contents inside
  //remember how routers of React actually work
  return (
    <HashRouter>
      <Navigator />
      <Route path="/about" component={About} />
      <Route path="/" exact={true} component={Home} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/genre" exact={true} component={Genre} />
      <Route path="/genre/:genre" component={Genres} />
    </HashRouter>
  );
}

export default App;
