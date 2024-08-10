import React from 'react'
import Title from '../../Components/Title/Title'

function Contact() {
    return (
        <>
            <Title title="CONATCT SECTION" color="main"/>
            <form className="w-3/4 py-4 px-3 mt-12 flex flex-wrap flex-col">
                <label htmlFor="UserName" className="relative block border-b border-gray-200 bg-transparent mb-8" >
                    <input type="text" id="UserName" placeholder="userName"
                        className="peer w-full border-none bg-white p-4 focus:border-transparent focus:outline-none focus:ring-0" />
                    <span className="absolute start-0 -top-4 -translate-y-1/2 text-accent ps-4 transition-all duration-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:opacity-0 -z-10" >userName :</span>
                </label>
                <label htmlFor="UserAge" className="relative block border-b border-gray-200 bg-transparent mb-8" >
                    <input type="text" id="UserAge" placeholder="userAge"
                        className="peer w-full border-none bg-white p-4 focus:border-transparent focus:outline-none focus:ring-0" />
                    <span className="absolute start-0 -top-4 -translate-y-1/2 text-accent ps-4 transition-all duration-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:opacity-0 -z-10" >userAge :</span>
                </label>
                <label htmlFor="UserEmail" className="relative block border-b border-gray-200 bg-transparent mb-8" >
                    <input type="email" id="UserEmail" placeholder="userEmail"
                        className="peer w-full border-none bg-white p-4 focus:border-transparent focus:outline-none focus:ring-0" />
                    <span className="absolute start-0 -top-4 -translate-y-1/2 text-accent ps-4 transition-all duration-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:opacity-0 -z-10" >userEmail :</span>
                </label>
                <label htmlFor="UserPassword" className="relative block border-b border-gray-200 bg-transparent" >
                    <input type="password" id="UserPassword" placeholder="userPassword"
                        className="peer w-full border-none bg-white p-4 focus:border-transparent focus:outline-none focus:ring-0" />
                    <span className="absolute start-0 -top-4 -translate-y-1/2 text-accent ps-4 transition-all duration-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:opacity-0 -z-10" >userPassword :</span>
                </label>
                <input type="button" value="send Message" role="button" className="bg-accent text-white px-3 py-2 mt-6 rounded-md me-auto" />
            </form>
        </>
    )
}

export default Contact