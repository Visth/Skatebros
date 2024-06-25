import styles from "./TopBar.module.css";

export const TopBar = ({ children }) => {
	return <div className={styles.topBar}>{children}</div>;
};
