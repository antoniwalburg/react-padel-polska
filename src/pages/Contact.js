import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import MainLayout from '../layout/MainLayout'
import styled from "styled-components";
import '../App.css'
import chat from '../assets/chat.png';
const StyledContactForm = styled.div`
  width: 400px;
  float: left;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 30vw;
    font-family: 'Kanit';
    margin-top: 4.5vw;
    font-size: 20px;
    margin-left: 5.5vw;
    input {
      width: 100%;
      height: 50px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 5px solid rgb(56,56,56);
      &:focus {
        transition: 0.5s;
        border: 5px solid #4285F4;
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      max-height: 200px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 5px solid rgb(56,56,56);
      &:focus {
        transition: 0.5s;
        border: 5px solid #4285F4;
      }
    }
    label {
      margin-top: 1rem;
      font-size: larger;
      font-weight: bold;
    }

    input[type=text] ,input[type=email], textarea{
      font-family: Kanit;
      font-weight: bold;
      font-size: large;
    }

    input[type="submit"] {
      
      margin-top: 2rem;
      height: 6vh;
      width: 31vw;
      cursor: pointer;
      font-family: Kanit;
      background: rgb(40,40,40);
      font-size: 20px;
      color: white;
      border: none;
      text-align: center;
      &:hover {
        transition: 0.5s;
        background: #4285F4;
      }
    }
  }
`;
const StyledContactImg = styled.div`
 float: right;
 margin-right: 15vw;
 margin-top: 6vw;
`;

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9v6evgb', 'template_wea9eyd', form.current, 'jwkJWXZ25GL4TYdLl')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <MainLayout />
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>NAME</label>
          <input type="text" name="user_name" />
          <label>EMAIL</label>
          <input type="email" name="user_email" />
          <label>MESSAGE</label>
          <textarea name="message" />
          <input type="submit" value="Send Your Message 😊" />
        </form>
      </StyledContactForm>
      <StyledContactImg>
        <img src={chat} alt="basicPadelPhoto" />
      </StyledContactImg>
    </>
  )
}

export default Contact
