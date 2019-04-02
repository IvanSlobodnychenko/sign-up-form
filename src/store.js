import {createStore, combineReducers} from 'redux';
// import reducers from './reducers';
import {reducer as formReducer} from "redux-form";

const reducers = {
    form: formReducer
};

const reducer = combineReducers(reducers);

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENTION &&
    window.__REDUX_DEVTOOLS_EXTENTION()
);

export default store;
