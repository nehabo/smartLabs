const defaultState = {
  page: 'search',
};

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ON_NEXTPAGE':
      console.log(action.pathname);
      return {
        ...state,
        page: action.pathname,
      };
      break;

    default:
      return state;
  }
};

export default homeReducer;
