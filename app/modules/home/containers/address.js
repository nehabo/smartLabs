import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/';
import Address from '../components/address';

const mapStateToProps = state => ({ ...state.cartReducer });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Address);
