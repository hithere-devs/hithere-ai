// import { columns } from './components/data/columns';
// import { DataTable } from './components/data/data-table';
// import { tasks } from './components/data/task';
// import { UserNav } from './components/data/user-nav';
// import {
// 	Breadcrumb,
// 	BreadcrumbItem,
// 	BreadcrumbLink,
// 	BreadcrumbList,
// } from './components/ui/breadcrumb';
// import { Separator } from './components/ui/separator';
// import { SidebarInset, SidebarTrigger } from './components/ui/sidebar';
// import { VoiceNavigation } from './components/VoiceNavigation';
// import { JiraIssuesTabs } from './components/widgets/JiraIssues';

// function App() {
// 	return (
// 		<div className='w-full'>
// 			<SidebarInset>
// 				<header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
// 					<div className='flex items-center gap-2 px-4'>
// 						<SidebarTrigger className='-ml-1' />
// 						<Separator orientation='vertical' className='mr-2 h-4' />
// 						<Breadcrumb>
// 							<BreadcrumbList>
// 								<BreadcrumbItem className='hidden md:block'>
// 									<BreadcrumbLink href='#'>Todo</BreadcrumbLink>
// 								</BreadcrumbItem>
// 							</BreadcrumbList>
// 						</Breadcrumb>
// 					</div>
// 				</header>
// 				<div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
// 					<>
// 						<div className='md:hidden'>
// 							<img
// 								src='/examples/tasks-light.png'
// 								width={1280}
// 								height={998}
// 								alt='Playground'
// 								className='block dark:hidden'
// 							/>
// 							<img
// 								src='/examples/tasks-dark.png'
// 								width={1280}
// 								height={998}
// 								alt='Playground'
// 								className='hidden dark:block'
// 							/>
// 						</div>
// 						<div className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex'>
// 							<div className='flex items-center justify-between space-y-2'>
// 								<div>
// 									<h2 className='text-2xl font-bold tracking-tight'>
// 										Welcome back, Azhar!
// 									</h2>
// 									<p className='text-muted-foreground'>
// 										Here&apos;s a list of your tasks for this month!
// 									</p>
// 								</div>
// 								<div className='flex items-center space-x-2'>
// 									<UserNav />
// 								</div>
// 							</div>
// 							{/* <DataTable data={tasks} columns={columns} /> */}
// 							{/* <JiraIssuesTabs /> */}

// 						</div>
// 					</>
// 				</div>
// 			</SidebarInset>
// 			<VoiceNavigation />
// 		</div>
// 	);
// }

// export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RootLayout } from './RootLayout';
import { Dashboard } from './Dashboard';
import { DataTable } from './components/data/data-table';
import { JiraIssuesTabs } from './components/widgets/JiraIssues';
import { columns } from './components/data/columns';
import { tasks } from './components/data/task';
import Mail from './components/mail/mail';
import Meetings from './components/meetings/meetings';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='' element={<RootLayout />}>
					<Route element={<Dashboard />}>
						{/* Redirect from / to /tasks */}
						<Route index element={<Navigate to='/tasks' replace />} />
						<Route
							path='tasks'
							element={<DataTable data={tasks} columns={columns} />}
						/>
						<Route path='jira' element={<JiraIssuesTabs />} />
						<Route path='emails' element={<Mail />} />
						<Route path='meetings' element={<Meetings />} />
						<Route path='discussions' element={<JiraIssuesTabs />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
