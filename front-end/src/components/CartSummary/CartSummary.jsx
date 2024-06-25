import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CAR_ICON from "../../assets/car.svg";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCY_SIGN, CURRIENCES } from "../../constants/curriences";
import styles from "./CartSummary.module.css";

export const CartSummary = ({ products }) => {
	const [currency] = useContext(CurrencyContext);

	const deliveryCosts = {
		[CURRIENCES.USD]: 10,
		[CURRIENCES.PLN]: 49,
	};

	const minSumsForFreeDelivery = {
		[CURRIENCES.USD]: 100,
		[CURRIENCES.PLN]: 500,
	};

	const currencySign = CURRENCY_SIGN[currency];

	const deliveryCost = deliveryCosts[currency];
	const minSumForDelivery = minSumsForFreeDelivery[currency];

	let sum = 0;

	products.forEach((product) => {
		sum +=
			currency === CURRIENCES.PLN ? product.pricePLN : product.priceUSD;
	});

	const totalCost = sum > minSumForDelivery ? sum : sum + deliveryCost;

	return (
		<div className={styles.cartSummary}>
			<h2>Podsumowanie</h2>
			<div className={styles.cartRow}>
				<p>Wartość produktów: </p>
				<p>
					{sum}
					{currencySign}
				</p>
			</div>
			<div className={styles.cartRow}>
				<p>Koszt dostawy: </p>
				<p>
					{sum > minSumForDelivery ? 0 : deliveryCost}
					{currencySign}
				</p>
			</div>
			<div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
				<p>Do zapłaty: </p>
				<p>
					{totalCost}
					{currencySign}
				</p>
			</div>
			<FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
			<div className={styles.deliveryInfo}>
				<img src={CAR_ICON} alt='car icon' />
				<p>
					Darmowa dostawa od {minSumForDelivery}
					{currencySign}
				</p>
			</div>
		</div>
	);
};
