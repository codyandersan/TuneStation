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
            return document.getElementById(props.song.id).classList.add("p-2", "w-[100vw]", 'md:w-[50vw]')
        }
        if (sibs.length === 2) {
            return document.getElementById(props.song.id).classList.add("p-2", "md:w-1/2", "w-full")
        }
        else {
            return document.getElementById(props.song.id).classList.add("py-1", "md:p-2", "md:w-1/3", "w-full")
        }
    }

    useEffect(() => {
        setCustomClass();

    }, [])
    return (

        <div id={props.song.id} className='h-20 md:h-24'>
            {/* onClick: sends song details to Search.js and navigates to /listen */}
            <div onClick={props.onClick} className="relative h-full flex items-center  border rounded-lg hover:cursor-pointer hover:border-secondary hover:ring-2 hover:ring-secondary bg-primary text-primary-content">
                <img alt="thumbnail"
                    className="w-20 h-full object-cover object-center rounded-lg flex-shrink-0 mr-4"
                    src={props.song.image[2].link} />
                <div className="flex-grow">
                    <h2 className="text-sm md:text-base font-medium ">{props.song.name ? props.song.name.replace(/&quot;/g, '"') : props.song.title.replace(/&quot;/g, '"')}</h2>
                    <p className="text-xs md:text-sm">{props.song.primaryArtists ? props.song.primaryArtists : props.song.artist}</p>
                </div>

                {props.song.type && <span className="absolute right-0 top-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-primary bg-primary-content rounded-full">{props.song.type.toUpperCase()}</span>}



            </div>
        </div>
    )
}

export default Items
