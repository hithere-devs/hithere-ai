import { Outlet, useLocation, Link } from 'react-router-dom';
import { SidebarInset, SidebarTrigger } from './components/ui/sidebar';
import { Separator } from './components/ui/separator';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
} from './components/ui/breadcrumb';
import { VoiceNavigation } from './components/VoiceNavigation';

export function RootLayout() {
	const location = useLocation();

	const getBreadcrumbTitle = (path: string) => {
		if (!path) {
			return 'Dashboard';
		} else {
			const route = path.split('/').pop() || '';
			return route.charAt(0).toUpperCase() + route.slice(1);
		}
	};

	return (
		<div className='w-full'>
			<SidebarInset>
				<header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
					<div className='flex items-center gap-2 px-4'>
						<SidebarTrigger className='-ml-1' />
						<Separator orientation='vertical' className='mr-2 h-4' />
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem className='hidden md:block'>
									<BreadcrumbLink asChild>
										<Link to={location.pathname}>
											{getBreadcrumbTitle(location.pathname)}
										</Link>
									</BreadcrumbLink>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>
				<div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
					<Outlet />
				</div>
			</SidebarInset>
			<VoiceNavigation />
		</div>
	);
}
