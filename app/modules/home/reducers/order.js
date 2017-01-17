const defaultState = {
  payment: '',
  exp_date: '',
  card: null,
  cvv: null,
};

const orderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ON_LOCATE':
      const location = {
      };
      return {
        ...state,
        location,
      };
      break;

    case 'ON_CHANGE':
      return {
        ...state,
        address: action.address,
      };
      break;

    default:
      return state;
  }
};
export default orderReducer;
