import reducer from './reducer/reducer'
import { createStore } from 'redux'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
let unsubscribe = store.subscribe(() => 
    console.log(store.getState())
)
export default store