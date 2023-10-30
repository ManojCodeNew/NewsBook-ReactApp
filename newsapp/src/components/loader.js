import React from 'react'
import loading from "./loader-2.gif";

export default function loader() {
    return (
        <div className='flex flex-row justify-center m-3'>
            <img src={loading} alt='loading...' ></img>
        </div>
    )
}