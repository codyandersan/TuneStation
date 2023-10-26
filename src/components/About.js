import React, { useEffect } from 'react'

function About(props) {

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        document.title = "About - TuneStation"
    }, [])

    return (
        <div >
            <section className="pb-36 body-font ">
                <div className="container px-5  pb-10 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs tracking-widest font-medium title-font mb-1">USING UNOFFICIAL JIOSAAVN API</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">TuneStation</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">With TuneStation, you can listen and download over 80 million songs (number of songs available on JioSaavn) for FREE without any ads!</p>
                    </div>
                    <div className="flex flex-col text-center mb-2">
                        <h2 className="text-sm tracking-widest font-medium title-font mb-1">FEATURES</h2>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="md:h-40 h-auto border border-opacity-75 p-6 rounded-lg">

                                <h2 className="text-lg font-medium title-font mb-2">Ad-Free Experience</h2>
                                <p className="leading-relaxed text-base">Enjoy uninterrupted listening without any ads.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border md:h-40 h-auto border-opacity-75 p-6 rounded-lg">

                                <h2 className="text-lg font-medium title-font mb-2">Completely Free</h2>
                                <p className="leading-relaxed text-base">You don't have to pay a dime to access Tunestation. it's completely free!</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border md:h-40 h-auto border-opacity-75 p-6 rounded-lg">

                                <h2 className="text-lg font-medium title-font mb-2">Easy Downloads</h2>
                                <p className="leading-relaxed text-base">TuneStation allows you to easily download your favorite songs, albums, or playlists so that you can listen to them offline.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border md:h-40 h-auto border-opacity-75 p-6 rounded-lg">

                                <h2 className="text-lg font-medium title-font mb-2">Highest Quality Music</h2>
                                <p className="leading-relaxed text-base">TuneStation allows use to listen your favourite songs at the highest quality (320kbps!).</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border md:h-40 h-auto border-opacity-75 p-6 rounded-lg">

                                <h2 className="text-lg font-medium title-font mb-2">Trending and Popular Music</h2>
                                <p className="leading-relaxed text-base">TuneStation is constantly updated with the latest music, thanks to JioSaavn.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border md:h-40 h-auto border-opacity-75 p-6 rounded-lg">

                                <h2 className="text-lg font-medium title-font mb-2">Easy Search Functionality</h2>
                                <p className="leading-relaxed text-base">With TuneStation's intuitive search functionality, you can quickly and easily find your favorite songs, albums, and playlists,</p>
                            </div>
                        </div>
                    </div>


                    {/* Tools Used */}
                    <div className="flex flex-col text-center mt-16 mb-1">
                        <h2 className="text-sm  tracking-widest font-medium title-font mb-1">BUILT WITH</h2>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2">
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-cyan-800 hover:bg-cyan-900 rounded flex p-4 h-full items-center">

                                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="flex justify-center w-full title-font font-medium text-white">ReactJS</a>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-sky-600 hover:bg-sky-800 rounded flex p-4 h-full items-center">

                                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="flex justify-center w-full title-font font-medium text-white">TailwindCSS</a>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-green-800 hover:bg-green-900 rounded flex p-4 h-full items-center">

                                <a href="https://github.com/sumitkolhe/jiosaavn-api" target="_blank" rel="noopener noreferrer" className="flex justify-center w-full title-font font-medium  text-white">Sumit Kolhe's Unofficial JioSaavn API</a>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 hover:bg-gray-900 rounded flex p-4 h-full items-center">

                                <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="flex justify-center w-full title-font font-medium text-white">Hosted on Vercel</a>
                            </div>
                        </div>

                    </div>
                    {/* Links */}
                    <div className="flex flex-col text-center mt-16 mb-1">
                        <h2 className="text-sm text-green-700 dark:text-green-400 tracking-widest font-medium title-font mb-1">RELATED LINKS</h2>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2">
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-pink-700 hover:bg-pink-900 rounded flex p-4 h-full items-center">

                                <a href="https://github.com/codyandersan/" target="_blank" rel="noopener noreferrer" className="flex justify-center w-full title-font font-medium text-white">My Github Profile</a>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-violet-700 hover:bg-violet-900 rounded flex p-4 h-full items-center">

                                <a href="https://codyandersan.github.io/" target="_blank" rel="noopener noreferrer" className="flex justify-center w-full title-font font-medium text-white">My Other Projects</a>
                            </div>
                        </div>
                        <div className="p-2  w-full">
                            <div className="bg-yellow-700 hover:bg-yellow-900 rounded flex p-4 h-full items-center">

                                <a href="https://github.com/codyandersan/TuneStation" target="_blank" rel="noopener noreferrer" className="flex justify-center w-full title-font font-medium  text-white">TuneStation's Git Repository</a>
                            </div>
                        </div>
                        

                    </div>
                </div>

            </section>

        </div>
    )

}

export default About
