import React, { useState, useRef, useEffect } from 'react'

const MiniPlayer = (props) => {

    // Download Functions 
    /**
     * Helper function for downloadSong
     * @param {} blob The blobURL of the song.
     * @param {string} filename The name with which to download the file.
     */
    const downloadBlob = (blob, filename) => {
        var a = document.createElement('a');
        a.download = filename;
        a.href = blob;
        document.body.appendChild(a);
        props.setProgress(90)
        a.click();
        a.remove();
        props.setProgress(100)
    }

    /**
     * Starts downloading the song from link sent in props.
     */
    const downloadSong = async () => {


        document.getElementById('my_modal_3').showModal()

        props.showAlert(`Downloading ${props.details.name.replace(/&quot;/g, '"')}...`)
        props.setProgress(10)

        const url = props.details.downloadUrl[4]["link"]

        const filename = props.details.name.replace(/&quot;/g, '"') + ` - ${props.details.primaryArtists.split(',')[0]}.m4a`



        const response = await fetch(url)

        props.setProgress(50)
        const blob = await response.blob()

        props.setProgress(70)
        let blobUrl = window.URL.createObjectURL(blob);
        downloadBlob(blobUrl, filename);

    }


    const [isPlaying, setIsPlaying] = useState(false)


    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const loadSong = () => {
        const audio = audioRef.current;

        audio.addEventListener('loadedmetadata', () => {
            setDuration(audio.duration);
            if (props.details.type != "dummy") {
                audio.play(); //autoplay the song if it's not dummy
                setIsPlaying(true)
            }

            if ('mediaSession' in navigator) {

                navigator.mediaSession.metadata = new MediaMetadata({
                    title: props.details.name.replace(/&quot;/g, '"'),
                    artist: props.details.primaryArtists,
                    album: 'TuneStation',
                    artwork: [
                        { src: props.details.image[2]["link"], sizes: '512x512', type: 'image/png' },
                    ]
                });

                navigator.mediaSession.setActionHandler('play', function () {
                    audio.play();
                    setIsPlaying(true);
                });
                navigator.mediaSession.setActionHandler('pause', function () {
                    audio.pause();
                    setIsPlaying(false);
                });
                navigator.mediaSession.setActionHandler('seekbackward', function () {
                    audio.currentTime = Math.max(audio.currentTime - 10, 0);
                });
                navigator.mediaSession.setActionHandler('seekforward', function () {
                    audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
                });
            }

            audio.addEventListener('timeupdate', () => {

                setCurrentTime(audio.currentTime);
            });

            audio.addEventListener('ended', () => {
                setIsPlaying(false);
                setCurrentTime(0);
                audio.currentTime = 0;
            });
        })
    }
    useEffect(() => {

        loadSong();
    }, [props.details])

    const handlePlayPause = () => {

        const audio = audioRef.current;
        if (isPlaying) {
            // document.title = `Paused ${props.details.name.replace(/&quot;/g, '"')} - TuneStation`
            audio.pause();
            setIsPlaying(false);
        } else {
            // document.title = `Playing ${props.details.name.replace(/&quot;/g, '"')} - TuneStation`
            audio.play();
            setIsPlaying(true);
        }
    }

    const handleSeek = (e) => {
        const audio = audioRef.current;
        const seekTime = (duration / 100) * e.target.value;
        audio.currentTime = seekTime;
    }

    const currentMins = Math.floor(currentTime / 60);
    const currentSecs = Math.floor(currentTime % 60);
    const durationMins = Math.floor(duration / 60);
    const durationSecs = Math.floor(duration % 60);


    return (
        <div className="parent">

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Downloading {props.details.name.replace(/&quot;/g, '"')}...</h3>
                    <p className="py-4">Please agree not to share the downloaded song and avoid piracy. All rights belong to the respective labels and JioSaavn. Tunestation is not responsible for any piracy on your part.</p>
                </div>
            </dialog>

            <div id="currentTime" className='badge badge-primary  fixed left-1 md:left-[12.25vw] bottom-[6.2rem] md:bottom-[7.8rem] '>
                {currentMins}:{currentSecs < 10 ? '0' : ''}{currentSecs}
            </div>
            <div id="endTime" className='badge badge-primary  fixed right-1 md:right-[12.25vw] bottom-[6.2rem] md:bottom-[7.8rem]'>
                {durationMins}:{durationSecs < 10 ? '0' : ''}{durationSecs}
            </div>
            <div className="btm-nav bottom-[3.3rem] md:bottom-[4rem] h-[3rem] md:h-[3.5rem] md:w-3/4  m-auto flex-col gap-0 ">

                <audio ref={audioRef} src={props.details.downloadUrl[4]["link"]} />

                <div className='w-full '>
                    <input onChange={handleSeek} min="0" max="100" value={(currentTime / duration) * 100} type="range" className="relative z-10 w-full accent-[#724cf9]  h-1" name="slider" id="slider" />
                </div>

                <div className="md:border md:rounded-lg bg-[#2b0a69] border-[#2b0a69] bottom w-full  p-0 m-0 flex flex-row justify-around ">

                    <div id='details' className=" m-0 w-1/2 h-full flex flex-row justify-start">
                        <img alt="thumbnail"
                            className=" h-full  pr-2 pl-0 rounded-md"
                            src={props.details.image[2]["link"]} />
                        <div className='w-1/2'>
                            <h2 className="text-sm md:text-base font-medium overflow-hidden whitespace-nowrap text-ellipsis w-full">{props.details.name.replace(/&quot;/g, '"')}</h2>
                            <div className="text-xs md:text-sm overflow-hidden whitespace-nowrap text-ellipsis w-full">
                                {props.details.primaryArtists}
                            </div>
                        </div>
                    </div>

                    <div id='controls' className="flex flex-row justify-end text-sm">

                        <button className="playpause" onClick={handlePlayPause}>

                            {isPlaying ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6 hover:fill-secondary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
                                    stroke="currentColor" className="w-6 h-6 hover:fill-secondary">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                </svg>
                            }
                        </button>
                        <button className="p-3 group focus:outline-none " id="favBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6 group-hover:fill-secondary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>

                        </button>
                        <button className="focus:outline-none pr-4 group" id="downloadBtn" onClick={downloadSong}>
                            <svg className="w-6 h-6 group-hover:fill-secondary " viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MiniPlayer
