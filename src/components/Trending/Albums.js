import React, { useState, useEffect } from 'react'
import Card from './Card'

function Albums(props) {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
      getTrendings()
    }, [])
    
    /**
     * Fetches trending albums from API and sets it in the albums state
     */
    const getTrendings = async () => {
        let uri = "https://saavn.me/modules?language=hindi"

        let data = await fetch(uri)
        let resp = await data.json()
        props.setProgress(100)
        let albums = resp["data"]["trending"]["albums"]
        let albums_showcase = []
        let count = 0
        while (count < 10) {
            if (albums_showcase.length === 4) break

            // if song index exists:    
            if (albums[count]) {
                albums_showcase.push({
                    name: albums[count]["name"],
                    image: albums[count]["image"][2]["link"],
                    id: albums[count]["id"]
                })
            }
            count += 1
        }

        setAlbums(albums_showcase)
    }



    return (
        <div className="flex flex-wrap m-2" >
            {albums.map((album) => {
                return <Card key={album.id} image={album.image} name={album.name.replace(/&quot;/g, '"')} />
            })}
        </div>
    )
}
export default Albums
