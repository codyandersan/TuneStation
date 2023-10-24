import React, { useState } from 'react'
// import Player from './Player'
import Results from './Results'
import SearchBox from './Search'

function oldsearch(props) {



    return (
        <div>
            <div className=''>

                {!query && <SearchBox setQuery={props.setQuery} setProgress={props.setProgress} />}
                {query && <Results query={query} setProgress={props.setProgress} setDetails={props.setDetails} setAlbumId={props.setAlbumId} setPlaylistId={props.setPlaylistId}/>}

            </div>
        </div>
    )
}

export default oldsearch
