import React, { useState } from 'react'
// import Player from './Player'
import Results from './Results'
import SearchBox from './SearchBox'

function Search(props) {
    const [query, setQuery] = useState(null)



    return (
        <div className={props.theme}>
            <div className="py-24">

                {!query && <SearchBox setQuery={setQuery} setProgress={props.setProgress} />}
                {query && <Results query={query} setProgress={props.setProgress} setDetails={props.setDetails} setAlbumId={props.setAlbumId} setPlaylistId={props.setPlaylistId}/>}

            </div>
        </div>
    )
}

export default Search
