import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Dashboard =  props => {
    const {choreList, setChoreList} = props
    

    

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
                    <tr class="align-items-center">
                        <th class="col">job</th>
                        <th class="col">location</th>
                        <th class="col">actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    choreList.map((chore) => (
                    <tr key={chore._id}>
                        <td>{chore.title}</td>
                        <td>{chore.location}</td>
                        
                        <td class='d-flex justify-content-evenly'>
                                {/* code for the view link - `/vew/${chore._id}` */}
                                <Link to={`/view/${chore._id}`}><button type="button" class="btn btn-primary">view</button></Link>
                                {/* add will need to add it to the my jobs side  */}
                                <button type="button" class="btn btn-primary">add</button>
                                {/* code for the edit link - to={`/edit/${chore._id}` */}
                                <Link to={`/edit/${chore._id}`}><button type="button" class="btn btn-primary">edit</button></Link>
                                {/* cancel link will be a delete function */}
                                <button onClick={() => deleteHandler(chore._id)} type="button" class="btn btn-primary">cancel</button>
                        </td>
                        
                        
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
        
    )
}

export default Dashboard;