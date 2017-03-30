import { AnyAction } from "redux";
import { SagaIterator } from "redux-saga";
import { all, select, take } from "redux-saga/effects";

function* watchAndLog(): SagaIterator {
    while (true) {
        const action: AnyAction = yield take("*");
        const state = yield select();
        // tslint:disable-next-line:no-console
        console.log(action);
        // tslint:disable-next-line:no-console
        console.log("state after", state);
    }
}

export default function* rootSaga() {
    yield all([
        watchAndLog,
    ]);
}
