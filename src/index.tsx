import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as Redux from "redux";
import Types from "~/global-types";
import { Hello } from "./components/Hello";
import configureStore from "./create-store";

const store = configureStore();
const AppRoot: React.StatelessComponent<{ store: Redux.Store<Types.IGlobalState> }> =
    (props) => (
        <Provider store={props.store}>
            <Hello compiler="TypeScript" framework="React" />
        </Provider>
    );
AppRoot.displayName = "AppRoot";

ReactDOM.render(
    <AppRoot store={store} />,
    document.getElementById("app-root"),
);
