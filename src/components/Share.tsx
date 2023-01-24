import React from "react"
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core';
import { Facebook } from "@material-ui/icons";

const StyledButton = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    padding: "0 25px",
    boxSizing: "border-box",
    fontSize: "Large",
    borderRadius: "7px",
    background: "#221F1F",
    color: "#fff",
    transition: "background .5s",

    "&:hover": {
      backgroundColor: "#4285F4",
    },
  },
  label: {
    textTransform: 'capitalize'
  },
})(Button);

interface ShareProps {
  description: string
}
function Share({ description }: ShareProps) {
  const currentWebsite = window.location.href;

  return (
    <>
      {/* Twitter */}
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentWebsite}&text=${encodeURI(description)}`} target="_blank" style={{ textDecoration: 'none' }}>
        <StyledButton variant="contained">{"Recommend Us"}
          <Facebook style={{marginLeft: '0.43vw'}}/>
        </StyledButton>
      </a>
      {/* Twitter */}
    </>
  )
}

export default Share;