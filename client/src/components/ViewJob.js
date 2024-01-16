import React from 'react';
import { Link } from 'react-router-dom';

const ViewJob =  props => {
    return (
        <>
        <div class=' d-flex justify-content-end'>
            <div class='d-flex align-items-center'>
                <Link to={'/dashboard'}><button type="button" class="btn btn-primary">Back</button></Link>
                <Link to={'/'}><button type="button" class="btn btn-primary">logout</button></Link>
            </div>
        </div>
            <div class='d-flex justify-content-center'>
                <h1>"job title will go here"</h1>
            </div>
            <table class="border border-dark border-5 container px-5 my-5">
                <tr><h2>"job description"</h2></tr>
                <tr><h2>Location: "job location"</h2></tr>
                <tr><h2>Posted on: "job post date"</h2></tr>
            </table>
            <div class=" d-flex justify-content-center">
            <button type="button" class="btn btn-success">Add to my Jobs</button>

            </div>
            
        </>
    )
}

export default ViewJob;