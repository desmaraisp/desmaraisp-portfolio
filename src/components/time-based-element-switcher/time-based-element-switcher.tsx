import { ReactNode, useEffect, useState } from "react";

export function TimeBasedElementSwitcher({elements}: {elements: ReactNode[]}) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalID = setInterval(() => {
			setIndex((index) => {
				if (elements[index + 1]) return index + 1
				return 0
			})
		}, 5000);
		return () => clearInterval(intervalID);
	}, [elements])

	return elements[index]
}