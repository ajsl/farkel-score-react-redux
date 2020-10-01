import { connect } from "react-redux";
import Score from "../components/Score";
import {addScore} from '../data/actions'; 

const mapStateToProps = state => {
  return {
    players: state.players,
    nextPlayerRoll: state.nextPlayerRoll,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data, numberOfPlayers) => dispatch(addScore(data, numberOfPlayers))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Score); 

