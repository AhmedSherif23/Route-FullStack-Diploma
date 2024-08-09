import React from 'react';

function Title({ title, color }) {
    return (
            <>
            <h2 className={`text-${color} font-bold mb-4`}>{title}</h2>
            <div className={`flex justify-center text-${color} items-center w-1/3 mb-4`}>
                {/* <div className={`relative w-fit mb-4`}> */}
                    <span className={`w-1/2 sm:w-1/3 shrink border-b-4 border-${color}`}></span>
                    <i className='fa-solid fa-star mx-4'></i>
                    <span className={`w-1/2 sm:w-1/3 shrink border-b-4 border-${color}`}></span>
                {/* <span className={`before:content-[""] before:absolute before:w-8 sm:before:w-20 before:h-1 before:bg-${color} before:left-8 before:top-1/2 before:transform before:-translate-y-1/2 after:content-[""] after:absolute after:w-8 sm:after:w-20 after:h-1 after:bg-${color} after:right-8 after:top-1/2 after:transform after:-translate-y-1/2`} />
                </div>  //not working properly */}
            </div>
            </>
        );
    }

export default Title;
