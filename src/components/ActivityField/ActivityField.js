function ActivityField({ id, activity, handleActivityChange, handleDeleteActivity, isAdded }) {
    const divClassName = isAdded ? "container added" : "container";

    return (
        <>
            <div className={divClassName}>
                <input type="text" value={activity} 
                    name="new-activity" onChange={event => handleActivityChange(event, id)} />
                {isAdded ? <button className="remove-activity"
                    onClick={() => handleDeleteActivity(id)}>-</button> :
                    <button className="add-activity">+</button>}
            </div>
        </>
    );
}

export default ActivityField;