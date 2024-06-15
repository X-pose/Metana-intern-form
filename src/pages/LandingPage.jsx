import React, { useEffect, useState } from 'react' 
import BuildForm from '../assets/Buildform.png'
import WelcomeComponent from '../components/welcomeComponent'
import FormComponent from '../components/formComponent'


export default function LandingPage() {
 
  const [openWelcome, setOpenWelcome] = useState(true)

  return (
    <main >
      <header className=' sticky z-10 top-0 w-full h-fit flex justify-start px-7 py-9'>
        <img src={BuildForm} alt='' className=' h-9 ' />
      </header>
      <div className= {` ${openWelcome ? 'flex' : 'hidden'} w-screen h-[calc(100vh-108px)] pb-[6rem]'>`} >
        <WelcomeComponent closeWelcome={() => setOpenWelcome(false)}/>
        
      </div>
      <div className= {` ${openWelcome ? 'hidden' : 'flex'} w-screen h-[calc(100vh-108px)]'>`} >
        <FormComponent />
        
      </div>
    </main>
  )
}