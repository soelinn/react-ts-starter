/**
 * Make it easier to the Redux store's global state in the project.
 */

// tslint:disable-next-line:no-namespace
namespace App {
    /**
     * Redux store's global state.
     */
    export interface IGlobalState {
        state1_counter: number;
        state2_strarr: string[];
        // state3: IMyState3;
    }
}

export default App;
