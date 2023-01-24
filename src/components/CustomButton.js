import React from 'react'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core';

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        padding: "0 25px",
        boxSizing: "border-box",
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

function CustomButton(props) {
    return (
        <StyledButton variant="contained">{props.txt}</StyledButton>
    )
}

export default CustomButton
