import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useMarkdownStyles } from '@/styles/shared/markdown-styles'
import ReactMarkdown from 'react-markdown'
import { useProjectStyles } from '@/styles/components/project-styles'
import { Button, Flex, Text } from '@mantine/core'
import { ProjectData, ProjectLink } from '../models/project-data'

export function Project({ projectData }: { projectData: ProjectData }) {
	const { classes: markdownClasses } = useMarkdownStyles()
	const { classes } = useProjectStyles()


	return <div className={classes.project}>
		<h3>{projectData.title}</h3>
		<ReactMarkdown className={markdownClasses.markdown}>
			{projectData.description}
		</ReactMarkdown>

		<Flex justify='space-evenly' style={{ marginTop: "auto" }} wrap='wrap' align='center'>
			{
				projectData.links.map((element, index) => <ProjectLinkButton link={element} key={index} />)
			}
		</Flex>
	</div>
}


function ProjectLinkButton({ link }: { link: ProjectLink }) {

	return (
		<Link href={link.link} target='_blank' passHref>
			<Button
				component='a' variant='gradient'
				gradient={{ from: 'teal', to: 'blue', deg: 60 }}
				styles={{
					root: {
						height: "2.5rem"
					},
					label: {
						textAlign: "center",
						padding: "0",
						display: "flex",
						alignItems: "center",
						gap: "7px",
					},
				}}
			>
				<Image width={30} height={30} src={link.image} alt={link.image} />
				<Text>{link.description}</Text>

			</Button>
		</Link>
	)
}