import { connect } from 'react-redux'; 
import { ScoreHistory } from '../components/ScoreHistory';

const mapStateToProps = state => {
    return {
        players: state.players
    };
};

export default connect(mapStateToProps)(ScoreHistory);