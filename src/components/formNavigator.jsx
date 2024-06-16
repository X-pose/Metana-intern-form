
import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function FormNavigator({ selectNext, selectPrev }) {



    return (
        <div className=' flex justify-end w-screen items-center gap-5 fixed  z-10 bottom-10 right-10'>
            <div className=' text-white flex gap-[1px] bg-gray-500 h-fit rounded-md justify-center items-center  '>
                <button type='button' onClick={selectNext} className=' cursor-pointer text-2xl leading-3 flex justify-center items-center rounded-md rounded-r-none py-[4px] px-[6px] bg-[#CF9FFF]'><IoIosArrowDown /></button>

                <button type='button' onClick={selectPrev} className=' cursor-pointer text-2xl flex justify-center items-center rounded-md rounded-l-none py-[4px] px-[6px] bg-[#CF9FFF]'><IoIosArrowUp /></button>
            </div>
            <a href='https://www.typeform.com/explore/?utm_campaign=XRAhBuOZ&utm_source=typeform.com-25971652-business&utm_medium=typeform&utm_content=typeform-footer&utm_term=EN'>
                <div className=' font-lexend-deca cursor-pointer text-[16px] leading-4  text-white  bg-[#CF9FFF] rounded-[4px] py-[8px] px-[18px]'>
                    <p>Powered by <b>Typeform</b></p>
                </div>
            </a>
        </div>
    )
}