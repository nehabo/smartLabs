import { connect } from 'react-redux';
import * as searchactions from '../actions/'
import { bindActionCreators } from 'redux'
import search from '../components/search';

function mapStateToProps(state) {
  return {
    ...state.searchReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(searchactions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(search)
