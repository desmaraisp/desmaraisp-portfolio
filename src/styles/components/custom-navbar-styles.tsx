import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	BurgerButton: {
		height: "calc(35px + 3vw)",
		padding: "calc(2px + 1vw)",
		border: 'none',
		width: "calc(35px + 3vw)",
		minWidth: "calc(35px + 3vw)",
		borderRadius: '20%',
		position: 'absolute'
	},

	BurgerIcon: {
		width: "100%",
		height: "100%"
	}
}));
