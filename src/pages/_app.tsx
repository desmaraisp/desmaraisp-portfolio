import type { AppProps } from 'next/app'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import { AppShell, Burger, Button, Divider, Flex, Group, MantineProvider, Space, Stack, Text } from '@mantine/core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { useDisclosure } from '@mantine/hooks'
import ContactsList from '../features/contact-methods/contacts-list'
import LangSwitcher from '../features/languages/lang-switcher'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@mantine/core/styles.css';
import { ShadowBlurImage } from '../components/shadow-blur-image/shadow-blur-image'
import classes from '../syles/global.module.css'

library.add(fas, fab)

export default function App({ Component, pageProps }: AppProps) {
	const { t } = useTranslation("common");
	const [opened, { toggle }] = useDisclosure();

	return (
		<>
			<Head>
				<title>{t("PageTitle")}</title>
				<meta name="description" content={t("PageDescription")} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MantineProvider defaultColorScheme='dark'>
				<AppShell padding={'max(60px, 10vw)'} header={{ height: 30 }} navbar={{
					width: 300,
					breakpoint: 'sm',
					collapsed: { mobile: !opened, desktop: !opened },
				}}>
					<AppShell.Header>
						<Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
							<Burger
								opened={opened}
								onClick={toggle}
								size="sm"
							/>
						</Flex>
					</AppShell.Header>
					<AppShell.Navbar p='md'>
						<ShadowBlurImage style={{ margin: 'auto', width: 40, height: 40 }} url='/favicon.ico' />

						<Space h='md' />
						<AppShell.Section grow>
							<Stack align='stretch'>
								<LangSwitcher />
								<Space h="md" />

								<Divider variant='solid' />
								<Space h="md" />

								<Button href="/" component={Link} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
									{t("PageNames.Home")}
								</Button>

								<Button href="/about" component={Link} variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
									{t("PageNames.About")}
								</Button>

								<Button href="/projects" component={Link} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
									{t("PageNames.Projects")}
								</Button>
							</Stack>
						</AppShell.Section>

						<AppShell.Section h={60}>
							<ContactsList />
						</AppShell.Section>
					</AppShell.Navbar>


					<AppShell.Main className={classes.main} pos='relative'>
						< Component {...pageProps} />
					</AppShell.Main>
					<AppShell.Footer>
						<Group justify='flex-end' gap={25} mx={'md'}>
							<Text>{t('Footer.PoweredByText')}</Text>

							<Link href="https://github.com/desmaraisp/desmaraisp-portfolio">{t('Footer.GithubLinkText')}</Link>
						</Group>
					</AppShell.Footer>
				</AppShell>
			</MantineProvider>
		</>
	)
}