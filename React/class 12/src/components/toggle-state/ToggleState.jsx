import { useState } from 'react';
import offBulb from '../../assets/offbulb.jpg';
import onBulb from '../../assets/onbulb.jpg';


const ToggleState = () => {
 let [isOn, setIsOn] = useState(false);

 

 const toggle = () => {
    setIsOn(!isOn)
 }

 console.log('isOn', isOn);
 

    return(
        <>
        <h3>Toggle state</h3>
        <h4>On Off Bulb</h4>

       {/* {
         isOn ? (
             <img src={onBulb} alt="" style={{width:150}} />
            ) : (

                <img src={offBulb} alt="" style={{width:150}} />
            )
       } */}
        <img src={isOn ? onBulb : offBulb} alt="" style={{width:150}} />

        <button onClick={toggle}>Switch</button>
        </>
    )
};

export default ToggleState;