import useTranslation from 'next-translate/useTranslation'
import { Flex, Space, Text } from '@mantine/core';
import { ChevronDirection, NavigationChevron } from '../features/navigation/navigation-chevron';
import { NeonFlickeringText, NeonStaticText } from '../components/neon-animated-text/neon-animated-text';
import { TimeBasedElementSwitcher } from '../components/time-based-element-switcher/time-based-element-switcher';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';


export default function Index() {
	const { t } = useTranslation('common')

	return (
		<>
			<NavigationChevron targetURL={'/about'} direction={ChevronDirection.Right} />


			<Flex h={200} direction='column' align='flex-start' mt={25}>
				<TimeBasedElementSwitcher elements={[
					<NeonFlickeringText key={1} color='#0fa' style={{ rotate: "-3deg" }}>
						{t("common:HomePage.TitleText")}
					</NeonFlickeringText>,
					<NeonFlickeringText key={2} color='#ff55eb' style={{ alignSelf: 'flex-end', marginTop: 50, rotate: "2deg" }}>
						{t("HomePage.TinkererText")}
					</NeonFlickeringText>
				]} />
			</Flex>

			<NeonStaticText color='blue'>{t('HomePage.SubtitleText')}</NeonStaticText>
		</>

	)
}

