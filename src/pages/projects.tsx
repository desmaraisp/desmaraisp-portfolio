import { ChevronDirection, NavigationChevron } from "@/components/navigation-chevron"
import { useRouter } from "next/router"
import React from "react"
import useKey from "@/utilities/use-key"
import { Project, ProjectData } from '@/components/project'
import useTranslation from 'next-translate/useTranslation'
import StripedText from "@/components/striped-text"
import { GetStaticProps } from "next"
import path from "path"
import matter from "gray-matter"
import fs from "fs"
import { Flex, Title } from "@mantine/core"
import { usePageStyles } from "../styles/pages/page-styles"

export const getStaticProps: GetStaticProps = async (context) => {
	const projectsDirectoryPath = path.join(process.cwd(), 'contents', context.locale!, "projects");
	const files = fs.readdirSync(projectsDirectoryPath);

	const projects = files.map(file => {
		const matterResult = matter(fs.readFileSync(
			path.join(projectsDirectoryPath, file),
			'utf8'
		))

		const projectData: ProjectData = {
			description: matterResult.content,
			title: matterResult.data["title"],
			links: matterResult.data["links"]
		}

		return projectData
	});

	return {
		props: {
			projects: projects
		},
	}
}


export default function Projects({ projects }: { projects: ProjectData[] }) {
	const router = useRouter()
	const { t } = useTranslation();
	const { classes: pageClasses } = usePageStyles()

	useKey("ArrowLeft", (e) => {
		router.push("/about")
	})

	return (
		<>
			<NavigationChevron targetURL={'/about'} direction={ChevronDirection.Left} />


			<Flex direction='column' align='center' className={pageClasses.MainZone}>

				<Title order={2}>
					<StripedText text={t("PageNames.Projects")} />
				</Title>


				<Flex justify='space-around' w="80%" rowGap='calc(10px + 3vh)' gap='calc(20px + 2wv)' style={{flexFlow: "wrap"}}>
					{
						projects.map((project, index) => <Project key={index} projectData={project} />)
					}
				</Flex>
			</Flex>
		</>
	)
}
