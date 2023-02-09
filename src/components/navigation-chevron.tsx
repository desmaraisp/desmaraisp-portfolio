import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import React from 'react'
import { Container } from '@mantine/core';
import { useStyles } from '../styles/components/navigation-chevron-styles';
import useTranslation from 'next-translate/useTranslation';

export enum ChevronDirection {
	Right,
	Left
}

export function NavigationChevron({ targetURL, direction }: { targetURL: string, direction: ChevronDirection }) {
	const selectedIcon = direction == ChevronDirection.Left ? faChevronLeft : faChevronRight;
	const {classes} = useStyles()
	const selectedSideClassName = direction == ChevronDirection.Left ? classes.leftSide : classes.rightSide
	const { t } = useTranslation()

	return (
		<Container className={`${classes.chevronRootContainer} ${selectedSideClassName}`}>
			<Link aria-label={t("Navigation.NavigationChevronLabel")} href={targetURL}>
				<FontAwesomeIcon icon={selectedIcon} />
			</Link>
		</Container>
	)
}