import { createStyles, MantineGradient } from '@mantine/core';


export const useButtonStyles = createStyles((theme) => ({
	ButtonPaddings: {
		['& .mantine-Button-label']: {
			overflow: "visible"
		},

		height: "calc(15px + 2rem)",
	},
}))