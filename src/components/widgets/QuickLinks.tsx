import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Github, Trello, Calendar } from 'lucide-react';

interface QuickLink {
	id: string;
	title: string;
	url: string;
	icon: keyof typeof icons;
	color: string;
}

const icons = {
	FileText,
	Github,
	Trello,
	Calendar,
};

const quickLinks: QuickLink[] = [
	{
		id: '1',
		title: 'Mail',
		url: '#',
		icon: 'FileText',
		color: 'text-blue-500',
	},
	{
		id: '2',
		title: 'GitHub',
		url: '#',
		icon: 'Github',
		color: 'text-purple-500',
	},
	{
		id: '3',
		title: 'Project Board',
		url: '#',
		icon: 'Trello',
		color: 'text-green-500',
	},
	{
		id: '4',
		title: 'Team Calendar',
		url: '#',
		icon: 'Calendar',
		color: 'text-orange-500',
	},
];

export function QuickLinks() {
	return (
		<div className='flex justify-between gap-4'>
			{quickLinks.map((link) => {
				const IconComponent = icons[link.icon];
				return (
					<Button
						key={link.id}
						variant='outline'
						className='flex-1 h-10 gap-2'
						asChild
					>
						<a href={link.url} target='_blank' rel='noopener noreferrer'>
							<IconComponent className={`h-4 w-4 ${link.color}`} />
							<span className='font-medium'>{link.title}</span>
						</a>
					</Button>
				);
			})}
		</div>
	);
}
