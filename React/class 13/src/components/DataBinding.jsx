import { useState } from "react";


const DataBinding = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    // let [users, setUsers] = useState([]);
    let [log, setLog] = useState({
      name : 'majid hussain',
      city : 'Karachi',  
    });

    console.log('name',name);
    console.log('email',email);

    console.log('render');

    let obj = {
         name : name,
         email : email 
    };

    console.log('obj',obj);
    
    console.log('log',log);
    
    
    
    return(
        <div>
           <h3>Two Way Data Binding</h3>
           <p>Name : {name}</p>
           <p>Email : {email}</p>
           <input type="text" value={name} onChange={(txt) => setName(txt.target.value) } />
           <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
           <button>Submit</button>
        </div>
    )
};

export default DataBinding;