import React from 'react'

const ButtonTab = ({text}) => {
  return (
    <div className="bg-gray-100 hover:border hover:border-gray-300 cursor-pointer px-3 md:px-5 py-2 text-base lg:text-lg rounded-md active:border active:border-sky-600
    transition transform: duration-500 ease-out
    ">{text}</div>
  )
}

export default ButtonTab