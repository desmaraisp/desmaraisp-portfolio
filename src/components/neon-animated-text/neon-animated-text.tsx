import { Title, TitleProps } from '@mantine/core'
import classes from './neon-text.module.css'
import { DataType } from 'csstype'

export function NeonFlickeringText({ ...props }: TitleProps & { color: DataType.Color }) {
	const { children, style, ...remainder } = props

	return (
		<Title className={`${classes.baseNeon} ${classes.neonFlickerText}`} style={{ ...style, "--neon-color": props.color }} {...remainder}>
			{props.children}
		</Title>
	)
}
export function NeonStaticText({ ...props }: TitleProps & { color: DataType.Color }) {
	const { children, style, ...remainder } = props

	return (
		<Title className={classes.baseNeon} style={{ ...style, "--neon-color": props.color }} {...remainder}>
			{props.children}
		</Title>
	)
}