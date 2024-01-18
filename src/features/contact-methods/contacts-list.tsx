import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import React from "react"
import { Flex } from "@mantine/core"
import useTranslation from "next-translate/useTranslation"
import { ContactData } from './contact-data'
import { NoSsr } from '../../components/no-ssr'

function ContactItem({ contact }: { contact: ContactData }) {

	return (
		<NoSsr>
			<Link style={{ width: 30, height: 30 }} aria-label={contact.buttonLabel} href={contact.link} target="_blank">
				<FontAwesomeIcon style={{
				height: '100%', width: '100%'
			}} icon={{ prefix: contact.iconPrefix, iconName: contact.iconName }} />
			</Link>
		</NoSsr>
	)
}

export default function ContactsList() {
	const { t } = useTranslation()

	const contacts = t<ContactData[]>('ContactsList', {}, { returnObjects: true, })

	return (
		<Flex
			justify="space-evenly"
			align="center"
			wrap="wrap"
		>
			{
				contacts.map((contact, i) => {
					return (
						<ContactItem contact={contact} key={i} />
					)

				})
			}
		</Flex>
	)
}