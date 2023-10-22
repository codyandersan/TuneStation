import React from 'react'

function Heading(props) {
    return (
        // The label for Showcase of songs and albums 
        <div className="flex flex-col text-left w-full mb-2">
            <h1 className="text-3xl md:text-4xl font-medium title-font ">{props.title}</h1>            
        </div>

    )
}

export default Heading
