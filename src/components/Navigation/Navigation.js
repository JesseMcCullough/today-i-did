import { NavLink } from "react-router-dom";
import "./Navigation.css";
import daysIcon from "../../images/days-icon.png";
import activitiesIcon from "../../images/activities-icon.png";
import journalsIcon from "../../images/journals-icon.png";

function Navigation() {
    return (
        <nav>
            <div className="user">
                <span className="greeting">Hi, Jesse</span>
                <span className="sign-out">Sign Out</span>
            </div>
            <NavLink to="/add-day" className="button-cta">Add Day</NavLink>
            <ul>
                <li><NavLink to="/days"><img src={daysIcon} class="icon" alt=""/>Days</NavLink></li>
                <li><NavLink to="/activities"><img src={activitiesIcon} class="icon" alt=""/>Activities</NavLink></li>
                <li><NavLink to="/journals"><img src={journalsIcon} class="icon" alt=""/>Journals</NavLink></li>
            </ul>
        </nav>
    ) 
}

export default Navigation;