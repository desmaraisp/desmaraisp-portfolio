import { useRouter } from "next/router"
import React from "react"
import { ProjectData } from "../features/projects/project-data"
import useTranslation from 'next-translate/useTranslation'
import { GetStaticProps } from "next"
import { Flex } from "@mantine/core"
import { getProjectsData } from "../features/projects/get-projects-data"
import { Project } from "../features/projects/project"
import { StripedText } from "../components/striped-title/striped-text"
import { NavigationChevron, ChevronDirection } from "../features/navigation/navigation-chevron"


export const getStaticProps: GetStaticProps = async (context) => {
	const projects = getProjectsData(context.locale!)

	return {
		props: {
			projects: projects
		},
	}
}


export default function Projects({ projects }: { projects: ProjectData[] }) {
	const { t } = useTranslation();
	return (
		<>
			<NavigationChevron targetURL={'/about'} direction={ChevronDirection.Left} />


			<Flex direction='column' align='center'>
				<StripedText order={2}>{t("PageNames.Projects")}</StripedText>

				<Flex justify='space-around' gap={15} style={{ flexFlow: "wrap" }}>
					{
						projects.map((project, index) => <Project key={index} projectData={project} />)
					}
				</Flex>
			</Flex>
		</>
	)
}
