import React from 'react'

export default function ProjectItems({name , about , material , github}) {
  return (
    
        <div
        className=' justify-between items-end lg:items-start p-[8px] bg-white text-center h-full'
      >
        <h2 style={{ fontWeight: "bold" }} className='lg:text-[18px] text-[14px]'>{name}</h2>
        <span className="lg:text-[13px] text-[10px]">
          {about}
        </span>
        <hr />
        <span className="lg:text-[14px] hidden lg:block" >
          {material}
        </span>
        <a href={github} target="_blank" style={{ color: "rgb(0,159,241" }} className='lg:text-[13px] text-[12px]'>
          Demo
        </a>
      </div>
  )
}
