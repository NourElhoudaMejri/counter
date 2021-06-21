import './App.css';
import React,  {useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {increment, decrement} from './redux/counterSlice';


function App() {
  const { count } = useSelector((state) => state.counter);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();  


  const handleClick = () => {
   
      dispatch(increment())
   
  }
const Click = () => {
dispatch(decrement())}

  return (
    <div className="App">
      <h1> The count is :{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={Click}>Decrement</button>
    </div>
  );
}

export default App;
