import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


function NavBar(props) { //toggleTheme

    // useEffect(() => {
    //     if (document.getElementById("dark_mode").checked) {
    //         props.setTheme("dark")
    //     }
    //     else {
    //         props.setLightTheme("")
    //     }
    // }) //will run always!

    return (
        <header className="text-gray-700 dark:text-gray-400 bg-slate-100 dark:bg-deep-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link className="flex title-font font-medium items-center text-black dark:text-white mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                    </svg>
                    <span className="ml-3 text-xl">TuneStation</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" className="mr-5 hover:dark:text-white hover:text-black cursor-pointer">Home</Link>
                    <Link to="/search" className="mr-5 hover:dark:text-white hover:text-black cursor-pointer">Search </Link>
                    <Link className="mr-5 hover:dark:text-white hover:text-black" to="/">My Favs</Link>
                </nav>
                <div className="mb-3">
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input type="checkbox" name="toggle" onClick={props.toggleTheme} id="dark_mode" className="checked:bg-green-700 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                        <label htmlFor="dark_mode" className="block h-6 overflow-hidden bg-green-500 rounded-full cursor-pointer">
                        </label>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">
                        Dark Mode
                    </span>
                </div>
            </div>
        </header>
    )
}

export default NavBar
