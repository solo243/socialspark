import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import WordPullUp from '@/components/ui/word-pull-up'
import React from 'react'
import Upa from '../assets/upa.svg'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

const Home = () => {

    const word = [
        {
            "text": "We are "
        }
    ]
    const Lables = [
        "Design",
        "Development",
        "Marketing",
        "Strategy"
    ]

    return (
        <div className='lg:px-24 px-5 lg:py-20 py-10'>
            <div className='items-center w-full relative flex flex-col'>
                <AnimatedGradientText   >
                    🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                    <span                >
                        Best Price Guarantee
                    </span>
                </AnimatedGradientText>
                {/* Main Content  */}
                <div>
                    <div className='pt-4 '>
                        <h1 className='text-center text-slate-800 text text-3xl  lg:text-6xl font-[700] tracking-wide'>
                            We are the brand builder <br />
                            <span>
                                for better <span className='bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent '>
                                    Tomorrow  </span>
                            </span>
                        </h1>
                        <p className='text-slate-600 text-lg text-center max-md:pt-3 pt-5 font-sans max-w-[500px] lg:max-w-[880px]'>
                            Elevate your digital success with Source Spark Tech: Offering extensive web development, customized app solutions
                        </p>
                    </div>
                    <div className='relative'>
                        <button className="flex hover:bg-purple-500 hover:text-white rounded-lg mx-auto mt-10 lg:px-5 px-3 border-2 text-lg font-[600] border-black py-4  shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                            Schedule a Discovery Meeting
                        </button>
                        <motion.img animate={{ y: ["0%", "-15%"] }} transition={{
                            ease: 'easeInOut', duration: 0.7,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }} src={Upa} className='absolute top-24 left-[380px] max-md:left-1/3' alt="" />
                    </div>
                    <div className='lg:mt-36 mt-[110px] flex lg:justify-between max-sm:justify-center text-center flex-wrap gap-5 items-center '>
                        {Lables.map((item, index) => (
                            <div key={index} className='lg:text-lg text-md  items-center font-[500] position:relative;width:fit-content;overflow:hidden flex relative gap-2'>
                                <Check className='text-purple-500 font-[700]' />   {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home