export const ReducerProduct =(state =[{id:1,title:'pro1'}],action)=>{
    switch (action.type) {
        case 'Get_Products':
            return [...action.payload];
        case 'Add_Products':
            return [...state,action.payload];
        default:
            return state;
    }
   
    
}