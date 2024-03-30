import React from 'react'
import profilePicture from '../assets/profile.jpg'
import htmlp from '../assets/html.png'
import cssp from '../assets/css.webp'
import javascriptp from '../assets/javascript.png'
import reactp from '../assets/react.png'

import githubICON from '../assets/github.png'
import medium from '../assets/medium.png'
import linkedin from '../assets/linkedin.png'

function About() {


  let links = [
    {name: "github", photo: githubICON, href:"https://github.com/vasterim", size: "auto"},
    {name: "medium", photo: medium, href:"https://medium.com/@eyupozgurcagliyan", size: "auto"},
    {name: "linkedin", photo: linkedin, href:"https://www.linkedin.com/in/ey%C3%BCp-%C3%B6zg%C3%BCr-%C3%A7a%C4%9Fl%C4%B1yan-563957294/", size: "40px"}

  ]

  let information = {
    name: "eyup",
    about: `Hi there! I'm eyup, a 17-year-old high school student. My relationship with computers began back in middle school, and my passion for web development has only grown stronger since then.

    When I first started out, I got hooked on simple languages like HTML and CSS. Designing and styling pages was truly mesmerizing. Then I moved on to JavaScript and learned how to bring pages to life.
    
    Lately, I've been focusing on React, and I'm really amazed by its flexibility. And recently, I picked up tools like Tailwind CSS!`
  }




  let abilities = [htmlp, cssp, javascriptp, reactp]


  return (
    <div className='mx-auto'>
    
    <div className="row flex w-full justify-center">

    <div className="p-5 w-max h-max border-0 border-white border-opacity-20">
      <div className="flex items-center flex-col">
        <img src={profilePicture} className='w-[140px] h-auto mb-10 rounded-lg'/>
        <h1 className='font-bold text-3xl'>{information.name}</h1>
        <div className='flex items-center'>
        {links.map((link, index) => (
        <a key={index} href={link.href} target='_blank' className='mx-2'><img src={link.photo} className='w-[40px] h-auto saturate-0 opacity-80 transition hover:opacity-100 hover:saturate-100 mt-5'/></a>
      ))}
        </div>
        

      </div>
    </div>

    </div>

    <div className="row flex w-full justify-center flex-col items-center">
          <ul className='flex'>
              {
                abilities.map((ability, key) => <li key={key}><img src={ability} className='w-10 h-auto saturate-0 opacity-80 transition hover:opacity-100 hover:saturate-100  contrast-200'/></li>)
              }
          </ul>

      <div className='max-w-7xl mx-10 flex justify-center bg-black bg-opacity-50 flex-col items-center border-2 p-5 border-white border-opacity-10 my-2 flex-wrap rounded-md'>
        <h2 className='font-bold text-2xl mb-3'>About Me</h2>
        <p className='text-lg text-center'>{information.about}</p>
        </div>
    </div>

    </div>
    
  )
}

export default About