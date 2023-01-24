import React from 'react'
import styled from 'styled-components'
import MainLayout from '../layout/MainLayout'
import { makeStyles } from '@material-ui/core'
import "../App.css"
import blog from '../assets/chat.png'


const styledBlog = makeStyles({
  h1: {
    fontFamily: "Kanit",
    textAlign: "center",
    display: "flex",
    marginTop: "5.5vw",
    marginLeft: "18vw",
    fontSize: "3em",

  },
  h2: {
    fontFamily: "Kanit",
    textAlign: "center",
    display: "flex",
    width: "40vw",
    marginTop: "2vw",
    marginLeft: "5.5vw",

  },
  article: {
    float: 'left',
  },
  logo: {
    float: 'right',
    marginRight: '12vw',
    marginTop: '5.5vw',
  },
})

function Blog() {
  const classes = styledBlog()
  return (
    <>
      <MainLayout />
      <div className={classes.article}>
        <h1 className={classes.h1}> PADEL BLOG </h1>
        <h2 className={classes.h2}>
        Padel Polska is a leading padel tennis company in Poland.
        They offer a wide range of padel tennis equipment, including rackets, balls, shoes, and clothing. 
        In addition to selling equipment, Padel Polska also offers coaching and training services for players of all skill levels. 
        They have a team of experienced coaches who are dedicated to helping players improve their game and reach their full potential. 
        Whether you're a beginner just starting out or an experienced player looking to take your game to the next level, Padel Polska has something to offer you. 
        With high-quality products and expert instruction, Padel Polska is the perfect choice for anyone looking to get into the exciting and fast-paced world of padel tennis in Poland.
        </h2>
      </div>
      <div className={classes.logo}>
        <img src={blog} alt="blog" />
      </div>
    </>
  )
}
export default Blog