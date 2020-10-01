import AddPlayers from "../components/AddPlayers";
import { connect } from "react-redux";
import { addPlayer } from "../data/actions";

const mapStateToProps = state => {
    if (state){
        return {
            players: state.players
        };

    } else {
        return [];
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => dispatch(addPlayer(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayers);