import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/';
import patient from '../components/patient';

const mapStateToProps = state => ({ ...state.patientReducer });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(patient);
