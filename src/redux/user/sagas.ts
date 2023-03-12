import { all, put, takeEvery } from "redux-saga/effects";
import { AnyAction } from "redux";
import actions from "./actions";

export function* SET_USER({ payload }: AnyAction) {
  try {
    yield put({
      type: "user/SET_STATE",
      payload: {
        type: payload.userType,
        wallet: payload.wallet,
      },
    });
  } catch (err) {
    console.error("Failed to set user in saga", err);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.SET_USER, SET_USER)]);
}
