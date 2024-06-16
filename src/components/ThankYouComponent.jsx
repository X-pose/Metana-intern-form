import React from 'react'
import fbIcon from '../assets/fbIcon.svg'
import twitterIcon from '../assets/twitterIcon.svg'
import linkedInIcon from '../assets/linkedInIcon.svg'

export default function ThankYouComponent() {


    return (
        <div className=' w-full h-screen flex justify-center items-center'>
            <div className='  items-center font-lexend-deca flex flex-col'>
                <p className=' text-4xl  text-[#191B33] mb-4'>Thank you for applying</p>
                <p className=' text-xl  text-[#5E5F70] mb-4'> An admissions team member will contact you shortly.</p>
                <div className=' flex gap-2'>
                    <a href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmetana.typeform.com%2Fbuildform-test%3Futm_source%3Dfacebook%26utm_content%3Dtypeform_social'>
                        <img src={fbIcon} />
                    </a>
                    <a href='https://twitter.com/intent/tweet?url=https%3A%2F%2Fmetana.typeform.com%2Fbuildform-test%3Futm_source%3Dtwitter%26utm_content%3Dtypeform_social'>
                        <img src={twitterIcon} />
                    </a>
                    <a href='https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fmetana.typeform.com%2Fbuildform-test%3Futm_source%3Dlinkedin%26utm_content%3Dtypeform_social'>
                        <img src={linkedInIcon} />
                    </a>

                </div>
                <div className=' flex mt-8 relative '>
                    <a href='https://www.typeform.com/explore/?utm_campaign=XRAhBuOZ&utm_source=typeform.com-25971652-business&utm_medium=typeform&utm_content=typeform-endscreenbutton&utm_term=EN'>
                        <button type='button' className=' w-fit cursor-pointer text-2xl font-bold text-white  bg-[#CF9FFF] rounded-[4px] py-[8px] px-[18px]'>Create a typeform</button>
                    </a>
                    <div className=' absolute -right-24 top-4 text-[12px] text-[#444444] hidden xl:flex ml-3 items-center justify-cente  '>
                        <p>press  &nbsp;</p>
                        <strong> Enter ↵</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}