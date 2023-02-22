import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'

// Middleware
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// Implementacion del Middleware thunk para acciones asincronas
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export default configureStore({ 
    reducer: rootReducer, 
    composedEnhancer 
});
