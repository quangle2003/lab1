import { CalculatorAction, CalculatorState, ActionType } from './types';

const initialState: CalculatorState = {
  result: 0,
};

const calculatorReducer = (state: CalculatorState = initialState, action: CalculatorAction): CalculatorState => {
  switch (action.type) {
    case ActionType.CONG:
      return {
        ...state,
        result: action.payload.num1 + action.payload.num2,
      };
    case ActionType.TRU:
      return {
        ...state,
        result: action.payload.num1 - action.payload.num2,
      };
    case ActionType.NHAN:
      return {
        ...state,
        result: action.payload.num1 * action.payload.num2,
      };
    case ActionType.CHIA:
      return {
        ...state,
        result: action.payload.num1 / action.payload.num2,
      };
    default:
      return state;
  }
};

export default calculatorReducer;
