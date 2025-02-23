import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';
import { Badge } from '../ui/badge';
import { Clock, AlertCircle, CheckCircle2, Rocket } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface JiraIssue {
	id: string;
	key: string;
	title: string;
	status: 'in-progress' | 'to-be-picked-up' | 'done' | 'deployed';
	priority: 'high' | 'medium' | 'low';
	timeSpent: string;
}

const mockIssues: JiraIssue[] = [
	{
		id: '1',
		key: 'PROJ-123',
		title: 'Implement dashboard widgets',
		status: 'in-progress',
		priority: 'high',
		timeSpent: '2h 30m',
	},
	{
		id: '2',
		key: 'PROJ-124',
		title: 'Fix navigation bug',
		status: 'to-be-picked-up',
		priority: 'high',
		timeSpent: '0h',
	},
	{
		id: '3',
		key: 'PROJ-125',
		title: 'Update documentation',
		status: 'done',
		priority: 'medium',
		timeSpent: '45m',
	},
	{
		id: '4',
		key: 'PROJ-126',
		title: 'Optimize database queries',
		status: 'deployed',
		priority: 'high',
		timeSpent: '4h 15m',
	},
	{
		id: '5',
		key: 'PROJ-127',
		title: 'Implement user authentication',
		status: 'in-progress',
		priority: 'high',
		timeSpent: '3h 45m',
	},
	{
		id: '6',
		key: 'PROJ-128',
		title: 'Design new landing page',
		status: 'to-be-picked-up',
		priority: 'medium',
		timeSpent: '0h',
	},
	{
		id: '6',
		key: 'PROJ-123',
		title: 'Implement dashboard widgets',
		status: 'in-progress',
		priority: 'high',
		timeSpent: '2h 30m',
	},
	{
		id: '7',
		key: 'PROJ-124',
		title: 'Fix navigation bug',
		status: 'to-be-picked-up',
		priority: 'high',
		timeSpent: '0h',
	},
	{
		id: '8',
		key: 'PROJ-125',
		title: 'Update documentation',
		status: 'done',
		priority: 'medium',
		timeSpent: '45m',
	},
	{
		id: '9',
		key: 'PROJ-126',
		title: 'Optimize database queries',
		status: 'deployed',
		priority: 'high',
		timeSpent: '4h 15m',
	},
	{
		id: '10',
		key: 'PROJ-127',
		title: 'Implement user authentication',
		status: 'in-progress',
		priority: 'high',
		timeSpent: '3h 45m',
	},
	{
		id: '11',
		key: 'PROJ-128',
		title: 'Design new landing page',
		status: 'to-be-picked-up',
		priority: 'medium',
		timeSpent: '0h',
	},
];

const statusColors = {
	'in-progress': 'bg-blue-500',
	'to-be-picked-up': 'bg-yellow-500',
	done: 'bg-green-500',
	deployed: 'bg-purple-500',
};

const priorityColors = {
	high: 'bg-red-100 text-red-800',
	medium: 'bg-yellow-100 text-yellow-800',
	low: 'bg-green-100 text-green-800',
};

function IssueCard({ issue }: { issue: JiraIssue }) {
	return (
		<Card className='min-w-[16.5rem]'>
			<CardContent className='p-4'>
				<div className='flex items-center justify-between mb-2'>
					<div className='flex items-center gap-2'>
						<span className='font-mono text-sm text-muted-foreground'>
							{issue.key}
						</span>
						<div
							className={`w-2 h-2 rounded-full ${statusColors[issue.status]}`}
						/>
					</div>
					<Badge variant='secondary' className={priorityColors[issue.priority]}>
						{issue.priority}
					</Badge>
				</div>
				<h4 className='font-medium mb-2'>{issue.title}</h4>
				<div className='flex items-center gap-4 text-sm text-muted-foreground'>
					<div className='flex items-center gap-1'>
						<Clock className='h-4 w-4' />
						{issue.timeSpent}
					</div>
					{issue.status === 'to-be-picked-up' && (
						<div className='flex items-center gap-1 text-yellow-500'>
							<AlertCircle className='h-4 w-4' />
							To Be Picked Up
						</div>
					)}
					{issue.status === 'done' && (
						<div className='flex items-center gap-1 text-green-500'>
							<CheckCircle2 className='h-4 w-4' />
							Complete
						</div>
					)}
					{issue.status === 'deployed' && (
						<div className='flex items-center gap-1 text-purple-500'>
							<Rocket className='h-4 w-4' />
							Deployed
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	);
}

export function JiraIssuesTabs() {
	return (
		<Tabs defaultValue='in-progress'>
			<TabsList className='grid w-full grid-cols-4'>
				<TabsTrigger value='to-be-picked-up'>To Be Picked Up</TabsTrigger>
				<TabsTrigger value='in-progress'>In Progress</TabsTrigger>
				<TabsTrigger value='done'>Done</TabsTrigger>
				<TabsTrigger value='deployed'>Deployed</TabsTrigger>
			</TabsList>
			{['in-progress', 'to-be-picked-up', 'done', 'deployed'].map((status) => (
				<TabsContent key={status} value={status}>
					<div className='flex gap-4 flex-wrap pt-2'>
						{mockIssues
							.filter((issue) => issue.status === status)
							.map((issue) => (
								<IssueCard key={issue.id} issue={issue} />
							))}
					</div>
				</TabsContent>
			))}
		</Tabs>
	);
}
