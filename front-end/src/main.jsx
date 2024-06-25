import "./styles/theme.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage";
import { Cart } from "./views/Cart/Cart";
import { Favourites } from "./views/Favourites/Favourites";
import { Layout } from "./components/Layout/Layout";
import { mainPageLoader } from "./api/MainPageLoader";
import { ProductsList } from "./views/ProductsList/ProductsList";
import { productListLoader } from "./api/productListLoader";
import { ProductDetails } from "./views/ProductDetails/ProductDetails";
import { productLoader } from "./api/productLoader";
import { addProductToFavourites } from "./api/addProductsToFavouriteAction";
import { favouritesLoader } from "./api/favouritesLoader";
import { deleteFavouriteAction } from "./api/deleteFavouriteAction";
import { deleteProductAction } from "./api/deleteProductAction";
import { addProductToCart } from "./api/addProductsToCart";

const router = createBrowserRouter([
	{
		path: "/add-to-favourites/:productId",
		action: addProductToFavourites,
	},
	{
		path: "/add-to-cart/:productId",
		action: addProductToCart,
	},
	{
		path: "/delete-from-favourites/:favouriteId",
		action: deleteFavouriteAction,
	},
	{
		path: "/delete-from-cart/:productId",
		action: deleteProductAction,
	},
	{
		path: "",
		element: <Layout />,
		children: [
			{
				path: "/koszyk",
				element: <Cart />,
			},
			{
				path: "/ulubione",
				element: <Favourites />,
				loader: favouritesLoader,
			},
			{
				path: "/:gender?",
				element: <MainPage />,
				loader: mainPageLoader,
			},
			{
				path: "/:gender/:category/:subcategory?",
				element: <ProductsList />,
				loader: productListLoader,
			},
			{
				path: "/:gender/:category/:subcategory/:productId",
				element: <ProductDetails />,
				loader: productLoader,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
