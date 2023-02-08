import { useEffect, useRef } from "react";

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

		document.addEventListener("keydown", handleKeyPressed);
		return () => document.removeEventListener("keydown", handleKeyPressed);
	}, [key]);
}