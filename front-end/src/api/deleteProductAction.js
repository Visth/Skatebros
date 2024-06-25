import { BACK_END_URL } from "../constants/api";

export const deleteProductAction = ({ params }) => {
	return fetch(`${BACK_END_URL}/cart/${params.productId}`, {
		method: "DELETE",
	});
};
