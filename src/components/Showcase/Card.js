import React from 'react'

function Card(props) { // name, img, key (id), onClick as props
    return (
        <div className=" p-4 pt-0  w-max" onClick={props.onClick}>
            <div className=" w-[14rem] flex flex-col items-center text-center">
                <img className="hover:brightness-50 flex-shrink-0 rounded-lg  h-36 w-full object-cover object-center mb-4"
                    src={props.image} />

                <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-12 h-12 flex items-center justify-center pl-0.5 ring-2 bg-pink-700/50 ring-gray-100 focus:outline-none opacity-0 transition-opacity duration-300"
                    id="controlBtn"
                    onMouseOver={(e) => e.currentTarget.style.opacity = "1"}
                    onMouseOut={(e) => e.currentTarget.style.opacity = "0"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="2"
                        stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                </button>

                <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-clip">{props.name.length > 23 ? props.name.substring(0, 23) + "..." : props.name}</h2>

                </div>
            </div>
        </div>
    )
}

export default Card
