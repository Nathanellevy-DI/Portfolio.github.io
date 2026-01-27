import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const ProjectPage = () => {
    const { projectId } = useParams();

    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white p-8">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                <ArrowLeft size={20} />
                Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-5xl font-bold mb-6 capitalize">{projectId}</h1>
                <div className="glass-panel p-8 rounded-3xl min-h-[400px] flex items-center justify-center">
                    <p className="text-gray-400 text-xl">Project details for {projectId} coming soon...</p>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectPage;
