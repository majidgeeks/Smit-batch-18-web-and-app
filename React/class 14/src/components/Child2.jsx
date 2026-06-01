// import CompoA from "./CompoA";

import Child3 from "./Child3";


const Child2 = ({name, isLogin}) => {

    console.log('isLogin in child 2',isLogin);
    console.log('Child 2');
    
    

    return(
        <div>
          <h2>this is component Child 2</h2>
          <Child3 name={name} />
        </div>
    )
};

export default Child2;