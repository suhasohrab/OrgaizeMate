import Calendar from "./Calendar";
import CalendarTaskRow from "./CalendarTaskRow";
import { useEffect, useState } from "react";
import axios from "axios";
//Material UI Component:
import Box from "@mui/material/Box";

export default function CalendarView() {
  const [date, setDate] = useState();
  const [uncompletedTasks, setuncompletedTasks] = useState();
  const [completedTasks, setcompletedTasks] = useState();
  const getTasks = async () => {
    if (date) {
      const { data } = await axios.get(
        `http://localhost:3002/api/tasks/date/${date}`
      );
      if (data.success === true) {
        const uncompleted = data.data
          .filter((e) => e.completed === false)
          .map((e, i) => {
            return <CalendarTaskRow key={i} {...e} />;
          });
        setuncompletedTasks([...uncompleted]);
        const completed = data.data
          .filter((e) => e.completed === true)
          .map((e, i) => {
            return <CalendarTaskRow key={i} {...e} />;
          });
        setcompletedTasks([...completed]);
      }
    }
  };
  useEffect(() => {
    getTasks();
  }, [date]);
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Calendar dateState={setDate} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {completedTasks}
        {uncompletedTasks}
      </Box>
    </Box>
  );
}
