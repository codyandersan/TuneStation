import React from 'react'

function Alert(props) { //message to display
    return (
        <div className={props.theme}>
            <div className='mt-16 h-[39px] fixed top-0 z-50 dark:bg-deep-900 bg-light-100'>
                {props.message &&
                    <div className="bg-green-800 border-gray-900 dark:border-white text-white  border-l-4 p-2" role="alert">
                        <p>
                            {props.message}
                        </p>

                    </div>}
            </div>
        </div>
    )
}

export default Alert
