import React, { useState } from 'react'
// import Player from './Player'
import Results from './Results'
import SearchBox from './SearchBox'

function Search(props) {
    const [query, setQuery] = useState(null)



    return (
        <>
            {!query && <SearchBox setQuery={setQuery} setProgress={props.setProgress} />}
            {query && <Results query={query} setProgress={props.setProgress} setDetails={props.setDetails} />}

        </>
    )
}

export default Search
