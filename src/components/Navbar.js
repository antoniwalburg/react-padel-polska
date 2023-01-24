import React from 'react'
import logo from '../assets/padelLogo.png'
import logoMobile from '../assets/logoMobile.svg'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Share from './Share.tsx'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "../App.css";

const styles = makeStyles({
    logo: {
        width: "14.5vw",
        float: "left",
        ['@media (max-width:780px)']: {
            display: "none"
        }
    },
    logoMobile: {
        width: "100%",
        display: "none",
        ['@media (max-width:780px)']: {
            display: "inline-block"
        }
    }
})

export default function Navbar() {

    const classes = styles()

    return (

        <Toolbar className={"toolbar"}>
            <a href="/"> <img src={logo} className={classes.logo} alt='logo' /> </a>
            <img src={logoMobile} className={classes.logoMobile} alt='logoMoblie' />

            <CustomLink to="/about"> ABOUT </CustomLink>
            <CustomLink to="/blog"> BLOG </CustomLink>
            <CustomLink to="/videos"> VIDEOS </CustomLink>
            <CustomLink to="/contact"> CONTACT US </CustomLink>

            <Share description={"🎾Polecam Padel Polska🎾"} className={"button"}/>
        </Toolbar>
    )
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <Typography className={isActive ? "active" : ""} variant="h6">
            <Link to={to} {...props}>
                {children}
            </Link>
        </Typography>
    )
}

