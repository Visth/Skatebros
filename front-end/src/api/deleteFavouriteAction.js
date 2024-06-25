import { BACK_END_URL } from "../constants/api";

export const deleteFavouriteAction = ({ params }) => {
	return fetch(`${BACK_END_URL}/favourites/${params.favouriteId}`, {
        method: "DELETE"
    });
};
