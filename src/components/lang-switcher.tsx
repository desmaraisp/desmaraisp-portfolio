import Link from 'next/link';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Button, Menu } from '@mantine/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useButtonStyles } from '@/styles/shared/button-styles'

function capitalize(lang: string) {
	return lang.slice(0, 1).toUpperCase() + lang.slice(1);
}



export default function LangSwitcher() {
	const { classes } = useButtonStyles()
	const { locale, locales, asPath } = useRouter();
	const languageNames = useMemo(() => {
		return new Intl.DisplayNames(locale, {
			type: 'language',
		});
	}, [locale]);

	return (
		<>
			<Menu>
				<Menu.Target>
					<Button className={classes.ButtonPaddings} variant='gradient' gradient={{ from: 'teal', to: 'blue', deg: 60 }} rightIcon={<FontAwesomeIcon icon={faChevronDown} />} pr={12}>
						{capitalize(languageNames.of(locale!) ?? locale!)}
					</Button>
				</Menu.Target>
				<Menu.Dropdown>
					{locales!.map((locale, i) => {
						return (
							<Link href={asPath} locale={locale} key={i} passHref>
								<Menu.Item component='a' >
									{capitalize(languageNames.of(locale!) ?? locale!)}
								</Menu.Item>
							</Link>
						)
					})}
				</Menu.Dropdown>
			</Menu>


		</>
	);
}