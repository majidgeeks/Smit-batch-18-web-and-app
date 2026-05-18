// import { useEffect } from "react";
import Child2 from "./Child2";


const Child1 = ({name, isLogin, setIslogin}) => {
    
    console.log('name',name);
    console.log('isLogin child 1',isLogin);
    console.log('Child 1');
    

      if(isLogin === false)
  setIslogin(true)

// useEffect(() => {
  
// },[])
    
    
    

    return(
        <div>
           {/* <h2>{name}</h2>  */}
          <h2>this is component Child 1 </h2>
          <Child2 name={name} isLogin={isLogin} />
        </div>
    )
};

export default Child1;