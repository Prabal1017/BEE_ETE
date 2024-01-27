import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Avatar,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  Box,
  IconButton,
} from "@mui/material";
import {
  DeleteForeverOutlined,
  EditOutlined,
} from "@mui/icons-material";
import axios from "axios";

const Blog = ({ title, content, image, userName, isUser, id }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };

  const deleteRequest = async () => {
    try {
      const res = await axios.delete(`http://localhost:8000/api/blog/${id}`);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    deleteRequest().then(() => navigate("/"));
  };

  return (
    <Card
      sx={{
        width: "60%",
        margin: "auto",
        marginTop: 4,
        padding: 2,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s",
        ":hover": {
          transform: "scale(1.03)",
          
        },
      }}
    >
      {isUser && (
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={handleEdit} color="primary">
            <EditOutlined />
          </IconButton>
          <IconButton onClick={handleDelete} color="error">
            <DeleteForeverOutlined />
          </IconButton>
        </Box>
      )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#ff6f61" }} aria-label="recipe">
            {userName && userName.charAt(0)}
          </Avatar>
        }
        title={title}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Blog Image"
        sx={{ borderRadius: "8px" }}
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary" paragraph>
          <b>{userName}</b>: {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Blog;
