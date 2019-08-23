import {createStore, combineReducers} from "redux";
// import logger from "redux-logger";

import deck from "./reducers/deckReducers";

export default createStore(
    combineReducers({
        deck,
    }),
    {}
);