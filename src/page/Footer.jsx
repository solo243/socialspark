import { Home, House, Mail, Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-900 s  w-full  px-3 py-3'>
            <div className='flex flex-wrap gap-5 items-center mx-auto justify-center lg:justify-between px-24 '>

                <div>
                    <h1 className='text-white font-[400] text-xl'>About Us</h1>
                    <p className='text-slate-400 text-sm mt-2'>We create innovative services delivering comprehensive communication and information solutions.</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-white text-xl mb-5'>Featured Service</h1>
                    <ul className='text-slate-400'>
                        <li className='cursor-pointer px-1 mt-2'>Web Designing</li>
                        <li className='cursor-pointer px-1 mt-2'>App Development</li>
                        <li className='cursor-pointer px-1 mt-2'>Digital Marketing</li>
                    </ul>
                </div>
                <div className='text-center flex items-center flex-col justify-center'>
                    <h1 className='text-white mb-5 font-[500] text-xl'>
                        Contact us
                    </h1>
                    <ul className='text-slate-400 '>
                        <li className='gap-2 mb-2 flex'><Phone /> +91 7984261070</li>
                        <li className='gap-2 mb-2 flex'><Mail />sourcesparkt@gmail.com</li>
                        <li className=' gap-2 flex'><House />Ahmadabad,Gujarat</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer