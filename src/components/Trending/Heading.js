import React from 'react'

function Heading(props) {
    return (
        // The label for trending songs and albums 
        <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-2xl font-medium title-font mb-2 dark:text-white text-black">{props.title}</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{props.description}
            </p>
        </div>

    )
}

export default Heading
