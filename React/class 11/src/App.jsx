
import { useEffect, useState } from 'react';
import './index.css'


const App = () => {
let [count, setCount] = useState(0);
let [user, setUser] = useState(false);
let [isOn, setIsOn] = useState(false);
let [students, setStudent] = useState([]);

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
  

  // useEffect(() => {
  //  console.log('use effect');
   
  // },[user, count])

  // console.log('user',user);

//   useEffect(() => {
//     console.log('component mount');
    
//   },[]) // first mount

//   useEffect(() => {
//     console.log('log');
    
//   },)

//   useEffect(() => {

//   },[user])

// useEffect(() => {

//   return () => {
//     console.log('un mount');
    
//   }
// },[])

// let func = () => {
//   fetch('https://fakestoreapi.com/products/1')
//   .then((res) => res.json() )
//   .then((resp) => console.log('resp',resp))
// };

// func()

let addStudents = () => {
  setStudent({name : 'asif', roll : 123})};


useEffect(() => {

  let test = () => {

    fetch('https://fakestoreapi.com/products/1')
    .then((res) => res.json() )
    .then((resp) => console.log('resp',resp))
  };

  test()
},[students])

console.log('students',students);

  return (
  
    <div>
      <h3>Use Effect</h3>
      <p>{count}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={login}>login</button>

      <img src="" alt="" />
      <button onClick={onOff}>Switch</button>


       <button onClick={addStudents}>Add Student</button>
    </div>
  );
};

export default App;
