import Image from "next/image";
import classes from './neon-bg.module.css'

export function NeonBackground() {
	return (<Image priority={false} src={"/neon-bg.jpg"} alt="neon-bg" className={classes.neonBG} fill />)
}