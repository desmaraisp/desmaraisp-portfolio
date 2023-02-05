import { createStyles } from '@mantine/core';



export const useMardownStyles = createStyles((theme) => ({
	markdown: {
		['& p']: {
			marginBottom: "20px"
		}
	},

	alignRight: {
		textAlign: 'right'
	}
}))


export default useMardownStyles