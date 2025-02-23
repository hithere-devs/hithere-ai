import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Card, CardContent } from '../ui/card';
import MeetingList from './meeting-list';

const Meetings = () => {
	return (
		<div className='flex gap-4 w-full justify-between'>
			<MeetingList />
			<Card>
				<CardContent>
					<div className='flex flex-col justify-between gap-4 mt-4'>
						<Calendar />
						<Button>Schedule New Meet</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default Meetings;
