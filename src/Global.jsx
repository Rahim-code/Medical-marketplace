import React from 'react'
import { useSelector } from 'react-redux'

function Global(){
    const count = useSelector((state)=>state.counter.value)
    return(
        <div>
            GlobalCount:{count}
        </div>
    )
}

export default Global