import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  BottomNavigationMain:{
      backgroundColor: "#101010",
      borderRadius: "15px",
      boxShadow: "0 4px 4px #101010",
      height: "10vh",
  },
  item: {
    marginTop: "12px",
  },
  text: {
    color: "white",
    fontFamily: "Kanit",

  }
})

function Footer() {
  const classes = styles()
    return (
          <BottomNavigation className={classes.BottomNavigationMain}>
          <BottomNavigationAction className={classes.item} label="Facebook" value="recents" icon={<FacebookIcon  style={{fill: "#fff"}}/>} />
          <BottomNavigationAction className={classes.item} label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: "#fff"}}/>} />
          <BottomNavigationAction className={classes.item} label="YouTube" value="folder" icon={<YouTubeIcon  style={{fill: "#fff"}}/>} />
          <BottomNavigationAction className={classes.item} href="https://github.com/antoniwalburg" label="Github" value="nearby" target="_blank" icon={<GitHubIcon  style={{fill: " #fff"}}/>} />
        </BottomNavigation>
)
}

export default Footer