import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import DayCard from "../../components/DayCard/DayCard";
import styles from "./days.module.css";

function Days() {
    return (
        <>
            <HeaderContainer title="Days" buttonText="Add Day" />
            <div className={styles.dayCardContainer}>
                <DayCard date="Friday, July 7" activites={[1, 2, 3]} journal="heeeyyy" />
                <DayCard date="Friday, July 7" activites={[1, 2, 3]} journal="heeeyyy" />
                <DayCard date="Friday, July 7" activites={[1, 2, 3]} journal="heeeyyy" />
                <DayCard date="Friday, July 7" activites={[1, 2, 3]} journal="heeeyyy" />
                <DayCard date="Friday, July 7" activites={[1, 2, 3]} journal="heeeyyy" />
                <DayCard date="Friday, July 7" activites={[1, 2, 3]} journal="heeeyyy" />
                <DayCard date="Friday, July 7" activites={[1, 2, 3]} journal="heeeyyy" />
                <DayCard date="Friday, July 7" activites={[1, 2, 3]} journal="heeeyyy" />
                <DayCard date="Friday, July 7" activites={[1, 2, 3]} journal="heeeyyy" />
            </div>
        </>
    )
}

export default Days;