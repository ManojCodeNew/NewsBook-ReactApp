import React from 'react'
import loading from "./loader-1.gif";

export default function loader() {
    return (
        <div className='flex flex-row justify-center m-3'>
            <img src={loading} alt='loading...' width='80px' height='30px' ></img>
        </div>
    )
}