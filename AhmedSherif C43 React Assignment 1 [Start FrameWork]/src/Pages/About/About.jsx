import React from 'react'
import Title from '../../Components/Title/Title'

function About() {
    return (
        <>
            <Title title="ABOUT COMPONENT" color="white"/>
            <div className="flex flex-wrap text-white text-start sm:px-12">
                <div className="md:w-1/2 md:ps-12 md:pe-3">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="md:w-1/2 md:ps-3 md:pe-12">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </>
    )
}

export default About