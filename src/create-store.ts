import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

function configureStore() {
    // TODO: performance tip -- load state from localStorage (if available)

    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);

    // TODO: subscribe to store changes to automatically persist to localStorage (if available)

    return store;
}

export default configureStore;
