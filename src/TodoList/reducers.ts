import { TOGGLE_TODO } from "./actions";

export const reducer = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map(t => {
        if (t.id === action.payload) {
          return { ...t, completed: !t.completed };
        }
        return t;
      });
    default:
      return state;
  }
};

export default reducer;
