import { createStyles } from '@mantine/styles';
import { range } from '@mantine/hooks';


function getShadowString(px: number, color: string): string{
	return `${px}px ${px}px 0px ${color}`
}



export const useStyles = createStyles((theme, { text }: { text: string; }) => {
	const foregroundColor = theme.colorScheme === 'dark' ? theme.white : theme.black;
	const backgroundColor = theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white;

	const shadowsArray = [
		getShadowString(1, backgroundColor),
		getShadowString(1.3, backgroundColor),
		...(range(2, 7).map((i) => getShadowString(i, foregroundColor)))
	];

	return {
		stripedText: {
			position: "relative",
			display: "inline-block",
			textTransform: "uppercase",
			letterSpacing: "5px",
			overflow: "hidden",

			['&:before']: {
				content: `'${text}'`,
				left: "0",
				position: "absolute",
				top: "0",
				zIndex: -1,
				color: "transparent",
				textShadow: shadowsArray.join(",")
			},

			['&:after']: {
				position: "absolute",
				content: "''",
				zIndex: -1,
				top: "-200vmax",
				left: 0,
				right: 0,
				bottom: "-200vmax",
				backgroundImage: `repeating-linear-gradient(0deg, transparent 0 1px, ${backgroundColor} 1.5px 3px)`,
				transform: "skewY(45deg)",
			}
		}
	};
});
