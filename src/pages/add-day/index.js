import { useState } from "react";
import "./add-day.css";
import ActivityField from "../../components/ActivityField/ActivityField";

const today = new Date().toISOString().substring(0, 10);
let activityId = 0;

function AddDay() {
    const [date, setDate] = useState(today);
    const [activities, setActivities] = useState([{ id: activityId, activity: "" }]);

    function handleDateChange(event) {
        setDate(event.target.value);
    }

    function handleActivityChange(event, id = activityId) {
        const value = event.target.value;
        setActivities(prevActivities => prevActivities.map(act => act.id === id ?
            { ...act, activity: value } : act));
    }

    function handleAddActivity(event) {
        event.preventDefault();
        setActivities([...activities, { id: ++activityId, activity: "" }]);
    }

    function handleDeleteActivity(id) {
        setActivities(prevActivities => prevActivities.filter(activity =>
            activity.id !== id));
    }

    const reverseActivities = activities.toReversed();

    return (
        <form onSubmit={event => handleAddActivity(event)}>
            <input type="date" data-date={formatDate(date)} value={date}
                max={today} onChange={event => handleDateChange(event)} />
            <h1>What did you do today?</h1>
            <ActivityField key={activityId} id={activityId}
                activity={activities[activities.length - 1].activity}
                handleActivityChange={handleActivityChange} isAdded={false} />
            {reverseActivities.map(activity =>
                activity.id === activityId ? "" :
                <ActivityField key={activity.id} id={activity.id}
                    activity={activity.activity}
                    handleActivityChange={handleActivityChange}
                    handleDeleteActivity={handleDeleteActivity} isAdded={true} />
            )}
        </form>
    );
}

function formatDate(date) {
    const dateParts = date.split("-");
    const year = dateParts[0];
    let month = dateParts[1];
    let day = dateParts[2];

    // Format month
    switch (month) {
        case "01":
            month = "January";
            break;
        case "02":
            month = "February";
            break;
        case "03":
            month = "March";
            break;
        case "04":
            month = "April";
            break;
        case "05":
            month = "May";
            break;
        case "06":
            month = "June";
            break;
        case "07":
            month = "July";
            break;
        case "08":
            month = "August";
            break;
        case "09":
            month = "September";
            break;
        case "10":
            month = "October";
            break;
        case "11":
            month = "November";
            break;
        case "12":
            month = "December";
            break;
        default:
            month = "UnknownMonth";
            break;
    }

    // Format day
    if (day.startsWith("0")) {
        day = day.slice(1);
    }

    return `${month} ${day}, ${year}`;
}

export default AddDay;