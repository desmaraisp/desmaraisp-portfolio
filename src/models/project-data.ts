import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export interface ProjectData {
	description: string;
	title: string;
	links: ProjectLink[];
}
export interface ProjectLink {
	link: string;
	description: string;
	iconName: IconName
	iconPrefix: IconPrefix
}
