import { Hero } from "../../components/Hero/Hero";
import { Products } from "../../components/Products/Products";
import { useLoaderData } from "react-router-dom";

export const MainPage = () => {
	const { bestsellers, heroImageUrl } = useLoaderData();


	return (
		<div>
			<Hero heroImage={heroImageUrl} />
			<Products
				headerText='Sprawdź nasze bestsellery'
				products={bestsellers}
			/>
		</div>
	);
};
