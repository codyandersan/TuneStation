import React from 'react'

function Alert(props) { //message to display
    return (
        <div className='h-[60px]'>
            {props.message &&
                <div className="bg-green-800 border-white text-white border-l-4 p-4" role="alert">
                    <p>
                        {props.message}
                    </p>

                </div>}
        </div>
    )
}

export default Alert
