import { VelocityScroll } from '@/components/ui/scroll-based-velocity'
import React from 'react'
import S1 from '../assets/S1.png'
import S2 from '../assets/S2.png'
import S3 from '../assets/S3.png'
import S4 from '../assets/S4.png'
import S5 from '../assets/S5.png'
import S6 from '../assets/S6.png'



const Services = () => {

    const items = [1, 2, 4, 5, 6, 7]

    const Content = [
        {
            "id": 1,
            "label": "Web Design + Development",
            "content": "Take your business to the next level with our web design and development services",
            "img": S1
        },
        {
            "id": 2,
            "label": "Search Engine Optimization",
            "content": "Get your website to the top of search engine results with our SEO services",
            "img": S2

        },
        {
            "id": 3,
            "label": "App Development",
            "content": "we specialize in creating customized mobile applications that drive innovation and deliver engaging user experiences. ",
            "img": S3

        },
        {
            "id": 4,
            "label": "Graphic Design",
            "content": "we offer creative and professional graphic design services that elevate your brand's visual identity and communication. Our team of talented graphic designers combines artistic flair with strategic thinking to deliver designs that resonate with your audience and drive results.",
            "img": S4

        },
        {
            "id": 5,
            "label": "Logo Design",
            "content": "Boost your brand's online presence with our social media marketing services",
            "img": S5

        },
        {
            "id": 6,
            "label": "Social Marketing and Digital Marketing",
            "content": "Interact with your customers and increase sales with our email marketing services",
            "img": S6
        },
    ]
    return (
        <section id='services' className=' '>
            <VelocityScroll
                text=" · Best Digital Marketing Services"
                default_velocity={4}
                className="bg-slate-900 text-white font-[600] lg:text-5xl text-2xl  p-4 lg:p-6"
            />
            <div className='px-4 pb-10'>
                <div className='flex-col flex  text-center mx-auto max-w-[700px]'>
                    <h1 className='text-slate-900 font-[700] text-center lg:pt-14 pt-10 text-3xl lg:text-5xl'>
                        Explore Our Services Portfolio
                    </h1>
                    <p className='text-slate-700 lg:pt-5 pt-3'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nemo eum deserunt accusamus tempore recusandae consectetur, natus totam adipisci voluptas!
                    </p>
                </div>
                <div className='grid lg:grid-cols-3 lg:px-10 px-5 md:grid-cols-2 gap-5 mt-10 mx-auto max-w-[1200px] '>
                    {Content.map((item) => (
                        <div className='mx-auto hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] border-2 flex flex-col max-w-[400px]  h-full space-y-4 text-center bg-gray-100 p-6 cursor-pointer hover:scale-105 transition-transform rounded-lg  border-slate-900 items-center justify-center'>
                            <div className='flex flex-col items-center'>
                                <img src={item.img} alt="" className='w-36 h-32' />
                                <h1 className='text-xl mt-3 text-slate-900 pb-1 font-[650]'>{item.label}t</h1>
                                <p className='text-slate-800 line-clamp-3'>
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services