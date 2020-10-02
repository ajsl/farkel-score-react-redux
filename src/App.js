import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddPlayers from "./app/containers/AddPlayers";
import "./App.css";
import PlayerList from "./app/containers/PlayerList";
import Score from "./app/containers/Score";
import { NavBar } from "./app/components/NavBar";
import { HowToPlay } from "./app/components/HowToPlay";

function App() {
  return (
    <Fragment>
        <NavBar />
      <Router>
      <Switch>
        <Route path="/rules">
          <HowToPlay />
        </Route> 
        <Route path="/">
          <section className="container">
            <AddPlayers />
            <Score />
            <PlayerList />
          </section>
        </Route>
      </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
