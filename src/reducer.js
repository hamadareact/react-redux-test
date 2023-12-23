import { INCERMENT } from "./TypeCounter" 


// export const reducerCounter =(state ={ counter: 1 },action)=>{
//     if (action.type === "INCREMENT") {
//             return { counter: state.counter + 2 };
//     }
//     if (action.type === "WITHDRAW_MONY") {
//             return { counter: state.counter + 3 };
//     }
//             return  state;
    
// }

export const reducerCounter = (state = { counter: 1 }, action) => {

    if (action.type === "INCREMENT") {
        return { counter: state.counter + 1 }
    }
    if (action.type === "DECERMENT") {
        return { counter: state.counter - 1 }
    }
    if (action.type === "RESET") {
        return { counter: 0 }
    }

    return state;
}
