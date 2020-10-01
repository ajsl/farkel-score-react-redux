import PlayerList from '../components/PlayerList';
import { connect } from 'react-redux'; 

const mapStateToProps = state => {
    return {
        players: state.players
    };
};

export default connect(mapStateToProps)(PlayerList);