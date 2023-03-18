import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Items from '../Items';

function Results(props) { // query

    const navigate = useNavigate(); //for navigating to /listen

    // Search for the song once the component renders
    useEffect(() => {
        search(props.query)
        document.title = `'${props.query}' - TuneStation`
    }, [])


    const [results, setResults] = useState([]) //the results obtained from search()

    /**
     * Takes song name and searches for results from API
     * @param {string} songname 
     */
    const search = async (songname) => {

        console.log(songname)
        let uri = `https://saavn.me/search/songs?query=${songname.replaceAll(" ", "+")}&page=1&limit=6`
        props.setProgress(40)
        const response = await fetch(uri)
        props.setProgress(70)
        const resp = await response.json();
        props.setProgress(100)
        console.log(resp)
        let result = resp.data.results
        console.log(result)
        setResults(result)
        console.log(results)

    }



    return (
        <>
            <section className="text-black dark:text-gray-400 bg-light-100 dark:bg-deep-900 body-font">
                <div className="container px-5 py-8 mx-auto" id="blurred_results">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black dark:text-white">Search Results: &#10075;<span
                            id="search_query" className="capitalize">{props.query}</span>&#10076;</h1>
                    </div>

                    <div className="flex flex-wrap -m-2" id="results">
                        {results.map((song) => {
                            return <Items key={song.id} song={song} onClick={() => { props.setDetails(song); navigate("/listen") }} />

                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Results
