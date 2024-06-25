import styles from "./CartProductsList.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { CartProduct } from "../CartProduct/CartProduct";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants.js/AnimationVariants";

export const CartProductsList = ({ products }) => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	return (
		<CenteredContent>
			<motion.div
				className={styles.cartProductsList}
				variants={AnimationVariants.slideIn}
				initial='initial'
				animate={isInView ? "animate" : "initial"}
				ref={ref}>
				<h2>Koszyk</h2>
				<div>
					{products.map((product) => {
						return (
							<CartProduct key={product.id} product={product} />
						);
					})}
				</div>
			</motion.div>
		</CenteredContent>
	);
};
