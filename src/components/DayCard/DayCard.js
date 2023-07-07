import styles from "./DayCard.module.css";

function DayCard({date, activites, journal}) {
    return (
        <div className={styles.dayCard}>
            <h2>{date}</h2>
            <h3>Activities</h3>
            <ul>
                {activites.map(activity =>
                    <li key={activity} className={styles.dayData}>{activity}</li>
                )}
            </ul>
            <h3>Journal</h3>
            <p className={styles.dayData}>{journal}</p>
        </div>
    );
}

export default DayCard;