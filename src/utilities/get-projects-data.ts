import { ProjectData } from "../models/project-data";
import path from "path";
import matter from "gray-matter";
import fs from "fs";

export function getProjectsData(locale: string) {
	const projectsDirectoryPath = path.join(process.cwd(), 'contents', locale!, "projects");
	const files = fs.readdirSync(projectsDirectoryPath);

	const projects = files.map(file => {
		const matterResult = matter(fs.readFileSync(
			path.join(projectsDirectoryPath, file),
			'utf8'
		));

		const projectData: ProjectData = {
			description: matterResult.content,
			title: matterResult.data["title"],
			links: matterResult.data["links"]
		};

		return projectData;
	});
	return projects;
}
