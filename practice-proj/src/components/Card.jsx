import React from 'react'

function Card(props) {
    return (
        <div style={{ height: '100px', width: '500px', border: '1px solid black' }}>
            <h1>Hello, I am a {props.name}</h1>
        </div>
    )
}

export default Card
