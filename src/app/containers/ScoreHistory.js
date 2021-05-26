import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import { connect } from 'react-redux'; 
import { ScoreHistory } from '../components/ScoreHistory';
import { changeScore } from '../data/actions';

const mapStateToProps = state => {
    return {
        players: state.players
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (newScore, oldScore, scoreId, player) => dispatch(changeScore(newScore, oldScore, scoreId, player))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreHistory);