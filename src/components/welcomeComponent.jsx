import React, { useEffect, useState } from 'react'
import FirstFrame from '../assets/firstframe.png'
import Ppl from '../assets/ppl.svg'

export default function WelcomeComponent({closeWelcome}) {

// Initiating with a value since fetch isn't really retirving anything yet.
const [count, setCount] = useState(90)

useEffect(() => {
  getCount()
}, [])

const getCount = async() => {

    await fetch('my-api-url').then(res=>{

        //setCount(res.data)
    }).catch(error=>{
        console.log(error)
    })
}

const handleGetStarted = () => {
    closeWelcome()
}

    return (
        <div className=' flex w-full h-full '>
            <div className=' w-1/2 h-full flex justify-center items-center'>
                <div className=' pl-20 pr-20'>
                    <h1 className=' mb-4 font-lexend-deca-bold text-4xl text-[#1B1B33]'> Launch your Data Career in Weeks, not Years</h1>
                    <span className=' text-[#5E5F70] font-lexend-deca text-xl'>
                        <p className=' '>What to expect:</p>
                        <p>- <b>Short-answer</b> questions & <b>No</b> cover letter</p>
                        <p>- Takes 4 mins on average</p>
                    </span>
                    <div className=' flex items-start flex-col'>
                        <div className='mt-8  flex h-fit items-center'>
                            <button onClick={()=>handleGetStarted()} className=' cursor-pointer text-2xl font-bold text-white  bg-[#CF9FFF] rounded-[4px] py-[8px] px-[18px]'>Start Your Journey</button>
                            <div className=' text-[12px] text-[#444444] hidden xl:flex ml-3 items-center justify-cente  '>
                                <p>press  &nbsp;</p>
                                <strong>Enter ↵</strong>
                            </div>
                        </div>

                        <span className=' text-[#444444] font-lexend-deca mt-4 flex items-center h-fit '>
                            <img src={Ppl} className=' self-end' alt='' />
                            {count }
                            <span> &nbsp; people have filled this out</span>
                        </span>
                    </div>
                </div>

            </div>
            <div className=' w-1/2 h-full flex justify-center items-center'>
                <img src={FirstFrame} alt='' className=' h-96' />
            </div>

        </div>
    )
}