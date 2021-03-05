import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Prompt,
  withRouter,
} from "react-router-dom";
import "./App.scss";

import history from "./history";
import { NavBar } from "./app/components/NavBar";
import { HowToPlay } from "./app/components/HowToPlay";
import { Main } from "./app/components/Main";

const App = () => {
  const blockRouting = () => {
    history.block(() => {
      return "Are you sure";
    });
  };
  return (
    <Fragment>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/rules">
            <HowToPlay />
          </Route>
        </Switch>
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

export default withRouter(App);
