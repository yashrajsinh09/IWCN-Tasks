import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import axios from "axios";

const TaskCard = ({ id, title, description, onDelete }) => {
  const handleDeleteTask = async () => {
    try {
      const { data } = await axios.delete(`http://localhost:8080/deleteTask/${id}`);
      console.log(data);
      if (data?.status) {
        onDelete(id);
        window.alert("Task Deleted");
      }
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div" mb={2}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Button onClick={handleDeleteTask} size="small">
        Delete
      </Button>
    </Card>
  );
};

export default TaskCard;
