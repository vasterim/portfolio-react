import React from 'react'
import profilePicture from '../assets/profile.jpg'

function Projects() {

  let projects = [
    {projectName: "project", photo: profilePicture, description: "oh sadly! It's empty here for now!"},

  ]


  return (
    <div className='row flex w-full justify-center flex-col items-center'>

      <h1 className='font-bold text-4xl'>My Projects</h1>


      <ul className="flex justify-evenly flex-wrap">
              {
                projects.map((project, key) => <div key={key} className='bg-black w-[500px] max-lg:w-[300px] min-h-[500px] rounded-lg p-10 max-w-lg text-center h-max border border-white border-opacity-0 mx-16 my-16 flex flex-col justify-start items-center'><img src={project.photo} alt="" className='w-[140px] h-auto mb-5'/> <h1 className='font-bold text-2xl'>{project.projectName}</h1> <p className='my-[20px]'>{project.description}</p></div>)
              }
      </ul>

    </div>
  )
}

export default Projects