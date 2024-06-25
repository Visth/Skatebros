import styles from "./Details.module.css";
import { useContext } from "react";
import CAR_ICON from "../../assets/car.svg";
import RETURN_ICON from "../../assets/return.svg";
import { FullWidthButton } from "../../components/FullWidthButton/FullWidthButton";
import { Accordion } from "../Accordion/Accordion";
import { Price } from "../Price/Price";
import { CartContext } from "../../contexts/CartContext";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants.js/AnimationVariants";

export const Details = ({ product }) => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	const [, addProductToCart] = useContext(CartContext);

	const price = <Price product={product} />;

	const accordionContent = [
		{
			title: "Opis produktu",
			content: product.description,
		},
		{
			title: "Wskazówki pielęgnacyjne",
			content: product.maintenanceInfo,
		},
	];

	return (
		<motion.div
			className={styles.details}
			variants={AnimationVariants.slideIn}
			initial='initial'
			animate={isInView ? "animate" : "initial"}
			ref={ref}>
			<h2>{product.brand}</h2>
			<p className={styles.productname}>{product.productName}</p>
			<p className={styles.price}>{price}</p>
			<FullWidthButton
				onClick={() => {
					addProductToCart(product);
				}}
				isBlack={true}>
				Dodaj do koszyka
			</FullWidthButton>
			<ul className={styles.extraInfo}>
				<li>
					<img src={CAR_ICON} alt='Car icon' />
					Dostawa do 24h
				</li>
				<li>
					<img src={RETURN_ICON} alt='Return icon' />
					Zwrot do 100 dni!
				</li>
			</ul>
			<Accordion items={accordionContent} />
		</motion.div>
	);
};
