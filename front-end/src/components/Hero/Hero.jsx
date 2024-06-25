import styles from "./Hero.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../../components/AnimationVariants.js/AnimationVariants";

export const Hero = ({ heroImage }) => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			className={styles.hero}
			style={{ backgroundImage: `url(${heroImage})` }}
			variants={AnimationVariants.fadeIn2}
			initial='initial'
			animate={isInView ? "animate" : "initial"}
			ref={ref}>
			<CenteredContent>
				<div className={styles.contentWrapper}>
					<h2>Letnie promocje do -70%!</h2>
					<p>Tylko najlepsze okazje!</p>
					<FullWidthButton>Sprawdź produkty</FullWidthButton>
				</div>
			</CenteredContent>
		</motion.div>
	);
};
