const defaultState = {
  step: 1,
};

const homeReducer = (state = defaultState, action) => {
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
export default homeReducer;
