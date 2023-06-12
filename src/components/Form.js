import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineMenu } from "react-icons/ai";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import img from "../img/img1.gif";

const Form = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data: ", input);
    try {
      const { data } = await axios.post("http://localhost:8080/tasks", input);
      console.log("Server response: ", data);
      if (data?.status) {
        window.alert("Task Created");
      }
    } catch (error) {
      window.alert(error.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          color: "white",
          fontWeight: "bold",
        }}
      >
        <div className="icon-white text-2xl px-2">
          <AiOutlineMenu />
        </div>
        <Typography variant="h6">Notes</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "violet",
          py: 5,
        }}
      >
        <div className="w-80 h-70 px-5">
          <img
            src={img}
            alt=""
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bg: "gray.200",
            border: "2px double",
            p: 5,
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={4}>
            TASK
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Title"
            name="title"
            value={input.title}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            placeholder="Description"
            name="description"
            value={input.description}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ border: "4px", borderColor: "black.400", bg: "gray.400" }}
          >
            <AiOutlineCheck />
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Form;
