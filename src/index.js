import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { selectSubreddit, fetchPosts } from './actions/reddit';
import rootReducer from './reducers/reddit';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

store.dispatch(selectSubreddit('reactjs'));
store
    .dispatch(fetchPosts('reactjs'))
    .then(() => console.log(store.getState()))

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// //import todoApp from './reducers/todos';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import './index.css';
// //import Store from './store';
// //const StoreInstance = Store();

// let store = createStore(todoApp);

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
//     , document.getElementById('root'));
