import { BACK_END_URL } from "../constants/api";

export const favouritesLoader = () => {
	return fetch(`${BACK_END_URL}/favourites?_expand=product`);
};
