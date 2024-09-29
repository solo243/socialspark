import React from 'react'

const About = () => {
    return (
        <div className='mt-10 w-full h-screen'>
            <div>
                <div className='max-md:px-5 text-center justify-center'>
                    <h1 className='text-slate-900 font-[700] lg:text-5xl text-3xl'>
                        Technologies we craft solutions with
                    </h1>
                    <p className='lg:pt-5 pt-3  text-slate-700 '>Below are the latest tools we consider while crafting the best IT solution for you </p>
                </div>
                <div className='mx-auto border-2 border-black px-5 py-10'>
                    <div className='bg-red-900 max-w-[1000px] lg:w-3/4 mx-auto '>
                        <div className='border-2 border-black'>
                            <h1>Techstack we use </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About