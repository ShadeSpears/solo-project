import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const MyJobs =  props => {
    return (
        
        <div class='container '>

            <table class='table table-striped'>
                <thead>
                    <tr>
                        <th>My jobs</th>
                        
                    </tr>
                </thead>
                <tbody>
                        {/* this is where a .map will go */}
                    <tr>
                        <td>"user.chores.jobs"</td>
                        
                        {/* <td>"action button for chores"</td> */}
                        <td class='d-flex justify-content-evenly'>
                            {/* these might need to change to links */}
                                <button type="button" class="btn btn-primary">view</button>
                                <button type="button" class="btn btn-primary">done</button>
                                
                        </td>
                        
                        
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}

export default MyJobs;