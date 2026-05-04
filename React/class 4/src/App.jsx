// import React from "react";
import Home from "./components/Home";
import Card1 from "./components/Card1";
import users from "./assets/data/userData";
import './index.css'
import CustomInput from "./components/shared/CustomInput";


const App = () => {
  return (
    // <div style={{}}>
    //   <Home />
    //   <div style={{backgroundColor:'yellow', display:'flex', flexDirection:'column', alignItems:'center'}}>
    //   {users.map((data) => {
    //     return(
    //       <div style={{marginTop:20, marginBottom:20, border:5, backgroundColor:'red',
    //         display:'flex', justifyContent:'center', alignItems:'center',
    //         width:'40%'
    //       }}>
    //       <Card1 name={data.name}
    //              age={data.age}
    //              profession={data.profession} 
    //              experience={data.experience}
    //              city={data.city}
    //              imageUrl={data.image}  />
    //              </div>
    //     )
    //   })}
    //   </div>
      

      
    // </div>
    <div>
      <CustomInput containerStyle={{backgroundColor:'red'}} />
    </div>
  );
};

export default App;
