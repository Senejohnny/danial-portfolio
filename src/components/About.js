import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import InfoArea from "components/InfoArea/InfoArea.js";

import HeaderLinks from "components/Header/HeaderLinks.js";
// import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";


const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function About(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        // color="transparent"
        routes={dashboardRoutes}
        brand="Danial Senejohnny"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      {/* <Parallax filter > */}
      <div className={classNames( classes.mainRaised)}>
        <div className={classes.section}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <h2 className={classes.title}>Introduction</h2>
                    <h4 className={classes.description}>
                      Divide details about your product or agency work into parts. Write a
                      few lines about each one and contact us about any further
                      collaboration. We will responde get back to you in a couple of
                      hours.
                    </h4>
                </GridItem>
              </GridContainer>
        </div>
      </div>
      {/* </Parallax> */}
      <Footer />
    </div>
  );
}
