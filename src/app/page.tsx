import About from '@/components/About';
import Contact from '@/components/Contact';
import Intro from '@/components/Intro'
import Projects from '@/components/Projects';
import SectionDivider from '@/components/SectionDivider';
import Skills from '@/components/Skills'
import { motion } from 'framer-motion';
import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
  </main>
  )
}

