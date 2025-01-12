import { Menu, Star, X } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {
    const NavItem = ["Home",
        "Services",
        "About",
        "Projects"]


    const [openDrawer, setOpenDrawer] = useState(true)

    return (
        <>
            <div className='w-full mx-auto lg:px-24 px-5 lg:pt-10 pt-4'>
                <div className='w-full   flex justify-between items-center'>
                    <div className='flex gap-3 text-2xl items-center font-[700]'>
                        <Star />
                        sourcespark
                    </div>
                    {openDrawer ? (
                        <Menu onClick={() => setOpenDrawer(!openDrawer)} className='flex cursor-pointer lg:hidden ' />
                    ) : (
                        <X onClick={() => setOpenDrawer(!openDrawer)} className='cursor-pointer' />
                    )}
                    {/* <Menu onClick={() => setOpenDrawer(!openDrawer)} className='flex cursor-pointer lg:hidden ' /> */}
                    <ul className='lg:flex gap-2 hidden'>
                        {NavItem.map((item, index) => (
                            <li className='px-5  rounded-full text-[17px] uppercase cursor-pointer transition-all duration-100 ease-in-out hover:bg-purple-500 hover:border-black hover:border-[3px] hover:text-white  py-1 font-[500]'>{item}</li>
                        ))}
                    </ul>
                    <button className="hidden lg:flex px-7 border-2 text-lg font-[600] border-black py-1 shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                        Talk to us
                    </button>
                </div>
            </div>
            {!openDrawer && (
                <div className='w-full  z-50 mt-6  bg-white items-center flex absolute '>
                    <ul className='w-full gap-2 mx-auto text-center'>
                        {NavItem.map((item, index) => (
                            <li className='px-5 w-full border-b-2 border-slate-600 text-[17px] uppercase cursor-pointer transition-all duration-100 ease-in-out text-slate-800 py-8 font-[500]'>{item}</li>
                        ))} 
                    </ul>
                </div>
            )}
        </>

    )
}

export default Navbar