import { createStyles } from '@mantine/styles';

export const useProjectStyles = createStyles({
	project: {
		transition: "all .2s ease-in-out",
		borderRadius: "15px",
		border: "3px solid grey",
		padding: "25px",
		width: "calc(270px + 8vw)",
		maxWidth: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",

		["&:hover"]: {
			transform: "scale(1.1)",
			backgroundColor: "#001a33",
		},

		["& h5"]: {
			margin: 0
		}
	},
});