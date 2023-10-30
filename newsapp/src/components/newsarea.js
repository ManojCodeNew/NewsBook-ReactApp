import React from 'react'
import { useState, useEffect } from 'react'
import Mainarea from './Mainarea'
import Loader from './loader'
// you must install npm i react-top-loading-bar
import LoadingBar from 'react-top-loading-bar';
import InfiniteScroll from "react-infinite-scroll-component";

function Newsarea(props) {
    const [text, settext] = useState({
        category: props.category,
        progress: 10,
        totalResults: 0,
        page: 1,
        loading: true,
    })
    // here usestate([]) this square bracket specify the array whatever data you should set in this usestate that will convert into array 'this is very imp for using map() function'
    const [data, setdata] = useState([]);
    // useeffect() function used to fetch data in function based component in react

    async function fetchdata() {
        settext((prevState) => ({
            ...prevState,
            loading: true,
            category: text.category,
            progress: 60,
        }))
        let api = `https://newsapi.org/v2/everything?q=${text.category}&sortBy=publishedAt&Page=${text.page}&PageSize=15&apiKey=b1aee878476a48c1be0344d6c2cabe9c`
        let apifetch = await fetch(api)
        let jsonresult = await apifetch.json();
        if (jsonresult.articles && jsonresult.articles.length > 0) {
            // 
            setdata([...data, ...jsonresult.articles])
            // 
            settext((prevState) => ({
                ...prevState,
                category: text.category,
                progress: 100,
                totalResults: jsonresult.totalResults,
            }))
        } else {

        }

        console.log(jsonresult, text.page);
    }
    // 
    useEffect(() => {
        fetchdata()
        // React Hook useEffect has a missing dependency: 'text.category'. Either include it or remove the dependency array :-when you getting this error you should write 'text.category'or that error given specific name 
    }, [text.category, text.page])

    function fetchMoreData() {
        settext((prevState) => ({
            ...prevState,
            page: prevState.page + 1,
        }));
    }

    let typeofnews = text.category;
    let capitalizedcategory = typeofnews.charAt(0).toUpperCase() + typeofnews.slice(1)
    document.title = `${capitalizedcategory} - NewsBook`
    return (
        <div>
            <LoadingBar color='yellow' height={3} progress={text.progress} />
            <div className=' text-2xl  text-gray-200 m-3 '>
                <h1 className='text-xl font-boldfontsize-md  text-center text-black mb-3 mt-3'><strong><span className='bg-black text-white p-1 rounded'>NewsBook -TOP <span className='text-red-600'>{capitalizedcategory}</span> HeadLines</span></strong></h1>

                {/* <h1 className='text-center'><strong>TOP-{text.category} HEADLINES</strong></h1> */}
            </div>
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={data.length < text.totalResults}
                loader={<Loader />}
            >
                {text.loading && <Loader />}
                <div className=' flex flex-wrap justify-center'>
                    {data.map((article, index) => (
                        <Mainarea
                            key={index}
                            title={article.title}
                            description={article.description.slice(0, 110)}
                            sourcename={article.source.name}
                            imgurl={article.urlToImage}
                            sourceurl={article.url}
                            publisheddate={article.publishedAt}
                        />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )

}
export default Newsarea;

