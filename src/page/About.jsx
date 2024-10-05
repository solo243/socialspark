import React from 'react'
import team from '../assets/team.svg'
const About = () => {
    return (
        <div className=' lg:px-14 lg:pt-12  md:px-10 px-4 w-full '>
            <div className='flex lg:h-screen max-lg:flex-col items-center w-full  pb-10'>
                <div>
                    <img src={team} alt="team" className='w-5/6  h-5/6  w- object-cover object' />
                </div>
                <div className='max-w-[800px] max-lg:pt-10 lg:ps-16 '>
                    <div className='mb-7 text-slate-900 leading-[120%] font-[700] lg:text-4xl text-3xl'>
                        Innovate with Confidence, Transform with Excellence, Succeed with Integrity
                    </div>
                    <div className='text-slate-800'>
                        Source Spark tech is a prominent company headquartered in Ahmadabad, India, specializing in website designing, development, and SEO services.
                        At Source Spark tech, our proven expertise in website development and design enables us to craft solutions that drive inquiries, increase sales, and elevate the value of your business. We offer comprehensive web development services, covering strategic planning, creativity, functionality, and ongoing maintenance, ensuring your online presence achieves outstanding results.
                    </div>
                    <button className='bg-slate-800 px-10 py-3 text-white rounded-lg mt-7 cursor-pointer'>
                        Learn more
                    </button>
                </div>

            </div>
        </div>
    )
}

export default About