import { useSelector, useDispatch } from 'react-redux'
// import { INCREMENT } from './type/type'
import { inc,myinc } from './CounterAction'
import { addProduct, fetchProduct } from './actionProduc';
import { useEffect } from 'react';
function App() {

  //4-access data from store reducer with useSelector
  const count = useSelector(state => state.myCounter.counter);

  const product = useSelector(state => state.products);
  console.log(product);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProduct())
  },[])
  
  return (
    <div >
      <h3>Counter:</h3>
      <h3>{count}</h3>

      <button onClick={() => dispatch({ type: 'INCREMENT' })} >Increace</button>
      <button onClick={() => dispatch(inc())}>Increace 2</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <button onClick={() => dispatch(addProduct({id:400,title:'pro2'}))}>add pro</button>

      {
        product.map((pro)=>(<p key={pro.id}>{pro.title}</p>))
      }
      
    </div>
  );
}

export default App;
