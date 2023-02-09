import { Text, TextProps } from '@mantine/core'
import React from 'react';
import { useStyles } from '@/styles/components/striped-text-styles';


export default function StripedText({ text, ...textProps }: { text: string, textProps?: TextProps }) {
	const {classes} = useStyles({text});
	const selectedClass = (textProps?.textProps?.className ?? '') + classes.stripedText
	
	return (
		<Text {...textProps} className={selectedClass}>
			{text}
		</Text>
	)
}