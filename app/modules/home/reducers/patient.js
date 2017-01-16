const defaultState = {
  name: '',
  phone_no: '',
  dob: '',
  gender: '',
  email: '',
};

const patientReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'HANDLE_PATIENTSUBMIT':
      console.log(action.values);
      return {
        state: action.values,
      };
      break;

    default:
      return state;
  }
};
export default patientReducer;
