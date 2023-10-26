import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function Search(props) {

    const navigate = useNavigate(); //for navigating to /results

    const showResults = () => {
        const query = document.getElementById("query").value
        props.setQuery(query)
        navigate("/results")

    }

    //Sets loading bar to 100 when the page fully renders:
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0; //scroll to top of page

        props.setProgress(0)
        props.setProgress(100)
        document.title = "Search - TuneStation"


        const queryBox = document.querySelector("#query");
        queryBox.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                showResults();
            }
        });

    }, [])

    return (
        <section className="body-font min-w-screen h-screen mt-2">
            <div className="container px-5 pb-5 mx-auto">
                <div className="text-center mb-5">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Search for anything!
                    </h1>
                </div>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-secondary inline-flex"></div>
                </div>
            </div>

            <div className="container px-5 py-0 mx-auto">
                <div
                    className="flex lg:w-4/12 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
                    <div className="relative sm:mb-0 flex-grow w-full">
                        <label htmlFor="query" className="leading-7 text-sm">Try searching for a song or an album</label>
                        <input type="text" id="query" name="query"
                            className="w-full bg-accent bg-opacity-40 rounded border border-secondary-content focus:border-secondary focus:ring-2 focus:ring-secondary-content text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button id="searchBtn" onClick={showResults}
                        className="bg-primary-content border-0 py-2 px-6 focus:outline-none text-primary rounded text-lg">GO</button>
                </div>
            </div>
        </section>
    )
}

export default Search
