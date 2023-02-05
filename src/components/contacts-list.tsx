import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import React from "react"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
import { Flex } from "@mantine/core"
import { useStyles } from "../styles/components/contacts-list-styles"

function ContactItem({ Icon, href }: { Icon: IconProp, href: string }) {
	const { classes } = useStyles()

	return (
		<Link href={href} target="_blank">
			<FontAwesomeIcon className={classes.contactIcon} icon={Icon} />
		</Link>
	)
}

export default function ContactsList() {
	return (
		<Flex
			justify="space-evenly"
			align="center"
			wrap="wrap"
		>
			<ContactItem Icon={faEnvelopeSquare} href="mailto:philippe.desmarais0trash@gmail.com" />
			<ContactItem Icon={faGithub} href="https://github.com/desmaraisp" />
			<ContactItem Icon={faLinkedin} href="https://www.linkedin.com/in/philippe-desmarais-9bb65a207/" />
		</Flex>
	)
}