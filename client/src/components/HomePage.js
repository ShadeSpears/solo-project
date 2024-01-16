import React from 'react';

const HomePage =  props => {
    return (
        <>
        <div>
            <h1>Welcome to Chore Tracker</h1>
        </div>
        <div class="container px-5 my-5 justify-content-evenly d-flex">
            <h2>Register</h2>
            <form id="contactForm">
                    <div>
                        <label for="firstName">First name</label>
                        <input class="form-control" id="firstName" type="text" placeholder="first name"></input>
                    </div>
                    <div>
                        <label for="lastName">Last Name</label>
                        <input class="form-control" id="lastName" type="text" placeholder="last name"></input>
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input class="form-control" id="email" type="text" placeholder="email"></input>
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input class="form-control" id="password" type="password" placeholder="password"></input>
                    </div>
                    <div>
                        <label for="confirmPassword">Confirm Password</label>
                        <input class="form-control" id="confirmPassword" type="password" placeholder="confirm password"></input>
                    </div>
                    <button type="button" class="btn btn-secondary">Register</button>
            </form>
            <h2>Login</h2>
            <form id="contactForm">
                    <div>
                        <label for="email">Email</label>
                        <input class="form-control" id="email" type="text" placeholder="email"></input>
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input class="form-control" id="password" type="password" placeholder="password"></input>
                    </div>
                    <button type="button" class="btn btn-secondary">Log In</button>
            </form>
                
            
        </div>
        </>
    )
}

export default HomePage;