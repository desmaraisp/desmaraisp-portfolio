import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import useMarkdownStyles from '@/styles/shared/markdown-styles'
import ReactMarkdown from 'react-markdown'
import { useProjectStyles } from '@/styles/components/project-styles'
import { Button, Flex, Text } from '@mantine/core'

export interface ProjectData {
	description: string,
	title: string,
	links: ProjectLink[]
}

interface ProjectLink {
	image: string,
	link: string,
	description: string
}


export function Project({ projectData }: { projectData: ProjectData }) {
	const { classes: markdownClasses } = useMarkdownStyles()
	const { classes } = useProjectStyles()


	return <div className={classes.project}>
		<h5>{projectData.title}</h5>
		<ReactMarkdown className={markdownClasses.markdown}>
			{projectData.description}
		</ReactMarkdown>

		<Flex justify='space-evenly' style={{marginTop:"auto"}} wrap='wrap' align='center'>
			{
				projectData.links.map((element, index) => <ProjectLinkButton link={element} key={index} />)
			}
		</Flex>
	</div>
}


function ProjectLinkButton({ link }: { link: ProjectLink }) {
	const { classes } = useProjectStyles()

	return (
		<Button style={{height: "2.5rem"}} variant='gradient' gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
			<Link href={link.link} className={classes.projectLink} target='_blank'>
				<Image width={30} height={30} src={link.image} alt={link.image} />
				<Text>{link.description}</Text>
			</Link>
		</Button>
	)
}