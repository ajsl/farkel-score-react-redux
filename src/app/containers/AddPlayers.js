import AddPlayers from "../components/AddPlayers";
import { connect } from "react-redux";
import { addPlayer, hideAddPlayer } from "../data/actions";

const mapStateToProps = state => {
    if (state){
        return {
            players: state.players,
            finsihedAddingPlayers: state.finsihedAddingPlayers
        };

    } else {
        return [];
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => dispatch(addPlayer(data)),
        onClick: data => dispatch(hideAddPlayer(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayers);