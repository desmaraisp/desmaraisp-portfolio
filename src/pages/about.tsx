import { ChevronDirection, NavigationChevron } from "@/components/navigation-chevron"
import { useRouter } from "next/router"
import React from "react"
import useKey from "@/utilities/use-key"
import useTranslation from 'next-translate/useTranslation'
import StripedText from '@/components/striped-text'
import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import path from "path"
import fs from "fs"
import matter from 'gray-matter'
import { Flex, Title } from "@mantine/core"
import useMarkdownStyles from '@/styles/shared/markdown-styles'
import { usePageStyles } from "../styles/pages/page-styles"

export const getStaticProps: GetStaticProps = async (context) => {
	const filePath = path.join(process.cwd(), 'contents', context.locale!, "about-me.md");
	const matterResult = matter(fs.readFileSync(filePath, 'utf8'))
	return {
		props: {
			aboutMeContent: matterResult.content,
			...matterResult.data
		},
	}
}

export default function About({ aboutMeContent, title }: { aboutMeContent: string, title: string }) {
	const router = useRouter()
	const { t } = useTranslation();
	const { classes: markdownClasses } = useMarkdownStyles()
	const { classes } = usePageStyles()

	useKey("ArrowRight", (e) => {
		router.push("/projects")
	})
	useKey("ArrowLeft", (e) => {
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

		</>
	)
}
