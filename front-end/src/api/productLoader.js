import { BACK_END_URL } from "../constants/api";

export const productLoader = ({ params: { productId } }) => {
	return fetch(`${BACK_END_URL}/products/${productId}`);
};
