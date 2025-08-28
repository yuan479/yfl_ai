import React from 'react'
import avatar from './images/avatar.webp'
import book from './images/book.webp'
import {add} from './math'

const Hello = () => {
    return (
        <>
        <img src={avatar} alt="" style={{width:'40px',height:'40px'}}/>
        千里路途我只送你一程，此后风雪艳阳我不再过问
        <img src={book} alt="" style={{width:'40px',height:'40px'}}/>
        <div>{add(1,2)}</div>
        </>
    )
}

export default Hello