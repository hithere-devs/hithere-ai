import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mail, MailOpen, Star, Trash, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Email {
	id: string;
	subject: string;
	sender: string;
	preview: string;
	important: boolean;
	unread: boolean;
}

const mockEmails: Email[] = [
	{
		id: '1',
		subject: 'Project Update: Q1 Goals',
		sender: 'Sarah Manager',
		preview: 'Here are the updated goals for Q1...',
		important: true,
		unread: true,
	},
	{
		id: '2',
		subject: 'Team Meeting Notes',
		sender: 'John Developer',
		preview: "Summary of today's sprint planning...",
		important: false,
		unread: true,
	},
	{
		id: '3',
		subject: 'Design Review Required',
		sender: 'Alice Designer',
		preview: 'Please review the latest mockups...',
		important: true,
		unread: true,
	},
];

export function EmailBrief() {
	return (
		<div>
			<ScrollArea className='h-[300px]'>
				{mockEmails.map((email) => (
					<div
						key={email.id}
						className='mb-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer border'
					>
						<div className='flex items-center justify-between'>
							<div className='flex items-center gap-2'>
								{email.unread && (
									<div className='w-2 h-2 rounded-full bg-blue-500' />
								)}
								<span className='font-medium'>{email.sender}</span>
							</div>
							<div className='flex items-center gap-2'>
								<MailOpen className='h-4 w-4 text-gray-300 hover:text-black' />
							</div>
						</div>
						<h4 className='font-medium mb-1'>{email.subject}</h4>
						<p className='text-sm text-muted-foreground'>{email.preview}</p>
					</div>
				))}
			</ScrollArea>
			<div className='flex gap-2'>
				<Button className='w-full mt-4' variant='default'>
					<Mail className='mr-2 h-4 w-4' />
					Mark All Read
				</Button>
				<Button className='w-full mt-4' variant='outline'>
					<Mail className='mr-2 h-4 w-4' />
					Open Mails
				</Button>
			</div>
		</div>
	);
}
