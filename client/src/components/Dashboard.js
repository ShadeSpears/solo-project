import React from 'react';

const Dashboard =  props => {
    return (
        <div class='container '>

            <table class='table table-striped'>
                <thead>
                    <tr>
                        <th>job</th>
                        <th>location</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* this is where a .map will go */}
                    <tr>
                        <td>"chores.jobs"</td>
                        <td>"chores.locations"</td>
                        {/* <td>"action button for chores"</td> */}
                        <td class='d-flex justify-content-evenly'>
                                <button type="button" class="btn btn-primary">view</button>
                                <button type="button" class="btn btn-primary">add</button>
                                <button type="button" class="btn btn-primary">edit</button>
                                <button type="button" class="btn btn-primary">cancel</button>
                        </td>
                        
                        
                    </tr>
                    
                </tbody>
            </table>
        </div>
        
    )
}

export default Dashboard;