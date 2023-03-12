import React, { useState, useEffect } from 'react'
import Card from './Card'


function Songs(props) {
    const [songs, setSongs] = useState([])
    useEffect(() => {
        getTrendings()
    }, [])

    /**
     * Fetches trending songs from API and sets it in the albums state
     */
    const getTrendings = async () => {
        let uri = "https://saavn.me/modules?language=hindi"

        props.setProgress(30)
        let data = await fetch(uri)
        props.setProgress(50)

        let resp = await data.json()
        props.setProgress(70)
        console.log(resp)
        let songs = resp["data"]["trending"]["songs"]

        let songs_showcase = []
        let count = 0
        while (count < 10) {
            if (songs_showcase.length === 4) break

            // if song index exists:    
            if (songs[count]) {
                songs_showcase.push({
                    name: songs[count]["name"],
                    image: songs[count]["image"][2]["link"],
                    id: songs[count]["id"]
                })
            }
            count += 1
        }

        setSongs(songs_showcase)
    }



    return (
        <div className="flex flex-wrap m-2" >
            {songs.map((song) => {
                return <Card key={song.id} image={song.image} name={song.name.replace(/&quot;/g, '"')} />
            })}
        </div>
    )
}

export default Songs
