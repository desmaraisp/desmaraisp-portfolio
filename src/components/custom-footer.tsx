import Link from "next/link";
import React from "react";
import useTranslation from 'next-translate/useTranslation'
import { Footer, Group, Text } from "@mantine/core";
import { useStyles } from "../styles/components/custom-footer-styles";

export default function CustomFooter() {
	const { classes } = useStyles()
	const { t } = useTranslation('common')

	return (
		<Footer className={classes.footerStyles} height={60} p="md">
			<Group position="right">
				<Text inherit>{t('Footer.PoweredByText')}</Text>

				<Link href="https://github.com/desmaraisp/desmaraisp-portfolio">{t('Footer.GithubLinkText')}</Link>
			</Group>
		</Footer>

	)
}