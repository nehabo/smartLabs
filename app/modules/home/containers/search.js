import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/';
import search from '../components/search';

const mapStateToProps = state => ({ ...state.searchReducer });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(search);
