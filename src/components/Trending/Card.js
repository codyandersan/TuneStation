import React from 'react'

function Card(props) { // name, img, key (id) as props
    return (
        <div className="m-auto p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
                <img className="hover:brightness-50 flex-shrink-0 rounded-lg w-screen h-56 object-cover object-center mb-4"
                    src={props.image} />
                <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-white">{props.name}</h2>

                </div>
            </div>
        </div>
    )
}

export default Card
