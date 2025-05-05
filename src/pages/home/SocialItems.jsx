import React from 'react'
import homeStyle from "./homeStyle.module.css";
import { githubIcon, linkidnIcon, telegramIcon } from "./icons";
import Rezume from '../../asset/component/rezume/Rezume';
export default function SocialItems() {
  return (
    <div className='md:ms-[20px]'>
        <div className='flex gap-2 my-[20px] justify-center w-full'>
          <a
            href="https://www.linkedin.com/in/taeizadeh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            className={homeStyle.href}
          >
            {linkidnIcon}
          </a>
          <a
            href="https://github.com/mohammadhosseinTZ?tab=repositories"
            target="_blank"
            className={homeStyle.href}
          >
            {githubIcon}
          </a>
          <a href="t.me/mottzart" target="_blank" className={homeStyle.href}>
            {telegramIcon}
          </a>
        </div>
              <Rezume />
        </div>
 
  )
}
