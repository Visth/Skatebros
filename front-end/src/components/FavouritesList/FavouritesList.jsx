import styles from "./FavouritesList.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants.js/AnimationVariants";

export const FavouritesList = ({ favourites }) => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	return (
		<CenteredContent>
			<motion.div
				className={styles.favouriteList}
				variants={AnimationVariants.slideIn}
				initial='initial'
				animate={isInView ? "animate" : "initial"}
				ref={ref}>
				<h2>Ulubione</h2>
				<div>
					{favourites.map((favourite) => {
						return (
							<FavouriteProduct
								key={favourite.id}
								favourite={favourite}
							/>
						);
					})}
				</div>
			</motion.div>
		</CenteredContent>
	);
};
