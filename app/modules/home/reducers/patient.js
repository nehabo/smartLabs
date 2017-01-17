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
        ...state,
        name: action.values.name,
        phone_no: action.values.phone,
        dob: action.values.dob,
        gender: action.values.gender,
        email: action.values.email,
      };
      break;

    default:
      return state;
  }
};
export default patientReducer;
