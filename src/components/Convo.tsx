'use client';

import { cn } from '@/lib/utils';
import { useConversation } from '@11labs/react';
import { useCallback, useEffect, useRef, useState } from 'react';

export function Conversation() {
	const [frequencySize, setFrequencySize] = useState(0);
	const animationFrameRef = useRef<number>();

	const conversation = useConversation({
		onMessage: (message: any) => console.log('Message:', message),
		onError: (error: any) => console.error('Error:', error),
	});

	useEffect(() => {
		const updateFrequency = () => {
			const frequencyData = conversation.getOutputByteFrequencyData();
			if (frequencyData) {
				// Calculate average frequency
				const average =
					frequencyData.reduce((acc, val) => acc + val, 0) /
					frequencyData.length;
				setFrequencySize(average / 255); // Normalize to 0-1 range
			}

			animationFrameRef.current = requestAnimationFrame(updateFrequency);
		};

		updateFrequency();

		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, [conversation]);

	const startConversation = useCallback(async () => {
		try {
			// Request microphone permission
			await navigator.mediaDevices.getUserMedia({ audio: true });

			// Start the conversation with your agent
			await conversation.startSession({
				agentId: 'mkgfjtuiIVv8KDvh9yCR', // Replace with your agent ID
			});
		} catch (error) {
			console.error('Failed to start conversation:', error);
		}
	}, [conversation]);

	const stopConversation = useCallback(async () => {
		await conversation.endSession();
	}, [conversation]);

	useEffect(() => {
		startConversation();
		return () => {
			conversation.status == 'connected' && stopConversation();
		};
	}, []);

	return (
		<div className='flex flex-col items-center gap-4'>
			<div className='flex gap-2'>
				<div
					className={cn(
						'orb my-16 mx-12',
						conversation.isSpeaking
							? 'animate-orb'
							: conversation && 'animate-orb-slow',
						conversation.status == 'connected' ? 'orb-active' : 'orb-inactive'
					)}
					style={{
						transform: `scale(${1 + frequencySize * 0.3})`, // Scale based on frequency
						transition: 'transform 0.1s ease-out',
					}}
					onClick={
						conversation.status === 'connected'
							? stopConversation
							: startConversation
					}
				></div>
			</div>
		</div>
	);
}
