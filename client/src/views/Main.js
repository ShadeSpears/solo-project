import {useState, useEffect} from "react";
import axios from 'axios'

import MyJobs from "../components/MyJobs";
import Dashboard from "../components/Dashboard";
import { Link } from "react-router-dom";


const Main = (props)=>{
    const [choreList, setChoreList] = useState([]);
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/Chores')
        .then((res) => {
            console.log(res);
            setChoreList(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return(
        <>
            <div class=' d-flex justify-content-between'>
            <div class='d-flex align-items-center'>
                <h1>Welcome "user.firstName"!</h1>
                <Link to={'/'}><button type="button" class="btn btn-primary">logout</button></Link>
            </div>
            <div class='d-flex align-items-center'>
            <Link to={'/addJob'}><button type="button" class="btn btn-primary">Add a Job</button></Link>
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