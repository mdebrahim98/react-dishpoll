import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import dishImage from '../assets/dish.avif'

export default function DashBoard() {
    let navigate = useNavigate()
    return (
        <div className="container d-flex justify-content-center 
        align-items-center mt-5">
            <button type='btn' style={{ position: "absolute", top: "5px", right: "15px" }} className='btn btn-danger' onClick={() => navigate('/login')}>log out</button>

            <div className="card" style={{ width: "45rem" }}>
                <img src={dishImage} className="card-img-top" alt="..." />
                <div className="card-body text-center">

                    <Link to="/polling" className="btn btn-outline-primary mx-5">Poll start</Link>
                    <Link to="/result" className="btn btn-outline-primary ml-5">View result</Link>
                </div>
            </div>
        </div>
    )
}
