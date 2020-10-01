const addPlayer = (state, { id, name, score }) => {
  const player = { id: id, name: name, score: score };
  return {
    ...state,
    players: state.players.concat(player),
  };
};

const addScore = (state, { player, numberOfPlayers }) => {
  let playerId = +player.id;

  return {
    ...state,

    players: state.players.map(person => person.id === playerId ? 
      {
        ...person, score: player.score }

        :

        {...person}
        // ? {
        //     ...player,
        //     score: player.score,
        //   }
        // : { ...player }
    ),
    nextPlayerRoll: numberOfPlayers === playerId ? 1 : playerId + 1
  };
};



const reducer = (state, action) => {
  switch (action.type) {
    case "addPlayer":
      return addPlayer(state, action);
    case "addScore":
      return addScore(state, action);

    default:
      return state;
  }
};

export default reducer;