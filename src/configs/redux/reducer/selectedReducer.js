const initialState = {
  selected: 0,
};

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SELECTED':
      return {
        ...state,
        selected: action.value,
      };
    default:
      return state;
  }
};

export default selectedReducer;
