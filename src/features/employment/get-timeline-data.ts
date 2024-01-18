import { TimelineCellModel } from "./timeline-cell";
import path from "path";
import matter from 'gray-matter';
import fs from "fs";

export function getTimelineData(locale: string) {
	const timelineDirectoryPath = path.join(process.cwd(), 'contents', locale!, "timeline");
	const files = fs.readdirSync(timelineDirectoryPath);

	const timelineCells = files.map(file => {
		const matterResult = matter(fs.readFileSync(
			path.join(timelineDirectoryPath, file),
			'utf8'
		));

		const projectData: TimelineCellModel = {
			description: matterResult.content,
			title: matterResult.data["title"],
			date: matterResult.data["date"],
			order: matterResult.data["order"]
		};

		return projectData;
	});
	return timelineCells;
}
