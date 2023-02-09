/* eslint-disable @typescript-eslint/no-unused-vars */
declare module 'typewriter-effect/dist/core' {
	export default class TypewriterCore {
		constructor(container: HTMLHeadingElement, options: TypeWriterOptions)

		start = () => this
		pause = () => this
		stop = () => this
		pauseFor = (ms: number) => this
		typeOutAllStrings = () => this
		typeString = (string: string, node: HTMLElement = null) => this
		pasteString = (string: string, node: HTMLElement = null) => this
		typeOutHTMLString = (string: string, parentNode: HTMLElement = null, pasteEffect) => this
		deleteAll = (speed = 'natural') => this
		changeDeleteSpeed = (speed: number) => this
		changeDelay = (delay: number) => this
		changeCursor = (cursor: string) => this
		deleteChars = (amount: number) => this
		callFunction = (cb: () => void) => this
		typeCharacters = (characters: string, node: HTMLElement = null) => this
		removeCharacters = (characters: string) => this
		logInDevMode(message: string)
	}

	export type TypeWriterOptions = {
		strings?: string[],
		cursor?: string,
		delay?: number,
		loop?: boolean,
		autoStart?: boolean,
		devMode?: boolean,
		wrapperClassName?: string,
		cursorClassName?: string,
	}
}