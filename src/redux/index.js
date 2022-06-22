import { applyMiddleware } from 'redux'
import { legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)


export let store = createStore(persistedReducer, applyMiddleware(thunk))
export let persistor = persistStore(store)


