import { addDays } from 'date-fns/addDays';
import { addHours } from 'date-fns/addHours';
import { format } from 'date-fns/format';
import { nextSaturday } from 'date-fns';
import {
	Archive,
	ArchiveX,
	Clock,
	Forward,
	MoreVertical,
	Reply,
	ReplyAll,
	Trash2,
} from 'lucide-react';

import { DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { DropdownMenu, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Label } from '../ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Separator } from '../ui/separator';
import { Switch } from '../ui/switch';
import { Textarea } from '../ui/textarea';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Mail } from './data';

interface MailDisplayProps {
	mail: Mail | null;
}

export function MailDisplay({ mail }: MailDisplayProps) {
	const today = new Date();

	return (
		<div className='flex h-full flex-col'>
			{mail ? (
				<div className='flex flex-1 flex-col'>
					<div className='flex items-start p-4'>
						<div className='flex items-start gap-4 text-sm'>
							<Avatar>
								<AvatarImage alt={mail.name} />
								<AvatarFallback>
									{mail.name
										.split(' ')
										.map((chunk) => chunk[0])
										.join('')}
								</AvatarFallback>
							</Avatar>
							<div className='grid gap-1'>
								<div className='font-semibold'>{mail.name}</div>
								<div className='line-clamp-1 text-xs'>{mail.subject}</div>
								<div className='line-clamp-1 text-xs'>
									<span className='font-medium'>Reply-To:</span> {mail.email}
								</div>
							</div>
						</div>
						{mail.date && (
							<div className='ml-auto text-xs text-muted-foreground'>
								{format(new Date(mail.date), 'PPpp')}
							</div>
						)}
					</div>
					<Separator />
					<div className='flex-1 whitespace-pre-wrap p-4 text-sm'>
						{mail.text}
					</div>
				</div>
			) : (
				<div className='p-8 text-center text-muted-foreground'>
					No message selected
				</div>
			)}
		</div>
	);
}
