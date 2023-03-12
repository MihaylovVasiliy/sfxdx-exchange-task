import actions from "./actions";
import { User, UserReduxState, UserType } from "./types";

const initialState = {
  userType: UserType.user,
  wallet: undefined,
};

export const userSelector = (state: UserReduxState): User => state.user;

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case (actions.SET_STATE, actions.SET_USER):
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
