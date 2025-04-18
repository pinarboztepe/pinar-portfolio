"use client";

import Image from "next/image";
import { useState } from "react";
import MouseGlow from '../components/MouseGlow';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  
  const projects = {
    vempo: {
      name: "Vempo",
      shortDesc: "A comprehensive vendor management platform.",
      fullDesc: "This pioneering platform seamlessly fuses music and visual artistry, providing a transformative canvas where sound and sight converge. Immerse yourself in the creative process as you craft and personalize dynamic, synchronized shapes that dance harmoniously with your uploaded music.",
      image: "/images/vempo.png"
    },
    sparePals: {
      name: "Spare Pals",
      shortDesc: "An innovative platform for spare parts management.",
      fullDesc: "Spare Pals offers a unique service catering to various needs, whether for leisurely activities, daily outings, or even hospital visits. The platform provides a seamless booking system where users can check availability and select specific dates and hours needed.",
      image: "/images/spare_pals.png"
    }
  };

  return (
    <main className="min-h-screen p-4 sm:p-8 md:p-24 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative flex">
      <MouseGlow />
      <div className="max-w-7xl mx-auto relative grid lg:grid-cols-[400px,1fr] gap-8">
        {/* Left Column - Profile */}
        <section className="lg:sticky lg:top-24 lg:h-fit">
          <div className="relative w-32 h-32 md:w-48 md:h-48 mb-6 md:mb-8 mx-auto lg:mx-0">
            <Image
              src="/images/pinar_profile.jpg"
              alt="Pinar Boztepe"
              fill
              className="rounded-full object-cover shadow-lg border-2 border-zinc-100"
              priority
            />
          </div>

          <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-zinc-100 font-mono tracking-tight text-center lg:text-left">
            Pinar Boztepe
          </h1>

          <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-zinc-100 font-mono tracking-tight text-center lg:text-left">
            Full-Stack Developer
          </h2>

          <p className="text-sm md:text-base italic mb-2 text-zinc-400 font-mono leading-relaxed text-center lg:text-left">
            &ldquo;Coding is my kaleidoscope, revealing the depths of human expression in every pixel.&rdquo;
          </p>

          <div className="flex space-x-6 mt-4 justify-center lg:justify-start">
            <div className="flex items-center">
              <span className="text-zinc-100  flex items-center cursor-pointer">
                <FontAwesomeIcon icon={faLocationDot} size="lg" />
                <span className="ml-2 text-base">London</span>
              </span>
            </div>

            <a
              href="https://github.com/pinarboztepe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-100 hover:text-zinc-400 hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithubSquare} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/pinar-boztepe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-100 hover:text-zinc-400 hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </section>

        {/* Right Column - Content */}
        <section className="space-y-16 py-24">
          <AboutMe showAbout={showAbout} setShowAbout={setShowAbout} />
          <Projects 
            showProjects={showProjects}
            setShowProjects={setShowProjects}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            projects={projects}
          />
          <Technologies showTech={showTech} setShowTech={setShowTech} />
        </section>
      </div>
    </main>
  );
}
