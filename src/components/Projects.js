import React from 'react'
import Slider from './Slider'
import { movieApp } from '../assets/index'
import { imgMovieApp, imgStackOverload } from "../assets/index"
import ProjectCard from './ProjectCard'


const Projects = ({textContent}) => {
  const {
    h2,
    movieAppDescription,
    stackOverloadDescription,
    gitHubBtn,
    demoBtn

  } = textContent
  return (
    <section id='projects' className='  container mt-5 pt-3   '>
      <h2 className='text-center'>{h2}</h2>

      <div className='w-100 text-center mt-3 pt-5 d-flex flex-column justify-content-center align-items-center'>

        <ProjectCard
        projectImg={imgMovieApp}
        projectTitle="Movie info app"
        projectDescription={movieAppDescription}
        projectRepoLink="https://github.com/IvanSantana15/movie-info-app/tree/master"
        projectDemoLink="https://movies-series-info-app.netlify.app"
        gitHubBtn={ gitHubBtn}
        demoBtn={demoBtn}
        />

        <ProjectCard
        projectImg={imgStackOverload}
        projectTitle="StackOverload"
        projectDescription={stackOverloadDescription}
        projectRepoLink="https://github.com/IvanSantana15/stack-overview/tree/master"
        projectDemoLink="https://stackoverload.netlify.app/"
        gitHubBtn={ gitHubBtn}
        demoBtn={demoBtn}
        />
       
        
      </div>

    </section >
  )
}

export default Projects



