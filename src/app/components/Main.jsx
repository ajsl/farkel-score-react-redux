import React from "react";
import AddPlayers from "../containers/AddPlayers";
import PlayerList from "../containers/PlayerList";
import Score from "../containers/Score";

export const Main = () => {
  return (
    <section className="container main-block">
      <AddPlayers />
      <Score />
      <PlayerList />
    </section>
  );
};
