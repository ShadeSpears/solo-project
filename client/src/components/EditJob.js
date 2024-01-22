import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams, useNavigate} from 'react-router-dom';

const EditJob =  props => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [chore, setChore] = useState({
        title:"",
        description:"",
        location:"",
    })

    const [errors, setErrors] = useState({})
    console.log(errors)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Chores/${id}`)
        .then((res) => {
            console.log(res);
            setChore(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    

    const submitHandler = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/updateChore/${id}`, chore)
        .then((res) => {
            console.log(res);
            navigate('/')
        })
        .catch((err) => {
            setErrors(err.response.data.errors)
        })
    }


    
    return (
        <>
        <div class=' d-flex justify-content-between'>
                <div class='d-flex align-items-center'>
                    <h1>Edit your job posting</h1>
                </div>
                <div class='d-flex align-items-center'>
                    <Link to={'/'}><button type="button" class="btn btn-primary">Back</button></Link>
                    {/* <Link to={'/'}><button type="button" class="btn btn-primary">logout</button></Link> */}
                </div>
            </div>
            
            <form onSubmit={submitHandler}>
            <div class="container px-5 my-5">
                <div>
                    <label class="form-label" for="title">Title</label>
                    <input class="form-control" type="text" name="title" value={chore.title} onChange={(e) => setChore({...chore, title: e.target.value})}></input>
                    {
                        errors.title ?
                        <p class='text-danger'>{errors.title.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label class="form-label" for="description">Description</label>
                    <textarea class="form-control" type="text" name="description" value={chore.description} onChange={(e) => setChore({...chore, description: e.target.value})}></textarea>
                    {
                        errors.description ?
                        <p class='text-danger'>{errors.description.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label class="form-label" for="location">Location</label>
                    <input class="form-control" type="text" name="location" value={chore.location} onChange={(e) => setChore({...chore, location: e.target.value})}></input>
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

export default EditJob;