import { makeStyles } from "@mui/styles";
import map from "../../images/map.png";
import review1 from "../../images/review1.png";
import review2 from "../../images/review2.png";
import review3 from "../../images/review3.png";
import review4 from "../../images/review4.png";
import review5 from "../../images/review5.png";
import review6 from "../../images/review6.png";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import SubMenu from "./subMenu";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#E5E5E5"
  },

  containerMap: {
    backgroundImage: `url(${map})`,
    backgroundSize: "cover",
    height: "103vh",
  },
  title: {
    fontFamily: "Metropolis",
    fontWeight: "600 !important",
    fontSize: "36px !important",
    color: "#333333 ",
  },
  underline: {
    height: "0.3rem",
    width: "60px",
    background: "#23D4CE",
    marginLeft: ".45rem",
    marginBottom: "2rem",
  },
  subtitle: {
    fontFamily: "Metropolis    ",
    fontWeight: "400 !important",
    fontSize: "24px !important",
    textAlign: "center",
    color: "#556575 ",
    lineHeight: "20px !important",
  },

  
}));

const Testimonials = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container} sx={{padding: { lg: "5rem 0 ", xs: "0" },  }}>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Typography className={classes.title}>
          Testimonials
          <div className={classes.underline} />
        </Typography>
      </Box>

      <Typography className={classes.subtitle} sx={{marginBottom: { lg: "4rem  ", xs: "0" },  }}>
        Read hear What our clients around the world say about us and our
        service.
      </Typography>
      <Box  display="flex" sx={{justifyContent: { lg: "flex-end", xs: "flex-start" },  }}>
        <Box className={classes.containerMap} sx={{width: { sm: "95%", xs: "100%" },  }} >
          <Grid container>
            <Grid
              item
              xs={12}
              sm={4}
              style={{
                display: "flex",
                 justifyContent: "center",
                 height: "19rem",
                 alignItems: "center",
              }}
            >
              <SubMenu image={review1} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              style={{
                display: "flex",
                 justifyContent: "center",
                 height: "17rem",
                 alignItems: "center",
              }}
            >
              <SubMenu image={review2} />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item sm={5} xs={0} />
            <Grid item sm={4.5} xs={12}>
              <SubMenu image={review3} />
            </Grid>
            <Grid item xs={0} sm={2.5} >
              <SubMenu image={review4} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={0} sm={2.5} />

            <Grid item xs={12} sm={8} >
              <SubMenu image={review5} />
            </Grid>

            <Grid item xs={12} sm={1}>
              <SubMenu image={review6} />
            </Grid> 
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default Testimonials;
