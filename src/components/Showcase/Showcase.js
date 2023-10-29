

import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";

import Heading from './Heading'
import Songs from './Songs'
import Albums from './Albums'
import Playlists from './Playlists';


function Showcase(props) {

    const navigate = useNavigate(); //for navigating to /listen

    const [trending_songs, setTrendingSongs] = useState([])
    const [trending_albums, setTrendingAlbums] = useState([])

    const [top_albums, setTopAlbums] = useState([])

    const [playlists, setPlaylists] = useState([])
    const [charts, setCharts] = useState([])

    const isFirstRender = useRef(true)

    const searchFromId = async (id) => {
        let raw_resp = await fetch(`https://jiosaavn-api-codyandersan.vercel.app/songs?id=${id}`)
        let resp = await raw_resp.json()
        props.setDetails(resp.data[0])
    }

    /**
     * Main function that fetches homepage API sets the homepage data
     */
    const setHomepageData = async () => {
        let uri = "https://jiosaavn-api-codyandersan.vercel.app/modules?language=hindi"

        props.setProgress(30)
        let data = await fetch(uri)
        props.setProgress(50)

        let resp = await data.json()
        props.setProgress(70)

        //Trending songs:
        setTrendingSongs(getShowcase(resp["data"]["trending"]["songs"], "song"))

        //Trending albums:
        setTrendingAlbums(getShowcase(resp["data"]["trending"]["albums"], "album"))

        //Top albums:
        setTopAlbums(getShowcase(resp["data"]["albums"], "album"))

        //Playlists:        
        setPlaylists(getShowcase(resp["data"]["playlists"], "playlist"))

        //Charts:
        setCharts(getShowcase(resp["data"]["charts"], "playlist"))


        props.setProgress(100)
    }

    /**
     * Helper function for shuffling the array of songs/albums
     * @param {array} array Array of song/album to be shuffled
     * @returns shuffled array
     */
    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    /**
     * Takes a list of songs/albums and returns it in the form of showcase
     * @param {Array} data The array of songs/albums of which to get the showcase
     * @param {String} type The type of data (song/album/playlist), so as to avoid different type being displayed with another type of data
     * @returns the name, image, id of the data
     */
    const getShowcase = (data, type) => {
        let data_showcase = []
        let count = 0
        while (count < 10) {
            if (data_showcase.length === 4) break
            // if song index exists:    
            if (data[count] && data[count].type == type) {
                let data_name = data[count]["name"] ? data[count]["name"] : data[count]["title"]
                data_showcase.push({
                    name: data_name,
                    image: data[count]["image"][2]["link"],
                    id: data[count]["id"]
                })
            }
            count += 1
        }
        return shuffle(data_showcase)

    }


    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0; //scroll to top of page
        document.title = "Popular Now - TuneStation"
        setHomepageData()

    }, [])



    return (
        <div>
            {/* <div className="text-4xl text-pink-300 mx-5 mb-2 ">Good evening,</div> */}
            <section className=" body-font justify-center pb-5  ">
                {(charts.length > 0) &&
                    <div className="container px-5 mx-auto mb-0 ">
                        {(trending_songs.length > 0) && <div className='mb-12 mt-2'>

                            <Heading title="Trending Now" />

                            <Songs songs={trending_songs} searchFromId={searchFromId} />

                        </div>}

                        {(trending_albums.length > 0) && <div className='my-12'>

                            <Heading title="Popular Albums" />
                            <Albums albums={trending_albums} setAlbumId={props.setAlbumId} />
                        </div>}

                        {(top_albums.length > 0) && <div className='my-12'>

                            <Heading title="Editorial Picks" />
                            <Albums albums={top_albums} setAlbumId={props.setAlbumId} />
                        </div>}
                        {(charts.length > 0) && <div className='my-12'>

                            <Heading title="Top Charts" />
                            <Playlists playlists={charts} setPlaylistId={props.setPlaylistId} />
                        </div>}
                        {(playlists.length > 0) && <div className='mt-12 mb-20 md:mb-28'>

                            <Heading title="Made for you" />
                            <Playlists playlists={playlists} setPlaylistId={props.setPlaylistId} />
                        </div>}


                    </div>
                }
            </section>
        </div>
    )
}

export default Showcase
