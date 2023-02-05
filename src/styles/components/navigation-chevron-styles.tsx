import { createStyles } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
	rightSide: {
		right: "calc(0.8vw + 3px)"
	},

	leftSide: {
		left: "calc(0.8vw + 3px)"
	},

	chevronRootContainer: {
		position: "fixed",
		padding: "0px",
		top: "50%",
		width: "calc(35px + 3vw)",
		height: "calc(35px + 3vw)",

		['& a']: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
			height: "100%",
			borderRadius: "50%",

			['&:hover']: {
				backgroundColor: "rgba(109, 109, 109, 0.5)"
			},

			['& svg']: {
				width: "50%",
				height: "50%",
			}
		}
	}
}));
