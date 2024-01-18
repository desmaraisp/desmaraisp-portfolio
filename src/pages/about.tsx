import { ChevronDirection, NavigationChevron } from "../features/navigation/navigation-chevron"
import React from "react"
import { StripedText } from '../components/striped-title/striped-text'
import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import path from "path"
import fs from "fs"
import matter from 'gray-matter'
import { Flex, Space, Title } from "@mantine/core"
import { getTimelineData } from '../features/employment/get-timeline-data'
import { TimelineCellModel } from "../features/employment/timeline-cell"
import { EmploymentTimeline } from "../features/employment/employment-timeline"
import useTranslation from "next-translate/useTranslation"

export const getStaticProps: GetStaticProps = async (context) => {
	const filePath = path.join(process.cwd(), 'contents', context.locale!, "about-me.md");
	const matterResult = matter(fs.readFileSync(filePath, 'utf8'))
	const timelineData = getTimelineData(context.locale!)
	return {
		props: {
			aboutMeContent: matterResult.content,
			title: matterResult.data["title"],
			timelineData: timelineData
		},
	}
}

export default function About({ aboutMeContent, title, timelineData }: { aboutMeContent: string, title: string, timelineData: TimelineCellModel[] }) {
	const { t } = useTranslation()

	return (
		<>
			<NavigationChevron targetURL={'/projects'} direction={ChevronDirection.Right} />
			<NavigationChevron targetURL={'/'} direction={ChevronDirection.Left} />

			<Flex direction='column' align='flex-end'>
				<StripedText ta="right" order={2}>
					{title}
				</StripedText>

				<ReactMarkdown>
					{aboutMeContent}
				</ReactMarkdown>
			</Flex>

			<Flex direction='column' m='200px auto' w='80%' align='center'>
				<Title ta="center" order={2}>{t("AboutMePage.TimelineTitle")}</Title>
				<Space h="20px" />
				<EmploymentTimeline timelineCells={timelineData} />
			</Flex>
		</>
	)
}
