import React from 'react';
import {Link} from 'react-router-dom';

const EditJob =  props => {
    // all of this is the same as add but will need to have the current information inside of the boxes
    return (
        <>
        <div class=' d-flex justify-content-between'>
                <div class='d-flex align-items-center'>
                    <h1>Edit your job posting</h1>
                </div>
                <div class='d-flex align-items-center'>
                    <Link to={'/dashboard'}><button type="button" class="btn btn-primary">Back</button></Link>
                    <Link to={'/'}><button type="button" class="btn btn-primary">logout</button></Link>
                </div>
            </div>
            {/* This will be inside of a form */}
            <div class="container px-5 my-5">
                <div>
                    <label class="form-label" for="title">Title</label>
                    <input class="form-control" type="text" name="title" placeholder='Title'></input>
                </div>
                <div>
                    <label class="form-label" for="description">Description</label>
                    <textarea class="form-control" type="text" name="description" placeholder="desctiption"></textarea>
                </div>
                <div>
                    <label class="form-label" for="location">Location</label>
                    <input class="form-control" type="text" name="location" placeholder='location'></input>
                </div>
            <Link to={'/dashboard'}><button type="button" class="btn btn-secondary">Submit</button></Link>
            </div>
        </>
    )
}

export default EditJob;