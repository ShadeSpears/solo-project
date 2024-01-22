import React, {useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import dayjs from 'dayjs'

const ViewJob =  (props) => {
    const [chore, setChore] = useState ({})
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Chores/${id}`)
        .then((res) => {
            console.log(res.data);
            setChore(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])





    return (
        <>
        <div class=' d-flex justify-content-end'>
            <div class='d-flex align-items-center'>
                <Link to={'/'}><button type="button" class="btn btn-primary">Back</button></Link>
                {/* <Link to={'/'}><button type="button" class="btn btn-primary">logout</button></Link> */}
            </div>
        </div>
            <div class='d-flex justify-content-center'>
                <h1>{chore.title}</h1>
            </div>
            <table class="border border-dark border-5 container px-5 my-5">
                <thead>
                    <tr><h2>{chore.description}</h2></tr>
                    <tr><h2>Location: {chore.location}</h2></tr>
                    <tr><h2>Posted by: "poster of jobs name goes here somehow"</h2></tr>
                    <tr><h2>Posted on: {dayjs(chore.createdAt).format("MMMM D, YYYY")}</h2></tr>
                </thead>
            </table>
            <div class=" d-flex justify-content-center">
            <button type="button" class="btn btn-success">Add to my Jobs</button>

            </div>
            
        </>
    )
}

export default ViewJob;