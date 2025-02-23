import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Settings, Search } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Conversation } from './Convo';

export function VoiceNavigation() {
	const [isHovered, setIsHovered] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalContentClick = (e: React.MouseEvent) => {
		// Prevent click from reaching the overlay
		e.stopPropagation();
	};

	return (
		<>
			<motion.div
				className='fixed bottom-0 left-0 right-0 z-50'
				initial={{ y: '70%' }}
				animate={{ y: isHovered ? '40%' : '70%' }}
				transition={{
					type: 'spring',
					stiffness: 400,
					damping: 30,
				}}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{/* Main container for the arch */}
				<div className='relative w-full h-[20vh]'>
					{/* Background blur and gradient */}
					<div
						className='absolute inset-0'
						style={{
							clipPath: 'ellipse(100% 100% at bottom center)',
						}}
					/>

					{/* Navigation items container */}
					<div className='absolute bottom-5 left-0 right-0 h-24 flex justify-center items-center'>
						<div className='flex items-center gap-8'>
							{/* Center microphone button */}
							<Button
								onClick={() => setIsModalOpen(true)}
								size='icon'
								className='h-16 w-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 -translate-y-8 hover:-translate-y-10'
							>
								<Mic className='h-8 w-8 text-primary-foreground' />
							</Button>
						</div>
					</div>
				</div>
			</motion.div>

			{/* Voice Modal */}
			<AnimatePresence>
				{isModalOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 bg-background/80 backdrop-blur-sm z-50 '
						onClick={() => setIsModalOpen(false)}
					>
						<div
							className='container max-w-2xl h-full mx-auto flex items-center justify-center'
							onClick={handleModalContentClick}
						>
							<div className='w-full h-[500px]  p-6  bg-transparent'>
								<Conversation />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
