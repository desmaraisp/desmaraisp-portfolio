import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import React, { useCallback } from 'react'
import { Container } from '@mantine/core';
import useTranslation from 'next-translate/useTranslation';
import { useHotkeys } from '@mantine/hooks';
import { useRouter } from 'next/router';
import classes from './navigation-chevron.module.css'

export enum ChevronDirection {
	Right,
	Left
}

export function NavigationChevron({ targetURL, direction }: { targetURL: string, direction: ChevronDirection }) {
	const selectedIcon = direction == ChevronDirection.Left ? faChevronLeft : faChevronRight;
	const key = direction == ChevronDirection.Left ? 'ArrowLeft' : 'ArrowRight';
	const position = direction == ChevronDirection.Left ? { left: 15 } : { right: 15 };

	const { t } = useTranslation()
	const router = useRouter();

	const hotkeyCallback = useCallback(() => {
		router.push(targetURL)
	}, [router, targetURL])

	useHotkeys([
		[key, hotkeyCallback]
	]);

	return (
		<Container style={position} className={classes.chevronRootContainer}>
			<Link aria-label={t("Navigation.NavigationChevronLabel")} href={targetURL}>
				<FontAwesomeIcon width={30} height={30} icon={selectedIcon} />
			</Link>
		</Container>
	)
}