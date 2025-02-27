"use client";

import Image from "next/image";
import { useState } from "react";
import MouseGlow from '../components/MouseGlow';
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
      <div className="max-w-7xl mx-auto relative">
        {/* Left Column - Profile */}
        <section className="lg:fixed lg:w-[400px] text-left lg:top-1/2 lg:-translate-y-1/2">
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
        <section className="space-y-16 lg:ml-[600px] py-24 lg:max-w-[600px]">
          {/* About Me Section */}
          <div className="relative">
            <div>
              <button
                onClick={() => setShowAbout(!showAbout)}
                className="text-lg md:text-xl font-bold mb-3 text-zinc-100 font-mono hover:text-zinc-300 hover:translate-x-2 transition-all duration-300"
              >
                About Me
              </button>
              <p className="text-zinc-400">Find out who I am and what I&apos;m all about.</p>
            </div>

            <div className={`mt-4 transition-all duration-300 ${showAbout ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
              <p className="text-zinc-400 leading-relaxed">
                I&apos;m Pinar, a passionate full-stack developer with a keen eye for detail and a love for creating seamless user experiences. My journey in tech has been driven by curiosity and a desire to build solutions that make a difference. I specialize in crafting responsive web applications using modern technologies, always staying current with the latest industry trends and best practices.
              </p>
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <button
              onClick={() => {
                setShowProjects(!showProjects);
                if (!showProjects) {
                  setSelectedProject(null);
                }
              }}
              className="text-lg md:text-xl font-bold mb-3 text-zinc-100 font-mono hover:text-zinc-300 hover:translate-x-2 transition-all duration-300"
            >
              Projects
            </button>
            <p className="text-zinc-400">Explore my latest projects and their features.</p>

            <div className={`space-y-4 transition-all duration-300 ${showProjects ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
              {Object.entries(projects).map(([key, project]) => (
                <div key={key} className="space-y-2">
                  <button
                    onClick={() => setSelectedProject(selectedProject === key ? null : key)}
                    className="text-zinc-100 hover:text-zinc-300 hover:translate-x-2 font-mono text-md md:text-lg transition-all duration-300"
                  >
                    {project.name}
                  </button>
                  <p className="text-sm text-zinc-400">{project.shortDesc}</p>

                  {selectedProject === key && (
                    <>
                      <div className="relative w-full h-40 mt-4 pl-4">
                        <div className="absolute inset-0  rounded-l-lg">
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-contain object-left"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                      <p className="text-zinc-400 text-sm mt-4">{project.fullDesc}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Platforms Section */}
          <div>
            <button
              onClick={() => setShowTech(!showTech)}
              className="text-lg md:text-xl font-bold mb-3 text-zinc-100 font-mono hover:text-zinc-300 hover:translate-x-2 transition-all duration-300"
            >
              Technologies & Platforms
            </button>
            <p className="text-zinc-400">Explore the technologies and platforms I&apos;ve worked with, from frontend to backend and tools.</p>

            {showTech && (
              <div className="space-y-4 mt-4">
                <p className="text-zinc-400">
                  <span className="text-zinc-100 font-mono">Frontend:</span> JavaScript, React, Next.js, HTML5, CSS, Tailwind CSS, Figma.
                </p>
                <p className="text-zinc-400">
                  <span className="text-zinc-100 font-mono">Backend:</span> Node.js, Ruby, Ruby on Rails, SQL, API integration.
                </p>
                <p className="text-zinc-400">
                  <span className="text-zinc-100 font-mono">Tools:</span> Git, GitHub, Heroku, Cloudinary, Bootstrap, PostgreSQL, Cursor AI, Trae AI.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
