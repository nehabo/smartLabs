import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchactions from '../actions/';
import search from '../components/search';

const mapStateToProps = state => ({ ...state.searchReducer });
const mapDispatchToProps = dispatch => bindActionCreators(searchactions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(search);
