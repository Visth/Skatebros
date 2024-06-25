import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRIENCES, CURRENCY_SIGN } from "../../constants/curriences";

export const Price = ({ product }) => {
	const [currency] = useContext(CurrencyContext);

	return (
		<>
			{currency === CURRIENCES.PLN ? product.pricePLN : product.priceUSD}
			{CURRENCY_SIGN[currency]}
		</>
	);
};
