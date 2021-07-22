const initialState = {
  appProducts: null,
};

export function products(state = initialState, action) {
  switch (action.type) {
    case 'PRODUCTS':
      return {
        ...state,
        appProducts: action.payload,
      };
    default:
      return state;
  }
}
