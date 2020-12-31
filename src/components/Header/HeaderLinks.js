/*eslint-disable*/
import React from "react";
// import DeleteIcon from "@material-ui/icons/Delete";
// import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { LinkedInIcon, GitHubIcon } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem  className={classes.listItem}>
        <Button  href='/home' color="transparent"  className={classes.navLink} >
          Home
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button  href='/about'color="transparent" className={classes.navLink} >
          About
        </Button>
      </ListItem>

      <ListItem  className={classes.listItem}>
        <Button href='/resume' color="transparent"  className={classes.navLink} >
          Resume
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button href='/projects' color="transparent"  className={classes.navLink} >
          Projects
        </Button>
      </ListItem>

      <ListItem  className={classes.listItem}>
        <Button href='/blog' color="transparent"  className={classes.navLink} >
          Blog
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="LinkedIn"
          title="Follow me on Linkedin"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.linkedin.com/in/danial-senejohnny/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="Github-tooltip"
          title="Follow me on GitHub"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/Senejohnny"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
