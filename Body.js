import React from 'react'
import google from '../images/google.png'
import mic from '../images/mic.png'
import {AiOutlineSearch} from "react-icons/ai"
import ButtonTab from './ButtonTab'
import {datas} from "../data"
const Body = () => {
  return (
    <div className="flex flex-col items-center ">

     <img src={google} alt="Google" className="h-20 md:h-[110px] lg:[130px]"/>
     <div className="rounded-full min-w-[350px] md:min-w-[450px] lg:min-w-[650px]   flex items-center mt-6 border py-2  lg:py-[14px] px-4 lg:px-6 hover:shadow-xl ">
         <AiOutlineSearch className="h-5 w-5 md:h-6 md:w-6  text-gray-600"/>
         <input type="text"  className="border-none outline-none flex-1 px-4"/>
         <img src={mic} alt="Google" className="h-5 w-5 md:h-6 md:w-6 "/>
     </div>
     <div className="flex items-center space-x-4 mx-auto mt-8 ">
     <ButtonTab text="Google Search"/>
     <ButtonTab text="I'm Feeling Lucky"/>
     </div>
     <div className="flex flex-col md:flex-row items-center flex-wrap  mx-auto space-x-4 mt-8">
       <p className="mb-4 md:mb-0">Google offered in: </p>
       <div className="flex items-center space-x-5  flex-wrap mx-auto ">
      {datas.map(lang=>(
        <a className="text-blue-800 hover:underline cursor-pointer " href="#">{lang}</a>
      ))}
      </div>
     </div>
    </div>
  )
}

export default Body