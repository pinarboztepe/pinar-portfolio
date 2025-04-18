"use client";

interface AboutMeProps {
  showAbout: boolean;
  setShowAbout: (show: boolean) => void;
}

export default function AboutMe({ showAbout, setShowAbout }: AboutMeProps) {
  return (
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
  );
}