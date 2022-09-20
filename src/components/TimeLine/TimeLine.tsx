import { ReactNode } from 'react';
import { Timeline } from 'flowbite-react';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';

type TimeLineItemProps = {
  date: string;
  title: string;
  body: () => ReactNode;
};

type TimeLineProps = {
  items: TimeLineItemProps[];
};

export function TimeLine({ items }: TimeLineProps) {
  return (
    <Timeline>
      {items.map((item) => (
        <Timeline.Item>
          <Timeline.Point icon={CalendarDaysIcon} />
          <Timeline.Content>
            <Timeline.Time>{item.date}</Timeline.Time>
            <Timeline.Title>{item.title}</Timeline.Title>
            <Timeline.Body>{item.body()}</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
