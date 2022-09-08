import Image from 'next/image'
import React from 'react'

const InstructorCard = ({item}) => {
  return (
    <div className='bg-tertiary dark:bg-DarkTertiary scale-95 hover:scale-100 hover:brightness-105 duration-700 relative py-5 rounded-lg min-h-[440px] max-h-[440px] min-w-[290px] max-w-[290px] flex flex-col space-y-4 justify-start'>
        <div className='flex justify-center mb-3  px-10 '>
            <Image src={item.image} width={140} height={140} />
        </div>
        <div className='mb-6  px-10 '>
            <h2 className='text-xl font-semibold text-DarkPrimary dark:text-primary'>{item.name}</h2>
            <p className='text-sm font-semibold text-DarkTertiary dark:text-tertiary'>{item.position}</p>
        </div>
        <div className='mb-8  px-10 '>
            <p className='text-sm font-medium text-DarkPrimary dark:text-primary'>{item.description}</p>
        </div>
        <div className='flex space-x-5 absolute p-3 px-8 bottom-0 w-full justify-between'>
            <Image src={"https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662556935/landingPage/Untitled_design_42_ja1hvo.png"} width={30} height={30} className="cursor-pointer scale-[0.85] hover:scale-100 duration-300" />
            <Image src={"https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662557322/landingPage/5-removebg-preview_llf3gx.png"} width={30} height={30} className="cursor-pointer scale-[0.85] hover:scale-100 duration-300" />
            <Image src={"https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662557324/landingPage/4-removebg-preview_pepoai.png"} width={30} height={30} className="cursor-pointer scale-[0.85] hover:scale-100 duration-300" />
            <Image src={"https://res.cloudinary.com/dfk5jbk5r/image/upload/v1662557326/landingPage/3-removebg-preview_rf60qz.png"} width={30} height={30} className="cursor-pointer scale-[0.85] hover:scale-100 duration-300" />
        </div>
    </div>
  )
}

export default InstructorCard