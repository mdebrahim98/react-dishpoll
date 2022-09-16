import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Results() {
    const [allSortedDishes, setallSortedDishes] = useState([])
    let navgate = useNavigate()

    useEffect(() => {
        let allDishes = JSON.parse(localStorage.getItem('allDishes'))
        allDishes.sort((a, b) => b.point - a.point)
        setallSortedDishes(allDishes)


    }, [])

    const handleClick = () => {
        navgate('/polling')
    }


    return (
        <div className="container my-5">
            <button onClick={handleClick} type="button" class=" mb-5 btn btn-outline-primary">{'< back'}</button>

            <div className="card bg-primary text-center" style={{ height: "150px" }} ><h1 style={{ fontSize: "45px" }}>Results</h1></div>


            <table class="table table-striped table-dark">
                <thead>
                    <tr>

                        <th scope="col">Rank</th>
                        <th scope="col">Dish Name</th>
                        <th scope="col">Point</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allSortedDishes.map((elm, idx) => {
                            return (
                                <tr>
                                    <td>{idx + 1}</td>
                                    <td>{elm.dishName}</td>
                                    <td>{elm.point}</td>
                                </tr>
                            )
                        })
                    }





                </tbody>
            </table>
        </div>
    )
}
