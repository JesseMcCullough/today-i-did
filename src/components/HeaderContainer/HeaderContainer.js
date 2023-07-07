import styles from "./HeaderContainer.module.css";

function HeaderContainer({ title, buttonText }) {
    return (
        <div className={styles.headerContainer}>
            <h1>{title}</h1>
            <input type="search" placeholder="Search" />
            <button type="button" className="button">{buttonText}</button>
        </div>
    );
}

export default HeaderContainer;