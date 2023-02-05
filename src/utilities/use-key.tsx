import { KeyboardEvent, useEffect, useRef } from "react";

export default function useKey(key: string, callback: (event: KeyboardEvent) => void) {
	const callbackRef = useRef<(event: KeyboardEvent) => void>(callback);

	useEffect(() => {
		callbackRef.current = callback;
	});



	useEffect(() => {
		const handleKeyPressed = (event: KeyboardEvent) => {
			if (event.code === key) {
				callbackRef.current(event);
			}
		};
		let a: EventListenerOrEventListenerObject

		document.addEventListener("keydown", handleKeyPressed as any);
		return () => document.removeEventListener("keydown", handleKeyPressed as any);
	}, [key]);
}