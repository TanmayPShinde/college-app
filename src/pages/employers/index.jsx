import React, { useEffect, useState } from "react";
// import {firebase} from "firebase/app";
import "firebase/firestore";
import "./styles.css";

import { db } from "../../utils/firebase";
import { onValue, ref, set } from "firebase/database";

const Timetable = ({ year, editabel }) => {
  const [timetableData, setTimetableData] = useState({});
  const [editedCell, setEditedCell] = useState(null);

  useEffect(() => {
    // Fetch timetable data from "se_timetable" collection
    const fetchTimetableData = async () => {
      try {
        const query = ref(db, `${year}_timetable`);
        return onValue(query, (snapshot) => {
          const data = snapshot.val();

          if (snapshot.exists()) {
            // Object.values(data).forEach((project) => {
            //   setTimetableData(project);
            // });
            setTimetableData(data);
          }
        });
      } catch (error) {
        console.log("Error fetching timetable data:", error);
      }
    };

    fetchTimetableData();
  }, [year]);

  const handleCellClick = (day, time) => {
    setEditedCell({ day, time });
  };

  const handleCellBlur = async (event, day, time) => {
    const { innerText } = event.target;
    console.log(innerText, day, time);

    try {
      set(ref(db, `${year}_timetable/` + day + "/" + time), innerText);
      // setTimetableData((prevData) => ({
      //   ...prevData,
      //   [day]: { ...prevData[day], [time]: value },
      // }));
    } catch (error) {
      console.log("Error updating timetable data:", error);
    }

    setEditedCell(null);
  };

  return (
    <div className="wrapper">
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>9:00</th>
            <th>10:00</th>
            <th>11:00</th>
            <th>12:00</th>
            <th>13:00</th>
            <th>14:00</th>
            <th>15:00</th>
            <th>16:00</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(timetableData).map(([day, dayData]) => (
            <tr key={day}>
              <th>{day}</th>
              {Object.entries(dayData).map(([time, lecture]) => (
                <td
                  key={time}
                  onClick={() => handleCellClick(day, time)}
                  onBlur={(event) => handleCellBlur(event, day, time)}
                  contentEditable={
                    editabel &&
                    editedCell &&
                    editedCell.day === day &&
                    editedCell.time === time
                  }
                  // contentEditable={true}
                >
                  {lecture}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Timetable.defaultProps = {
  year: "fe",
  editabel: false,
};

export default Timetable;
