const intialState = {
  dev: null,
  work: null,
  dark: true,
};

export default function AppReducer(state = intialState, action) {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        dark: action.dark,
      };

    default:
      return state;
  }
}
