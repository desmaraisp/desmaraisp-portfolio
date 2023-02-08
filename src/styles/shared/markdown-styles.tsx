import { createStyles } from '@mantine/core';



export const useMarkdownStyles = createStyles((_theme) => ({
	markdown: {
		['& p']: {
			marginBottom: "20px"
		}
	},

	alignRight: {
		textAlign: 'right'
	}
}))