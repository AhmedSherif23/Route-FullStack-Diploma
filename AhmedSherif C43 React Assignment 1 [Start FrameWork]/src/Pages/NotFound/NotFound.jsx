import React from 'react'
import Title from '../../Components/Title/Title'
import errImg from '../../assets/error.png'

function NotFound() {
    return (
        <>
            <div className="w-28 sm:w-64 mb-4 mx-auto animate-bounce"><img className="img-fluid sm:w-44" src={errImg} alt="avatar" /></div>
            <Title title="Page Not Found" color="main"/>
            <div className="text-main">
                <span><strong>Hambozo:</strong> "Where am I? I have to go to <strong>CONTACT</strong> page quickly!☝️☝️☝️"</span>
            </div>
        </>
    )
}

export default NotFound