import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment ,decrement} from './redux/features/counterSlice';

const App = () => {

  const dispatch =useDispatch();
  const count=useSelector((state)=>state.counter.value);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(increment())
      }}
      >increment
      
      </button>


      <button onClick={()=>{
        dispatch(decrement(1));
      }}
      >Decrement
      </button>


    </div>
  )
}

export default App