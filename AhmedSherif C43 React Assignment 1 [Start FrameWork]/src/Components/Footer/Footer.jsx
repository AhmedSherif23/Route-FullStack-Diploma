import React from 'react'

function Footer() {
    return (
        <>
            <footer className="text-white text-center">
                <div className="bg-main md:p-10">
                    <div className="container">
                        <div className="flex flex-wrap">
                            <div className="card p-4 w-1/3">
                                <h3>LOCATION</h3>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                            <div className="card p-4 w-1/3">
                                <h3>AROUND THE WEB</h3>
                                <ul className="flex flex-wrap justify-center gap-1">
                                    <li className="i-circle"><i className="fab fa-facebook"></i></li>
                                    <li className="i-circle"><i className="fab fa-twitter"></i></li>
                                    <li className="i-circle"><i className="fab fa-linkedin-in"></i></li>
                                    <li className="i-circle"><i className="fa-solid fa-globe"></i></li>
                                </ul>
                            </div>
                            <div className="card p-4 w-1/3">
                                <h3>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-dark-main p-2.5">
                    <p className="pt-2.5 mb-4">Copyright © Your Website 2021</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
