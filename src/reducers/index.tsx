import { combineReducers } from "redux";

//rootReducer combines all reducers into one to pass to the store.
//Export Rootstate, which will be used in selectors for strongly typed access to the Redux state.
//Why do I need to export Rootstate?- In own words!


const rootReducer = combineReducers({

});

export type Rootstate = ReturnType<typeof rootReducer>;

export default rootReducer;