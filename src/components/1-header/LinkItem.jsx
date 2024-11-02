import React from 'react'

function LinkItem(props) {
    return (
        <li className={props.className}><a href="#">{props.name}</a></li>
    )
}

export default LinkItem