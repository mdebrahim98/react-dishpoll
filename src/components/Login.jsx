import React, { useState, useEffect } from 'react'
import axios from 'axios'
import users from './user.json'
import { useNavigate } from 'react-router-dom'
import './login.css'

export default function Login() {
    const navigate = useNavigate()

    const [credentials, setcredentials] = useState({
        username: null,
        password: null
    })

    const handleChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let userIsExist = users.some((elm) => {

            return elm.username == credentials.username && elm.password == credentials.password
        })

        if (userIsExist) {
            navigate('/dashboard')
        }

    }


    return (


        <div className=" container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>

            <div className="login_container ">

                <form onSubmit={handleSubmit} >
                    <div class="mb-3">
                        <label for="username" class="form-label">User Name</label>
                        <input autoComplete="off" name='username' onChange={handleChange} type="text" class="form-control" id="username" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input name='password' onChange={handleChange} type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" class="btn btn-primary">Login</button>
                </form>

            </div>



        </div>



    )
}
