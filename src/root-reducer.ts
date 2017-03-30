import { Action, Reducer } from "redux";
import Types from "~/global-types";

// EXAMPLE
// import { feature3Selectors } from './feature-name/selectors';

export interface IGlobalStateSelector {
    selectState1(state: Types.IGlobalState): number;
    selectState2(state: Types.IGlobalState): string[];
}

export const selectors: IGlobalStateSelector = {
    selectState1: (state: Types.IGlobalState) => (state.state1_counter),
    selectState2: (state: Types.IGlobalState) => (state.state2_strarr),
    // EXAMPLE for adding new selectors
    // selectState3: (state: Types.IGlobalState) => feature3Selectors.selectState(state.state3)
};

const initialState: Types.IGlobalState = {
    state1_counter: 0,
    state2_strarr: [],
};

const rootReducer: Reducer<Types.IGlobalState> =
    (state: Types.IGlobalState = initialState, action: Action<string>) => {
        switch (action.type) {
            case "INCREMENT_STATE_1_COUNTER":
                // mutate state
                const newState = Object.assign({}, state, {
                    state1_counter: state.state1_counter + 1,
                });
                return newState;
            default:
                return state;
        }
    };

export default rootReducer;
