import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import React from "react"
import { Flex } from "@mantine/core"
import { useStyles } from "../styles/components/contacts-list-styles"
import useTranslation from "next-translate/useTranslation"
import { ContactData } from '../models/contact-data'


function ContactItem({ contact }: { contact: ContactData }) {
	const { classes } = useStyles()

	return (
		<Link aria-label={contact.buttonLabel} href={contact.link} target="_blank">
			<FontAwesomeIcon className={classes.contactIcon} icon={[contact.iconPrefix, contact.iconName]} />
		</Link>
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