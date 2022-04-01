import React from 'react'
import { useState, useEffect } from 'react';
import Cards from './Cards';



const ShortenBox = () => {
    let api = 'https://api.shrtco.de/v2/shorten?url='
    const[value, setValue] = useState('');
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const[copyText, setCopied] = useState(false);
    const [urlData, setUrlData] =useState(null);
    let result_api = [];

    const fetchUrl = (url) => {
        fetch(api+url)
        .then(res => {
            if(!res.ok){
                throw Error('could not fecth the data for that resource')
            }
            return res.json()
        })
        .then(e =>{
            setIsPending(false);
            setUrlData(e.result);
            result_api.push(e.result);
            setError(null)
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message)
        })
        return{urlData, isPending, error}
        
    }

    const handleSubmit = () => {
        fetchUrl(value);
        if(isPending == false){
            console.log(urlData)
        }
      
    }


    const copyToClipboard = (text) =>
        navigator.clipboard?.writeText && navigator.clipboard.writeText(text);
    const handleClick = (text) => {
        copyToClipboard(text)
        setCopied(true)
    
    }


  return (
    <section className='flex font-press-start cardbox items-center w-full p-12 flex-col bg-lightgray h-fit relative'>
        <div className="shortBox md:w-[60%] lg:w-[70%] absolute back-desktop -top-8 flex flex-col lg:flex-row items-center justify-center p-8 bg-DarkViolet rounded">
            <input onChange={(e) => {setValue(e.target.value)}} className='lg:w-[80%] md:w-[70%] p-4 rounded ' type="text" placeholder='shorten a link here..' />
            <button onClick={handleSubmit} className='p-4 bg-Cyan m-2 font-bold hover:bg-Gray w-[85%] md:w-[55%] lg:w-[25%] rounded text-White' >Shorten it</button>
        </div>

        <div className='p-8 mt-12  md:p-20  md:w-[82%]'>
        
        {urlData && <div className='flex divide-y-[3px] md:divide-y-[0px] divide-DarkViolet space-y-4 place-items-center mt-12 md:mt-1 flex-col lg:flex-row justify-between  bg-White rounded  p-8'> 
            <p className='text-DarkViolet ' >{urlData.original_link.length > 35 ? urlData.original_link.slice(0,25) + '...' : urlData.original_link}</p>
            <span className='text-Cyan'>{urlData.full_short_link2}</span>

            <button onClick={() => {handleClick(urlData.full_short_link2)}} 

            className='text-slate-50 p-4 btn text-[13px] outline-none rounded bg-Cyan font-semibold text-White w-[80%] lg:w-24 h-12'>{copyText == true ?  'Copied' : 'Copy'} </button>
            </div>}
        </div>
        

        <div className="statsbox flex space-y-5 flex-col m-5 p-12 text-center items-center justify-center">
            <h3 className='text-xl text-DarkViolet md:text-2xl lg:text-4xl font-bold' >Advanced Statistics</h3>
            <p className='leading-6 w-[250px] lg:w-[60%] text-GrayishViolet font-semibold text-center '>Track how your Links are performing accross the web with our advanced statistics dashboard</p>
        </div>

        <Cards />
      
    </section>
  )
}

export default ShortenBox