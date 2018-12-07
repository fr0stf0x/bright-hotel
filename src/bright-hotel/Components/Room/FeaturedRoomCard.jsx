import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import CardBody from "../../../components/Card/CardBody";
import Card from "../../../components/Card/Card";
import { cardTitle } from "../../../assets/jss/material-kit-react";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Button from "../../../components/CustomButtons/Button";

const styles = (theme) => ({
  cardTitle,
  media: {
    objectFit: "cover",
    [theme.breakpoints.up("xs")]: {
      width: 175,
      height: 150
    },
    [theme.breakpoints.up("sm")]: {
      width: 400,
      height: 350
    },
    [theme.breakpoints.up("md")]: {
      width: 300,
      height: 400
    },
    [theme.breakpoints.up("lg")]: {
      width: 500,
      height: 600
    }
  },
  textBox: {
    paddingTop: "2rem",
    paddingBottom: "2rem"
  }
});

const randomImage = () => {
  return [require("assets/img/bright-hotel/bg_1.jpg"),
    require("assets/img/bright-hotel/img_2.jpg"),
    require("assets/img/bright-hotel/img_3.jpg"),
    require("assets/img/bright-hotel/img_4.jpg"),
    require("assets/img/bright-hotel/img_5.jpg"),
    require("assets/img/bright-hotel/img_6.jpg")
  ][Math.floor(Math.random() * 6)];
};

const FeaturedRoomCard = ({ roomType, direction, classes }) => {
  return (
    <Card>
      <CardBody>
        <Grid container
              alignItems={"stretch"}
              direction={direction}
        >
          <Grid item xs={12} md={6}>
            <div className={classes.textBox}>
              <h2 className={classes.cardTitle}>{roomType.name}</h2>
              <h3>
                <b><sup>$</sup><span className="number">{roomType.price}</span></b>
                <sub>/night</sub>
              </h3>
              <h3>{roomType.descr}</h3>
            </div>
            <Button color={"primary"}>LEARN MORE</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              alt={roomType.name}
              className={classes.media}
              src={randomImage()}
              // src={roomType.image}
            />
          </Grid>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default withStyles(styles)(FeaturedRoomCard);

