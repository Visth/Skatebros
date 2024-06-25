import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRIENCES } from "../../constants/curriences";
import styles from "./CurrencySelector.module.css";

export const CurrencySelector = () => {
	const [currency, setCurrency] = useContext(CurrencyContext);

	return (
		<select
			value={currency}
			onChange={(e) => {
				setCurrency(e.currentTarget.value);
			}}
			className={styles.currencySelector}>
			<option value={CURRIENCES.PLN}>{CURRIENCES.PLN}</option>
			<option value={CURRIENCES.USD}>{CURRIENCES.USD}</option>
		</select>
	);
};
