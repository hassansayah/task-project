import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import review1 from "../../images/review1.png";
import { Avatar, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Rating from "@mui/material/Rating";

const useStyles = makeStyles((theme) => ({
   
  avater: {
    width: "70px !important",
    height: "70px !important",
    border: "5px solid #FFFFFF"
  },
  title: {
    fontFamily: "Metropolis !important",
    fontSize: "24px !important",
    lineHeight: "20px !important",
    color: "#323232",
    fontWeight: " Bold !important",
    marginBottom: "1rem !important",
  },
  subtitle: {
    fontFamily: "Metropolis !important",
    fontSize: "16px !important",
    lineHeight: "20px !important",
    color: "#595961 !important",
  },
  ratingStart :{
      color: "#50D9D7 !important",
      marginTop : ".5rem",
  }
}));

const SubMenu = ({ image }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(5);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <Avatar
        src={image}
        alt="reveiw"
        className={classes.avater}
        onClick={handleClick}
        sx={{marginLeft: {  xs: "2rem" },marginTop: {xs : "1.2rem"}  }}
      />
      <Popper  className="submenu" id={id} open={open} anchorEl={anchorEl} style={{position: "relative",  }}  >
        <Paper  sx={{ borderRadius: "30px", padding: "1rem 2rem .3rem 2rem", marginTop: "28px", color: "#FFFFFF" ,  }}>
          <Typography align="center" className={classes.title}>
            Adam Shady
          </Typography>
          <Typography className={classes.subtitle}>
            This service helped me with
          </Typography>
          <Typography className={classes.subtitle}> my bussiness.</Typography>
          <Box display="flex" justifyContent="center">
          <Rating
            value={value}
            className={classes.ratingStart}
          />
          </Box>
         
        </Paper>
      </Popper>
    </div>
  );
};
export default SubMenu;
