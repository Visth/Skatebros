import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";
import styles from "./Products.module.css";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants.js/AnimationVariants";

export const Products = ({ products, headerText }) => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	return (
		<CenteredContent>
			<h2 className={styles.bestsellersHeader}>{headerText}</h2>
			<motion.div
				className={styles.productsWrapper}
				variants={AnimationVariants.productsAnimation}
				initial='initial'
				animate={isInView ? "animate" : "initial"}
				ref={ref}>
				{products.map((product) => {
					return <Product key={product.id} product={product} />;
				})}
			</motion.div>
		</CenteredContent>
	);
};
