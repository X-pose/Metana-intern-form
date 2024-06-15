import React, { useEffect, useState } from 'react'

export default function FormComponent() {

  return (
    <div>
      <form>
        <section id='q1' className=' w-screen h-[calc(100vh-108px)] flex justify-center items-center'>
          <div className='flex text-black'>
            <div className=''>
              <p>1</p>
              <img src='' alt='' />
            </div>
            <div className=' flex flex-col'>
              <p>Before we start, what is your name?</p>
              <span className=' flex flex-col'>
                <label>First name</label>
                <input type='text' placeholder='Jane' className=' border-b-2' />
              </span>
              <span className=' flex flex-col'>
                <label>Last name</label>
                <input type='text' placeholder='Jane' className=' border-b-2' />
              </span>
              <div className=' flex '>
                <button className=' w-fit cursor-pointer text-2xl font-bold text-white  bg-[#CF9FFF] rounded-[4px] py-[8px] px-[18px]'>OK</button>
                <div className=' text-[12px] text-[#444444] hidden xl:flex ml-3 items-center justify-cente  '>
                  <p>press  &nbsp;</p>
                  <strong>Enter ↵</strong>
                </div>
              </div>

            </div>
          </div>
        </section>
      </form>
    </div>
  )
}