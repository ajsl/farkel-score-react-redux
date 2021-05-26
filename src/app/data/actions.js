let lastId = 0;

export const addPlayer = (name) => {
  lastId += 1;
  return {
    type: "addPlayer",
    id: lastId,
    name: name,
    score: 0,
  };
};

export const addScore = (player, numberOfPlayers) => {
  return {
    type: "addScore",
    player: player,
    numberOfPlayers: numberOfPlayers,
  };
};

export const hideAddPlayer = (finsihedAddingPlayers) => {
  return {
    type: "hideAddPlayer",
    finsihedAddingPlayers: finsihedAddingPlayers,
  };
};

export const changeScore = (newScore, oldScore, scoreId, player) => {
  return {
    type: "changeScore",
    newScore: newScore,
    oldScore: oldScore,
    scoreId: scoreId,
    player: player

  }

}
