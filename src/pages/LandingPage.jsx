import React, { useEffect, useState } from 'react' 
import BuildForm from '../assets/Buildform.png'
import WelcomeComponent from '../components/welcomeComponent'
import FormComponent from '../components/formComponent'
import ThankYouComponent from '../components/ThankYouComponent'


export default function LandingPage() {
 
  const [openWelcome, setOpenWelcome] = useState(true)
  const [openThankU, setOpenThankU] = useState(false)

  return (
    <main >
      <header className='fixed z-20 top-0 w-full bg-transparent h-fit flex justify-start px-7 py-9'>
        <img src={BuildForm} alt='' className=' h-9 ' />
      </header>
      <div className= {` ${openWelcome ? 'flex' : 'hidden'} w-screen h-[calc(100vh-108px)] pb-[6rem]'>`} >
        <WelcomeComponent closeWelcome={() => setOpenWelcome(false)}/>
        
      </div>
      <div className= {` ${openWelcome || openThankU ? 'hidden' : 'flex'} w-screen h-[calc(100vh-108px)]'>`} >
        <FormComponent setThankU={() => setOpenThankU(true)} />
        
      </div>
      <div className= {` ${openThankU ? 'flex' : 'hidden'} w-screen h-[calc(100vh-108px)]'>`} >
        <ThankYouComponent />
        
      </div>
    </main>
  )
}