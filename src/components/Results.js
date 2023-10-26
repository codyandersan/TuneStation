import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Items from './Items';

function Results(props) { // query

    const navigate = useNavigate(); //for navigating to /listen

    // Search for the song once the component renders
    useEffect(() => {
        if (!props.query) {
            navigate("/search")
            return
        }
        search(props.query)
        document.title = `'${props.query}' - TuneStation`
    }, [])

    const [results, setResults] = useState([]) //the results obtained from search()

    /**
     * Takes song name and searches for results from API
     * @param {string} songname 
     */
    const search = async (songname) => {
        let uri = `https://jiosaavn-api-codyandersan.vercel.app/search/all?query=${songname.replaceAll(" ", "+")}&page=1&limit=6`
        props.setProgress(40)
        const response = await fetch(uri)
        props.setProgress(70)
        const resp = await response.json();
        props.setProgress(100)

        let topMatch = resp.data.topQuery.results
        let songs = resp.data.songs.results
        let albums = resp.data.albums.results
        let playlists = resp.data.playlists.results

        let raw_results = [...topMatch, ...songs, ...albums, ...playlists]

        let uniqueKeys = new Set();
        let results = []

        //Checking for any duplicate results and removing artists that might be included in topMatch
        raw_results.forEach(obj => {
            if (obj.type !== "artist") {
                if (!uniqueKeys.has(obj.id)) {
                    results.push(obj);
                    uniqueKeys.add(obj.id);
                }
            }
        });
        setResults(results)
    }

    const getSongDetails = async (songId) => {
        let uri = `https://jiosaavn-api-codyandersan.vercel.app/songs?id=${songId}`

        props.setProgress(30)
        let data = await fetch(uri)
        props.setProgress(50)

        let resp = await data.json()
        props.setProgress(70)

        props.setProgress(100)
        return resp.data[0] //As resp.data is actually an array of a single object!
    }



    return (
        <>
            <section className="body-font h-screen mt-2">
                <div className="container px-0 py-2 mx-auto" id="blurred_results">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Search Results: &#10075;<span
                            id="search_query" className="capitalize">{props.query}</span>&#10076;</h1>
                    </div>

                    <div className="flex flex-wrap pb-[8rem]  md:pb-2" id="results">
                        {results.map((song) => {
                            return <Items key={song.id} song={song} onClick={
                                async () => {
                                    if (song.type.toUpperCase() == "SONG") {
                                        let details = await getSongDetails(song.id)
                                        props.setDetails(details)
                                        // navigate("/listen")
                                    }
                                    else if (song.type.toUpperCase() == "ALBUM") {
                                        props.setAlbumId(song.id)
                                        navigate("/albums")
                                    }
                                    else if (song.type.toUpperCase() == "PLAYLIST") {
                                        props.setPlaylistId(song.id)
                                        navigate("/playlists")
                                    }
                                }
                            } />

                        })}
                    </div>


                </div>
            </section>
        </>
    )
}

export default Results
