const redux = require('redux');
const CreateStore = redux.createStore

const type_action = {
    TV: 'TV',
    AC: 'AC',
    LAPTOP: 'LAPTOP',
    PHONE: 'PHONE' 
}

const TV = (TVs) =>
{
    return{
        type: type_action.TV,
        payload : {
            NumOfTV: TVs
        }
    }
}

const InitialTV = {
    NumOfTV: 10
}

const reducer_TV = (state = InitialTV, action) => {
    switch(action.type){
        case type_action.TV:
            return{
                ...state,
                NumOfTV: state.NumOfTV - action.payload.NumOfTV
            }
            default: return state;
    }
}
const AC = (ACs) =>
{
    return{
        type: type_action.AC,
        payload : {
            NumOfAC: ACs
        }
    }
}

const InitialAC = {
    NumOfAC: 10
}

const reducer_AC = (state = InitialAC, action) => {
    switch(action.type){
        case type_action.AC:
            return{
                ...state,
                NumOfAC: state.NumOfAC - action.payload.NumOfAC
            }
            default: return state;
    }
}

const LAPTOP = (LAPTOPs) =>
{
    return{
        type: type_action.LAPTOP,
        payload : {
            NumOfLAPTOP: LAPTOPs
        }
    }
}

const InitialLAPTOP = {
    NumOfLAPTOP: 10
}

const reducer_LAPTOP = (state = InitialLAPTOP, action) => {
    switch(action.type){
        case type_action.LAPTOP:
            return{
                ...state,
                NumOfLAPTOP: state.NumOfLAPTOP - action.payload.NumOfLAPTOP
            }
            default: return state;
    }
}

const PHONE = (PHONEs) =>
{
    return{
        type: type_action.PHONE,
        payload : {
            NumOfPHONE: PHONEs
        }
    }
}

const InitialPHONE = {
    NumOfPHONE: 10
}

const reducer_PHONE = (state = InitialPHONE, action) => {
    switch(action.type){
        case type_action.PHONE:
            return{
                ...state,
                NumOfPHONE: state.NumOfPHONE - action.payload.NumOfPHONE
            }
            default: return state;
    }
}
const rootReducer = redux.combineReducers({reducer_TV, reducer_AC, reducer_LAPTOP, reducer_PHONE})
const store = CreateStore(rootReducer);

const unSubscribe = store.subscribe(() => store.getState());

const person1 = {
    TV: store.dispatch(TV(1)),
    AC: store.dispatch(AC(2)),
    PHONE: store.dispatch(PHONE(3)),
    LAPTOP: store.dispatch(LAPTOP(1)) ,
}
console.log("Person 1 Bought: ", person1);

console.log("Stock left in Warehouse: ", store.getState())