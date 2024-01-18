import { Title, TitleProps } from '@mantine/core'
import {FC} from 'react';
import classes from './striped-text.module.css'

export const StripedText: FC<TitleProps> = (TitleProps)=> {
	return (
		<Title data-text={TitleProps.children} {...TitleProps} className={`${classes.stripedText}`}/>
	)
}