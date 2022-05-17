import React from 'react'
import {CgMenuGridO} from "react-icons/cg"
import user from "../images/user.jpg"
const Header = () => {
  return (
    <div className="flex items-center justify-end mt-4 mr-6 space-x-6 font-medium text-base lg:text-lg mb-4">
        <a href="https://mail.google.com/mail/&ogbl" className="hover:underline text-gray-500">Gmail</a>
        <a href="https://www.google.co.in/imghp?hl=en&ogbl"  className="hover:underline text-gray-500">Images</a>
        <div  className="h-[45px] w-[45px] lg:h-[50px] lg:w-[50px] rounded-full flex items-center justify-center hover:bg-gray-100">
        <CgMenuGridO className="h-6 w-6 lg:h-8 lg:w-8 text-gray-500"/>
        </div>
        <div className="h-[40px] w-[40px] lg:h-[54px] lg:w-[54px] rounded-full flex items-center justify-center hover:bg-gray-100">
        <img src={user} alt="user" className="h-[39px] w-[39px] lg:h-[46px] lg:w-[46px] rounded-full p-1 "/>
    </div>
    </div>
  )
}

export default Header