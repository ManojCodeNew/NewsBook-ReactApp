import React, { useState } from 'react'
function Mainarea(props) {

    const [data] = useState({
        title: props.title,
        description: props.description,
        Author: props.Author,
        imgurl: props.imgurl,
        sourceurl: props.sourceurl,
        sourcename: props.sourcename,
        publisheddate: props.publisheddate,

    })
    let notfounding = "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-32.png"
    return (
        <>
            <div className='flex flex-row justify-center p-2'>
                <div className=" m-2 max-w-sm mx-auto bg-white rounded-lg shadow-md" >
                    <div className='w-70 h-100 bg-gray-200 p-4 m-4'>
                        <div className='bg-gradient-to-r from-red-600 to-red-900 hover:from-black hover:to-black text-md'>
                            <h2 className='pl-3 font-semibold text-white'> {data.sourcename} </h2>
                        </div>
                        <img src={!data.imgurl ? notfounding : data.imgurl} className="w-full h-48" alt="Loding..." />
                        <div className="p-2 m-1">
                            <h1 className=""><strong>{data.title}</strong></h1>
                            <p className="m-2">{!data.description ? "Unknown" : data.description}...</p>
                            <p className="pb-3 text-gray-600"><small>By {!data.sourcename ? 'Unknown' : data.sourcename} on {new Date(data.publisheddate).toGMTString()}</small></p>
                            <a href={data.sourceurl} className="bg-purple-700 hover:bg-fuchsia-600 text-white p-2 rounded mb-4  ">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Mainarea;
