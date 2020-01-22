import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'


let steedosService = process.env.REACT_APP_API_BASE_URL;
if(window && window.Meteor){
    steedosService = window.Steedos.absoluteUrl('', true);
}
if (steedosService){
    // 去掉url中的最后一个斜杠
    steedosService = steedosService.replace(/\/$/, "");
}

const initialStore = {
    settings: {
        services: {
            steedos: steedosService
        }
    }
}

const store = createStore(
        rootReducer,
        Object.assign({}, initialStore),
    );
export default store;