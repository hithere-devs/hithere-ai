import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Calendar, Clock, Users, Plus } from 'lucide-react';

interface Meeting {
  id: string;
  title: string;
  time: string;
  attendees: string[];
  type: 'standup' | 'review' | 'planning';
}

const mockMeetings: Meeting[] = [
  {
    id: '1',
    title: 'Daily Standup',
    time: '10:00 AM',
    attendees: ['Team A'],
    type: 'standup',
  },
  {
    id: '2',
    title: 'Project Review',
    time: '2:00 PM',
    attendees: ['John D.', 'Sarah M.', 'Mike R.'],
    type: 'review',
  },
  {
    id: '3',
    title: 'Sprint Planning',
    time: '4:00 PM',
    attendees: ['Development Team', 'Product Owner'],
    type: 'planning',
  },
];

const meetingTypeColors = {
  standup: 'bg-blue-100 text-blue-800',
  review: 'bg-purple-100 text-purple-800',
  planning: 'bg-green-100 text-green-800',
};

export function UpcomingMeetings() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">Upcoming Meetings</CardTitle>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Schedule
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          {mockMeetings.map((meeting) => (
            <div
              key={meeting.id}
              className="mb-4 p-4 rounded-lg hover:bg-muted/50 cursor-pointer border"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">{meeting.title}</h4>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    meetingTypeColors[meeting.type]
                  }`}
                >
                  {meeting.type}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {meeting.time}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Today
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {meeting.attendees.join(', ')}
                </span>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}