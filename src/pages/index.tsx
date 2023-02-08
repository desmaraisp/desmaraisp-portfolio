import useKey from '@/utilities/use-key'
import { useRouter } from 'next/router'
import { NavigationChevron, ChevronDirection } from '@/components/navigation-chevron'
import Typewriter from '@/components/custom-typewriter';
import ReactDOMServer from 'react-dom/server';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import TransText from 'next-translate/TransText'
import { Flex, Text, Title } from '@mantine/core';
import { usePageStyles } from '@/styles/pages/page-styles';


export default function Index() {
	const router = useRouter()
	const [isTitleVisible, setIsTitleVisible] = useState(true);
	const { t } = useTranslation('common')
	const { classes: pageClasses} = usePageStyles()

	useKey("ArrowRight", (_) => {
		router.push("/about")
	})
	const TinkererNode =
		<TransText text={t("HomePage.TinkererText")} components={{
			redStyle: <Text component='span' style={{ color: "red" }} />
		}} />


	const TitleNode =
		<Trans
			i18nKey="common:HomePage.TitleText"
			components={{
				nameComponent: <Text component='span' style={{ color: "red", cursor: "pointer" }} onClick={() => setIsTitleVisible(false)} />,
				br: <br />
			}}
		/>

	const typeWriterNode = <Typewriter options={{ autoStart: !isTitleVisible, cursor: "" }} isEnabled={!isTitleVisible} onInit={
		(typewriter) => {
			typewriter
				.typeString(ReactDOMServer.renderToStaticMarkup(TinkererNode))
				.pauseFor(1500)
				.deleteAll()
				.callFunction(() => setIsTitleVisible(true))
				.start();
		}
	} />
	return (
		<>
			<NavigationChevron targetURL={'/about'} direction={ChevronDirection.Right} />


			<Flex direction='column' align='flex-start' className={pageClasses.MainZone}>
				<Title order={1} size='h1'>
					{isTitleVisible ? TitleNode : typeWriterNode}
				</Title>


				<Text>{t('HomePage.SubtitleText')}</Text>
			</Flex>

		</>

	)
}

