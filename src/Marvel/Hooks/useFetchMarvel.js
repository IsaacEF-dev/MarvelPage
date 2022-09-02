import { useEffect, useState } from 'react'

export const useFetchMarvel = (url) => {
    const [state, setState] = useState({data:null})

    const getFetch=async()=>{
        const resp=await fetch(url);
        const data=await resp.json();
        setState({
            data
        })
    }

    useEffect(() => {

      getFetch();

    }, [url])

    return{
        data:state.data
    }
    
}
