import React from 'react'
import profilePicture from '../assets/profile.jpg'

function Projects() {

  let projects = [
    {projectName: "project", photo: profilePicture, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis sunt beatae dolor tenetur est odio libero unde, aspernatur dolorum nihil voluptatibus quisquam quae. Hic sapiente accusamus impedit perspiciatis esse."},
    {projectName: "project", photo: profilePicture, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis sunt beatae dolor tenetur est odio libero unde, aspernatur dolorum nihil voluptatibus quisquam quae. Hic sapiente accusamus impedit perspiciatis esse."},
    {projectName: "project", photo: profilePicture, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis sunt beatae dolor tenetur est odio libero unde, aspernatur dolorum nihil voluptatibus quisquam quae. Hic sapiente accusamus impedit perspiciatis esse."},
    {projectName: "project", photo: profilePicture, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis sunt beatae dolor tenetur est odio libero unde, aspernatur dolorum nihil voluptatibus quisquam quae. Hic sapiente accusamus impedit perspiciatis esse."},
    {projectName: "project", photo: profilePicture, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis sunt beatae dolor tenetur est odio libero unde, aspernatur dolorum nihil voluptatibus quisquam quae. Hic sapiente accusamus impedit perspiciatis esse."},
    {projectName: "project", photo: profilePicture, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis sunt beatae dolor tenetur est odio libero unde, aspernatur dolorum nihil voluptatibus quisquam quae. Hic sapiente accusamus impedit perspiciatis esse."},
    {projectName: "project", photo: profilePicture, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis sunt beatae dolor tenetur est odio libero unde, aspernatur dolorum nihil voluptatibus quisquam quae. Hic sapiente accusamus impedit perspiciatis esse."},
    {projectName: "project", photo: profilePicture, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis sunt beatae dolor tenetur est odio libero unde, aspernatur dolorum nihil voluptatibus quisquam quae. Hic sapiente accusamus impedit perspiciatis esse."},
    {projectName: "project", photo: profilePicture, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis sunt beatae dolor tenetur est odio libero unde, aspernatur dolorum nihil voluptatibus quisquam quae. Hic sapiente accusamus impedit perspiciatis esse."},
    {projectName: "project", photo: profilePicture, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis sunt beatae dolor tenetur est odio libero unde, aspernatur dolorum nihil voluptatibus quisquam quae. Hic sapiente accusamus impedit perspiciatis esse."},
    {projectName: "project", photo: profilePicture, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis sunt beatae dolor tenetur est odio libero unde, aspernatur dolorum nihil voluptatibus quisquam quae. Hic sapiente accusamus impedit perspiciatis esse."},
    {projectName: "project", photo: profilePicture, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis sunt beatae dolor tenetur est odio libero unde, aspernatur dolorum nihil voluptatibus quisquam quae. Hic sapiente accusamus impedit perspiciatis esse."},

  ]


  return (
    <div className='row flex w-full justify-center flex-col items-center'>

      <h1 className='font-bold text-4xl'>Projeler</h1>


      <ul className="flex justify-evenly flex-wrap">
              {
                projects.map((project, key) => <div key={key} className='bg-black rounded-lg p-10 max-w-lg text-center h-max border border-white border-opacity-0 mx-16 my-16 flex flex-col justify-start items-center'><img src={project.photo} alt="" className='w-[140px] h-auto mb-5'/> <h1>{project.projectName} | id: {key}</h1> <p className='my-[20px]'>{project.description}</p></div>)
              }
      </ul>

    </div>
  )
}

export default Projects