import { incrementCounter, decrementCounter } from "./actionTypes";

const incrementAction = () => ({
  type: incrementCounter
});

const decrementAction = () => ({
  type: decrementCounter
});

export { incrementAction, decrementAction };
