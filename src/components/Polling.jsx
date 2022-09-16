import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'


import { useNavigate } from "react-router-dom";



export default function Polling() {
    const [rank1, setrank1] = useState(null)
    const [rank2, setrank2] = useState(null)
    const [rank3, setrank3] = useState(null)
    const [dishes, setDishes] = useState([])
    let navigate = useNavigate();



    const rankOneHandle = (id) => {
        if (id != rank2 && id != rank3) {
            setrank1(id);
            localStorage.setItem('rank1', id)
        }

        if (id == rank2) {
            setrank2(null);
            localStorage.setItem('rank2', null)
            setrank1(id)
            localStorage.setItem('rank1', id)
        }

        if (id == rank3) {
            setrank3(null);
            localStorage.setItem('rank3', null)
            setrank1(id)
            localStorage.setItem('rank1', id)
        }



    }
    const rankTwoHandle = (id) => {

        if (id != rank1 && id != rank3) {
            setrank2(id);
            localStorage.setItem('rank2', id)
        }

        if (id == rank1) {
            setrank1(null);
            localStorage.setItem('rank1', null)
            setrank2(id)
            localStorage.setItem('rank2', id)
        }

        if (id == rank3) {
            setrank3(null);
            localStorage.setItem('rank3', null)
            setrank2(id)
            localStorage.setItem('rank2', id)
        }


    }
    const rankThreeHandle = (id) => {
        if (id != rank2 && id != rank1) {
            setrank3(id);
            localStorage.setItem('rank3', id)
        }

        if (id == rank2) {
            setrank2(null);
            localStorage.setItem('rank2', null)
            setrank3(id)
            localStorage.setItem('rank3', id)
        }

        if (id == rank1) {
            setrank1(null);
            localStorage.setItem('rank1', null)
            setrank3(id)
            localStorage.setItem('rank3', id)
        }


    }


    const rankUpdate = (rank, point) => {
        let arr = JSON.parse(localStorage.getItem('allDishes'))
        let newArr = arr.map((elm, idx) => {
            if (elm.id === rank) {

                if (elm?.point) {
                    elm.point += point;
                    return elm
                } else {
                    elm.point = point
                    return elm
                }

            } else {
                if (elm?.point) {
                    return elm
                } else {

                    elm.point = 0
                    return elm
                }

                return elm

            }
        })


        localStorage.setItem('allDishes', JSON.stringify(newArr))



    }

    const handleSubmit = () => {
        rankUpdate(rank1, 30)
        rankUpdate(rank2, 20)
        rankUpdate(rank3, 10)
        navigate('/result')

    }







    useEffect(() => {
        async function dataFetch() {
            let res = await axios.get("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
            console.log(res)
            setDishes(res.data)

            if (!localStorage.getItem('allDishes')) {

                localStorage.setItem('allDishes', JSON.stringify(res.data))

            }


        }
        dataFetch()


        // let first = localStorage.getItem('rank1')
        // setrank1(first)
        // let second = localStorage.getItem('rank2')
        // setrank2(second)
        // let third = localStorage.getItem('rank3')
        // setrank3(third)




    }, [])


    const handleClick = () => {
        navigate('/dashboard')
    }



    return (

        <div class="container  ">

            <button onClick={handleClick} type="button" class=" my-4 btn btn-outline-primary">{'< back'}</button>

            <button onClick={() => handleSubmit()} className='btn bg-primary my-5 text-center ' style={{ margin: "0 auto", display: "block" }} disabled={rank1 != null && rank2 != null && rank3 != null ? false : true}>Submit</button>

            <div class="row  d-flex justify-content-center" >
                {
                    dishes.length > 0 ?
                        dishes.map((elm, idx) => {
                            return <Card

                                rankOneHandle={rankOneHandle}
                                rankTwoHandle={rankTwoHandle}
                                rankThreeHandle={rankThreeHandle}
                                rank1={rank1}
                                rank2={rank2}
                                rank3={rank3}

                                key={idx} elm={elm} />

                        })

                        : null

                }


            </div>
        </div>
    )
}
