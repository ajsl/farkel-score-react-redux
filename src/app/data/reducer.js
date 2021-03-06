const addPlayer = (state, { id, name, score, lastRoll }) => {
  const player = {
    id: id,
    name: name,
    score: score,
    lastRoll: lastRoll,
    scoreHistory: [],
  };
  return {
    ...state,
    players: state.players.concat(player),
  };
};

const addScore = (state, { player, numberOfPlayers }) => {
  let playerId = +player.id;

  return {
    ...state,

    players: state.players.map((person) =>
      person.id === playerId
        ? {
            ...person,
            score: player.score,
            scoreHistory: [
              ...person.scoreHistory,
              player.score >= 500 ? player.lastRoll : 0,
            ],
          }
        : { ...person }
    ),
    nextPlayerRoll: numberOfPlayers === playerId ? 1 : playerId + 1,
  };
};

const hideAddPlayer = (state, { finsihedAddingPlayers }) => {
  return {
    ...state,
    finsihedAddingPlayers: finsihedAddingPlayers,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addPlayer":
      return addPlayer(state, action);
    case "addScore":
      return addScore(state, action);
    case "hideAddPlayer":
      return hideAddPlayer(state, action);

    default:
      return state;
  }
};

export default reducer;
