import { ActionType, CongAction, TruAction, NhanAction, ChiaAction } from './types';

export const cong = (num1: number, num2: number): CongAction => ({
  type: ActionType.CONG,
  payload: {
    num1,
    num2,
  },
});

export const tru = (num1: number, num2: number): TruAction => ({
  type: ActionType.TRU,
  payload: {
    num1,
    num2,
  },
});

export const nhan = (num1: number, num2: number): NhanAction => ({
  type: ActionType.NHAN,
  payload: {
    num1,
    num2,
  },
});

export const chia = (num1: number, num2: number): ChiaAction => ({
  type: ActionType.CHIA,
  payload: {
    num1,
    num2,
  },
});
