let lastId = 0;

export const addPlayer = (name) => {
    lastId += 1
    return {
        type: "addPlayer",
        id: lastId,
        name: name,
        score: 0
    };
};

export const addScore = (player, numberOfPlayers) => {
    return {
        type: "addScore",
        player: player,
        numberOfPlayers: numberOfPlayers,
    }
}