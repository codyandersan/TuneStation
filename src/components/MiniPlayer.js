import React, { useState } from 'react'

const MiniPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentMins, setCurrentMins] = useState(1)
    const [currentSecs, setcurrentSecs] = useState(26)
    const [durationMins, setDurationMins] = useState(4)
    const [durationSecs, setDurationSecs] = useState(52)
    const [duration, setDuration] = useState(170)
    const [currentTime, setCurrentTime] = useState(72)



    return (

        <div  className="btm-nav bottom-[3.5rem] md:bottom-[4rem] h-[2.5rem] md:h-[3.5rem] md:w-3/4  m-auto flex-col gap-0 ">
            <div className='w-full '>
                <input min="0" max="100" value={(currentTime / duration) * 100} type="range" className="w-full accent-[#724cf9]  h-1" name="slider" id="slider" />
            </div>

            <div className="md:border md:rounded-lg bg-[#2b0a69] border-[#2b0a69] bottom w-full  p-0 m-0 flex flex-row justify-around ">

                <div id='details' className=" m-0 w-1/2 h-full flex flex-row justify-start">
                    <img alt="thumbnail"
                        className=" h-full  pr-2 pl-0 rounded-md"
                        src="https://c.saavncdn.com/871/Brahmastra-Original-Motion-Picture-Soundtrack-Hindi-2022-20221006155213-500x500.jpg" />
                    <div className='w-1/2'>
                        <h2 className="text-sm md:text-base font-medium overflow-hidden whitespace-nowrap text-ellipsis w-full">Kesariya</h2>
                        <div className="text-xs md:text-sm overflow-hidden whitespace-nowrap text-ellipsis w-full">
                            Vishal &amp; Shekhar, Arijit Singh, Sukriti Kakar, Vishal Dadlani, Shekhar Ravjiani, Kumaar
                        </div>
                    </div>
                </div>

                <div id='controls' className="flex flex-row justify-end text-sm">

                    <button className="playpause">

                        {isPlaying ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
                                stroke="currentColor" className="w-6 h-6">
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
                    <button className="focus:outline-none pr-4 group" id="downloadBtn">
                        <svg className="w-6 h-6 group-hover:fill-secondary " viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default MiniPlayer
