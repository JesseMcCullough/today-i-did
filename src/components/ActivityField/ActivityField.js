import styles from "./ActivityField.module.css";

function ActivityField({ id, activity, handleActivityChange, handleAddActivity,
    handleDeleteActivity, isAdded }) {
    const divClassName = isAdded ? `container ${styles.added}` : "container";

    return (
        <div className={divClassName}>
            <input type="text" value={activity} 
                name="new-activity" onChange={event => handleActivityChange(event, id)}
                placeholder="Add activity" />
            {isAdded ? <button className={styles.removeActivity} type="button"
                onClick={() => handleDeleteActivity(id)}>-</button> :
                <button className={styles.addActivity} type="button"
                    onClick={() => handleAddActivity()}>+</button>}
        </div>
    );
}

export default ActivityField;