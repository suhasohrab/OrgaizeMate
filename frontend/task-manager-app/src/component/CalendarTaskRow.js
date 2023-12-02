import React, { useRef, useState } from "react";
//Material UI Components:
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { icons } from "./TaskListRow";

export default function CalendarTaskRow({ completed, title, dueDate, _id, time, description, path }) {
  const task = useRef();
  const [expanded, setExpanded] = useState(false);
  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      ref={task}
      onClick={handleCardClick}
      style={{ backgroundColor: '#F67280', width: '400px' , position:"relative", right:'-20px'}}
    >
      <CardContent>
        <Typography variant="h6" style={{ fontFamily: 'Hedvig Letter Serif' , fontSize:"20px"}}>{title}</Typography>
        {expanded && (
          <>
            <Typography style={{ fontFamily: 'Hedvig Letter Serif' , fontSize:"20px"}}>
              {dueDate}
            </Typography>

            <Typography style={{ fontFamily: 'Hedvig Letter Serif' , fontSize:"20px"}}>
              {time}
            </Typography>

              <Typography>{description}</Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
}
