import { INCREASE } from "./CounterActions";
import { DECREASE } from "./CounterActions";
import { CLEAR } from "./CounterActions";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREASE:
      return { counter: state.counter + 1 };
    case DECREASE:
      return { counter: state.counter - 1 };
    case CLEAR:
      return { counter: 0 };

    default:
        return { counter: 0 };
  }
};

export {reducer as CounterReducer};
