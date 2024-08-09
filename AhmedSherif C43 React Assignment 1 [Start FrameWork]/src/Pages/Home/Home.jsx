import React from 'react'
import Title from '../../Components/Title/Title'
import img from '../../assets/avataaars.svg'

function Home() {
    return (
        <>
            <div className="w-28 sm:w-64 mb-4 mx-auto"><img className="img-fluid" src={img} alt="avatar" /></div>
            <Title title="START FRAMEWORK" color="white"/>
            <div className="text-white">
                <span>Graphic Artist - Web Designer - Illustrator</span>
            </div>
        </>
    )
}

export default Home