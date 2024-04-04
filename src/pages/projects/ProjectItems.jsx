import React from 'react'

export default function ProjectItems({name , about , material , github}) {
  return (
    
        <div
        style={{
          display: "grid",
          textAlign: "center",
          marginTop:'7px',
          
          backgroundColor: "white",
          padding: 8,
          borderRadius: 8,
          margin:'auto'
        }}
        className='lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] justify-between items-end lg:items-start'
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
