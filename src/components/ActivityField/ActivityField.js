import styles from "./ActivityField.module.css";

function ActivityField({ id, activity, handleActivityChange, handleAddActivity,
    handleDeleteActivity, isAdded }) {
    return (
        <>
            <input type="text" value={activity} 
                name="new-activity" onChange={event => handleActivityChange(event, id)}
                placeholder="Add activity" />
            {isAdded ? <button className={styles.removeActivity} type="button"
                onClick={() => handleDeleteActivity(id)}>-</button> :
                <button className={styles.addActivity} type="button"
                    onClick={() => handleAddActivity()}>+</button>}
        </>
    );
}

export default ActivityField;