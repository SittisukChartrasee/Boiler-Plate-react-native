import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducers from './reducers'

export default createStore(rootReducers, composeWithDevTools(applyMiddleware(reduxThunk)))