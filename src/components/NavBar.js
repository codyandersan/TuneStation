import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

function NavBar(props) { //toggleTheme

    return (
        <div className={props.theme}>
            <header>
                <nav className="flex flex-wrap items-center justify-between w-full py-2 md:py-3 px-4 text-lg fixed top-0 z-50 dark:text-gray-700 text-gray-400 dark:bg-light-200 bg-deep-900 body-font">
                    <Link to='/' className="flex title-font font-medium items-center dark:text-black text-white my-1 md:mb-0">
                        <img src={logo} className='h-8 w-8 rounded-xl' alt="" />
                        <span className="hidden ml-3 text-xl md:inline-block ">TuneStation</span>
                    </Link>

                    <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" onClick={() => document.getElementById("menu").classList.toggle('hidden')} className="h-6 w-6 cursor-pointer md:hidden block"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                    <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                        <ul className=" pt-4 space-y-3 md:space-y-0 text-base md:flex md:justify-between  md:pt-0">

                            <li>
                                <Link to="/" className="mr-5 hover:text-white hover:dark:text-black cursor-pointer" onClick={() => document.getElementById("menu").classList.toggle('hidden')}>Home
                                </Link>
                            </li>
                            <hr className='dark:border-gray-700 border-light-200' />
                            <li>
                                <Link to="/search" className="mr-5 hover:text-white hover:dark:text-black cursor-pointer" onClick={() => document.getElementById("menu").classList.toggle('hidden')}>Search
                                </Link>
                            </li>
                            <hr className='dark:border-gray-700 border-light-200' />
                            <li>
                                <Link to='/about' className="mr-5 hover:text-white hover:dark:text-black cursor-pointer" onClick={() => document.getElementById("menu").classList.toggle('hidden')} >About</Link>
                            </li>
                            <hr className='dark:border-gray-700 border-light-200' />
                            <li>
                                <Link to='/terms' className="mr-5 hover:text-white hover:dark:text-black cursor-pointer" onClick={() => document.getElementById("menu").classList.toggle('hidden')}>Terms of Use</Link>
                            </li>
                            <hr className='dark:border-gray-700 border-light-200' />
                            <li>
                                <div className="text-base">
                                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                        <input defaultChecked={true} type="checkbox" name="toggle" onClick={() => {
                                            props.toggleTheme()
                                            document.getElementById("menu").classList.toggle('hidden')
                                        }} id="dark_mode" className="checked:bg-green-700 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                        <label htmlFor="dark_mode" className="block h-6 overflow-hidden bg-green-500 rounded-full cursor-pointer">
                                        </label>
                                    </div>
                                    <span className="font-medium text-sm md:text-base dark:text-gray-900 text-white">
                                        Dark Mode
                                    </span>
                                </div>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
        </div >
    )
}

export default NavBar
