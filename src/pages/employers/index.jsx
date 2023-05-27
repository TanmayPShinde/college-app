import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const Timetable = () => {
  const [timetableData, setTimetableData] = useState({});
  const [editedCell, setEditedCell] = useState(null);

  useEffect(() => {
    // Initialize Firebase (replace with your own Firebase configuration)
    const firebaseConfig = {
      apiKey: "AIzaSyB34jTsPQwJ6MWId18QzI2GggSTW2hgzWc",
      authDomain: "sinhgad-9ab08.firebaseapp.com",
      databaseURL: "https://sinhgad-9ab08-default-rtdb.firebaseio.com",
      projectId: "sinhgad-9ab08",
      storageBucket: "sinhgad-9ab08.appspot.com",
      messagingSenderId: "665284120779",
      appId: "1:665284120779:web:1c562f640c62b1c52f8b4e",
      measurementId: "G-52VW66N9KS",
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    // Fetch timetable data from "se_timetable" collection
    const fetchTimetableData = async () => {
      try {
        const timetableRef = db.collection("se_timetable");
        const snapshot = await timetableRef.get();
        const data = snapshot.docs.reduce((result, doc) => {
          result[doc.id] = doc.data();
          return result;
        }, {});
        setTimetableData(data);
      } catch (error) {
        console.log("Error fetching timetable data:", error);
      }
    };

    fetchTimetableData();
  }, []);

  const handleCellClick = (day, time) => {
    setEditedCell({ day, time });
  };

  const handleCellBlur = async (event, day, time) => {
    const { value } = event.target;

    try {
      const timetableRef = firebase
        .firestore()
        .collection("se_timetable")
        .doc(day);
      await timetableRef.set({ [time]: value }, { merge: true });
      setTimetableData((prevData) => ({
        ...prevData,
        [day]: { ...prevData[day], [time]: value },
      }));
    } catch (error) {
      console.log("Error updating timetable data:", error);
    }

    setEditedCell(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(timetableData).map(([day, dayData]) => (
          <tr key={day}>
            <td>{day}</td>
            {Object.entries(dayData).map(([time, lecture]) => (
              <td
                key={time}
                onClick={() => handleCellClick(day, time)}
                onBlur={(event) => handleCellBlur(event, day, time)}
                contentEditable={
                  editedCell &&
                  editedCell.day === day &&
                  editedCell.time === time
                }
              >
                {lecture}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Timetable;
