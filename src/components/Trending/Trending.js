import React, { useEffect } from 'react'
import Heading from './Heading'
import Songs from './Songs'
import Albums from './Albums'
function Trending(props) {
    useEffect(() => {
        document.title = "Trending Now - TuneStation"
    }, [])
    return (
        <section className="text-gray-400 bg-deep-900 body-font justify-center">
            <div className="container px-5 py-5 mx-auto mb-0 ">

                <Heading title="Trending Now" description="Try searching for these hit releases." />

                <Songs setProgress={props.setProgress} />

                <Heading title="Popular Albums" description="Check out these trending albums." />

                <Albums setProgress={props.setProgress} />


            </div>
        </section>
    )
}

export default Trending
