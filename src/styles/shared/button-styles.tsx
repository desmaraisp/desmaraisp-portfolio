import { createStyles } from '@mantine/core';


export const useButtonStyles = createStyles((_theme) => ({
	ButtonPaddings: {
		['& .mantine-Button-label']: {
			overflow: "visible"
		},

		height: "calc(15px + 2rem)",
		width:"100%"
	},
}))