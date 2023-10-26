import React, { useEffect, useState } from 'react'
import Items from '../Items'
import { useNavigate } from "react-router-dom";

function AlbumsShowcase(props) { //setDetails (for player), albumId


    const [details, setAlbumDetails] = useState(null)

    const navigate = useNavigate(); //for navigating to /listen

    const getDetails = async () => {
        let uri = `https://jiosaavn-api-codyandersan.vercel.app/albums?id=${props.albumId}`

        props.setProgress(30)
        let data = await fetch(uri)
        props.setProgress(50)

        let resp = await data.json()
        props.setProgress(70)        
        setAlbumDetails(resp.data)
        props.setProgress(100)

    }

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0; //scroll to top of page
        if (props.albumId) getDetails()
        else navigate("/")

    }, [])
    return (
        <>            
            {props.albumId && details && <div >
                <section className="pb-32 md:pb-32">
                    <div className="container mx-auto flex flex-col px-5 items-center">
                        <img className="md:w-[15rem] md:h-[15rem] w-5/6 mb-6 object-cover object-center rounded-lg" alt="image" src={details.image[details.image.length - 1].link ? details.image[details.image.length - 1].link : "https://media.gq.com/photos/5ae3925b3fb87856d8a5cdf6/16:9/w_2560%2Cc_limit/Road-Trip-Playlist-GQ-April-2018-042718-3x2.png"} />
                        <div className="w-full md:w-2/3 flex flex-col mb-10 items-center text-center">
                            <h1 className="title-font md:text-4xl text-2xl mb-4 font-medium">{details.name.replace(/&quot;/g, '"')}</h1>
                            <p className="mb-1 leading-relaxed">By {details.primaryArtists}</p>
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

export default AlbumsShowcase
