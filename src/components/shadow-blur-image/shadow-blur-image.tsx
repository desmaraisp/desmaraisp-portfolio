import classes from './shadow-blur-image.module.css'

export const ShadowBlurImage: React.FC<JSX.IntrinsicElements['div'] & { url: string }> = (props) => {
	return (
		<div {...props} style={{ ...props.style, backgroundImage: `url(${props.url})` }} className={`${classes.shadowBlurImage} ${props.className}`} />
	)
}