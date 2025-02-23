import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { JiraIssues } from './JiraIssues';

interface Todo {
	id: string;
	text: string;
	completed: boolean;
}

const predefinedTodos: Todo[] = [
	{
		id: '1',
		text: 'Review pull requests for frontend updates',
		completed: false,
	},
	{
		id: '2',
		text: 'Update API documentation for new endpoints',
		completed: false,
	},
	{
		id: '3',
		text: 'Debug performance issues in production',
		completed: true,
	},
	{
		id: '4',
		text: 'Implement user authentication flow',
		completed: false,
	},
	{
		id: '5',
		text: 'Set up CI/CD pipeline for testing',
		completed: false,
	},
];

export function TodoList() {
	return (
		<Card className='w-full'>
			<Tabs defaultValue='account' className='w-full'>
				<TabsList className='w-full flex h-10 justify-between gap-4'>
					<TabsTrigger value='account' className='flex-1 h-8'>
						ToDo
					</TabsTrigger>
					<TabsTrigger value='password' className='flex-1 h-8'>
						Jira
					</TabsTrigger>
				</TabsList>
				<TabsContent value='account'>
					<div className='space-y-3'>
						{predefinedTodos.map((todo) => (
							<div key={todo.id} className='flex items-start gap-2'>
								<Checkbox
									id={todo.id}
									checked={todo.completed}
									className='mt-1'
								/>
								<label
									htmlFor={todo.id}
									className={`text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
										todo.completed ? 'line-through text-muted-foreground' : ''
									}`}
								>
									{todo.text}
								</label>
							</div>
						))}
					</div>
				</TabsContent>
				<TabsContent value='password'>
					<JiraIssues />
				</TabsContent>
			</Tabs>
		</Card>
	);
}
