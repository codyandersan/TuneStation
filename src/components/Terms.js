import React, { useEffect } from 'react'

function Terms(props) {

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        document.title = "Terms of Use - TuneStation"
    }, [])

    return (
        <div className={props.theme}>
            <div className="container px-5  pb-36  mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 '>Terms of Use for TuneStation</h1>
                    <p className='text-lg sm:text-xl '>Welcome to TuneStation, an online music streaming and downloading platform built for the sole purpose of personal use and learning. By accessing or using TuneStation, you agree to be bound by these Terms of Use. If you do not agree to these Terms of Use, please <b>do not</b> use TuneStation.</p>
                </div>
                <hr />
                <br />
                <ul className='text-gray'>
                    <li> <span className='font-bold'>&#8620; Personal Project:</span> TuneStation is a personal project created for the purpose of learning ReactJS. It is not intended to be monetized or used for any commercial purpose.</li>
                    <br />
                    <li> <span className='font-bold'>&#8620; Personal Use Only:</span> TuneStation is provided for personal use only. You may use TuneStation to stream or download music for your own personal, non-commercial use.</li>
                    <br />
                    <li> <span className='font-bold'>&#8620; Use of Unofficial JioSaavn API:</span> TuneStation uses <a href="https://github.com/sumitkolhe/jiosaavn-api" target="_blank" rel="noopener noreferrer" className='underline hover:text-black dark:hover:text-white'>Sumit Kolhe's Unofficial JioSaavn API</a>, which is available under the <b>MIT license</b>, which unofficially fetches the data directly from JioSaavn's website.</li>
                    <br />
                    <li> <span className='font-bold'>&#8620; Prohibition on Sharing Material:</span> You agree not to share any music or other material you download from TuneStation with anyone else. Sharing copyrighted material without permission is illegal and can result in civil and criminal liability.</li>
                    <br />
                    <li> <span className='font-bold'>&#8620; Ownership of data:</span> All the songs/albums/playlists displayed on this website belong to JioSaavn. We <b>do not intend</b> to infringe on any copyright, trademark, or other intellectual property rights of any third party. All rights to the music and other material available on TuneStation belong to <b>JioSaavn</b> and the respective song labels.</li>
                    <br />
                    <li> <span className='font-bold'>&#8620; No Piracy:</span> You agree not to use TuneStation to pirate music or engage in any other illegal activity.</li>
                    <br />
                    <li> <span className='font-bold'>&#8620; For JioSaavn and Copyright Owners:</span> In the event that JioSaavn or the copyright owners of the music available on TuneStation want the website to be taken down for any copyright infringement related case, they may raise an issue at the <a href="https://github.com/codyandersan/TuneStation" target="_blank" rel="noopener noreferrer" className='underline hover:text-black dark:hover:text-white'>TuneStation Git repository</a>. We will try our best to stop the functioning of this website as soon as possible.</li>
                </ul>

                <br/>
                <hr />
                <br />
                <p>By using TuneStation, you <b>agree</b> to comply with these Terms of Use. We reserve the right to modify or update these Terms of Use at any time without notice. If you continue to use TuneStation after any changes to the Terms of Use have been made, you agree to be bound by the revised Terms of Use.</p>
            </div>
        </div>
    )
}

export default Terms
