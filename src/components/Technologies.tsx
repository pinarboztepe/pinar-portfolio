"use client";

interface TechnologiesProps {
  showTech: boolean;
  setShowTech: (show: boolean) => void;
}

export default function Technologies({ showTech, setShowTech }: TechnologiesProps) {
  return (
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
  );
}