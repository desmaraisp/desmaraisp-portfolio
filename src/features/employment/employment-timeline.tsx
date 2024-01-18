import { Timeline } from '@mantine/core';
import React from 'react';
import ReactMarkdown from 'react-markdown'
import { TimelineCellModel } from './timeline-cell';

export function EmploymentTimeline({ timelineCells }: { timelineCells: TimelineCellModel[] }) {
	return (
		<Timeline active={1} bulletSize={24} lineWidth={2}>
			{
				timelineCells.sort(({order:a}, {order:b}) => a-b).map((cell, i) => {
					return (
						<Timeline.Item key={i} title={`${cell.date} - ${cell.title}`}>
							<ReactMarkdown>
								{cell.description}
							</ReactMarkdown>
						</Timeline.Item>
					)

				})
			}
		</Timeline>
	);
}