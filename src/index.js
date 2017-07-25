import React from 'react';
import ReactDom from 'react-dom';
import { createStore, combineReducers } from 'redux';

import App from './components/App';

const articlesReducer = (state = [], action) => {
    switch(action.type){
        case '/ADD_ARTICLE':
            action.payload.id = Date.now();
            const newState = [...state, action.payload];
            return newState;
        default:
            return state;
    }
};

// permet de créer un store
const store = createStore(combineReducers({articles: articlesReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.REDUX_DEVTOOLS_EXTENSION__());



ReactDom.render(<App/>,document.getElementById('root'));