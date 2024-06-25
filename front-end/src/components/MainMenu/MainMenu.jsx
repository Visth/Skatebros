import { NavLink } from "react-router-dom";
import { GENDERS } from "../../constants/categories";
import styles from "./MainMenu.module.css";

export const MainMenu = () => {
	return (
		<ul className={styles.mainMenu}>
			{GENDERS.map((category) => {
				return (
					<li key={category.path}>
						<NavLink to={category.path}>
							{category.categoryName}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
};
