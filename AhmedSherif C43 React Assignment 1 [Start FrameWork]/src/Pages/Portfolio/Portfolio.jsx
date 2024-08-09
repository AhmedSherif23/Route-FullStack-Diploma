import React, { useState } from 'react'
import Title from '../../Components/Title/Title'
import port1 from '../../assets/gallery/port1.png';
import port2 from '../../assets/gallery/port2.png';
import port3 from '../../assets/gallery/port3.png';

function Portfolio() {
    const [imgSrc, setImgSrc] = useState('port1');
    const [isShown, setIsShown] = useState(false);
    let clickedImage;

    function displayModal(e) {
        if (e.target.tagName.toLowerCase() === 'i') {
            clickedImage = e.target.parentElement.nextSibling.querySelector('img');
        } else {
            clickedImage = e.target.nextSibling.querySelector('img');
        }
        if (clickedImage) {
            setImgSrc(clickedImage.src);
            setIsShown(true);
        } else {
            console.warn("No image found within the clicked element."); // Handle potential missing image
        }
    }

    return (
        <>
            <Title title='PORTFOLIO COMPONENT' color='main'/>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-12'>
                <div className=''>
                    <div onClick={displayModal} className='rounded-lg overflow-hidden cursor-pointer relative'>
                        <div data-src={port1} className='flex justify-center items-center bg-accent text-white text-8xl absolute inset-0 opacity-0 hover:opacity-90 translate-opacity duration-500'>
                            <i className='fa-solid fa-plus'></i>
                        </div>
                        <div><img className='img-fluid' src={port1} alt='port1' /></div>
                    </div>
                </div>
                <div className=''>
                    <div onClick={displayModal} className='rounded-lg overflow-hidden cursor-pointer relative'>
                        <div className='flex justify-center items-center bg-accent text-white text-8xl absolute inset-0 opacity-0 hover:opacity-90 translate-opacity duration-500'>
                            <i className='fa-solid fa-plus'></i>
                        </div>
                        <div><img className='img-fluid' src={port2} alt='port2' /></div>
                    </div>
                </div>
                <div className=''>
                    <div onClick={displayModal} className='rounded-lg overflow-hidden cursor-pointer relative'>
                        <div className='flex justify-center items-center bg-accent text-white text-8xl absolute inset-0 opacity-0 hover:opacity-90 translate-opacity duration-500'>
                            <i className='fa-solid fa-plus'></i>
                        </div>
                        <div><img className='img-fluid' src={port3} alt='port3' /></div>
                    </div>
                </div>
                <div className=''>
                    <div onClick={displayModal} className='rounded-lg overflow-hidden cursor-pointer relative'>
                        <div className='flex justify-center items-center bg-accent text-white text-8xl absolute inset-0 opacity-0 hover:opacity-90 translate-opacity duration-500'>
                            <i className='fa-solid fa-plus'></i>
                        </div>
                        <div><img className='img-fluid' src={port1} alt='port1' /></div>
                    </div>
                </div>
                <div className=''>
                    <div onClick={displayModal} className='rounded-lg overflow-hidden cursor-pointer relative'>
                        <div className='flex justify-center items-center bg-accent text-white text-8xl absolute inset-0 opacity-0 hover:opacity-90 translate-opacity duration-500'>
                            <i className='fa-solid fa-plus'></i>
                        </div>
                        <div><img className='img-fluid' src={port2} alt='port2' /></div>
                    </div>
                </div>
                <div className=''>
                    <div onClick={displayModal} className='rounded-lg overflow-hidden cursor-pointer relative'>
                        <div className='flex justify-center items-center bg-accent text-white text-8xl absolute inset-0 opacity-0 hover:opacity-90 translate-opacity duration-500'>
                            <i className='fa-solid fa-plus'></i>
                        </div>
                        <div><img className='img-fluid' src={port3} alt='port3' /></div>
                    </div>
                </div>
            </div>

            {/* ===== Modal ===== */}
            <section className={`modal h-screen inset-0 ${isShown ? 'fixed' : 'hidden'} flex justify-center items-center z-50`}>
                <div onClick={() => setIsShown(false)} className='bg-sec absolute inset-0'>
                </div>
                <div className='w-1/2 absolute'><img className='img-fluid' src={imgSrc} alt="port" /></div>
            </section>
        </>
    )
}

export default Portfolio