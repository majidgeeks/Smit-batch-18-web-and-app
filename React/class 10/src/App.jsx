
import { useEffect, useState } from 'react';
import './index.css'


const App = () => {
let [count, setCount] = useState(0);
let [user, setUser] = useState(false);
let [isOn, setIsOn] = useState(false);

   let increase = () => {
        // count = count + 1
        setCount(count + 1)
   };

   let decrease = () => {
       count > 0 && setCount(count - 1)
   };

   let login = () => {
    console.log('func');
    
    setUser((prev) => !prev)
   }

   let onOff = () => {
    setIsOn((prev) => !prev );
   }
  

  useEffect(() => {
   console.log('use effect');
   
  },[user, count])

  console.log('user',user);
  
  return (
  
    <div>
      <h3>Use Effect</h3>
      <p>{count}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={login}>login</button>

      <img src="" alt="" />
      <button onClick={onOff}>Switch</button>

    </div>
  );
};

export default App;
