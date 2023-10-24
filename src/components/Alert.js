import React from 'react'

function Alert(props) { //message to display
    if (props.message) {

        document.getElementById("alertBox").classList.remove("invisible")
        document.getElementById("alertBox").classList.add("visible")

        setTimeout(() => {

            document.getElementById("alertBox").classList.remove("visible")
            document.getElementById("alertBox").classList.add("invisible")
        }, 1000);
    }

    return (
        <div id='alertBox' className="invisible h-[3.5rem] mt-5 alert alert-info flex-row ">
            <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{props?.message}</span>
        </div>


    )
}

export default Alert
