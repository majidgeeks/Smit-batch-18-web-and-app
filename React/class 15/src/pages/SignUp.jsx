import { useState } from "react";
import { useNavigate } from 'react-router-dom'



const SignUp = () => {
    let [email, setEmail] = useState('');
    let [pass, setPass] = useState('');
    let navigator = useNavigate();

    let handleSignUp = () => {
        // console.log(email);
        // console.log(pass);
        let user = {
            email, 
            pass
        }

        console.log(user);

        navigator('/home')

        

    }

    return(
        <div>
            <h3>Sign Up</h3>
            <p>Email</p>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p>Password</p>
            <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} />
            <button onClick={handleSignUp}>Submit</button>
        </div>
    )
};

export default SignUp