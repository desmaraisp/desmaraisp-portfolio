import { ChevronDirection, NavigationChevron } from "@/components/navigation-chevron"
import { useRouter } from "next/router"
import React from "react"
import useKey from "@/utilities/use-key"
import StripedText from '@/components/striped-text'
import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import path from "path"
import fs from "fs"
import matter from 'gray-matter'
import { Flex, Space, Title } from "@mantine/core"
import { useMarkdownStyles } from '@/styles/shared/markdown-styles'
import { usePageStyles } from "../styles/pages/page-styles"
import { getTimelineData } from '../utilities/get-timeline-data'
import { TimelineCellModel } from "@/models/timeline-cell"
import { EmploymentTimeline } from "@/components/employment-timeline"
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
	const router = useRouter()
	const { classes: markdownClasses } = useMarkdownStyles()
	const { classes } = usePageStyles()
	const { t } = useTranslation()

	useKey("ArrowRight", (_) => {
		router.push("/projects")
	})
	useKey("ArrowLeft", (_) => {
		router.push("/")
	})


	return (
		<>
			<NavigationChevron targetURL={'/projects'} direction={ChevronDirection.Right} />
			<NavigationChevron targetURL={'/'} direction={ChevronDirection.Left} />

			<Flex direction='column' align='flex-end' className={classes.MainZone}>

				<Title align="right" order={2}>
					<StripedText text={title} />
				</Title>

				<ReactMarkdown className={`${markdownClasses.alignRight} ${markdownClasses.markdown}`}>
					{aboutMeContent}
				</ReactMarkdown>
			</Flex>

			<Flex direction='column' m='200px auto' w='80%' align='center' className={classes.MainZone}>
				<Title align="center" order={3}>{t("AboutMePage.TimelineTitle")}</Title>
				<Space h="20px" />
				<EmploymentTimeline timelineCells={timelineData} />
			</Flex>
		</>
	)
}
