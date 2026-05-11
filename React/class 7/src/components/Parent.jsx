import { useState } from "react";
import Child1 from "./Child1";

const Parent = () => {
  let [name, setName] = useState('Saylani');
  let [isLogin, setIslogin] = useState(false);

  

    return(
        <div>
        <Child1 name={name} isLogin={isLogin} setIslogin={setIslogin} />
        </div>
    )
};

export default Parent;