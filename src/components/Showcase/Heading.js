import React from 'react'

function Heading(props) {
    return (
        // The label for Showcase of songs and albums 
        <div className="flex flex-col text-left w-full mb-2">
            <h1 className="text-2xl md:text-3xl font-medium title-font  dark:text-white text-black">{props.title}</h1>
            
        </div>

    )
}

export default Heading
