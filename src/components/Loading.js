import { motion } from 'framer-motion';

const Loading = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-[#225559]">
			<motion.div
				className="text-white text-4xl font-semibold"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Loading...
			</motion.div>
		</div>
	);
};

export default Loading;
