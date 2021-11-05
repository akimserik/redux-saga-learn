const defaultState = {
  count: 0,
};

export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const ASYNC_INCREMENT_COUNT = "ASYNC_INCREMENT_COUNT";
export const ASYNC_DECREMENT_COUNT = "ASYNC_DECREMENT_COUNT";
export const DECREMENT_COUNT = "DECREMENT_COUNT";

export default function countReducer(state = defaultState, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export const countIncrementAction = () => ({
  type: INCREMENT_COUNT,
});
export const asyncCountIncrementAction = () => ({
  type: ASYNC_INCREMENT_COUNT,
});
export const asyncCountDecrementAction = () => ({
  type: ASYNC_DECREMENT_COUNT,
});
export const countDecrementAction = () => ({
  type: DECREMENT_COUNT,
});
