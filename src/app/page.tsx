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
  const [showContact, setShowContact] = useState(false);
  const [showTech, setShowTech] = useState(false);

  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    // More comprehensive email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const disposableEmailPatterns = [
      /@.*\.(xyz|top|work|dev|site|fun|online|tech)$/i,
      /^[a-z]{1,2}@/i,
      /^test@/i,
      /^[0-9]+@/,
      /^(temp|fake|disposable).*@/i
    ];

    if (!emailRegex.test(email)) {
      setFormStatus('Please enter a valid email address.');
      return;
    }

    // Check for suspicious patterns
    if (disposableEmailPatterns.some(pattern => pattern.test(email))) {
      setFormStatus('Please use a valid business or personal email address.');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mqkropqy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('Failed to send message. Please try again.');
      }
    } catch { // Changed from error to _err with underscore to indicate unused
      setFormStatus('Failed to send message. Please try again.');
    }
  };

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
    <main className="min-h-screen p-8 md:p-24 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden flex items-center">
      <MouseGlow />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Profile */}
        <section className="text-left sticky top-24 h-fit">
          <div className="relative w-48 h-48 mb-8">
            <Image
              src="/images/pinar_profile.jpg"
              alt="Pinar Boztepe"
              fill
              className="rounded-full object-cover shadow-lg border-2 border-zinc-100"
              priority
            />
          </div>

          <h1 className="text-2xl md:text-2xl font-bold mb-4 text-zinc-100 font-mono tracking-tight">
            Pinar Boztepe
          </h1>

          <h2 className="text-xl md:text-xl font-bold mb-3 text-zinc-100 font-mono tracking-tight">
            Full-Stack Developer
          </h2>

          <p className="text-base md:text-md italic mb-2 text-zinc-400 font-mono leading-relaxed">
            &ldquo;Coding is my kaleidoscope, revealing the depths of human expression in every pixel.&rdquo;
          </p>




          <div className="flex space-x-6 mt-4">
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
        <section className="space-y-12">
          {/* About Me Section */}
          <div>
            <button
              onClick={() => setShowAbout(!showAbout)}
              className="text-xl font-bold mb-3 text-zinc-100 font-mono hover:text-zinc-300 hover:translate-x-2 transition-all duration-300"
            >
              About Me
            </button>
            <p className="text-zinc-400">Find out who I am and what I&apos;m all about.</p>

            {showAbout && (
              <p className="text-zinc-400 mt-4 leading-relaxed">
                I&apos;m Pinar, a passionate full-stack developer with a keen eye for detail and a love for creating seamless user experiences. My journey in tech has been driven by curiosity and a desire to build solutions that make a difference. I specialize in crafting responsive web applications using modern technologies, always staying current with the latest industry trends and best practices.
              </p>
            )}
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="text-xl font-bold mb-3 text-zinc-100 font-mono">Projects</h2>
            <div className="space-y-4">
              {Object.entries(projects).map(([key, project]) => (
                <div key={key} className="space-y-2">
                  <button
                    onClick={() => setSelectedProject(selectedProject === key ? null : key)}
                    className="text-zinc-100 hover:text-zinc-300 hover:translate-x-2 font-mono text-lg transition-all duration-300"
                  >
                    {project.name}
                  </button>
                  <p className="text-sm text-zinc-400">{project.shortDesc}</p>

                  {selectedProject === key && (
                    <>
                      <div className="relative w-full h-40 mt-4">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="rounded-lg object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
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
              className="text-xl font-bold mb-3 text-zinc-100 font-mono hover:text-zinc-300 hover:translate-x-2 transition-all duration-300"
            >
              Technologies & Platforms
            </button>
            <p className="text-zinc-400">
              Explore the technologies and platforms I&apos;ve worked with, from frontend to backend and tools.
            </p>

            {showTech && (
              <div className="space-y-4 mt-4">
                <p className="text-zinc-400">
                  <span className="text-zinc-100 font-mono">Frontend:</span> JavaScript, React, Next.js, HTML5, CSS, Tailwind CSS, Figma.
                </p>
                <p className="text-zinc-400">
                  <span className="text-zinc-100 font-mono">Backend:</span> Ruby, Ruby on Rails, SQL, API integration.
                </p>
                <p className="text-zinc-400">
                  <span className="text-zinc-100 font-mono">Tools:</span> Git, GitHub, Heroku, Cloudinary, Bootstrap, PostgreSQL, Cursor AI, Trae AI.
                </p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div>
            <button
              onClick={() => setShowContact(!showContact)}
              className="text-xl font-bold mb-3 text-zinc-100 font-mono hover:text-zinc-300 hover:translate-x-2 transition-all duration-300"
            >
              Contact Me
            </button>
            {/*
              Replace straight quotes with HTML entities in text
            */}

            <p className="text-zinc-400">Let&apos;s be in touch!</p>

            {showContact && (
              <form onSubmit={handleSubmit} className="space-y-3 mt-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full p-1.5 text-sm bg-zinc-800/50 rounded-lg border border-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-zinc-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full p-1.5 text-sm bg-zinc-800/50 rounded-lg border border-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-zinc-500"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={3}
                    className="w-full p-1.5 text-sm bg-zinc-800/50 rounded-lg border border-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-zinc-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-3 py-1.5 text-sm bg-zinc-800 text-zinc-100 rounded-lg hover:bg-zinc-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send Message
                </button>
                {formStatus && (
                  <p className="text-xs text-zinc-400 mt-1">{formStatus}</p>
                )}
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
