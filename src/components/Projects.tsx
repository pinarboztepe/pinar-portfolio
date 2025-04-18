"use client";

import Image from "next/image";

interface Project {
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
}

interface ProjectsProps {
  showProjects: boolean;
  setShowProjects: (show: boolean) => void;
  selectedProject: string | null;
  setSelectedProject: (project: string | null) => void;
  projects: Record<string, Project>;
}

export default function Projects({ 
  showProjects, 
  setShowProjects, 
  selectedProject, 
  setSelectedProject,
  projects 
}: ProjectsProps) {
  return (
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
                  <div className="absolute inset-0 rounded-l-lg">
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
  );
}