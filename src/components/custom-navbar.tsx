import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react';
import { Drawer, Burger, ScrollArea, Stack, Divider, Space, Button, Container, MediaQuery, Navbar } from '@mantine/core';
import React from 'react';
import LangSwitcher from './lang-switcher';
import Link from 'next/link';
import ContactsList from './contacts-list';
import { useButtonStyles } from '@/styles/shared/button-styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useStyles } from '@/styles/components/custom-navbar-styles';

export default function CustomNavbar() {
	const { t } = useTranslation();
	const [opened, setOpened] = useState(false);
	const { classes: buttonClasses } = useButtonStyles()
	const { classes } = useStyles()

	return (
		<>

			<Button
				variant='outline'
				aria-label={t("Navigation.OpenMainMenuButtonLabel")}
				color='gray'
				onClick={() => setOpened(true)}
				className={classes.BurgerButton}
			>
				<FontAwesomeIcon icon={faBars} className={classes.BurgerIcon} />
			</Button>


			<Drawer opened={opened} size='calc(260px + 9vw)' onClose={() => setOpened(false)}>
				<ScrollArea>
					<Stack w="75%" m="auto">
						<LangSwitcher />
						<Space h="md" />

						<Divider variant='solid' />
						<Space h="md" />
						
						<Link href="/" passHref>
							<Button component='a' className={buttonClasses.ButtonPaddings} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
								{t("PageNames.Home")}
							</Button>
						</Link>
						
						<Link href="/about" passHref>
							<Button component='a' className={buttonClasses.ButtonPaddings} variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
								{t("PageNames.About")}
							</Button>
						</Link>

						<Link href="/projects" passHref>
							<Button component='a' className={buttonClasses.ButtonPaddings} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
								{t("PageNames.Projects")}
							</Button>
						</Link>

						<Space h="md" />


						<ContactsList />

					</Stack>
				</ScrollArea>
			</Drawer>
		</>
	)
}