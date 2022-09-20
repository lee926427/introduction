import { Timeline, Button } from 'flowbite-react';
import { CalendarDaysIcon, ArrowSmallRightIcon } from '@heroicons/react/24/solid';

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
