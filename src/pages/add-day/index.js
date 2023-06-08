import { useState } from "react";
import "./add-day.css";

const today = new Date().toISOString().substring(0, 10);
let activityId = 0;

function AddDay() {
    const [date, setDate] = useState(today);
    const [displayDate, setDisplayDate] = useState(formatDate(today));
    const [activities, setActivities] = useState([{ id: 0, activity: "" }]);

    function handleDateChange(event) {
        const newDate = event.target.value;

        setDate(newDate);
        setDisplayDate(formatDate(newDate));
    }

    function handleActivityChange(event, id = activityId) {
        const value = event.target.value;
        console.log("Handling activity id " + id + " with value " + value);
        setActivities(prevActivities => prevActivities.map(act => act.id === id ? { ...act, activity: value } : act));
    }

    function handleAddActivity(event) {
        event.preventDefault();
        setActivities([...activities, { id: ++activityId, activity: "" }]);
    }

    console.log(activities);
    console.log("System activityId: " + activityId);

    const reverseActivities = activities.toReversed();

    return (
        <form onSubmit={event => handleAddActivity(event)}>
            <input type="date" data-date={displayDate} value={date} max={today} onChange={event => handleDateChange(event)} />
            <h1>What did you do today?</h1>
            <div className="container">
                <input type="text" value={activities[activityId].activity} 
                    name="new-activity" onChange={event => handleActivityChange(event)}/>
                <button className="add-activity">+</button>
            </div>
            {reverseActivities.map(activity =>
                activity.id === activityId ? "" :
                <div className="container added">
                    <input type="text" name="activity-{activity.id}" value={activity.activity}
                        id={activity.id} key={activity.id} onChange={event => handleActivityChange(event, activity.id)}/>
                    <button className="remove-activity" type="button">-</button>
                </div>
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