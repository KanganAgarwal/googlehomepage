import React from 'react'
import FooterText from './FooterText'

const Footer = () => {
  return (
    <div className=" h-[100px] bg-gray-100 font-normal text-gray-500 text-lg  mt-[230px] ">
        <div className="border-b py-2 px-6 md:px-10">India</div>
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-12  flex-wrap ">
            <div className="flex items-center space-x-3 md:space-x-6">
                <FooterText text="About"/>
                <FooterText text="Advertising"/>
                <FooterText text="Business"/>
                <FooterText text="How Search works"/>
            </div>
            <div  className="flex items-center space-x-3 md:space-x-6">
            <FooterText text="Privacy"/>
                <FooterText text="Privacy"/>
                <FooterText text="Settings"/>
            </div>
           
            
        </div>
        </div>
        
        
    
 
      
  )
}

export default Footer






