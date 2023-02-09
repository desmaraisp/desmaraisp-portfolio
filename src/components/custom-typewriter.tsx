import React, { useEffect, useRef, useState } from 'react';
import TypewriterCore, { TypeWriterOptions } from "typewriter-effect/dist/core";
import styles from '@/styles/typewriter.module.css'

type OnInitType = (typeWriter: TypewriterCore) => void;

export default function TypeWriter({ options, onInit, isEnabled }: { options: TypeWriterOptions, onInit?: OnInitType, isEnabled: boolean }) {
	const typeWriterRef = useRef<HTMLHeadingElement>(null)
	const [typeWriter, setTypeWriter] = useState<TypewriterCore>();

	useEffect(() => {
		if(!isEnabled) return

		const typeWriter = new TypewriterCore(typeWriterRef.current!, options)
		onInit && onInit(typeWriter);
		setTypeWriter(typeWriter)
	}, [setTypeWriter, options, onInit, isEnabled])

	useEffect(() => {
		return () => {
			typeWriter && typeWriter.stop()
		}
	}, [typeWriter, typeWriterRef, options, onInit])


	return (
		<span
			ref={typeWriterRef}
			className={styles.Typewriter}
			data-testid='typewriter-wrapper'
		/>
	)
}
