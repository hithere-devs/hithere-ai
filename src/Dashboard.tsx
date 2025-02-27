import { Outlet } from 'react-router-dom';
import { UserNav } from './components/data/user-nav';

export function Dashboard() {
	return (
		<>
			<div className='md:hidden'>
				<img
					src='/examples/tasks-light.png'
					width={1280}
					height={998}
					alt='Playground'
					className='block dark:hidden'
				/>
				<img
					src='/examples/tasks-dark.png'
					width={1280}
					height={998}
					alt='Playground'
					className='hidden dark:block'
				/>
			</div>
			<div className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex'>
				<div className='flex items-center justify-between space-y-2'>
					<div>
						<h2 className='text-2xl font-bold tracking-tight'>
							Welcome back, Azhar!
						</h2>
						<p className='text-muted-foreground'>
							Here&apos;s a list of your tasks for this month!
						</p>
					</div>
					<div className='flex items-center space-x-2'>
						<UserNav />
					</div>
				</div>

				{/* This is where your route components will render */}
				<Outlet />
			</div>
		</>
	);
}
