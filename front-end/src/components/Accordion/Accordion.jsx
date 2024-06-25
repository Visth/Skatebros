import { useState } from "react";
import ARROW_ICON from "../../assets/arrow.svg";
import styles from "./Accordion.module.css";

export const Accordion = ({ items }) => {
	const [activeItemIndex, setActiveItemIndex] = useState(0);

	return (
		<ul>
			{items.map((item, index) => {
				return (
					<li
						onClick={() => {
							setActiveItemIndex(index);
						}}
						key={item.title}>
						<div className={styles.item}>
							<p>{item.title}</p>
							<img
								className={
									activeItemIndex === index
										? styles.expanded
										: ""
								}
								src={ARROW_ICON}
								alt='Arrow icon'
							/>
						</div>
						{activeItemIndex === index && <p>{item.content}</p>}
					</li>
				);
			})}
		</ul>
	);
};
