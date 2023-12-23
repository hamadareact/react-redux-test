
export const getProducts =(product)=>{
    return{
        type:'Get_Products',
        payload:product
    }
}
export const fetchProduct = ()=>{
    return async(dispatch)=>{
        const res=await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);
        dispatch(getProducts(data))
    }
}
export const addProduct = function(product){
    return{
        type:'Add_Products',
        payload:product
    }
}