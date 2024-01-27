import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();

  return (
    <AppBar position="sticky" sx={{ background: "#282c34", color: "white" }}>
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h4"
          style={{ textDecoration: "none", color: "white", marginRight: "20px" }}
        >
          My Blog
        </Typography>

        {isLoggedIn && (
          <Box display="flex" marginLeft="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(event, val) => setValue(val)}
            >
              <Tab
                LinkComponent={Link}
                to="/"
                label="All Blogs"
                sx={{ color: "white" }}
              />
              <Tab
                LinkComponent={Link}
                to="/myBlogs"
                label="My Blogs"
                sx={{ color: "white" }}
              />
              <Tab
                LinkComponent={Link}
                to="/blogs/add"
                label="Create Blogs"
                sx={{ color: "white" }}
              />
            </Tabs>
          </Box>
        )}

        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              <Button
                component={Link}
                to="/auth"
                variant="contained"
                sx={{ marginX: 1, borderRadius: "10px" }}
              >
                Sign In
              </Button>
              <Button
                component={Link}
                to="/auth"
                variant="contained"
                sx={{ marginX: 1, borderRadius: "10px" }}
              >
                Sign Up
              </Button>
            </>
          )}

          {isLoggedIn && (
            <Button
              onClick={() => dispatch(authActions.logout())}
              component={Link}
              to="/"
              variant="contained"
              sx={{ marginX: 1, borderRadius: "10px" }}
            >
              Log Out
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
