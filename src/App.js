import React, { Fragment, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Prompt,
} from "react-router-dom";
import AddPlayers from "./app/containers/AddPlayers";
import "./App.css";
import PlayerList from "./app/containers/PlayerList";
import Score from "./app/containers/Score";
import history from "./history";
import { NavBar } from "./app/components/NavBar";
import { HowToPlay } from "./app/components/HowToPlay";
import { render } from "@testing-library/react";

function App() {
  const blockRouting = () => {
    history.block(() => {
      return "Are you sure";
    });
  };
  return (
    <Fragment>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/rules">
            <HowToPlay />
          </Route>
          <Route path="/" component={BlockedNav}>
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

class BlockedNav extends Comment {
  componentWillMount() {
    onbeforeunload = (e) => "you sure";
  }

  componentWillUnmount() {
    onbeforeunload = null;
  }

  render() {
    return (
      <div>
        <Prompt when={true} message={"You sure?"} />
      </div>
    );
  }
}

// let BlockNav = () => {
//   let [isBlocking] = useState(false);

//   return (
//     <form
//     onSubmit={e => {
//       e.preventDefault();
//       e.target.reset();
//       setIsBlocking(false);
//     }}
//     >
//       <Prompt
//       when={isBlocking}
//       message={location => 'Are you sure you want to leave you will lose all recorded scores'}
//      />
//     <p>
//       Blocking?{""}
//       {isBlocking ? "Yes, click a link or the back button" : "No"}
//       </p>
// </form>
//   )
// }

export default App;
