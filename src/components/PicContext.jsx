import React from 'react'
import {useState,createContext,useEffect} from 'react'
import axios from 'axios'

export const PicContext = createContext()


export const PicProvider = props=>{
  
	const [data, setData] = useState(
{
	countGood: 0,
	countBad: 0,
	picNum: 1,
}
	);
  



    return(
        <PicContext.Provider value={[data,setData]}>
            {props.children}
        </PicContext.Provider>
    )
}

