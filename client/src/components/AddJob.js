import React, {useState} from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const AddJob =  () => {
    const [chore, setChore] = useState({
        title:"",
        description:"",
        location:"",
    })

    const changeHandler = (e) => {
        setChore({...chore, [e.target.name]: e.target.value})
    }

    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/newChore", chore)
        .then((res) => {
            console.log(res);
            navigate('/')
            setChore({
                title:"",
                description:"",
                location:""
            })
        })
        .catch((err) => {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }
    return (
        <>
            <div class=' d-flex justify-content-between'>
                <div class='d-flex align-items-center'>
                    <h1>Add a Job</h1>
                </div>
                <div class='d-flex align-items-center'>
                    <Link to={'/'}><button type="button" class="btn btn-primary">Back</button></Link>
                    {/* <Link to={'/'}><button type="button" class="btn btn-primary">logout</button></Link> */}
                </div>
            </div>
            {/* This will be inside of a form */}
            <form onSubmit={submitHandler}>
            <div class="container px-5 my-5">
                <div>
                    <label class="form-label">Title</label>
                    <input class="form-control" type="text" name="title" value={chore.title} onChange={changeHandler}></input>
                    {
                        errors.title ?
                        <p class='text-danger'>{errors.title.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label class="form-label" for="description">Description</label>
                    <textarea class="form-control" type="text" name="description" value={chore.description} onChange={changeHandler}></textarea>
                    {
                        errors.description ?
                        <p class='text-danger'>{errors.description.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label class="form-label" for="location">Location</label>
                    <input class="form-control" type="text" name="location" value={chore.location} onChange={changeHandler}></input>
                    {
                        errors.location ?
                        <p class='text-danger'>{errors.location.message}</p>:
                        null
                    }
                </div>
            <button type="submit" class="btn btn-secondary mt-2">Submit</button>
            </div>
            </form>
        
        </>
    )
}

export default AddJob;