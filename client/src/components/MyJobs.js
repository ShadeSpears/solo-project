import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const MyJobs =  props => {
    const {choreList, setChoreList} = props
    
    // const [chores, setChores] = useState([])

    

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteChores/${id}`)
        .then((res) => {
            console.log(res);
            setChoreList(choreList.filter((chore) => chore._id !== id))
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        
        <div class='container '>

            <table class='table table-bordered'>
                <thead>
                    <tr>
                        <th class="col">My jobs</th>
                        <th class="col">actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                        {choreList.map((chore) => (
                        <tr key={chore._id}>
                            <td>{chore.title}</td>
                            
                            {/* <td>"action button for chores"</td> */}
                            <td class='d-flex justify-content-evenly'>
                                {/* these might need to change to links */}
                                    <Link to={`/view/${chore._id}`}><button type="button" class="btn btn-primary">view</button></Link>
                                    <button onClick={() => deleteHandler(chore._id)} type="button" class="btn btn-primary">done</button>
                                    
                            </td>
                            
                            
                        </tr>

                        ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default MyJobs;