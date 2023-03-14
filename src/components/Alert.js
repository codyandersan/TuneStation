import React from 'react'

function Alert(props) { //message to display
    return (
        <div className='h-[60px] dark:bg-deep-900 bg-slate-100'>
            {props.message &&
                <div className="bg-green-800 border-gray-900 dark:border-white dark:text-white text-black border-l-4 p-4" role="alert">
                    <p>
                        {props.message}
                    </p>

                </div>}
        </div>
    )
}

export default Alert
