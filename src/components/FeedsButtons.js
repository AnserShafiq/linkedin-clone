import React from 'react'
import "../assets/styles/Feeds.css"
const FeedsButtons = ({title,Icon,color}) => {
    return (
        <div className='feedBtn'>
            {Icon && (<Icon style={{color:color}}/>)}
            {title && <h5>{title}</h5>}
        </div>
    )
}

export default FeedsButtons
