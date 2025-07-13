import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputs, setInputs] = useState({ title: "", content: "", img_url: "" });

  useEffect(() => {
    axios.get(`http://localhost:3001/get`)
      .then((res) => {
        const item = res.data.find((i) => i._id === id);
        if (item) setInputs(item);
      });
  }, [id]);

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const updateData = () => {
    axios.put(`http://localhost:3001/update/${id}`, inputs)
      .then((res) => {
        alert(res.data.message);
        navigate("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
      <Box display="flex" flexDirection="column" gap={2} width="600px">
        <TextField placeholder="Title" name="title" value={inputs.title} onChange={inputHandler} />
        <TextField placeholder="Content" name="content" value={inputs.content} onChange={inputHandler} multiline rows={4} />
        <TextField placeholder="Image URL" name="img_url" value={inputs.img_url} onChange={inputHandler} />
        <Button variant="contained" color="secondary" onClick={updateData}>Update</Button>
      </Box>
    </Box>
  );
};

export default Edit;
