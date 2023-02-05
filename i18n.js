/** @type {import('next-translate').I18nConfig} */
module.exports = {
	locales: ["en", "fr"],
	defaultLocale: "en",
	defaultNS: 'common',
	pages: {
		"*": ["common"]
	}
}