import Link from 'next/link'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Button, Card, Flex, Text, Title } from '@mantine/core'
import { ProjectData, ProjectLink } from './project-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NoSsr } from '../../components/no-ssr'
import classes from './project.module.css'

export function Project({ projectData }: { projectData: ProjectData }) {

	return <Card shadow='xl' className={classes.projectCard} withBorder>
		<Title order={3}>{projectData.title}</Title>
		<ReactMarkdown>
			{projectData.description}
		</ReactMarkdown>
		<Flex justify='space-evenly' style={{ marginTop: "auto" }} wrap='wrap' align='center'>
			{
				projectData.links.map((element, index) => <ProjectLinkButton link={element} key={index} />)
			}
		</Flex>
	</Card>
}


function ProjectLinkButton({ link }: { link: ProjectLink }) {
	const hasDescription = link.description.length > 0
	const icon = <NoSsr>
		<FontAwesomeIcon style={{ height: 25, width: 25 }} icon={[link.iconPrefix, link.iconName]} />
	</NoSsr>
	const text = <Text>{link.description}</Text>

	if (hasDescription) {
		return <Button
			component={Link} href={link.link} target='_blank' variant='gradient'
			gradient={{ from: 'teal', to: 'blue', deg: 60 }}
			leftSection={icon}
		>
			{text}
		</Button>

	}
	return <Button
		component={Link} href={link.link} target='_blank' variant='gradient'
		gradient={{ from: 'teal', to: 'blue', deg: 60 }}
	>
		{icon}
	</Button>
}