import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import TaskCard from "./TaskCard";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const getAllTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/allTask");
      console.log(data.data);
      if (data?.status) {
        setTasks(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center">
      {tasks.map((task) => (
        <Grid item key={task.id}>
          <TaskCard
            id={task.id}
            title={task.title}
            description={task.description}
            onDelete={handleDeleteTask}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Tasks;
