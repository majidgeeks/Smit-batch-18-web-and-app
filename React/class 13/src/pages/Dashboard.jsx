import { Link } from "react-router-dom";






const Dashboard = () => {
    return(
        <>
        <h2>Dashboard</h2>

     <div style={{display:'flex', flexDirection:'column'}}>

       <Link to={'/Contact'}>Contact</Link>
       <Link to={'/'}>Home</Link>
       <Link to={'/About'}>About</Link>

     </div>
        </>
    )
};

export default Dashboard;