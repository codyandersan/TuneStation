import React from 'react'

function Items(props) { //song object, onClick function
    return (

        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            {/* sends song details to Search.js and navigates to /listen */}
            <div onClick={props.onClick} className="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:cursor-pointer hover:border-green-500 hover:bg-deep-900 hover:ring-2 hover:ring-green-900">
                <img alt="thumbnail"
                    className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={props.song.image[2].link} />
                <div className="flex-grow">
                    <h2 className="text-white title-font font-medium">{props.song.name}</h2>
                    <p className="text-gray-600">{props.song.primaryArtists}</p>
                </div>
            </div>
        </div>
    )
}

export default Items
