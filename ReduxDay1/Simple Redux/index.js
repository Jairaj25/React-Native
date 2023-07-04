//Imports redux
const redux = require('redux');

//creates a variable for creating store
const CreateStore = redux.createStore;

//Type of Action Defined here
const type_action = {
    BUY_PEN: 'BUY_PEN',
    BUY_PENCIL: 'BUY_PENCIL'
}
//Defining Action here
const buyPen = (numberPen) => {
    return {
        type: type_action.BUY_PEN,
        payload: {
            NumofPens: numberPen
        }
    }
}
const buyPencil = (Pencils) => {
    return {
        type: type_action.BUY_PENCIL,
        payload: {
            NumofPencils: Pencils
        }
    }
}

//Data
const initialStateofPens = {
    NumofPens: 10
}

const initialStateofPencils = {
    NumofPencils: 20
}


//Defining Reducer here
const reducer_Pen = (state = initialStateofPens , action) => {
    switch(action.type) {
        case type_action.BUY_PEN:
            return {
                ...state,
                NumofPens: state.NumofPens - action.payload.NumofPens
            }
            default: return state;
    }
}

const reducer_Pencil = (state = initialStateofPencils, action) => {
    switch(action.type) {
        case type_action.BUY_PENCIL:
            return {
                ...state,
                NumofPencils: state.NumofPencils - action.payload.NumofPencils
            }
            default: return state;
    }
}

// Combining multiple reducers
const rootReducer = redux.combineReducers({reducer_Pen, reducer_Pencil});

//creating store object
//const store = CreateStore(reducer_Pen);
const store = CreateStore(rootReducer);

//Locks state into the unSubscribe variable
//const unSubscribe = store.subscribe(() => console.log(store.getState()));

const pens = store.dispatch(buyPen(1));

console.log("Initial No. of Pens: ",initialStateofPens.NumofPens);
console.log("Initial No. of Pencils: ",initialStateofPencils.NumofPencils);
console.log('Updated number of pen: ',store.dispatch(buyPen(1)));
console.log('Updated number of pen: ',store.dispatch(buyPen(2)));
console.log('Updated number of pen: ',store.dispatch(buyPen(4)));
console.log('Updated number of pen: ',pens)
console.log('Updated number of Pencils: ',store.dispatch(buyPencil(1)));
console.log('Updated number of Pencils: ',store.dispatch(buyPencil(2)));
console.log('Updated number of Pencils: ',store.dispatch(buyPencil(4)));
console.log(store.getState())