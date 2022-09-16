import React, { useRef, useEffect, useState, useContext } from 'react'

export default function Card({ elm, rankOneHandle, rankTwoHandle, rankThreeHandle, rank1, rank2, rank3 }) {




    return (
        <div className="card mx-2 my-2" style={{ width: "18rem", position: 'relative' }}>

            <img className="card-img-top" src={elm.image} alt="Card image cap" />
            <div className="rank" >
                <h1 className='bg-primary'>{ }</h1>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button className={elm.id == rank1 ? 'bg-primary btn ' : 'btn btn-outline-primary'} onClick={() => rankOneHandle(elm.id)} type="button" >Rank1</button>

                    <button className={elm.id == rank2 ? 'btn  bg-primary ' : 'btn btn-outline-primary'} onClick={() => rankTwoHandle(elm.id)} type="button">Rank2</button>

                    <button className={elm.id == rank3 ? 'btn bg-primary ' : 'btn btn-outline-primary'} onClick={() => rankThreeHandle(elm.id)} type="button" >Rank3</button>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{elm.dishName}</h5>
                <p className="card-text">{elm.description}</p>

            </div>
        </div>
    )
}
