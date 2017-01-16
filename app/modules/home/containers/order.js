import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/';
import order from '../components/order';

const mapStateToProps = state => ({ ...state.orderReducer });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(order);
