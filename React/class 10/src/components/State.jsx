import { useState } from "react";

const State = () => {
   let [count, setCount] = useState(0);

//    let increase = () => {
//         // count = count + 1
//         setCount(count + 1)
//    };

//    let decrease = () => {
//        count > 0 && setCount(count - 1)
//    };

console.log('Render');


    return(
        <div>
         <h2>use state</h2>
         <h3>Counter App</h3>
         <p>{count}</p>
         {/* <button onClick={increase}>Increase</button>
         <button onClick={decrease} >Decrease</button> */}

         
         <button onClick={() => setCount(count + 1)}>Increase</button>
         <button onClick={() => count > 0 && setCount(count - 1)} >Decrease</button>

        </div>
    )
};

export default State;