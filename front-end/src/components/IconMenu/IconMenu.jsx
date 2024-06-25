import BAG_ICON from "../../assets/bag.svg";
import HEART_ICON from "../../assets/heart.svg";
import { Link } from "react-router-dom";
import styles from "./IconMenu.module.css";

export const IconMenu = () => {
	const cartInfo = "wejdz";

	return (
		<ul className={styles.iconMenu}>
			<li>
				<Link to='/ulubione'>
					<img src={HEART_ICON} alt='Heart icon' />
				</Link>
			</li>
			<li>
				<Link to='/koszyk'>
					<img src={BAG_ICON} alt='Bag icon' />
					<div className={styles.numberOfProducts}>{cartInfo}</div>
				</Link>
			</li>
		</ul>
	);
};
