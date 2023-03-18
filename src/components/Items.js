import React, { useEffect } from 'react'

function Items(props) { //song object, onClick function

    const filter = (elem) => {
        switch (elem.nodeName.toUpperCase()) {
            case 'DIV':
                return true;
            default:
                return false;
        }
    }
    const setCustomClass = () => {
        let elem = document.getElementById(props.song.id)
        let sibs = [];
        elem = elem.parentNode.firstChild;
        do {
            if (elem.nodeType === 3) continue; // text node
            if (!filter || filter(elem)) sibs.push(elem);
        } while (elem = elem.nextSibling)

        if (sibs.length === 1) {
            return document.getElementById(props.song.id).classList.add("p-2", "w-full")
        }
        if (sibs.length === 2) {
            return document.getElementById(props.song.id).classList.add("p-2", "md:w-1/2", "w-full")
        }
        else {
            return document.getElementById(props.song.id).classList.add("p-2", "lg:w-1/3", "md:w-1/2", "w-full")
        }
    }

    useEffect(() => {
        setCustomClass();
    }, [])
    return (

        <div id={props.song.id}>
            {/* onClick: sends song details to Search.js and navigates to /listen */}
            <div onClick={props.onClick} className="h-full flex items-center border-gray-800 dark:border-light-200 border p-4 rounded-lg hover:cursor-pointer hover:border-green-500 hover:ring-2 hover:ring-green-900 bg-gray-200 dark:bg-deep-900">
                <img alt="thumbnail"
                    className="w-20 h-20 bg-gray-900 dark:bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={props.song.image[2].link} />
                <div className="flex-grow">
                    <h2 className="dark:text-white text-black title-font font-medium">{props.song.name.replace(/&quot;/g, '"')}</h2>
                    <p className="text-black dark:text-gray-600">{props.song.primaryArtists}</p>
                </div>
            </div>
        </div>
    )
}

export default Items
