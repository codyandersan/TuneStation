import React, { useEffect } from 'react'

function SearchBox(props) {
    const showResults = () => {
        const query = document.getElementById("query").value
        props.setQuery(query)
    }

    //Sets loading bar to 100 when the page fully renders:
    useEffect(() => {        
        props.setProgress(0)
        props.setProgress(100)
        document.title = "Search - TuneStation"
    }, []) 
    
    return (
        <section className="md:mt-10 text-black dark:text-gray-400 bg-light-100 dark:bg-deep-900 body-font">
            <div className="container px-5 py-5 mx-auto">
                <div className="text-center mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-black dark:text-white mb-4">Search for anything!
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-black dark:text-gray-400 text-opacity-80">Search for
                        your favourite song or try searching a generic query, like 'Top Punjabi Songs'.</p>
                </div>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </div>

            <div className="container px-5 py-0 mx-auto">
                <div
                    className="flex lg:w-4/12 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
                    <div className="relative sm:mb-0 flex-grow w-full">
                        <label htmlFor="query" className="leading-7 text-sm text-black dark:text-gray-400">Try searching for a song or album</label>
                        <input type="text" id="query" name="query"
                            className="w-full bg-slate-400 dark:bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 dark:focus:bg-deep-900 focus:bg-light-100 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button id="searchBtn" onClick={showResults}
                        className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Go</button>
                </div>
            </div>
        </section>
    )
}

export default SearchBox
