"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import ProjectsCard from "./ProjectsCard";

export default function Projects() {
    const projectsData = [
        {
            title : "WebRTC Video Call App" ,
            deploy : "https://reddit-clone-next-js-fullstack.vercel.app/sign-up",
            repo : "https://github.com/mrthakur30/Reddit-Clone-Next.js-Fullstack" ,
            imageUrl : "/1.png",
            tags : ["webRTC" , "Socket.io", "Next.js", "Typescript", "Tailwind"] ,
            description : "Used webRTC to implement video calling and socket.io as signaling server"
          },
          {
            title : "Reddit Clone - Next.js" ,
            deploy : "https://web-rtc-nextjs-two.vercel.app/",
            repo : "https://github.com/mrthakur30/webRTC-nextjs" ,
            imageUrl : "/8.png",
            tags : ["Next.js 13" ,"Prisma", "Typescript", "Tailwind"] ,
            description : "Its a reddit clone where can create and join communities and post what they want"
          },
          
          {
            title : "Email Waitlist Site" ,
            deploy : "https://frontend-code-doctor.vercel.app/",
            repo : "https://github.com/mrthakur30/frontend-code-doctor" ,
            imageUrl : "/7.png",
            tags : ["Next.js", "Express", "Tailwind", "Framer Motion"] ,
            description : "A webpage for getting user email data for wait list and admin dashboard"
          },
          {
            title : "Spotify Stats" ,
            deploy : "https://youtu.be/VSYh1GM-6y8/",
            repo : "https://github.com/mrthakur30/spotify-stats-api-react" ,
            imageUrl : "/1.png" ,
            tags : ["React" ,"Tailwind" , "Redux Toolkit","Spotify API" ] ,
            description : "Made using Spotify API, user can see his top 15 played tracks and artists "
          },
          {
            title : "Tok Tik" ,
            deploy : "https://unrivaled-paletas-0ca3dd.netlify.app/",
            repo : "https://github.com/mrthakur30/youtube-clone-assignment" ,
            imageUrl : "/2.png" ,
            tags : ["React" ,"Tailwind" , "Vite"] ,
            description : "A video player displaying pages using paginated API and can play videos using HTML5 video"
          },
          {
            title : "Candidate Hiring Site" ,
            deploy : "https://animated-paletas-6e9ffe.netlify.app/",
            repo : "https://github.com/mrthakur30/mnc-hiring-site" ,
            imageUrl : "/5.png",
            tags : ["HTML" ,"CSS", "Javascript", "Firebase"] ,
            description : "User can hire candidates based on role and location and save them in list"
          },
          {
            title : "Notes App" ,
            deploy : "https://thriving-youtiao-c254b0.netlify.app/",
            repo : "https://github.com/mrthakur30/notes-react-app-redux-tailwind" ,
            imageUrl : "/4.png" ,
            tags : ["React" ,"Tailwind" , "Redux Toolkit"] ,
            description : "Google Keep Clone while learning React"
          },
      
      ]
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectsCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
