import { ButtonStylesParams, CSSObject, MantineProvider, MantineThemeOverride, TypographyStylesProvider } from '@mantine/core';
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function ApplicationTheme({ children }: { children: React.ReactNode }) {
	const theme: MantineThemeOverride = {
		fontFamily: `${inter.style.fontFamily}`,
		colorScheme: 'dark',
		breakpoints: {
			xs: 350,
			sm: 550,
			md: 900,
			lg: 1200,
			xl: 1500
		},
		components: {
			Button: {
				styles: {
					root: {
						'&:is(a)': {
							textDecoration: "none",
							display: "inline-block"
						}

					},
				}
			},


			Title: {
				styles: (theme, params: ButtonStylesParams) => ({
					root: {
						'&:is(h1)': {
							[theme.fn.smallerThan('xs')]: {
								fontSize: "3rem"
							},

							[`@media (max-width: ${theme.breakpoints.sm}px) and (min-width: ${theme.breakpoints.xs}px)`]: {
								fontSize: "4rem"
							},
							[`@media (max-width: ${theme.breakpoints.md}px) and (min-width: ${theme.breakpoints.sm}px)`]: {
								fontSize: "5rem"
							},

							[theme.fn.largerThan('md')]: {
								fontSize: "7rem"
							},
						},
						'&:is(h2)': {
							[theme.fn.smallerThan('xs')]: {
								fontSize: "1.5rem"
							},

							[`@media (max-width: ${theme.breakpoints.sm}px) and (min-width: ${theme.breakpoints.xs}px)`]: {
								fontSize: "2rem"
							},
							[`@media (max-width: ${theme.breakpoints.md}px) and (min-width: ${theme.breakpoints.sm}px)`]: {
								fontSize: "4rem"
							},

							[theme.fn.largerThan('md')]: {
								fontSize: "6rem"
							},
						},

					}
				}),
			},
		},
		globalStyles: (theme): CSSObject => ({
			a: {
				color: "inherit",
			},

			img: {
				display: "block",
			},
			['*']: {
				boxSizing: "border-box",
				fontSize: "calc(13px + 0.4vw)"
			},
			['*, *:before, *:after']: {
				boxSizing: "inherit"
			},
		})
	}


	return (
		<MantineProvider theme={theme} withGlobalStyles withNormalizeCSS withCSSVariables>
			{children}
		</MantineProvider>
	)
}