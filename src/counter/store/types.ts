export enum ActionType {
    CONG = 'CONG',
    TRU = 'TRU',
    NHAN = 'NHAN',
    CHIA = 'CHIA',
}

export interface CalculatorState {
  result: number;
}
  
export interface CongAction {
  type: ActionType.CONG;
  payload: {
    num1: number;
    num2: number;
  };
}

export interface TruAction {
  type: ActionType.TRU;
  payload: {
    num1: number;
    num2: number;
  };
}

export interface NhanAction {
  type: ActionType.NHAN;
  payload: {
    num1: number;
    num2: number;
  };
}

export interface ChiaAction {
  type: ActionType.CHIA;
  payload: {
    num1: number;
    num2: number;
  };
}

export type CalculatorAction = CongAction | TruAction | NhanAction | ChiaAction;
