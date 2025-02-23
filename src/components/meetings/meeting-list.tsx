import React from 'react';
import { Calendar, MapPin, MoreVertical } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface Meeting {
	id: string;
	name: string;
	avatar: string;
	date: string;
	time: string;
	location: string;
	description?: string;
}

const meetings: Meeting[] = [
	{
		id: '4',
		name: 'Lindsay Walton',
		avatar:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
		date: 'January 14th, 2022',
		time: '10:00 AM',
		location: 'Silverburn',
		description:
			'Meeting with Leslie to discuss the new project ng with Leslie to discuss the new project, Meeting with Leslie to discuss the new project ng with Leslie to discuss the new project, Meeting with Leslie to discuss the new project',
	},
	{
		id: '1',
		name: 'Leslie Alexander',
		avatar:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
		date: 'January 10th, 2022',
		time: '5:00 PM',
		location: 'Starbucks',
		description: 'Meeting with Leslie to discuss the new project',
	},
	{
		id: '2',
		name: 'Michael Foster',
		avatar:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
		date: 'January 12th, 2022',
		time: '3:00 PM',
		location: 'Tim Hortons',
		description: 'Meeting with Leslie to discuss the new project',
	},
	{
		id: '3',
		name: 'Dries Vincent',
		avatar:
			'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
		date: 'January 12th, 2022',
		time: '5:00 PM',
		location: 'Costa Coffee at Braehead',
		description:
			'Meeting with Leslie to discuss the new project ng with Leslie to discuss the new project, Meeting with Leslie to discuss the new project',
	},

	{
		id: '5',
		name: 'Courtney Henry',
		avatar:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
		date: 'January 14th, 2022',
		time: '12:00 PM',
		location: 'The Glasgow Green',
		description:
			'Meeting with Leslie to discuss the new project, Meeting with Leslie to discuss the new project ng with Leslie to discuss the new project, Meeting with Leslie to discuss the new project ng with Leslie to discuss the new project, Meeting with Leslie to discuss the new project',
	},
];

const MeetingList = () => {
	return (
		<div className='flex-1'>
			<div className='space-y-4'>
				{meetings.map((meeting) => (
					<Card
						key={meeting.id}
						className='flex items-center justify-between p-4'
					>
						<div className='flex justify-center space-x-4'>
							<img
								src={meeting.avatar}
								alt={meeting.name}
								className='w-10 h-10 rounded-full object-cover'
							/>
							<div>
								<p>{meeting.name}</p>
								<p className='text-muted-foreground text-[0.8rem]'>
									{meeting.description}
								</p>
								<div className='flex items-center space-x-6 mt-1 '>
									<div className='flex items-center'>
										<Calendar className='w-5 h-5 mr-2' />
										<span>{`${meeting.date} at ${meeting.time}`}</span>
									</div>
								</div>
							</div>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
};

export default MeetingList;
