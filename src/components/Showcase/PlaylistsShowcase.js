import React, { useEffect, useState } from 'react'
import Items from '../Items'
import { useNavigate } from "react-router-dom";

function PlaylistsShowcase(props) { //setDetails (for player), playlistId


    const [details, setPlaylistDetails] = useState(null)

    const navigate = useNavigate(); //for navigating to /listen

    const getDetails = async () => {
        let uri = `https://jiosaavn-api-codyandersan.vercel.app/playlists?id=${props.playlistId}`

        props.setProgress(30)
        let data = await fetch(uri)
        props.setProgress(50)

        let resp = await data.json()
        props.setProgress(70)        
        setPlaylistDetails(resp.data)
        props.setProgress(100)        
    }

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        if (props.playlistId) getDetails()
        else navigate("/")

    }, [])
    return (
        <>
            {props.playlistId && details && <div className="pb-28">
                <section className="py-2 body-font">
                    <div className="container mx-auto flex flex-col px-5 py-5  items-center">
                        <img className="md:w-[15rem] md:h-[15rem] w-5/6 mb-6 object-cover object-center rounded-lg" alt="image" src={details.image && details.image.length ? details.image[details.image.length - 1].link : 'https://media.gq.com/photos/5ae3925b3fb87856d8a5cdf6/16:9/w_2560%2Cc_limit/Road-Trip-Playlist-GQ-April-2018-042718-3x2.png'} onError={(e) => { e.target.onerror = null; e.target.src = 'https://media.gq.com/photos/5ae3925b3fb87856d8a5cdf6/16:9/w_2560%2Cc_limit/Road-Trip-Playlist-GQ-April-2018-042718-3x2.png' }}
                        />
                        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                            <h1 className="title-font md:text-4xl text-2xl mb-4 font-medium">{details.name.replace(/&quot;/g, '"')}</h1>
                            {details.primaryArtists && <p className="mb-1 leading-relaxed">By {details.primaryArtists}</p>}
                        </div>

                        <div className="flex flex-wrap -m-2" id="results">

                            {details.songs.map((song) => {
                                return <Items key={song.id} song={song} onClick={() => { props.setDetails(song); }} />
                            })}
                        </div>
                    </div>
                </section>
            </div>}
        </>
    )
}

export default PlaylistsShowcase
