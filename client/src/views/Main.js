import {useState} from "react";

import MyJobs from "../components/MyJobs";
import Dashboard from "../components/Dashboard";


const Main = (props)=>{
    const [choreList, setChoreList] = useState([]);
    const [user, setUser] = useState([]);

    return(
        <>
            <div class=' d-flex justify-content-between'>
            <div class='d-flex align-items-center'>
                <h1>Welcome "user.firstName"!</h1>
                <button type="button" class="btn btn-primary">logout</button>
            </div>
            <div class='d-flex align-items-center'>
                <button type="button" class="btn btn-primary">Add a job</button>
            </div>
        </div>
            
            <div className='container d-flex justify-content-between p-3 '>
                <Dashboard choreList={choreList} setChoreList={setChoreList}/> 
                <MyJobs choreList={choreList} setChoreList={setChoreList}/>
            </div>
        
            
        </>
    )
}

export default Main;