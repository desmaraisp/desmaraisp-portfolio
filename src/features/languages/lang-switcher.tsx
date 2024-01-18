import Link from 'next/link';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Button, Menu } from '@mantine/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function capitalize(lang: string) {
	return lang.slice(0, 1).toUpperCase() + lang.slice(1);
}



export default function LangSwitcher() {
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
					<Button variant='gradient' gradient={{ from: 'teal', to: 'blue', deg: 60 }} rightSection={<FontAwesomeIcon icon={faChevronDown} />} pr={12}>
						{capitalize(languageNames.of(locale!) ?? locale!)}
					</Button>
				</Menu.Target>
				<Menu.Dropdown>
					{locales!.map((locale, i) => {
						return (
							<Link href={asPath} locale={locale} key={i} passHref>
								<Menu.Item component='div' >
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