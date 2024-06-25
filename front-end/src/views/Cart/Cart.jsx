import { CartProductsList } from "../../components/CartProductsList/CartProductsList";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

export const Cart = () => {
	const [cartItems] = useContext(CartContext);

	return (
		<FlexContainer>
			<CartProductsList products={cartItems} />
			<CartSummary products={cartItems} />
		</FlexContainer>
	);
};
