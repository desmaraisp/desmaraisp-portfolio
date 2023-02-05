import type { AppProps } from 'next/app'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import ApplicationTheme from '@/components/application-theme'
import { AppShell, Text } from '@mantine/core'
import CustomFooter from '@/components/custom-footer'
import CustomNavbar from '@/components/custom-navbar'

export default function App({ Component, pageProps }: AppProps) {
	const { t } = useTranslation("common");

	return (
		<ApplicationTheme>
			<Head>
				<title>{t("PageTitle")}</title>
				<meta name="description" content={t("PageDescription")} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<AppShell
				navbar={<CustomNavbar />}
				footer={<CustomFooter />}
			>
				< Component {...pageProps} />
			</AppShell>
		</ApplicationTheme>
	)
}