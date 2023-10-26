import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'

function Albums(props) { //albums ,setAlbumId
    const navigate = useNavigate(); //for navigating to /albums


    return (
        <div className="flex md:pb-2 flex-row overflow-x-scroll md:overflow-x-clip m-2" >
            {props.albums.map((album) => {
                return <Card onClick={() => { props.setAlbumId(album.id); navigate("/albums") }} key={album.id} image={album.image} name={album.name.replace(/&quot;/g, '"')} />
            })}
        </div>
    )
}
export default Albums
