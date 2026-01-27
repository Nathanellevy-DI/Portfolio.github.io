import { motion, useScroll, useTransform } from 'framer-motion';
import CircularGallery from './components/ui/CircularGallery';
import type { ReactNode } from 'react';
import { useGitHubStats } from './hooks/useGitHubStats';
import { Star, Users, FolderGit2 } from 'lucide-react';

// Project Images
import travelMapsImg from './assets/projects/travelmaps.jpg';
import fitTrackImg from './assets/projects/fittrack.png';
import airWatchImg from './assets/projects/airwatch.jpg';
import newsHubImg from './assets/projects/newshub.jpg';
import stackPadImg from './assets/projects/stackpad.jpg';
import profileImg from './assets/profile.jpg';

// Components
const Section = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <section className={`min-h-[80vh] relative flex items-center justify-center p-4 md:p-8 overflow-hidden ${className}`}>
    {children}
  </section>
);

const GitHubStats = ({ username }: { username: string }) => {
  const { followers, publicRepos, totalStars, loading, error } = useGitHubStats(username);

  if (loading) return <div className="animate-pulse h-8 w-48 bg-white/5 rounded mx-auto mt-8"></div>;
  if (error) return <div className="text-gray-500 text-xs mt-8">Stats temporarily unavailable (API Limit)</div>;

  return (
    <div className="flex justify-start gap-8 mt-8 flex-wrap">
      <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
        <Users size={16} className="text-purple-400" />
        <span className="font-bold">{followers}</span> followers
      </div>
      <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
        <Star size={16} className="text-yellow-400" />
        <span className="font-bold">{totalStars}</span> stars
      </div>
      <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
        <FolderGit2 size={16} className="text-blue-400" />
        <span className="font-bold">{publicRepos}</span> repos
      </div>
    </div>
  );
}

const App = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Project Items for CircularGallery
  const projectItems = [
    { image: travelMapsImg, text: 'TravelMaps' },
    { image: fitTrackImg, text: 'FitTrack' },
    { image: airWatchImg, text: 'AirWatch' },
    { image: newsHubImg, text: 'NEWS HUB' },
    { image: stackPadImg, text: 'StackPad' },
  ];

  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen relative">
      {/* Dynamic Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 z-0 pointer-events-none opacity-30"
      >
        <div className="absolute top-0 left-0 w-full h-[800px] bg-purple-900/40 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-full h-[600px] bg-blue-900/30 blur-[100px] rounded-full mix-blend-screen" />
      </motion.div>

      <main className="relative z-10">
        <Section className="py-12 md:py-20"> {/* Adjusted padding for mobile */}
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center md:text-left"> {/* Centered text on mobile, left on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-64 h-64 md:w-96 md:h-96 flex-shrink-0 rounded-full p-[6px] bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl overflow-hidden mx-auto md:mx-0" /* Auto margins for centering on mobile */
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-[#1a1a1a] flex items-center justify-center relative">
                {/* Using background image approach for bulletproof centering if needed, but object-cover is usually fine. 
                     Let's verify aspect ratio issues. If source image is rectangular, object-cover centers it. 
                     Adding explicit centering styles to img tag just in case. */}
                <img
                  src={profileImg}
                  alt="Nathanel Levy"
                  className="w-full h-full object-cover object-center absolute inset-0"
                />
              </div>
            </motion.div>

            <div className="space-y-4 md:space-y-6 max-w-lg">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight"
              >
                Nathanel Levy
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300"
              >
                Full Stack Developer & UI/UX Specialist
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 text-sm text-gray-400"
              >
                <span className="bg-white/5 px-3 py-1 rounded-full">E-commerce</span>
                <span className="bg-white/5 px-3 py-1 rounded-full">Operational Management</span>
                <span className="bg-white/5 px-3 py-1 rounded-full">React Specialist</span>
              </motion.div>

              <div className="pt-4 flex justify-center md:justify-start">
                <GitHubStats username="Nathanellevy-DI" />
              </div>
            </div>
          </div>
        </Section>

        {/* Projects Section with Circular Gallery */}
        <Section className="h-[800px] block">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400">Drag to explore</p>
          </div>
          <div style={{ height: '600px', width: '100%', position: 'relative' }}>
            <CircularGallery
              items={projectItems}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
            />
          </div>
        </Section>

        {/* Tech Stack Grid - Placeholder for now */}
        <Section>
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-12 text-center">Technical Arsenal</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['React', 'TypeScript', 'Node.js', 'Python', 'Tailwind', 'Framer Motion', 'Adobe Suite', 'Git'].map((tech) => (
                <div key={tech} className="glass-panel p-6 rounded-2xl flex items-center justify-center text-xl font-semibold hover:scale-105 transition-transform cursor-pointer">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Experience Timeline - Placeholder for now */}
        <Section>
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-12 text-center">Journey</h2>
            <div className="space-y-8 border-l-2 border-white/10 pl-8 ml-4">
              {[
                { role: "Developer Bootcamp", company: "Developers Institute", year: "2025" },
                { role: "Operational Management", company: "Us Engine Production", year: "2023-2024" },
                { role: "E-commerce", company: "Nate Diamonds", year: "Previous" }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-[#1a1a1a]" />
                  <div className="glass-panel p-6 rounded-xl">
                    <span className="text-sm text-purple-400">{item.year}</span>
                    <h3 className="text-xl font-bold mt-1">{item.role}</h3>
                    <p className="text-gray-400">{item.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <footer className="py-8 text-center text-gray-500 text-sm">
          © 2026 Nathanel Levy. Built with React & OGL.
        </footer>
      </main>
    </div>
  );
};

export default App;
