import {useState} from "react";

import AddJob from "../components/AddJob"
import Dashboard from "../components/Dashboard";

const Main = (props)=>{
    const [choreList, setChoreList] = useState([]);

    return(
        <>
            <Dashboard choreList={choreList} setChoreList={setChoreList}/> 
            <AddJob choreList={choreList} setChoreList={setChoreList}/>
        </>
    )
}

export default Main;